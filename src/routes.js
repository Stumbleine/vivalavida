import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import Dashboard from './layouts/Dashboard';
import Main from './pages/public/Main';
import SignIn from './pages/public/SignIn';
import SignUp from './pages/public/SignUp';
// import { Home } from "@mui/icons-material";
import Songs from './pages/Songs';
import RegisterSong from './pages/public/RegisterSong';
import MyMusic from './pages/MyMusic';
import PlaylistContent from './pages/PlaylistContent';
import Playlists from './pages/Playlists';
import MyFavoritesTunes from './pages/MyFavoritesTunes';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import ArtistProfile from './pages/ArtistProfile';
import Album from './pages/Album';

export default function Router() {
	const location = useLocation();
	// console.log(location.pathname);
	return useRoutes([
		{
			path: '/',
			element: <Dashboard />,
			children: [
				{
					path: '/',
					element: <Navigate to="my-music" />,
				},
				{
					path: 'my-music',
					element: <MyMusic />,
				},

				{
					path: '/artists',
					element: <Artists />,
				},
				{
					path: '/artist-profile/:id',
					element: <ArtistProfile />,
				},
				{
					path: '/album/:id',
					element: <Album />,
				},
				{
					path: '/songs',
					element: <Songs />,
				},
			],
		},
	]);
}

// 'http:localhost:3000/src/assets'
