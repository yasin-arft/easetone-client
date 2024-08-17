import Layouts from "@/layouts/Layouts";
import Products from "@/pages/home/Products";
import Login from "@/pages/login/Login";
import Profile from "@/pages/profile/Profile";
import Register from "@/pages/register/Register";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: '/',
        element: <Products />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
]);
