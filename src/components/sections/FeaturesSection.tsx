import { HoverCardTrigger } from '@radix-ui/react-hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { HoverCard, HoverCardContent } from '../ui/hover-card';

const FeaturesSection = () => {
	const creators = [
		{
			name: 'rbit',
			tag: 'rbit',
			avatar: 'img/avatars/rbit.webp',
			role: 'worked on the functionality of the mod',
			fallback: 'RB',
		},
		{
			name: 'olsu',
			tag: '_olsu',
			avatar: 'img/avatars/olsu.webp',
			role: 'worked on the UI of the mod',
			fallback: 'OL',
		},
	];
	const featuresCardContents = [
		{
			img: 'img/art/dashwell-customization.webp',
			header: 'Maximum Customizability',
			content: 'Velo is designed for ultimate customization. Missing a feature? Suggest it, and help make the mod even better for everyone!',
		},
		{
			img: 'img/art/excel-practice.webp',
			header: 'Useful Practice Tools',
			content: "Create savestates, display a speedometer, reveal hitboxes, simulate blindrunning - that's just a fraction of the features you can explore.",
		},
		{
			img: 'img/art/lucjadore-leaderboard.webp',
			header: 'Custom Leaderboards',
			content: 'Forget speedrun.com, Velo leaderboards are the new go-to! Enjoy enhanced replays and ghosts to easily compare your runs.',
		},
	];
	const principlesCardContents = [
		{
			img: 'img/art/jaibild-cheater.webp',
			header: 'No Cheating',
			content: "This mod isn't for cheating. It lets you tweak game physics, like disabling grapple cooldown, but only in local games with clear watermarks.",
		},
		{
			img: 'img/art/cosmo-default.webp',
			header: 'No Changes By Default',
			content: 'With default settings, the game runs as if unmodified. The exceptions are the Velo leaderboard system, which is on by default.',
		},
	];

	const HoverCardCreators = ({ name, tag, avatar, role, fallback }: { name: string; tag: string; avatar: string; role: string; fallback: string }) => (
		<HoverCard openDelay={100} closeDelay={100}>
			<HoverCardTrigger>
				<Button variant="linkHover1" className="font-normal p-0 text-xl focus-visible:ring-0 focus-visible:ring-offset-0">
					{name}
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="flex flex-row items-center w-full py-3" side="top">
				<Avatar>
					<AvatarImage src={avatar} alt={`${name}'s avatar`} />
					<AvatarFallback>{fallback}</AvatarFallback>
				</Avatar>
				<div className="ml-2 text-sm flex flex-col items-start">
					<p>@{tag}</p>
					<p className="text-sm text-popover-foreground/60">&gt; {role}</p>
				</div>
			</HoverCardContent>
		</HoverCard>
	);

	const PopOutCard = ({ img, header, content }: { img: string; header: string; content: string }) => (
		<Card className="max-w-sm text-center hover:transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-primary-foreground">
			<div className="flex justify-center p-4 items-center">
				<img src={img} className="size-[200px]" />
			</div>
			<CardHeader className="pb-4 pt-0 text-2xl font-bold font-roboto-mono">{header}</CardHeader>
			<CardContent className="pb-6">{content}</CardContent>
		</Card>
	);

	return (
		<div className="page-section">
			<h1 className="page-title">Features</h1>
			<div className="block text-xl mb-6 flex-wrap break-keep text-center">
				<span className="font-cocktail text-4xl text-primary drop-shadow-primary">Velo</span> is a general-purpose utility mod for <span className="font-cocktail text-3xl text-sky-500 drop-shadow-sky-500">SpeedRunners</span> made by&nbsp;
				<HoverCardCreators name={creators[0].name} tag={creators[0].tag} avatar={creators[0].avatar} role={creators[0].role} fallback={creators[0].fallback} />
				&nbsp;and&nbsp;
				<HoverCardCreators name={creators[1].name} tag={creators[1].tag} avatar={creators[1].avatar} role={creators[1].role} fallback={creators[1].fallback} />
			</div>
			<div className="h-full flex md:flex-row flex-col justify-center items-stretch gap-10 mb-14">
				{featuresCardContents.map((card, index) => (
					<PopOutCard key={index} img={card.img} header={card.header} content={card.content} />
				))}
			</div>
			<div className="block text-xl mb-6 flex-wrap break-keep text-center">
				<span className="font-cocktail text-4xl text-primary drop-shadow-primary">Velo</span> obeys the following principles to ensure <span className="font-cocktail text-3xl text-green-500 drop-shadow-green-500">consistency</span> for everyone
			</div>
			<div className="h-full flex md:flex-row flex-col justify-center items-stretch gap-10">
				{principlesCardContents.map((card, index) => (
					<PopOutCard key={index} img={card.img} header={card.header} content={card.content} />
				))}
			</div>
		</div>
	);
};

export default FeaturesSection;
