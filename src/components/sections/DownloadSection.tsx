import useVeloData from '@/hooks/useVeloData';
import { ChevronsDown, Download, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../ui/dialog';

const DownloadSection = () => {
	const { data, loading } = useVeloData();
	const [userScrolled, setUserScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) setUserScrolled(false);
			else setUserScrolled(true);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="lg:w-3/12 w-full h-full flex flex-col justify-center items-center relative lg:after:content-[''] lg:after:absolute lg:after:bg-background lg:after:top-0 lg:after:bottom-0 lg:after:right-0 lg:after:w-screen lg:after:[transform:skew(15deg)_translateX(85px)] z-10">
				<div className="relative flex flex-col z-10 lg:translate-x-10 translate-x-0 items-center h-full justify-center">
					<div className="flex flex-col justify-center items-center gap-3">
						<div className="text-9xl font-cocktail">Velo</div>
						<div className="flex flex-col items-center text-center text-3xl">
							<div>Supercharge your</div>
							<div className="flex flex-row">
								<img src="img/SRLogo.webp" className="w-36 mr-1" /> experience!
							</div>
						</div>
						<div className="flex flex-col items-center gap-3 font-roboto-mono">
							<a href={`velo/${data?.fileName}`} download className={loading ? 'pointer-events-none cursor-default' : 'pointer-events-auto cursor-pointer'}>
								<Button variant="ringHover" className="text-lg font-extrabold" disabled={loading}>
									<Download className="size-5 mr-2" />
									DOWNLOAD VELO {loading ? <Loader2 className="mx-5 animate-spin" /> : `v${data?.versionNumber}`}
								</Button>
							</a>
							<Dialog>
								<DialogTrigger asChild>
									<Button variant="secondary" className="text-lg font-extrabold">
										INSTALLATION INSTRUCTIONS
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>Installation Instructions</DialogHeader>
									<ol type="1" className="list-decimal pl-5">
										<li>Open Steam, right click "SpeedRunners" in your games list, hover over "Manage" and click on "Browse local files".</li>
										<li>Open the Velo.zip file, select all files and folders and drag them into the game's installation directory. When asked, just click "Replace the files in the destination".</li>
										<li>After that, you can launch your game from Steam like normal.</li>
									</ol>
								</DialogContent>
							</Dialog>
						</div>
					</div>
					<div className="z-10 bottom-40 absolute flex items-center">
						<Button variant="outline" className="text-lg" disabled>
							View the leaderboards
							<Badge variant="default" className="ml-1">
								WIP
							</Badge>
						</Button>
					</div>
					<div
						className={`${!userScrolled ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-default'} transition-opacity ease-in-out delay-150 duration-300 z-10 bottom-2 absolute select-none flex flex-col items-center font-cocktail text-3xl`}
						onClick={() => {
							if (!userScrolled) window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
						}}
					>
						Read more! <ChevronsDown className="animate-bounce mt-1" />
					</div>
				</div>
			</div>
			<div className="lg:w-5/6 w-0 relative h-full before:content-[' '] before:[transform:skew(15deg)] before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:bg-gradient-to-r before:from-background before:from-10%">
				<video src="video/broll.webm" autoPlay loop muted className="w-full h-full [object-fit:cover]" />
			</div>
		</div>
	);
};

export default DownloadSection;
