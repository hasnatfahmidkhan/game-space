import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/games",
        element: <h2>Game</h2>,
      },
      {
        path: "/news",
        element: <h2>News</h2>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
