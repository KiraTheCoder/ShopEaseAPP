import TestAPP from "@/__TEST__/TestAPP"
import { getData } from "@/services/apiCall/index"
import { useState,useEffect } from "react"
import Footer from "./layouts/Footer"
import { Outlet } from "react-router-dom"

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
    {/* <Headers/> */}
    <TestAPP/>
    <Outlet/>
   <Footer/>
    {/* <h1>{data?.message  && "hjh"}</h1> */}
    </>
  )
}

export default App
