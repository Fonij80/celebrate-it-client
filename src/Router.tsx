import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Login,
  CelebrationFlow,
  Templates,
  MyCelebrations,
  Profile,
  Contact,
  Categories,
} from "./pages";
import { Layout, NotFoundError, InvitationCard } from "./components/organisms";

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
      {
        path: "invite",
        element: <InvitationCard />,
      },
      {
        path: "get-started",
        element: <CelebrationFlow />,
      },
    ],
  },
]);

export default router;
