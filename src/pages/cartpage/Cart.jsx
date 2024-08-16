import React, { useEffect, useState } from 'react';
import { MdOutlineLocalOffer, MdDeleteForever } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { getData, deleteData ,patchData, postData } from '@/services/apiCall';
function Cart() {
    const [cartData, setCartData] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getCartData();
    }, []);

    const getCartData = async () => {
        try {
            const result = await getData("/products/cart_products");
            console.log("fetched Cartdata successful", result?.data?.products);
            setCartData(result?.data?.products || []);
        } catch (error) {
            console.error("Failed to fetch cart data", error);
        }
    };

    const deleteProduct = async (Id) => {
        try {
            const result = await deleteData("/products/delete_from_cart", { productId: Id });
            console.log("Delete product from Cart successful", result);
            if (result?.success) {
                getCartData();  
            }
        } catch (error) {
            console.error("Failed to delete product from cart", error);
        }
    };

    const minusProduct = async (Id) => {
        try {
            const result = await patchData("/products/minus_from_cart", { productId: Id });
            console.log("Minus product from Cart successful", result);
            if (result?.success) {
                getCartData();  
            }
        } catch (error) {
            console.error("Failed to decrease product quantity in cart", error);
        }
    };

    const AddCart = async (Id) => {
        try {
            const result = await postData("/products/add_to_cart", { productId: Id });
            // console.log("Add to Cart successful", result);
            if (result?.success) {
                getCartData();
            }
        } catch (error) {
            console.error("Failed to add to cart", error);
        }
    };

    const handleIncrement = (Id) => {
        setQuantity(prevQuantity => prevQuantity + 1);
        AddCart(Id); // Call the API to add the product to the cart
    };

    const handleDecrement = (Id) => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            minusProduct(Id); // Call the API to decrease the quantity in the cart
        } else {
            deleteProduct(Id); // If quantity is 1, delete the product from the cart
        }
    };

    return (
        <div className='w-[90vw] sm:w-[80vw] lg:w-[85vw] xl:w-[80vw] m-auto my-4 sm:my-12'>
            <h2 className='uppercase font-inter font-bold text-xl sm:text-3xl flex items-center gap-4 my-3'>
                Your cart 
                <FaCartArrowDown className='text-[#db4444]' />
            </h2>
            <div className='w-full flex justify-center lg:justify-between flex-wrap '>
                <div className='border-2 rounded-lg w-[35rem] h-auto lg:w-[60%] xl:w-[55%]'>
                    {cartData.length > 0 ? cartData.map((product, index) => (
                        <div key={index}  className=' flex justify-between border-b-2 p-2'>
                            <div className='flex gap-2'>
                                <img
                                    src={`data:${product?.images[0]?.contentType};base64,${product?.images[0]?.data}`}
                                    alt={product?.productName}
                                    className='bg-gray-900 h-[5rem] w-[5rem] rounded-lg'
                                />
                                
                                <div>
                                    <h5 className='text-[15px] font-DM font-semibold'>{product?.productName}</h5>
                                    <p className='text-[14px]'>Size: <span className='text-gray-500'>{product?.size}</span></p>
                                    <p className='text-[14px]'>Color: <span className='text-gray-500'>{product?.color}</span></p>
                                    <p className='font-Five text-sm'>₹ {product?.price}</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-end justify-between'>
                                <div>
                                    <MdDeleteForever 
                                        className='text-[#db4444] text-xl cursor-pointer' 
                                        onClick={() => deleteProduct(product._id)} 
                                    />
                                </div>
                                
                                <div className='w-20 h-6 rounded-xl flex justify-between bg-gray-400'>
                                    <button
                                        className='w-6 rounded-l-xl text-sm flex justify-center items-center'
                                        onClick={() => handleDecrement(product._id)}
                                    >
                                        {quantity > 1 ? <FaMinus /> : <MdDeleteForever className='text-[#db4444]' />}
                                    </button>
                                    <div className='w-8 bg-gray-200 text-center text-[16px] flex items-center justify-center'>
                                        {/* {product.productCount} */}
                                        {quantity}
                                    </div>
                                    <button
                                        className='w-6 rounded-r-xl text-sm flex justify-center items-center'
                                        onClick={() => handleIncrement(product._id)}
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className='p-4 text-center'>
                            <p className='font-semibold text-orange-600 text-xl'>Your cart is empty.</p>
                        </div>
                    )}
                </div>
                <div className='border-2 mt-6 lg:mt-0 rounded-lg p-2 h-auto lg:h-[17rem] xl:h-[18rem] w-[23rem] lg:w-[17rem] xl:w-[23rem]'>
                    <h4 className='font-bold flex items-center gap-2'>Coupons <MdOutlineLocalOffer  className='text-orange-600'/></h4>
                    <div className='flex justify-between my-2'>
                        <input 
                            type="text" 
                            placeholder='Coupon code' 
                            className='text-center placeholder:italic placeholder:text-[14px] border-[1px] w-[75%] h-[2.2rem] p-1 rounded-md border-slate-600 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-orange-500'
                        />
                        <button className='bg-orange-400 w-[4rem] p-1 h-[2.2rem] rounded-md hover:bg-orange-500 font-bold hover:text-white transition-colors text-sm'>
                            Apply
                        </button>
                    </div>
                    <hr />
                    <div className='my-2'>
                        <h5 className='font-DM text-[15px] font-bold'>Price Details</h5>
                        <p className='text-[14px] my-1'>Total MRP: <span className='float-right'>₹ 0</span></p>
                        <p className='text-[14px] my-1'>Discount on MRP: <span className='float-right'>₹ 8000</span></p>
                        <p className='text-[14px] my-1'>Coupon Discount: <span className='float-right text-orange-500 font-medium italic'>Apply Coupon</span></p>
                        <p className='text-[14px] my-1'>Convenience Fee: <span className='float-right text-orange-500 font-medium line-through'>₹ 100</span></p>
                        <hr />
                        <p className='text-[14px] my-1 font-bold'>Total Amount: <span className='float-right'>₹ 000</span></p>
                    </div>
                    <button className='bg-orange-400 w-[100%] mt-2 h-[2.5rem] rounded-md hover:bg-orange-500 font-bold hover:text-white transition-colors text-sm flex justify-center items-center'>
                        Checkout <FaArrowRight className='ml-4' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;





// import React, { useEffect, useState } from 'react';
// import { MdOutlineLocalOffer, MdDeleteForever } from "react-icons/md";
// import { FaPlus, FaMinus } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import { FaCartArrowDown } from "react-icons/fa";
// import { getData, deleteData ,patchData, postData } from '@/services/apiCall';
// import Quantity from '@/components/productDetails/counter/Quantity';

// function Cart() {
   
//     const [cartData, setCartData] = useState([])

//     useEffect(() => {
//         getCartData()
//     }, [])

//     const getCartData = async () => {
//         try {
//             const result = await getData("/products/cart_products");
//             console.log("fetched Cartdata successful", result?.data?.products);
//             setCartData(result?.data?.products || []);
//         } catch (error) {
//             console.error("Failed to add to cart", error);
//         }
//     };

//     const deleteProduct = async ( Id ) => {
//         try {
//             const result = await deleteData("/products/delete_from_cart", { productId:Id });
//             console.log("Delete product from Cart successful", result);
//             if (result?.success) {
//                 getCartData()  
//             }
//         } catch (error) {
//             console.error("Failed to Delete product from cart", error);
//         }
//     };
//     const minusProduct = async ( Id ) => {
//         try {
//             const result = await patchData("/products/minus_from_cart", { productId:Id });
//             console.log("Minus product from Cart successful", result);
//             if (result?.success) {
//                 getCartData()  
//             }
//         } catch (error) {
//             console.error("Failed to Minus product from cart", error);
//         }
//     };

//     //  Add product in tha cart
//     const AddCart = async (Id) => {
//         try {
//             const result = await postData("/products/add_to_cart", { productId: Id });
//             console.log("Add to Cart successful", result);
//         } catch (error) {
//             console.error("Failed to add to cart", error);
//             if (error.response) {
//                 console.error("Server responded with:", error.response.status, error.response.data);
//             } else {
//                 console.error("No response received or other error:", error.message);
//             }
//         }
//     };
 
//     // Quantity
//     const [quantity, setQuantity] = useState(1);
//     const handleIncrement = () => {setQuantity(prevQuantity => prevQuantity + 1);};
//     const handleDecrement = () => { if (quantity > 0) { setQuantity(prevQuantity => prevQuantity - 1);}};


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
//                                     <MdDeleteForever 
//                                         className='text-[#db4444] text-xl cursor-pointer' 
//                                         onClick={() => deleteProduct(product._id)} 
//                                     />
//                                 </div>
                                
//                                 <div className='w-20 h-6 rounded-xl flex justify-between bg-gray-400'>
//                                      {quantity >= 2 ? (
//                                          <button
//                                              className='w-6 rounded-l-xl text-sm flex justify-center items-center'
//                                              onClick={()=>{handleDecrement, minusProduct(product._id)}}
//                                          >
//                                              <FaMinus />
//                                          </button>
//                                      ) : (
//                                          <button
//                                              className='w-6 rounded-l-xl text-lg flex justify-center items-center text-[#db4444]'
//                                              onClick={()=>{handleDecrement, deleteProduct(product._id)}}
//                                          >
//                                              <MdDeleteForever />
//                                          </button>
//                                      )}
//                                      <div className='w-8 bg-gray-200 text-center text-[16px] flex items-center justify-center'>
//                                          {quantity}
//                                      </div>
//                                      <button
//                                          className='w-6 rounded-r-xl text-sm flex justify-center items-center'
//                                          onClick={()=>{handleIncrement, AddCart(product._id)}}
//                                      >
//                                          <FaPlus />
//                                      </button>
//                                  </div>
//                             </div>
//                         </div>
//                     )) : (
//                         <div className='p-4 text-center'>
//                             <p className='font-semibold text-orange-600 text-xl'>Your cart is empty.</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className='border-2 mt-6 lg:mt-0 rounded-lg p-2 h-auto lg:h-[17rem] xl:h-[18rem] w-[23rem] lg:w-[17rem] xl:w-[23rem]'>
//                     <h4 className='font-bold flex items-center gap-2'>Coupons <MdOutlineLocalOffer  className='text-orange-600'/></h4>
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
//                         <p className='text-[14px] my-1'>Total MRP: <span className='float-right'>₹ 0</span></p>
//                         <p className='text-[14px] my-1'>Discount on MRP: <span className='float-right'>₹ 8000</span></p>
//                         <p className='text-[14px] my-1'>Coupon Discount: <span className='float-right text-orange-500 font-medium italic'>Apply Coupon</span></p>
//                         <p className='text-[14px] my-1'>Convenience Fee: <span className='float-right text-orange-500 font-medium line-through'>₹ 100</span></p>
//                         <hr />
//                         <p className='text-[14px] my-1 font-bold'>Total Amount: <span className='float-right'>₹ 000</span></p>
//                     </div>
//                     <button className='bg-orange-400 w-[100%] mt-2 h-[2.5rem] rounded-md hover:bg-orange-500 font-bold hover:text-white transition-colors text-sm flex justify-center items-center'>
//                         Checkout <FaArrowRight className='ml-4' />
//                     </button>
//                     <Quantity/>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cart;


