import ContactInfo from '../../components/contact/ContactInfo';
import Meta from '../../components/utils/Meta';
import SectionHeading from '../../components/utils/SectionHeading';
const Contact = () => {
	return (
		<>
			<Meta
				pageTitle={'Contact Us'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>
			<div className='grid gap-4 lg:gap-2 mt-12   '>
				<div className='px-2 lg:px-0 lg:w-2/3 mx-auto grid gap-1 lg:gap-2 font-bld pb-8'>
					<SectionHeading title={'Ready to Work With Us?'} />

					<h2 className='grid place-items-center text-xl lg:text-3xl  text-center font-normal '>
						Schedule a Consultation with One of Our Professionals.
					</h2>
				</div>

				<ContactInfo />
			</div>
		</>
	);
};
export default Contact;
