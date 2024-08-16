import Layouts from "@/layouts/Layouts";
import Products from "@/pages/Products";
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
        path: '/register'
      },
      {
        path: '/login'
      }
    ]
  }
]);
