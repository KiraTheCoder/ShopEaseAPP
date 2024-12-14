import TestAPP from "@/__TEST__/TestAPP"
import Header from "./layouts/Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./layouts/Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from "./__TEST__/pathLocations";

function App() {
  return (
    <>
      <Header />
      <ToastContainer  />
      {/* <TestAPP/> */}
      <MyComponent/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
