import { HoverCardTrigger } from '@radix-ui/react-hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { HoverCard, HoverCardContent } from '../ui/hover-card';

const FeaturesSection = () => {
	const creators = [
		{
			name: 'rbit',
			avatar: 'img/avatars/rbit.webp',
			role: 'worked on the functionality of the mod',
			fallback: 'RB',
		},
		{
			name: 'olsu',
			avatar: 'img/avatars/olsu.webp',
			role: 'worked on the UI of the mod',
			fallback: 'OL',
		},
	];
	const featuresCardContents = [
		{
			img: 'img/art/dashwell-customization.webp',
			header: 'Maximum customizability',
			content: 'Velo is designed for ultimate customization. Missing a feature? Suggest it, and help make the mod even better for everyone!',
		},
		{
			img: '',
			header: 'Useful practice tools',
			content: "Create savestates, display a speedometer, reveal hitboxes, simulate blindrunning - that's just a fraction of the features you can explore.",
		},
		{
			img: 'img/art/lucjadore-leaderboard.webp',
			header: 'Custom leaderboards',
			content: 'Forget speedrun.com, Velo leaderboards are the new go-to! Enjoy enhanced replays and ghosts to easily compare your runs.',
		},
	];
	const principlesCardContents = [
		{
			img: '',
			header: 'No cheating',
			content: "This is not a cheating mod. While it allows you to make changes to the game's physics like disabling the grapple cooldown, this is limited to local games only and will generally be watermarked.",
		},
		{
			img: '',
			header: 'No changes by default',
			content: 'If all settings are set to their default, the game will behave just like an unmodified version. The only notable exceptions are the Velo leaderboard system, which is enabled by default, and a few local game settings to help making runs comply with the rules.',
		},
	];

	const HoverCardCreators = ({ name, avatar, role, fallback }: { name: string; avatar: string; role: string; fallback: string }) => (
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
				<div className="ml-2 text-sm">
					<p>@{name}</p>
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
			<CardHeader className="pb-3 pt-0 text-2xl font-bold font-roboto-mono">{header}</CardHeader>
			<CardContent className="pb-4">{content}</CardContent>
		</Card>
	);

	return (
		<div className="flex flex-col justify-center items-center h-full">
			<h1>Features</h1>
			<div className="block text-xl mb-6 flex-wrap break-keep text-center">
				<span className="font-cocktail text-4xl text-primary drop-shadow-primary">Velo</span> is a general-purpose utility mod for <span className="font-cocktail text-3xl text-sky-500 drop-shadow-sky-500">SpeedRunners</span> made by&nbsp;
				<HoverCardCreators name={creators[0].name} avatar={creators[0].avatar} role={creators[0].role} fallback={creators[0].fallback} />
				&nbsp;and&nbsp;
				<HoverCardCreators name={creators[1].name} avatar={creators[1].avatar} role={creators[1].role} fallback={creators[1].fallback} />
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
