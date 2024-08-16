import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import About from './pages/Aboutpage/About.jsx';
import Onsale from './pages/Onsale/Onsale.jsx';
import Contact from './pages/contactpage/Contact.jsx';
import Brands from './pages/brandpage/Brands.jsx';
import SignupPage from './pages/SignUpPage/SignupPage.jsx';
import LogInPage from './pages/LoginPage/LogInPage.jsx';
import Home from './pages/HomePage/Home.jsx';
import Forget_and_change_password from './pages/Forget_password/ForgetAndChangePassword.jsx';
import UpdateAdd from './pages/Update_AddEmailphonenumber/UpdateAdd.jsx';
import ProductCart from '@/pages/productcartpage/Productcart'
import Cart from './pages/cartpage/Cart.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },       
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/signup",
        element:<SignupPage/>
      },
      {
        path:"/login",
        element:<LogInPage/>,
      },
      {
        path:"/forgetpassword",
        element:<Forget_and_change_password/>
      },
      {
        path:"/updateAdd",
        element:<UpdateAdd/>
      },
      {
        path:"/productcart",
        element:<ProductCart/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
