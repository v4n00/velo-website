import { ArrowLeftRight } from 'lucide-react';
import { ForwardedRef, forwardRef } from 'react';
import Markdown from 'react-markdown';
import { Card } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { ScrollArea } from '../ui/scroll-area';

const logFiles = ['# test1', '# test2', '# test3', '# test4', '# test5'];

const ChangelogsSection = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<div className="page-section" ref={ref}>
			<h1 className="page-title">Changelogs</h1>
			<Carousel className="xl:w-[600px] lg:w-[500px] md:w-[50vw] w-[70vw]">
				<CarouselContent>
					{logFiles.map((logFile, index) => (
						<CarouselItem key={index}>
							<Card className="h-[60vh] m-1 p-6">
								<ScrollArea>
									<Markdown className="changelogs">{logFile}</Markdown>
								</ScrollArea>
							</Card>
						</CarouselItem>
					))}
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
