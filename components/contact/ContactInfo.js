import { businessInformation } from '../../data/businessInfo';
import { motion } from 'framer-motion';
import EmailUs from './EmailUs';
import ContactSegment from './ContactSegment';
const ContactInfo = () => {
	return (
		<div className='max-w-7xl mx-4 md:mx-auto grid place-items-center  gap-8 lg:grid-cols-5 lg:gap-8  my-8 pb-8 '>
			<div className=' lg:col-span-3 h-full lg:w-2/3  mx-auto  lg:p-4  grid place-items-center  lg:pt-0 '>
				<EmailUs />
			</div>
			<div className='lg:col-span-2 w-full grid gap-8 place-items-cente  lg:border-t-0 lg:border-l border-landscape-500 pt-8 lg:pl-4'>
				<motion.div className='grid gap-4 '>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 1.2 }}
					>
						<ContactSegment contacts={businessInformation.contact} />
					</motion.div>
				</motion.div>

				<div className='grid px-4 place-items-center lg:place-items-start'>
					<motion.div
						initial={{ opacity: 0.01 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.5, duration: 1.2 }}
						className='grid gap-1'
					>
						<span>Living Space Landscapes, Inc</span>
						<span>2660 50th Street East</span>
						<span>Inver Grove Heights, MN 55076 </span>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
export default ContactInfo;
