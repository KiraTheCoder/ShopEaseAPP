import TestAPP from "@/__TEST__/TestAPP"
import { getData } from "@/services/apiCall/index"
import { useState,useEffect } from "react"
import Footer from "./layouts/Footer/index"


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
    {/* <TestAPP/> */}

   <Footer/>
    {/* <h1>{data?.message  && "hjh"}</h1> */}
    </>
  )
}

export default App
