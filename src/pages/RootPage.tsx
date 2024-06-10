import ChangelogsSection from '@/components/sections/ChangelogsSection';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import FeaturesSection from '../components/sections/FeaturesSection';
import Footer from '../components/sections/Footer';
import LandingSection from '../components/sections/LandingSection';
import QuestionsSection from '../components/sections/QuestionsSection';
import UpdaterBanner from '../components/UpdateBanner';
import { ScrollFirstPageProvider } from '../contexts/ScrollFirstPageContext';
import { VeloDataProvider } from '../contexts/VeloDataContext';

const RootPage = () => {
	const location = useLocation();
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (location.pathname === '/changelogs' && ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
		location.pathname = '/';
	}, [location]);

	return (
		<ScrollFirstPageProvider>
			<VeloDataProvider>
				<UpdaterBanner />
				<LandingSection />
				<div className="flex flex-col gap-36 py-20 px-10 justify-center items-center">
					<FeaturesSection />
					<QuestionsSection />
					<ChangelogsSection ref={ref} />
				</div>
				<Footer />
			</VeloDataProvider>
		</ScrollFirstPageProvider>
	);
};

export default RootPage;
