import ProductCard from '@/components/product/Product';
import Shimmer from '@/components/shimmer/Shimmer';
import { useGetSearchProduct } from '@/services/zustandStore';

function SearchProducts() {
  const { products, setSearchProduct } = useGetSearchProduct();
  const searchedProducts = products?.products;

  if (!searchedProducts) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {/* <Shimmer /> */}
        <div className="w-14 h-14 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
     </div>
    );
  }

  if (searchedProducts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="w-[95vw] bg-gray-100 h-[100vh] overflow-scroll scrollbar-hide m-auto flex justify-center gap-3 items-center flex-wrap">
      {searchedProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default SearchProducts;











// import ProductCard from '@/components/product/Product'
// import Shimmer from '@/components/shimmer/Shimmer';
// import { useGetSearchProduct } from '@/services/zustandStore';
// import React from 'react'

// function SearchProducts() {
//   const { products, setSearchProduct } = useGetSearchProduct();
//   const searchedProducts = products?.products

//   if (searchedProducts?.length == 0)
//     return (<div className="flex items-center justify-center min-h-screen">
//       <div className="w-14 h-14 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
//     </div>)

//   return (
//     <div className="w-[95vw] bg-gray-100 h-[100vh] overflow-scroll scrollbar-hide m-auto flex justify-center  gap-3 items-center flex-wrap ">
//      { searchedProducts?.map((product, index) => (<ProductCard key={index} product={product} />)) }
//     </div>
//   )
// }

// export default SearchProducts