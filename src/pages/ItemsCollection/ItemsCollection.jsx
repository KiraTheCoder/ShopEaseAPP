import ProductCard from "@/components/product/Product"
import { useEffect, useState } from "react"
import { getData } from "@/services/apiCall"
function ItemsCollection() {
  const [products, setProducts]= useState([])
  useEffect(()=>{
    fetchData()

  },[])
  
  const fetchData = async () => {
<<<<<<< HEAD
    const result = await getData("/products/")
    // const data = await result.json();
=======
    const result = await getData("/products");  
    // console.log(result?.data);
>>>>>>> e30d6d9327ed5d0e57b75c2c2598e86c7235f2d9
    setProducts(result?.data)
    // console.log("getyting data",result.data);
    
}

  return (
<<<<<<< HEAD
    <div className="w-[95vw] m-auto flex gap-3 items-center flex-wrap ">
      {products.map((product) => (
        <ProductCard key={product?._id} product={product} />
=======
    <div className="w-[95vw] m-auto flex bg-black gap-3 items-center flex-wrap ">
      {products.map((product,index) => (
        <ProductCard key={index} product={product} />
>>>>>>> e30d6d9327ed5d0e57b75c2c2598e86c7235f2d9
      ))}
    </div>
  )
}

export default ItemsCollection