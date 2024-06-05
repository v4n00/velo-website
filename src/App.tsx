import ChangelogSection from './components/sections/ChangelogSection';
import DownloadSection from './components/sections/DownloadSection';
import FeaturesSection from './components/sections/FeaturesSection';
import Footer from './components/sections/Footer';
import UpdateBadge from './components/UpdateBadge';

function App() {
	return (
		<>
			<UpdateBadge />
			<DownloadSection />
			<FeaturesSection />
			<ChangelogSection />
			<Footer />
		</>
	);
}

export default App;
