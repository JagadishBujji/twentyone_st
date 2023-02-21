import { Navigate, useRoutes } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import Work from "./pages/Work";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "work", element: <Work /> },
      ],
    },
  ]);

  return routes;
}
