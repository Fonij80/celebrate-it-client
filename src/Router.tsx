import { createBrowserRouter } from "react-router-dom";
import { Home, Login, CelebrationFlow, Templates, MyCelebrations, Profile } from "./pages";
import { Layout, NotFoundError } from "./components/organisms";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "celebrate",
        element: <CelebrationFlow />,
      },
      {
        path: "templates",
        element: <Templates />,
      },
      {
        path: "my-celebrations",
        element: <MyCelebrations />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
