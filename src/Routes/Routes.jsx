import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../Pages/Dashbord/Mycart/Mycart/Mycart";
import Alluser from "../Pages/Dashbord/AllUsers/AllUsers/Alluser";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'test',
        element: <AboutUs></AboutUs>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <Mycart></Mycart>
      },
      {
        path :'alluser',
        element:<Alluser></Alluser>
      }

    ]
  }

]);