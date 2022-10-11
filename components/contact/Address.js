import { MdHouseSiding } from 'react-icons/md';
// import SocialHeroLinks from '../utils/SocialHeroLinks';
const Address = () => {
	return (
		<div className='grid sm:grid-cols-3 items-center text-lg'>
			<MdHouseSiding className='text-3xl' />
			<div className='col-span-2 grid gap-1 mt-4'>
				<span>Living Space Landscapes, Inc</span>
				<span>820 Concord St North</span>
				<span>Suite 103</span>
				<span>South St. Paul, MN</span>
			</div>
		</div>
	);
};
export default Address;
