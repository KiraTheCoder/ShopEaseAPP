import TestAPP from "@/__TEST__/TestAPP"
import Header from "./Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./layouts/Footer"
import { getData } from "@/services/apiCall/index"


function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
