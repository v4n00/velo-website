import ChangelogSection from '../components/sections/ChangelogSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import Footer from '../components/sections/Footer';
import LandingSection from '../components/sections/LandingSection';
import UpdaterBanner from '../components/UpdateBanner';
import { ScrollFirstPageProvider } from '../contexts/ScrollFirstPageContext';
import { VeloDataProvider } from '../contexts/VeloDataContext';

const RootPage = () => {
	return (
		<ScrollFirstPageProvider>
			<VeloDataProvider>
				<UpdaterBanner />
				<LandingSection />
				<div className="flex flex-col gap-20 py-20 px-10 justify-center items-center">
					<FeaturesSection />
					<ChangelogSection />
				</div>
				<Footer />
			</VeloDataProvider>
		</ScrollFirstPageProvider>
	);
};

export default RootPage;
