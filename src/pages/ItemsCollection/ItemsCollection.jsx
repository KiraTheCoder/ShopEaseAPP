import ProductCard from "@/components/product/Product"
import { useEffect, useState } from "react"
import {getData} from "@/services/apiCall"

function ItemsCollection() {
  const [products, setProducts]= useState([])

  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData = async () => {
    const result = await getData("/products");  
    // console.log(result?.data);
    setProducts(result?.data)
}

  return (
    <div className="w-[95vw] m-auto flex bg-black gap-3 items-center flex-wrap ">
      {products.map((product,index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default ItemsCollection