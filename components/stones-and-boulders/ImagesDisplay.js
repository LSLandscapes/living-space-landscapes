import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const ImagesDisplay = ({ images, description }) => {
	const [imageIndex, setImageIndex] = useState(0);

	const handleChange = (index) => {
		setImageIndex(index);
	};

	const prevImage = () => {
		imageIndex === 0
			? setImageIndex(images.length - 1)
			: setImageIndex(imageIndex - 1);
	};

	const nextImage = () => {
		imageIndex + 1 === images.length
			? setImageIndex(0)
			: setImageIndex(imageIndex + 1);
	};

	return (
		<>
			<div className='grid gap-2 md:grid-cols-2 md:gap-8  '>
				<div className='mx-1 md:mx-2 grid gap-2 md:gap-8 '>
					{' '}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className='shadow-lg grid place-items-center'
					>
						<Image src={images[imageIndex].src} alt='' priority='true' />
					</motion.div>
					<motion.div
						className='flex justify-around w-1/3 md:w-1/4 mx-auto text-2xl md:text-3xl text-landscape-700'
						initial={{ scale: 0.96 }}
						animate={{ scale: 1 }}
						transition={{
							duration: 1.2,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<motion.div
							whileHover={{ scale: 1.3 }}
							transition={{ duration: 0.4 }}
							onClick={prevImage}
							className='p-3 cursor-pointer'
						>
							<AiOutlineArrowLeft />
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.3 }}
							transition={{ duration: 0.4 }}
							onClick={nextImage}
							className='p-3 cursor-pointer'
						>
							<AiOutlineArrowRight />
						</motion.div>
					</motion.div>
				</div>
				<div className='grid gap-8 md:gap-0'>
					<div className='grid grid-cols-3 gap-2 mx-2 md:mx-0 '>
						{images.map((image, index) => (
							<motion.div
								key={index}
								className=' grid place-items-center'
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.5 }}
								onClick={() => {
									handleChange(index);
								}}
							>
								<Image src={image.src} alt={image.alt} priority='true' />
							</motion.div>
						))}
					</div>

					<div className='prose mx-4 md:w-4/5 md:mx-auto text-lg md:text-xl text-gray-600 font-logo  '>
						<motion.div
							initial={{ opacity: 0, x: '1.2vw' }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 1.4 }}
							className='md:border-r-2 border-landscape-700 pr-2  text-justify md:pr-8 py-4'
						>
							{description}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImagesDisplay;
