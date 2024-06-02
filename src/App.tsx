import ChangelogSection from './components/sections/ChangelogSection';
import DownloadSection from './components/sections/DownloadSection';
import FeaturesSection from './components/sections/FeaturesSection';
import Footer from './components/sections/Footer';

function App() {
	return (
		// <ScrollArea className="h-full w-full">
		<>
			<DownloadSection />
			<FeaturesSection />
			<ChangelogSection />
			<Footer />
		</>
		// </ScrollArea>
	);
}

export default App;
