import TestAPP from "@/__TEST__/TestAPP"
import { getData } from "@/services/apiCall/index"
import { useState,useEffect } from "react"


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData('/sample')
      .then((response) => setData(response))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(data);

  return (
    <>
    {/* <TestAPP/> */}
    <h1>{data?.message}</h1>
    </>
  )
}

export default App
