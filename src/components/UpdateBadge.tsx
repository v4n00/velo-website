import useScrollFirstPage from '@/hooks/useScrollFirstPage';
import useVeloData from '@/hooks/useVeloData';
import { Loader2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const UpdateBadge = () => {
	const [isBannerActive, setIsBannerActive] = useState<boolean>(false);
	const { isScrolled } = useScrollFirstPage();
	const { data, loading } = useVeloData();
	const [storedBannerVersion, _setStoredBannerVersion] = useState<string>(localStorage.getItem('bannerVersion') || '-1');

	const setStoredBannerVersion = (value: string) => {
		localStorage.setItem('bannerVersion', value);
		_setStoredBannerVersion(value);
	};

	useEffect(() => {
		if (!data || !storedBannerVersion) return;

		if (data.bannerVersion > parseInt(storedBannerVersion)) {
			if (isScrolled) {
				setIsBannerActive(false);
			} else {
				setIsBannerActive(true);
			}
		} else {
			setIsBannerActive(false);
		}
	}, [isScrolled, data?.bannerVersion, storedBannerVersion, data]);

	return (
		<div className={`${isBannerActive ? '' : '-translate-y-full opacity-0'} danger-strip fixed py-[2px] top-0 w-full z-50 text-center flex flex-row justify-center transition ease-in duration-300`}>
			<p className="font-roboto-mono font-bold text-primary-foreground flex flex-row items-center">New Version Is Out -&gt; {loading ? <Loader2 className="ml-10 animate-spin" /> : `v${data?.versionNumber}`}</p>
			<div
				className="absolute right-2 top-0 cursor-pointer w-10 h-full flex justify-center items-center text-primary-foreground opacity-70"
				onClick={() => {
					setStoredBannerVersion(`${data?.bannerVersion}`);
				}}
			>
				<X strokeWidth={4} />
			</div>
		</div>
	);
};

export default UpdateBadge;
