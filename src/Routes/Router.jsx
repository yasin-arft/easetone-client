import Layouts from "@/layouts/Layouts";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts/>,
    children: []
  }
]);
