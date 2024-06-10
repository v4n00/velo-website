import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LeaderboardsPage = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<h1 className="font-cocktail text-8xl mb-14">Leaderboards - WIP</h1>
			<Link to="/">
				<Button>Go home</Button>
			</Link>
		</div>
	);
};

export default LeaderboardsPage;
