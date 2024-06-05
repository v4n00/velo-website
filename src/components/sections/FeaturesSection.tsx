import { HoverCardTrigger } from '@radix-ui/react-hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { HoverCard, HoverCardContent } from '../ui/hover-card';

const FeaturesSection = () => {
	const creators = [
		{
			name: 'rbit',
			avatar: '/img/avatars/rbit.webp',
			role: 'worked on the functionality of the mod',
			fallback: 'RB',
		},
		{
			name: 'olsu',
			avatar: '',
			role: 'worked on the UI of the mod',
			fallback: 'OL',
		},
	];
	const featuresCardContents = [
		{
			img: 'test',
			header: 'Maximum customizability',
			content: 'The mod should provide you with as much customizability for all of its features as possible. If you miss a certain customization, feel free to make suggestions to further improve the mod.',
		},
		{
			img: 'test',
			header: 'Useful practice tools',
			content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'test',
			header: 'Leaderboards',
			content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
	];
	const principlesCardContents = [
		{
			header: 'No cheating',
			content: "This is not a cheating mod. While it allows you to make changes to the game's physics like disabling the grapple cooldown, this is limited to local games only and will generally be watermarked.",
		},
		{
			header: 'No changes by default',
			content: 'If all settings are set to their default, the game will behave just like an unmodified version. The only notable exceptions are the Velo leaderboard system, which is enabled by default, and a few local game settings to help making runs comply with the rules.',
		},
	];

	const HoverCardCreators = ({ name, avatar, role, fallback }: { name: string; avatar: string; role: string; fallback: string }) => (
		<HoverCard openDelay={100} closeDelay={100}>
			<HoverCardTrigger>
				<Button variant="linkHover1" className="font-normal p-0 text-xl -translate-y-1.5 no-focus">
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

	const PopOutCard = ({ header, content }: { header: string; content: string }) => (
		<Card className="max-w-sm text-center hover:transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-primary-foreground">
			<CardHeader>{header}</CardHeader>
			<CardContent>{content}</CardContent>
		</Card>
	);

	return (
		<div className="flex flex-col justify-center items-center h-full">
			<h1 className="mb-14">Features</h1>
			<h2 className="flex flex-row text-xl mb-2">
				<p className="font-cocktail text-4xl -translate-y-2 text-primary drop-shadow-primary">Velo</p> &nbsp;is a general-purpose utility mod for&nbsp; <p className="font-cocktail text-3xl -translate-y-1.5 text-sky-500 drop-shadow-sky-500">SpeedRunners</p> &nbsp;made by&nbsp;
				<HoverCardCreators name={creators[0].name} avatar={creators[0].avatar} role={creators[0].role} fallback={creators[0].fallback} />
				&nbsp;and&nbsp;
				<HoverCardCreators name={creators[1].name} avatar={creators[1].avatar} role={creators[1].role} fallback={creators[1].fallback} />
			</h2>
			<div className="flex flex-row justify-center items-center gap-10 mb-14">
				{featuresCardContents.map((card, index) => (
					<PopOutCard key={index} header={card.header} content={card.content} />
				))}
			</div>
			<h2 className="flex flex-row text-xl mb-2">
				<p className="font-cocktail text-4xl -translate-y-2 text-primary drop-shadow-primary">Velo</p> &nbsp; obeys the following principles to ensure&nbsp; <p className="font-cocktail text-3xl -translate-y-1.5 text-green-500 drop-shadow-green-500">fair play</p>
			</h2>
			<div className="h-full flex flex-row justify-center items-stretch gap-10">
				{principlesCardContents.map((card, index) => (
					<PopOutCard key={index} header={card.header} content={card.content} />
				))}
			</div>
		</div>
	);
};

export default FeaturesSection;
