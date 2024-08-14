// import React, { useEffect, useState } from 'react';
// import { MdOutlineLocalOffer, MdDeleteForever } from "react-icons/md";
// import { FaArrowRight } from "react-icons/fa6";
// import { FaCartArrowDown } from "react-icons/fa";
// import Counter from '@/components/productDetails/counter/Counter';
// import { getData, postData } from '@/services/apiCall';
// import { useCartStore } from '@/services/zustandStore';

// function Cart() {
//     // const cartData = useCartStore((state) => state.cart);
//     // const setCartData = useCartStore((state) => state.setCartData); // New action to set cart data
//     // const removeProduct = useCartStore((state) => state.removeProduct);
//     // const calculateTotal = useCartStore((state) => state.calculateTotal);
// const [cartData, setCartData] =useState([])
//     useEffect(() => {
//         getCartData(); // Fetch cart data on component mount
//     }, []);

//     const getCartData = async () => {
//         try {
//             const result = await getData("/products/cart_products");
//             // setCartData(result?.data?.products || []); // Set fetched data to Zustand state
//             console.log("cart data fetched",result?.data?.products || []);
//             setCartData(result?.data?.products || [])
//         } catch (error) {
//             console.error("Failed to fetch cart data", error);
//         }
//     };

//     // const deleteProduct = async (id) => {
//     //     try {
//     //         const result = await postData("/products/remove_from_cart", { productId: id });
//     //         if (result?.success) {
//     //             removeProduct(id); // Remove product from Zustand state if successful
//     //         }
//     //     } catch (error) {
//     //         console.error("Failed to delete product from cart", error);
//     //     }
//     // };

//     return (
//         <div className='w-[90vw] sm:w-[80vw] lg:w-[85vw] xl:w-[80vw] m-auto my-4 sm:my-12'>
//             <h2 className='uppercase font-inter font-bold text-xl sm:text-3xl flex items-center gap-4 my-3'>
//                 Your cart 
//                 <FaCartArrowDown className='text-[#db4444]' />
//             </h2>
//             <div className='w-full flex justify-center lg:justify-between flex-wrap '>
//                 <div className='border-2 rounded-lg w-[35rem] h-auto lg:w-[60%] xl:w-[55%]'>
//                     {cartData.length > 0 ? cartData.map((product, index) => (
//                         <div key={index} className='m-2 flex justify-between border-b-2'>
//                             <div className='flex gap-2'>
//                                 <img
//                                     src={`data:${product?.images[0]?.contentType};base64,${product?.images[0]?.data}`}
//                                     alt={product?.productName}
//                                     className='bg-gray-900 h-[5rem] w-[5rem] rounded-lg'
//                                 />
                                
//                                 <div>
//                                     <h5 className='text-[15px] font-DM font-semibold'>{product?.productName}</h5>
//                                     <p className='text-[14px]'>Size: <span className='text-gray-500'>{product?.size}</span></p>
//                                     <p className='text-[14px]'>Color: <span className='text-gray-500'>{product?.color}</span></p>
//                                     <p className='font-Five text-sm'>₹ {product?.price}</p>
//                                 </div>
//                             </div>
//                             <div className='flex flex-col items-end justify-between'>
//                                 <div>
//                                     {/* <MdDeleteForever 
//                                         className='text-[#db4444] text-xl cursor-pointer' 
//                                         onClick={() => deleteProduct(product._id)} 
//                                     /> */}
//                                 </div>
//                                 <div><Counter /></div>
//                             </div>
//                         </div>
//                     )) : (
//                         <div className='p-4 text-center'>
//                             <p>Your cart is empty.</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className='border-2 mt-6 lg:mt-0 rounded-lg p-2 h-auto lg:h-[19rem] xl:h-[21rem] w-[23rem] lg:w-[17rem] xl:w-[23rem]'>
//                     <h4 className='font-bold'>Coupons <MdOutlineLocalOffer /></h4>
//                     <div className='flex justify-between my-2'>
//                         <input 
//                             type="text" 
//                             placeholder='Coupon code' 
//                             className='text-center placeholder:italic placeholder:text-[14px] border-[1px] w-[75%] h-[2.2rem] p-1 rounded-md border-slate-600 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-orange-500'
//                         />
//                         <button className='bg-orange-400 w-[4rem] p-1 h-[2.2rem] rounded-md hover:bg-orange-500 font-bold hover:text-white transition-colors text-sm'>
//                             Apply
//                         </button>
//                     </div>
//                     <hr />
//                     <div className='my-2'>
//                         <h5 className='font-DM text-[15px] font-bold'>Price Details</h5>
//                         {/* <p className='text-[14px] my-1'>Total MRP: <span className='float-right'>₹ {calculateTotal()}</span></p> */}
//                         <p className='text-[14px] my-1'>Discount on MRP: <span className='float-right'>₹ 8000</span></p>
//                         <p className='text-[14px] my-1'>Coupon Discount: <span className='float-right text-orange-500 font-medium italic'>Apply Coupon</span></p>
//                         <p className='text-[14px] my-1'>Convenience Fee: <span className='float-right text-orange-500 font-medium line-through'>₹ 100</span></p>
//                         <hr />
//                         {/* <p className='text-[14px] my-1 font-bold'>Total Amount: <span className='float-right'>₹ {calculateTotal()}</span></p> */}
//                     </div>
//                     <button className='bg-orange-400 w-[100%] mt-2 h-[2.5rem] rounded-md hover:bg-orange-500 font-bold hover:text-white transition-colors text-sm flex justify-center items-center'>
//                         Checkout <FaArrowRight className='ml-4' />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cart;



import React, { useEffect, useState } from 'react'
import { MdOutlineLocalOffer, MdDeleteForever } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import Counter from '@/components/productDetails/counter/Counter';
import { getData, postData } from '@/services/apiCall';

function Cart() {
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        getCartData()
    }, [])

    const getCartData = async () => {
        try {
            const result = await getData("/products/cart_products");
            console.log("fetched Cartdata successful", result?.data?.products);
            setCartData(result?.data?.products || []);
        } catch (error) {
            console.error("Failed to add to cart", error);
        }
    };

    const deleteProduct = async ( Id ) => {
        try {
            const result = await postData("/products/delete_from_cart", { productId:Id });
            console.log("Delete product from Cart successful", result);
            // console.log("deleted");
            if (result?.success) {
                getCartData()  
            }
        } catch (error) {
            console.error("Failed to Delete product from cart", error);
        }
        
    };
 
 
    return (
        <div className='w-[90vw] sm:w-[80vw] lg:w-[85vw] xl:w-[80vw] m-auto my-4 sm:my-12'>
            <h2 className='uppercase font-inter font-bold text-xl sm:text-3xl flex items-center gap-4 my-3'>Your cart <FaCartArrowDown className='text-[#db4444]' /></h2>
            <div className='w-full flex justify-center lg:justify-between flex-wrap '>
                <div className='border-2 rounded-lg w-[35rem] h-auto lg:w-[60%] xl:w-[55%]'>
                    {cartData? cartData?.map((product, index) => (
                        <div key={index} className='m-2 flex justify-between border-b-2'>
                            <div className=' flex gap-2'>
                                <img
                                    src={`data:${product?.images[0]?.contentType};base64,${product?.images[0]?.data}`}
                                    alt={product?.productName}
                                    className='bg-gray-900 h-[5rem] w-[5rem] rounded-lg'
                                />
                                <div>
                                    <h5 className='text-[15px] font-DM font-semibold'>{product?.productName}</h5>
                                    <p className='text-[14px]'>Size: <span className='text-gray-500'>{product?.size}</span></p>
                                    <p className='text-[14px]'>Color: <span className='text-gray-500'>{product?.color}</span></p>
                                    <p className='font-Five text-sm'>${product?.price}</p>
                                </div>
                            </div>
                            <div className=' flex flex-col items-end justify-between'>
                                <div><MdDeleteForever className='text-[#db4444] text-xl'  onClick={() => deleteProduct(product._id)}/></div>
                                <div><Counter /></div>
                            </div>
                        </div>
                    )):null}
                </div>
                <div className='border-2 mt-6 lg:mt-0 rounded-lg p-2 h-auto lg:h-[19rem] xl:h-[21rem] w-[23rem] lg:w-[17rem] xl:w-[23rem]'>
                    <h4 className='font-bold '>Order Summary</h4>
                    <div className='w-full border-b-2 '>
                        <div className='my-3 flex justify-between text-[0.7rem] sm:text-[1rem] lg:text-[15px] xl:text-[1rem]'><span className='text-gray-400'>Subtotal</span> <span className='font-semibold'>$565</span></div>
                        <div className='my-3 flex justify-between text-[0.7rem] sm:text-[1rem] lg:text-[15px] xl:text-[1rem]'><span className='text-gray-400'>Discount (-20%) </span> <span className='text-[#db4444] font-semibold'>-$113</span></div>
                        <div className='my-3 flex justify-between text-[0.7rem] sm:text-[1rem] lg:text-[15px] xl:text-[1rem]'><span className='text-gray-400'>Delivery Fee</span> <span className='font-semibold'>$15</span></div>
                    </div>
                    <div className='my-3 flex justify-between'><span className='text-gray-900'>Total</span> <span className='font-semibold sm:text-xl lg:text-[1rem] xl:text-xl'>$467</span></div>
                    <div className='my-3 flex justify-between items-center'>
                        <div className="flex justify-evenly items-center bg-slate-200 h-8 sm:h-10 lg:h-8 xl:h-10 w-[70%] rounded-full">
                            <MdOutlineLocalOffer className="text-md sm:text-[1.5rem] lg:text-[20px] xl:text-[1.5rem] ml-1 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Apply coupne code..."
                                className="h-[100%] w-[85%] px-1 rounded-full bg-transparent text-[13px] sm:text-sm lg:text-[15px] xl:text-sm outline-none"
                            />
                        </div>
                        <button className="h-8 sm:h-10 lg:h-8 xl:h-10 w-[27%] sm:w-[6rem] lg:w-[4rem] xl:w-[6rem] bg-black rounded-full text-white text-[13px] sm:text-sm lg:text-[15px] xl:text-sm">Apply</button>
                    </div>
                    <button className="my-4 h-10 sm:h-12 lg:h-11 xl:h-12 w-full bg-black rounded-full text-white flex justify-center items-center gap-4 text-sm">Go to Checkout <FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Cart