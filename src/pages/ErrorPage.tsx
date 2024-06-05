import { Button } from '@/components/ui/button';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError() as { status: string; statusText: string };
	console.log(error);

	return (
		<div className="h-full w-full flex flex-col gap-3 items-center justify-center font-roboto-mono">
			<p className="text-4xl">Error occured</p>
			<p className="text-xl italic text-primary/50">
				{error.status} - {error.statusText}
			</p>
			<Link to="/">
				<Button variant="default">Back to main page</Button>
			</Link>
		</div>
	);
};

export default ErrorPage;
