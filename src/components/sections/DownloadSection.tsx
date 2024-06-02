import { ChevronsDown, Download } from 'lucide-react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '../ui/dialog';
import Section from './Section';

const DownloadSection = () => {
	return (
		<Section>
			<div className="w-3/12 h-full flex flex-col justify-center items-center relative after:content-[''] after:absolute after:bg-background after:top-0 after:bottom-0 after:right-0 after:w-screen after:[transform:skew(15deg)_translateX(85px)] z-10">
				<div className="relative flex flex-col z-10 translate-x-10 items-center h-full justify-center">
					<div className="flex flex-col justify-center items-center gap-3">
						<div className="text-9xl font-cocktail">Velo</div>
						<div className="flex flex-col items-center text-center text-3xl">
							<div>Supercharge your</div>
							<div className="flex flex-row">
								<img src="img/SRLogo.webp" className="w-36 mr-1" /> experience!
							</div>
						</div>
						<div className="flex flex-col gap-3 font-roboto-mono">
							<a href="velo/latest.zip" download="latest.zip">
								<Button variant="default" className="text-lg font-extrabold">
									<Download className="size-5 mr-2" />
									DOWNLOAD VELO ARCHIVE v2.1.3
								</Button>
							</a>
							<Dialog>
								<DialogTrigger>
									<Button variant="secondary" className="text-lg font-extrabold">
										INSTALLATION INSTRUCTIONS
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>Installation Instructions</DialogHeader>
									<DialogDescription>
										<ol type="1" className="list-decimal pl-5">
											<li>Open Steam, right click "SpeedRunners" in your games list, hover over "Manage" and click on "Browse local files".</li>
											<li>Open the Velo .zip file, select all files and folders and drag them into the game's installation directory. When asked, just click "Replace the files in the destination".</li>
											<li>After that, you can launch your game from Steam like normal.</li>
										</ol>
									</DialogDescription>
								</DialogContent>
							</Dialog>
						</div>
					</div>
					<div
						className="text-white z-10 bottom-2 absolute flex flex-col items-center cursor-pointer"
						onClick={() => {
							window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
						}}
					>
						Read more! <ChevronsDown className="animate-bounce mt-1" />
					</div>
				</div>
			</div>
			<div className="w-5/6 relative h-full before:content-[' '] before:[transform:skew(15deg)] before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:bg-gradient-to-r before:from-background before:from-10%">
				<video src="video/broll.webm" autoPlay loop muted className="w-full h-full [object-fit:cover]" />
			</div>
		</Section>
	);
};

export default DownloadSection;
