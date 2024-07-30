import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/HomePage/index.jsx';
import About from './pages/Aboutpage/About.jsx';
import Contact from './pages/contactpage/Contact.jsx';
import SignupPage from './pages/SignUpPage/SignupPage.jsx';
import { LoginForm } from './services/lib/YupFormikValidator/index.js';
import LogInPage from './pages/LoginPage/LogInPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
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
        element:<LogInPage/>
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
