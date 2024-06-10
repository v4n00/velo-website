import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import RootPage from './pages/RootPage';

const router = createBrowserRouter([
	{ path: '/', element: <RootPage />, errorElement: <ErrorPage /> },
	{ path: '/changelogs', element: <RootPage /> },
	{ path: '/leaderboards', element: <LeaderboardsPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
