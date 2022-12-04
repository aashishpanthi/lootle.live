import { useRoutes } from "react-router-dom";

// layouts
import DefaultLayout from "./layouts/DefaultLayout";
import NavbarOnlyLayout from "./layouts/NavbarOnlyLayout";

//import other pages
import NotFound from "./pages/Page404";
import Home from "./pages/Home";
import DashboardApp from "./pages/DashboardApp";

// ----------------------------------------------------------------------

export default function Router({ nhost }) {
  return useRoutes([
    {
      path: "/",
      element: <DefaultLayout nhost={nhost} />,
      children: [{ path: "", element: <Home nhost={nhost} /> }],
    },
    {
      path: "/app",
      element: <NavbarOnlyLayout nhost={nhost} />,
      children: [{ path: "", element: <DashboardApp /> }],
    },
    { path: "*", element: <NotFound /> },
  ]);
}
