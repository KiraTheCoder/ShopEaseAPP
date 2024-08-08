import TestAPP from "@/__TEST__/TestAPP"
// import Header from "./Header/Header"
import Header from "./layouts/Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./layouts/Footer"
import Itemcord from "./components/cards/itemcard/Itemcard"
import CartButton from "./add-cart/AddCart"
function App() {
  return (
    <>
    <Header/>
    <Outlet />
    {/* <TestAPP/> */}
    <Footer/>
</>
  )
}

export default App
