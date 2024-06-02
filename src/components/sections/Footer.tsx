import { Heart } from 'lucide-react';

const Footer = () => {
	return (
		<div className="flex justify-center items-center h-20 bg-zinc-800 text-zinc-500">
			<p className="flex items-center">
				Website made with <Heart className="size-5 fill-current mx-1 hover:fill-red-500 hover:stroke-red-500 transition duration-300" /> by v4n
			</p>
		</div>
	);
};

export default Footer;
