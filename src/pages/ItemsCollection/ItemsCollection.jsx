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
    // console.log("my data", data);
    setProducts(data?.data)
}

console.log("rohitngigns",products);

  return (
    <div className="w-[90vw] m-auto flex gap-3  flex-wrap items-center ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemsCollection