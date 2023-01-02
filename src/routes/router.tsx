import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../layouts/root";
import About from "../pages/About";
import CommandList from "../pages/CommandList";
import Home from "../pages/Home";
import News from "../pages/News";
import PageNotFound from "../pages/PageNotFound";

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
      {
        path: "news",
        element: <News />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "command-list",
        element: <CommandList />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
