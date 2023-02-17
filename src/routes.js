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

export default function Router() {
  const location = useLocation();
  console.log(location.pathname);
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
          path: 'playlists',
          element: <Playlists />,
        },
        {
          path: 'playlists/:name',
          element: <PlaylistContent />,
        },
        {
          path: 'favorites-tunes',
          element: <MyFavoritesTunes />,
        },
        {
          path: 'register-tune',
          element: <RegisterSong />,
        },
        {
          path: '/artists',
          element: <Artists />,
        },
        {
          path: '/albums/:id',
          element: <Albums />,
        },
        {
          path: '/songs/:id',
          element: <Songs />,
        },
      ],
    },
  ]);
}
