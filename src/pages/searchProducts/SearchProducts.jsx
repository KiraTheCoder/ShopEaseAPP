import ProductCard from '@/components/product/Product'
import { useGetSearchProduct } from '@/services/zustandStore';
import React from 'react'

function SearchProducts() {

//   const searchedproducts = useGetSearchProduct((state) => state.products);
    const { products, setSearchProduct } = useGetSearchProduct();
  
  console.log("search page seach product", products?.products);
  const searchedProducts=products?.products
  return (
    <div className="w-[95vw] m-auto flex  gap-3 items-center flex-wrap ">
        {searchedProducts? searchedProducts?.map((product, index) => (
          <ProductCard key={index} product={product} />
        )) : <p className='text-2xl text-red-600 font-serif text-center'>Not Found Please Search another items</p>}
      </div>
  )
}

export default SearchProducts