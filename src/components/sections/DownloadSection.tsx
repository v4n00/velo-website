import Section from './Section';

const DownloadSection = () => {
	return (
		<Section>
			<div className="w-2/5 h-full flex justify-center items-center relative after:content-[''] after:absolute after:bg-zinc-600 after:top-0 after:bottom-0 after:right-0 after:w-screen after:[transform:skew(15deg)]">
				<div className="z-10">test</div>
			</div>
			<div className="w-3/5 h-full flex justify-center items-center relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-screen before:[transform:skew(15deg)] before:bg-blend-overlay before:bg-no-repeat before:bg-[url(src/assets/pic.png),linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0))] before:[background-position-x:-75%] before:bg-contain before:bg-"></div>
		</Section>
	);
};

export default DownloadSection;
