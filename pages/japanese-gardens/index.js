import GardensToVisit from '../../components/japanese-garden/GardensToVisit';
import JapaneseSection from '../../components/japanese-garden/JapaneseSection';
import Meta from '../../components/utils/Meta';
import { japaneseProcessPageData } from '../../data/pageData';

const JapaneseGardening = () => {
	return (
		<>
			<Meta
				pageTitle={'Japanese Gardening'}
				description={
					'Living Space Landscapes will create your landscape with a naturalistic style that will inspire a sense of calm in those who experience it.'
				}
			/>
			<div className='grid gap-8 mt-8 lg:gap-16 lg:mt-16  lg:mx-2 xl:mx-0'>
				<div className='grid gap-8'>
					<h1 className='text-center text-2xl lg:text-4xl text-landscape-700 font-logo'>
						Japanese Gardens
					</h1>
					<p className='max-w-5xl tracking-wide leading-7 md:leading-8 lg:leading-[32px] mx-2 md:mx-8 lg:mx-auto text-justify text-gray-600  text-sm md:text-base lg:text-lg border-r px-4 md:px-8 border-landscape-700/40 '>
						{japaneseProcessPageData.intro}
					</p>
				</div>
				<div className="grid ">
					<JapaneseSection data={japaneseProcessPageData.credentialSections} />
					<GardensToVisit data={japaneseProcessPageData.gardensToVisit} />
				</div>
			</div>
		</>
	);
};
export default JapaneseGardening;
