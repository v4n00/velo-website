import { ArrowLeftRight, Loader2 } from 'lucide-react';
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { Card } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { ScrollArea } from '../ui/scroll-area';

const ChangelogsSection = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
	const [logFiles, setLogFiles] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getChangelogs = async () => {
			const allPostFiles = import.meta.glob('/public/velo/changelogs/*.md');
			const iterablePostFiles = Object.entries(allPostFiles).sort((a, b) => parseInt(b[0].split('/').pop()!) - parseInt(a[0].split('/').pop()!));
			const changelogs: string[] = [];

			const processPostFiles = async () => {
				for (let i = 0; i < iterablePostFiles.length; i++) {
					const arr = iterablePostFiles[i];
					const path = arr[0].slice('/public/'.length); // funny hack because vite sucks

					const text = await (await fetch(path)).text();
					changelogs.push(text);
				}
				setLogFiles(changelogs);
				setLoading(false);
			};
			processPostFiles();
		};
		getChangelogs();
	}, []);

	return (
		<div className="page-section" ref={ref}>
			<h1 className="page-title">Changelogs</h1>
			<Carousel className="xl:w-[600px] lg:w-[500px] md:w-[50vw] w-[70vw] font-roboto">
				<CarouselContent>
					{!loading ? (
						logFiles.map((logFile, index) => (
							<CarouselItem key={index}>
								<Card className="h-[60vh] m-1 p-6">
									<ScrollArea className="h-[500px] select-none cursor-default">
										<Markdown className="changelogs pr-3">{logFile}</Markdown>
									</ScrollArea>
								</Card>
							</CarouselItem>
						))
					) : (
						<CarouselItem>
							<Card className="h-[60vh] m-1 p-6 select-none flex justify-center items-center">
								<Loader2 className="w-12 h-12 animate-spin" />
							</Card>
						</CarouselItem>
					)}
				</CarouselContent>
				<CarouselPrevious className="max-md:hidden" />
				<CarouselNext className="max-md:hidden" />
				<div className="flex justify-center mt-2">
					<Card className="flex md:hidden text-muted-foreground/80 p-2 bg-muted">
						<ArrowLeftRight className="mr-2" />
						<p>Swipe to navigate</p>
					</Card>
				</div>
			</Carousel>
		</div>
	);
});

export default ChangelogsSection;
