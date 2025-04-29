import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../Layout/Login/Login";
import SignUp from "../Layout/SignUp/SignUp";
import About from "../Layout/Home/About/About";
import Blog from "../Layout/Home/Blog/Blog";
import PrivetRouter from "../Context/PrivetRouter";
import Dasbord from "../Layout/Home/Dasbord/Dasbord";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/signup", Component: SignUp },
      {
        path: "/about",
        element: (
          <PrivetRouter>
            <About />
          </PrivetRouter>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivetRouter>
            <Blog />
          </PrivetRouter>
        ),
      },
      {
        path: "/dasbord",
        element: (
          <PrivetRouter>
            <Dasbord />
          </PrivetRouter>
        ),
      },
    ],
  },
]);
