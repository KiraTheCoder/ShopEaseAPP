import ProductCard from '@/components/product/Product'
import { getData } from '@/services/apiCall';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function WishlistProducts() {
    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => {
        gettingWishlist();
    }, []);

    const gettingWishlist = async () => {
        try {
            const gettingProductWishListPromise = getData("/user/products/wishlist_products");
            toast.promise(
                gettingProductWishListPromise,
                {
                    pending: 'Getting products from wishlist...',
                    success: 'Products retrieved from wishlist successfully 👌',
                    error: 'Something went wrong.. 🤯',
                }
            );

            const gettingProduct = await gettingProductWishListPromise;
            if (gettingProduct?.success) {
                setWishlistProducts(gettingProduct?.data?.products || []);
            }
        } catch (error) {
            toast.error("No response received or other error: " + error?.message);
        }
    };

    return (
        <>
            <h1 className='italic text-4xl text-center font-light my-8'>My favourite</h1>
            <div className=' w-[100vw] flex flex-wrap gap-4 justify-center'>
                {wishlistProducts?.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </>
    );
}

export default WishlistProducts;
