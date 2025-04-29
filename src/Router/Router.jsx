import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../Layout/Login/Login";
import SignUp from "../Layout/SignUp/SignUp";

export const router = createBrowserRouter([
    {path:'/', Component:Root,
        children:[
            {index:true,Component:Home},
            {path:'/login', Component:Login},
            {path:'/signup', Component:SignUp}
        ]
    }
])