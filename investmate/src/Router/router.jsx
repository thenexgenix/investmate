import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Project from "../Pages/Project/Project/Project";
import Investor from "../Pages/Investor/Investor/Investor";
import Checkout from "../Pages/Checkout/Checkout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },{
            path:"/project",
            element:<Project></Project>
        },{
          path:"/investor",
          element: <Investor></Investor>
        },{
          path: "/checkout",
          element: <Checkout />
        }
      ]
    },
  ]);
  