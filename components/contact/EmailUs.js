import { motion } from 'framer-motion';
import Mailto from '../utils/Mailto';
const body =
	'Please let us know a bit about your landscape project including your overall goals, wants, and needs.  Photos are super helpful so include if possible.  We will need your contact info including your address to ensure we work in your area.  Thanks!';

const EmailUs = () => {
	return (
		<div className='grid gap-8 lg:gap-6 '>
			<div className='grid gap-4 lg:gap-2 place-items-center '>
				<h1 className=' text-center  text-2xl md:text-4xl  font-logo font-bold'>
					Send Us an Email!
				</h1>

				<p className=' text-lg lg:text-2xl  text-center '>
					Tell us more about your project! We will contact you for the next
					steps. Most projects start with a consultation and paid-for design.
				</p>
			</div>
			<motion.div
				className='grid place-items-center '
				animate={{ scale: 1 }}
				whileHover={{ scale: 1.09 }}
				transition={{ duration: 0.6 }}
			>
				<Mailto
					email='scott@livingspacelandscapes.com'
					
					subject='Consultation Request'
					body={body}
				>
					<button className='bg-landscape-700 text-light w-full px-8 py-2 text-xl lg:text-2xl  font-bold tracking-wider rounded-full lg:mt-4'>
						Send Email Now
					</button>
				</Mailto>
			</motion.div>
		</div>
	);
};
export default EmailUs;
