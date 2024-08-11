import ProductCard from "@/components/product/Product"
import { useEffect, useState } from "react"
import { getData } from "@/services/apiCall"
function ItemsCollection() {
  const [products, setProducts]= useState([])
  useEffect(()=>{
    fetchData()

  },[])
  
  const fetchData = async () => {
    const result = await getData("/products/")
    // const data = await result.json();
    setProducts(result?.data)
    // console.log("getyting data",result.data);
    
}

  return (
    <div className="w-[95vw] m-auto flex gap-3 items-center flex-wrap ">
      {products.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  )
}

export default ItemsCollection