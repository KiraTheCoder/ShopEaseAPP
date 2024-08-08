import ProductCard from "@/components/product/Product"
import { useEffect, useState } from "react"

function ItemsCollection() {
  const [products, setProducts]= useState([])
  useEffect(()=>{
    fetchData()

  },[])
  
  const fetchData = async () => {
    const result = await fetch("http://localhost:8080/product/get-products")
    const data = await result.json();
    setProducts(data?.data)
}

console.log("rohitngigns",products);

  return (
    <div className="w-[95vw] m-auto flex bg-black gap-3 items-center flex-wrap ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemsCollection