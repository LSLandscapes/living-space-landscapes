import Image from 'next/image';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

import { galleryImages } from '../../data/carouselImages';
import Meta from '../../components/utils/Meta';
import { motion } from 'framer-motion';

const Gallery = () => {
	// Function to scroll to the top of the page
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // For smooth scrolling
		});
	};

	return (
		<>
			<Meta
				pageTitle={'Inspirational Gallery'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>

			<div className='grid lg:grid-cols-2 xl:grid-cols-3  gap-24  lg:gap-12 place-items-center md:px-[5vw] py-24 bg-landscape-500/30'>
				{galleryImages.map((image, index) => (
					<div key={index}>
						<motion.div
							className='shadow-lg shadow-dark/30 grid place-items-center transition duration-700 border-y-[3px] lg:border-x-[3px] border-light lg:rounded'
							initial={{ y: 100 }}
							whileInView={{ y: 0 }}
							transition={{ duration: 0.4 }}
						>
							{/* Set priority to true for the first 5-6 images */}
							<Image
								src={image.image}
								alt={image.alt}
								priority={index < 5}
								
							/>
						</motion.div>
					</div>
				))}
			</div>

			<button
				onClick={scrollToTop}
				className='fixed bottom-5 left-1/2 transform -translate-x-1/2 text-4xl bg-landscape-700  text-light rounded-full shadow-lg shadow-dark/40'
				aria-label='Scroll to Top'
			>
				<FaRegArrowAltCircleUp />
			</button>
		</>
	);
};

export default Gallery;
