import { createRoot } from 'react-dom/client'
import {StrictMode} from "react"
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import About from './pages/Aboutpage/About.jsx';
import Contact from './pages/contactpage/Contact.jsx';
import Brands from './pages/brandpage/Brands.jsx';
import SignupPage from './pages/SignUpPage/SignupPage.jsx';
import LogInPage from './pages/LoginPage/LogInPage.jsx';
import Home from './pages/HomePage/Home.jsx';
import Forget_and_change_password from './pages/Forget_password/ForgetAndChangePassword.jsx';
import UpdateAdd from './pages/Update_AddEmailphonenumber/UpdateAdd.jsx';
import ProductCart from '@/pages/productcartpage/Productcart'
import Cart from '@/pages/cartpage/Cart.jsx';
import SomethingWentWrong from "@/components/error/SomethingWentWrong.jsx"
import UserAccount from './pages/userAccount/UserAccount.jsx';
import MyProfile from './components/userProfle/myAccount/myProfile/MyProfile.jsx';
import UserprofileImg from './components/userProfle/userMainProfile/UserprofileImg.jsx';
import Billing from './components/userProfle/BillingDetail/Billing.jsx';
import { Address } from './components/userProfle/myAccount/AddressBook/Address.jsx';
import CreateAddress from './components/createAddress/CreateAddress.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/brands",
        element: <Brands />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/signup",
        element:<SignupPage/>
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/forgetpassword",
        element: <Forget_and_change_password />
      },
      {
        path: "/updateAdd",
        element: <UpdateAdd />
      },
      {
        path: "/productcart",
        element: <ProductCart />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/billing",
        element: <Billing />
      },
      {
        path: "/useraccount",
        element: <UserAccount />,
        children:[
          {
            path:"/useraccount",
            element:<UserprofileImg/>
          },
          {
            path:"/useraccount/profile",
            element:<MyProfile/>
          },
          {
            path:"/useraccount/address",
            element:<Address/>
          },
      
          {
            path:"/useraccount/createaddress",
            element:<CreateAddress/>
          },
      
        ]
      }
    ],
    // errorElement: <SomethingWentWrong />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
