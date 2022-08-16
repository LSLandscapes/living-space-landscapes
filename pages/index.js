import Hero from '../components/layout/hero/Hero';
import Philosophy from '../components/homepage/Philosophy';
import ButtonLink from '../components/utils/ButtonLink';
import Carousel from '../components/carousel/Carousel';
import SectionHeading from '../components/utils/SectionHeading';
import Reviews from '../components/reviews/Reviews';
import Logo from '../components/layout/Logo';
import CustomLogo from '../components/layout/hero/CustomLogo';

const HomePage = () => {
	return (
		<div className='grid gap-4 mb-24 justify-items-center'>
			<Hero />
			<Philosophy />
			<div className='flex space-x-4'>
				<ButtonLink title='Explore Services' href={'/services'} />
				<ButtonLink title='Why choose us' href={'/why-us'} />
			</div>
			<div className='grid justify-items-center'>
				<div className='grid lg:grid-cols-2 gap-8 m-7 '>
					<Reviews />
				</div>
			</div>{' '}
			<Carousel />
		</div>
	);
};

export default HomePage;
