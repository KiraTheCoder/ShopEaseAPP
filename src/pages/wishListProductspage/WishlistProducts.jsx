import ProductCard from '@/components/product/Product'
import { getData } from '@/services/apiCall';
import { useGetCount } from '@/services/zustandStore';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function WishlistProducts() {
    // const [wishlistProducts, setWishlistProducts] = useState([]);
    const { wishlistProducts, setWishlistProducts } = useGetCount((state) => state);
    useEffect(() => {
        gettingWishlist();
    }, []);


    const gettingWishlist = async () => {
        try {
            const gettingProduct = await getData("/user/products/wishlist_products");
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
                {wishlistProducts.length > 0 ? (wishlistProducts?.map((product, index) => (
                    <ProductCard product={product} key={index} />
                )))
                    :
                    <div className='mb-12'>
                        <h2 className='text-center'> <span className='text-[10rem] w-[10rem]'>💔</span></h2>
                        <h3 className='text-center'>No product in your wishlist</h3>
                    </div>
                }
            </div>
        </>
    );
}

export default WishlistProducts;
