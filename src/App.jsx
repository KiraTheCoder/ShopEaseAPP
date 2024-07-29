import TestAPP from "@/__TEST__/TestAPP"
import { getData } from "@/services/apiCall/index"
// import Header from "./Header/Header"
import { useState,useEffect } from "react"
<<<<<<< HEAD
import Footer from "./layouts/Footer"
import { Outlet } from "react-router-dom"
=======
import Topheader from "./Topheader/Topheader"

>>>>>>> 0f3192e0f541279cdba2bf869c56ded097cb4ce4

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   getData('/sample')
  //     .then((response) => setData(response))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  // console.log(data);

  return (
    <>
<<<<<<< HEAD
    {/* <Headers/> */}
=======
    {/* <Header/> */}
>>>>>>> 0f3192e0f541279cdba2bf869c56ded097cb4ce4
    <TestAPP/>
    <Outlet/>
   {/* <Footer/> */}
    {/* <h1>{data?.message  && "hjh"}</h1> */}
    </>
  )
}

export default App
