import { useEffect, useState } from 'react';

interface VeloData {
	versionNumber: string;
	bannerVersion: number;
	fileName: string;
}

const useVeloData = () => {
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

	return { data, loading };
};

export default useVeloData;
