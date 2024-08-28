import { getData, postData } from '@/services/apiCall';
import { useGetProduct } from '@/services/zustandStore';
import React, { useEffect, useState } from 'react';
// import { postData } from '@/services/api'; // Assuming postData is imported from a service file

function HistoryItem() {
  const Product = useGetProduct((state) => state.product);
  const [productsData, setProductsData] = useState([]);
 console.log("order product list",Product);
 
 
 useEffect(() => {
   if (Product?.productIDs) {
      console.log("order product ids list",Product.productIDs);

      const fetchProducts = async () => {
        try {
          const results = await Promise.all(
            Product.productIDs.map(async (productId) => {
              console.log("productIds", productId);
              
              return getData("/user/products/single", { productId });
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

  console.log("Fetched products data:", productsData);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#db4444]">My Ordered Items Details</h2>
      <div>
        {productsData.length > 0 ? (
          productsData.map((product, index) => (
            <div key={index} className="product-item">
              {/* Render your product details here */}
              <p>Product ID: {product.productId}</p>
              <p>Product Name: {product.name}</p>
              {/* Add more fields as necessary */}
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default HistoryItem;
