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
import Billing from './pages/BillingDetail/Billing.jsx';
import { Address } from './components/userProfle/myAccount/AddressBook/Address.jsx';
import CreateAddress from './components/createAddress/CreateAddress.jsx';
import UpdateName from './components/updateName/UpdateName.jsx';
import NewArrivals from './pages/NewArrivalsPage/NewArrivals.jsx';
import MyHistory from './components/userProfle/myOrders/myHistory/MyHistory.jsx';
import HistoryItem from './components/userProfle/myOrders/myHistory/HistoryItem.jsx';
import { BillingAddress } from './components/userProfle/billingAddress/BillingAddress.jsx';
import CreateBillingAdd from './components/userProfle/createBillingAdd/CreateBillingAdd.jsx';
import MyPayment from './pages/paymentpage/MyPayment.jsx';
import SearchProducts from './pages/searchProducts/SearchProducts.jsx';
import WishlistProducts from './pages/wishListProductspage/WishlistProducts.jsx';

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
        path: "/searchproducts",
        element: <SearchProducts />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/newarrivals",
        element: <NewArrivals />
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
        path: "/wishlistproducts",
        element: <WishlistProducts />
      },
      {
        path: "/billing",
        element: <Billing />,
      },
      {
        path: "/createbillingadd",
        element: <CreateBillingAdd />,
      },
      {
        path: "/mypayment",
        element: <MyPayment />,
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
            path:"/useraccount/updateName",
            element:<UpdateName/>
          },
          {
            path:"/useraccount/address",
            element:<Address/>
          },
          {
            path:"/useraccount/myhistory",
            element:<MyHistory/>
          },
          {
            path:"/useraccount/historyitems",
            element:<HistoryItem/>
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
