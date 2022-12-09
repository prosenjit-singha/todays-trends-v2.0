import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        loader: () => redirect("/"),
      },
    ],
  },
]);
