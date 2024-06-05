import { createContext, useEffect, useState } from 'react';

interface VeloData {
	versionNumber: string;
	bannerVersion: number;
	fileName: string;
}

interface VeloDataContextType {
	data: VeloData | null;
	loading: boolean;
}

export const VeloDataContext = createContext<VeloDataContextType>({ data: null, loading: true });

export const VeloDataProvider = ({ children }: { children: React.ReactNode }) => {
	const [data, setData] = useState<VeloData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const jsonData: VeloData = await (await fetch('velo/data.json')).json();
				setData(jsonData);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return <VeloDataContext.Provider value={{ data, loading }}>{children}</VeloDataContext.Provider>;
};
