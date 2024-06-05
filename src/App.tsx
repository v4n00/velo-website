import ChangelogSection from './components/sections/ChangelogSection';
import DownloadSection from './components/sections/DownloadSection';
import FeaturesSection from './components/sections/FeaturesSection';
import Footer from './components/sections/Footer';
import UpdateBadge from './components/UpdateBadge';
import { ScrollFirstPageProvider } from './contexts/ScrollFirstPageContext';
import { VeloDataProvider } from './contexts/VeloDataContext';

function App() {
	return (
		<ScrollFirstPageProvider>
			<VeloDataProvider>
				<UpdateBadge />
				<DownloadSection />
				<FeaturesSection />
				<ChangelogSection />
				<Footer />
			</VeloDataProvider>
		</ScrollFirstPageProvider>
	);
}

export default App;
