import { useLocation, useRoutes } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Main from "./pages/public/Main";
import SignIn from "./pages/public/SignIn";
import SignUp from "./pages/public/SignUp";
import { Home } from "@mui/icons-material";
import Songs from "./pages/Songs";

export default function Router() {
  const location = useLocation();
  console.log(location.pathname);
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/login",
          element: <SignIn />,
        },
        {
          path: "/login",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "dashboard",
      children: [
        { path: "home", element: <Home /> },
        { path: "songs", element: <Songs /> },
      ],
    },
  ]);
}
