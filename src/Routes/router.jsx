import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import PrivateRoute from "./PrivateRoute";
import MyFavorite from "../Pages/MyFavorite/MyFavorite";
import Games from "../Pages/Games/Games";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/news",
        element: <h2>News</h2>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/myfavorite",
        element: (
          <PrivateRoute>
            <MyFavorite />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
