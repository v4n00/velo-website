import { createContext, useEffect, useState } from 'react';

interface ScrollFirstPageContextType {
	isScrolled: boolean;
}

export const ScrollFirstPageContext = createContext<ScrollFirstPageContextType>({ isScrolled: false });

export const ScrollFirstPageProvider = ({ children }: { children: React.ReactNode }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) setIsScrolled(false);
			else setIsScrolled(true);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return <ScrollFirstPageContext.Provider value={{ isScrolled }}>{children}</ScrollFirstPageContext.Provider>;
};
