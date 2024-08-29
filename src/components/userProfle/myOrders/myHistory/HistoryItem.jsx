import ProductCard from '@/components/product/Product';
import { postData } from '@/services/apiCall';
import { useGetProduct } from '@/services/zustandStore';
import React, { useEffect, useState } from 'react';

function HistoryItem() {
  const Product = useGetProduct((state) => state.product);
  const [productsData, setProductsData] = useState([]);

  console.log("product datatatata", Product);
  
  useEffect(() => {
    if (Product?.productIDs) {
      const fetchProducts = async () => {
        try {
          const results = await Promise.all(
            Product.productIDs.map(async (productId) => {
              return postData("/user/products/single", { productId });
            })
          );
          setProductsData(results);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      };

      fetchProducts();
    }
  }, [Product?.productIDs]);


  return (
    <div className=' '>
      <div className='flex gap-4 items-center flex-wrap'>
      <h2 className="text-2xl font-bold mb-4 text-orange-500 ">My Orders history</h2>
      <p className='font-semibold'>Date: <span className='font-normal'> {Product?.date}</span></p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>

        {productsData.length > 0 ?
          productsData?.map((product, index) => (
            <ProductCard key={index} product={product.data} />
          )) : <p>No items found</p>}
      </div>
    </div>
  );
}

export default HistoryItem;
