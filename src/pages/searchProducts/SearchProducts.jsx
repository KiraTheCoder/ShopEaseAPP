import ProductCard from '@/components/product/Product'
import Shimmer from '@/components/shimmer/Shimmer';
import { useGetSearchProduct } from '@/services/zustandStore';
import React from 'react'

function SearchProducts() {
  const { products, setSearchProduct } = useGetSearchProduct();
  const searchedProducts = products?.products

  if (searchedProducts?.length == 0)
    return <Shimmer />

  return (
    <div className="w-[95vw] bg-gray-100 h-[100vh] overflow-scroll scrollbar-hide m-auto flex justify-center  gap-3 items-center flex-wrap ">
      {searchedProducts ? searchedProducts?.map((product, index) => (
        <ProductCard key={index} product={product} />
      )) : <div className="flex items-center justify-center min-h-screen">
      <div className="w-14 h-14 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
    </div>
      }
    </div>
  )
}

export default SearchProducts