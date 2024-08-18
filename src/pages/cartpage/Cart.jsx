
import { useEffect, useState } from 'react';
import { MdOutlineLocalOffer, MdDeleteForever } from "react-icons/md";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { getData, deleteData, patchData, postData } from '@/services/apiCall';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useAuthStore, useGetCount } from "@/services/zustandStore/zustandStore";

function Cart() {
    const setCount = useGetCount((state) => state.setCount);
    const isLoggedin = useAuthStore((state) => state.token);
    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        if (!isLoggedin) {
            navigate("/login");
        } else {
            getCartData();
        }
    }, [isLoggedin, navigate]);

    useEffect(() => {
        const totalQuantity = cartData.reduce((total, product) => total + product.productCount, 0);
        setCount(totalQuantity);
    }, [cartData, setCount]);

    const getCartData = async () => {
        try {
            const result = await getData("/user/products/cart_products");
            console.log("Fetched cart data successfully", result?.data?.products);
            setCartData(result?.data?.products || []);
        } catch (error) {
            console.error("Failed to fetch cart data", error);
        }
    };

    const deleteProduct = async (Id) => {
        try {
            const result = await deleteData("/user/products/delete_from_cart", { productId: Id });
            console.log("Deleted product from cart successfully", result);
            if (result?.success) {
                getCartData();
            }
        } catch (error) {
            console.error("Failed to delete product from cart", error);
        }
    };

    const minusProduct = async (Id) => {
        try {
            const result = await patchData("/user/products/minus_from_cart", { productId: Id });
            console.log("Decreased product quantity in cart successfully", result);
            if (result?.success) {
                getCartData();
            }
        } catch (error) {
            console.error("Failed to decrease product quantity in cart", error);
        }
    };

    const AddCart = async (Id, quantity) => {
        try {
            const addCart = postData("/user/products/add_to_cart", { productId: Id, productQuantity: quantity });
            toast.promise(
                addCart,
                {
                    pending: {
                        render: 'Product adding...',
                        autoClose: 500,
                    },
                    success: {
                        render: 'Product Added Successfully 👌',
                        autoClose: 500,
                    },
                    error: {
                        render: 'Something went wrong.. 🤯',
                        autoClose: 500,
                    },
                }
            );


            const result = await addCart;
            if (result?.success) {
                getCartData();
            }
        } catch (error) {
            toast.warn("Failed to add to cart" + error);
        }
    };

    const handleIncrement = (Id, count) => {
        AddCart(Id, count);
    };

    const handleDecrement = (Id, productCount) => {
        if (productCount > 1) {
            minusProduct(Id);
        } else {
            deleteProduct(Id);
        }
    };

    const totalPrice = cartData.reduce((total, product) => total + product.price * product.productCount, 0);
    const totalMRP = cartData.reduce((total, product) => {
        const productMRP = Math.ceil(product.price / (1 - product.discount / 100));
        return total + productMRP * product.productCount;
    }, 0);
    const discountAmount = totalMRP - totalPrice;
    const tBill = totalPrice >= 1 && totalPrice < 500 ? totalMRP + 50 : totalMRP;
    const payableAmount = tBill - discountAmount;

    return (
        <div className='w-[90vw] sm:w-[80vw] lg:w-[85vw] xl:w-[80vw] m-auto my-4

Kiran Clg 2, [18-08-2024 20:03]
sm:my-12'>
            <h2 className='uppercase font-inter font-bold text-xl sm:text-3xl flex items-center gap-4 my-3'>
                Your cart
                <FaCartArrowDown className='text-[#db4444]' />
            </h2>
            <div className='w-full flex justify-center lg:justify-between flex-wrap '>
                <div className='border-2 rounded-lg w-[35rem] h-auto lg:w-[60%] xl:w-[55%]'>
                    {cartData.length > 0 ? cartData.map((product) => (
                        <div key={product._id} className='flex justify-between border-b-2 p-2'>
                            <div className='flex gap-2'>
                                <img
                                    src={product?.images && product.images.length > 0 ?
                                        `data:${product.images[0].contentType};base64,${product.images[0].data}` :
                                        null}
                                    alt={product?.productName || 'Product Image'}
                                    className='bg-gray-900 h-[5rem] w-[5rem] rounded-lg'
                                />
                                <div>
                                    <h5 className='text-[15px] font-DM font-semibold'>{product?.productName}</h5>
                                    <p className='text-[14px]'>Size: <span className='text-gray-500'>{product?.size}</span></p>
                                    <p className='text-[14px]'>Color: <span className='text-gray-500'>{product?.color}</span></p>
                                    <div className='flex gap-4'>
                                        <p className='font-Five text-sm'>₹ {product?.price}</p>
                                        <p className='italic text-[12px] line-through text-red-400'>MRP: {Math.ceil(product?.price / (1 - product?.discount / 100))}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-end justify-between'>
                                <MdDeleteForever
                                    className='text-[#db4444] text-xl cursor-pointer'
                                    onClick={() => deleteProduct(product._id)}
                                />
                                <div className='w-20 h-6 rounded-xl flex justify-between bg-gray-400'>
                                    <button
                                        className='w-6 rounded-l-xl text-sm flex justify-center items-center'
                                        onClick={() => handleDecrement(product._id, product.productCount)}
                                    >
                                        {product.productCount > 1 ? <FaMinus /> : <MdDeleteForever className='text-[#db4444]' />}
                                    </button>
                                    <div className='w-8 bg-gray-200 text-center text-[16px] flex items-center justify-center'>
                                        {product.productCount}
                                    </div>
                                    <button
                                        className='w-6 rounded-r-xl text-sm flex justify-center items-center'
                                        onClick={() => handleIncrement(product._id, 1)}
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
                    <h4 className='font-bold flex items-center gap-2'>Coupons <MdOutlineLocalOffer className='text-orange-600' /></h4>
                    <div className='flex justify-between my-2'>
                        <input type="text"
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
                        <p className='text-[14px] my-1'>Total MRP: <span className='float-right'>₹ {totalMRP}</span></p>
                        <p className='text-[14px] my-1'>Discount on MRP: <span className='float-right'>₹ {discountAmount}</span></p>
                        <p className='text-[14px] my-1'>Coupon Discount: <span className='float-right text-orange-500 font-medium italic'>Apply Coupon</span></p>
                        <p className='text-[14px] my-1'>Convenience Fee: <span className='float-right text-orange-500 font-medium '>₹ {totalPrice >= 1 && totalPrice < 500 ? 50 : "00"}</span></p>
                        <hr />
                        <p className='text-[14px] my-1 font-bold'>Total Amount: <span className='float-right'>₹ {payableAmount}</span></p>
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











// import { useEffect, useState } from 'react';
// import { MdOutlineLocalOffer, MdDeleteForever } from "react-icons/md";
// import { FaPlus, FaMinus } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import { FaCartArrowDown } from "react-icons/fa";
// import { getData, deleteData, patchData, postData } from '@/services/apiCall';
// import { toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";
// import { useAuthStore } from "@/services/zustandStore/zustandStore";
// import { useGetCount } from '@/services/zustandStore/zustandStore';

// function Cart() {
//   const  setCount = useGetCount((state=>state.setCount))
//     const isLoggedin = useAuthStore(s => s.token);

//     const navigate = useNavigate();
//     const [cartData, setCartData] = useState([]);
//     // const [totalBill, setTotalBill] = useState(0);
//     const [pQuantity, setPQuantity]=useState(10)
//     useEffect(() => {
//         if (!isLoggedin) {
//             navigate("/login");
//         }
//         getCartData();
//     }, []);

//     const getCartData = async () => {
//         try {
//             const result = await getData("/user/products/cart_products");
//             console.log("Fetched cart data successfully", result?.data?.products);
//             setCartData(result?.data?.products  []);

//         } catch (error) {
//             console.error("Failed to fetch cart data", error);
//         }
//     };

//     const deleteProduct = async (Id) => {
//         try {
//             const result = await deleteData("user/products/delete_from_cart", { productId: Id });
//             console.log("Deleted product from cart successfully", result);
//             if (result?.success) {
//                 getCartData();
//                 setPQuantity('')
//             }
//         } catch (error) {
//             console.error("Failed to delete product from cart", error);
//         }
//     };
//     const minusProduct = async (Id) => {
//         try {
//             const result = await patchData("/user/products/minus_from_cart", { productId: Id });
//             console.log("Decreased product quantity in cart successfully", result);
//             if (result?.success) {
//                 getCartData();
//                 setPQuantity(pQuantity-1)
//             }
//         } catch (error) {
//             console.error("Failed to decrease product quantity in cart", error);
//         }
//     };

//     const AddCart = async (Id, quantity) => {
//         try {
//             const addCart = postData("/user/products/add_to_cart", { productId: Id, productQuantity: quantity });
//             toast.promise(
//                 addCart,
//                 {
//                     pending: 'Product adding...',
//                     success: 'Product Added Successfully 👌',
//                     error: 'Something went wrong.. 🤯',
//                 }
//             );

//             const result = await addCart;
//             if (result?.success) {
//                  getCartData();
//                  setPQuantity(pQuantity + 1)
//                  }

//         } catch (error) {
//             toast.warn("Failed to add to cart" + error);
//         }
//     };

//     const handleIncrement = (Id, count) => {
//         AddCart(Id, count);
//     };

//     const handleDecrement = (Id, productCount) => {
//         if (productCount > 1) {
//             minusProduct(Id);
//         } else {
//             deleteProduct(Id);
//         }
//     };

// // secount in zustand
// setCount(pQuantity)

//     const totalPrice = cartData.reduce((total, product) => total + product.price * product.productCount, 0);
//     const totalMRP = cartData.reduce((total, product) => {
//         const productMRP = Math.ceil(product.price / (1 - product.discount / 100));
//         return total + productMRP * product.productCount;
//     }, 0);
//     const discountAmount = totalMRP - totalPrice
//     const tBill = totalPrice >= 1 && totalPrice < 500 ? totalMRP + 50 : totalMRP;
//     const payableAmount = tBill - discountAmount

//     return (
//         <div className='w-[90vw] sm:w-[80vw] lg:w-[85vw] xl:w-[80vw] m-auto my-4 sm:my-12'>
//             <h2 className='uppercase font-inter font-bold text-xl sm:text-3xl flex items-center gap-4 my-3'>
//                 Your cart
//                 <FaCartArrowDown className='text-[#db4444]' />
//             </h2>
//             <div className='w-full flex justify-center lg:justify-between flex-wrap '>
//                 <div className='border-2 rounded-lg w-[35rem] h-auto lg:w-[60%] xl:w-[55%]'>
//                     {cartData.length > 0 ? cartData.map((product) => (
//                         <div key={product._id} className='flex justify-between border-b-2 p-2'>
//                             <div className='flex gap-2'>
//                                 <img
//                                     src={data:${product?.images[0]?.contentType};base64,${product?.images[0]?.data}}
//                                     alt={product?.productName}
//                                     className='bg-gray-900 h-[5rem] w-[5rem] rounded-lg'
//                                 />
//                                 <div>
//                                     <h5 className='text-[15px] font-DM font-semibold'>{product?.productName}</h5>
//                                     <p className='text-[14px]'>Size: <span className='text-gray-500'>{product?.size}</span></p>
//                                     <p className='text-[14px]'>Color: <span className='text-gray-500'>{product?.color}</span></p>
//                                     <div className='flex gap-4'>
//                                     <p className='font-Five text-sm'>₹ {product?.price}</p>
//                                     <p className='italic text-[12px] line-through text-red-400'>MRP: {Math.ceil(product?.price / (1 - product?.discount / 100))}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='flex flex-col items-end justify-between'>
//                                 <MdDeleteForever
//                                     className='text-[#db4444] text-xl cursor-pointer'
//                                     onClick={() => deleteProduct(product._id)}
//                                 />
//                                 <div className='w-20 h-6 rounded-xl flex justify-between bg-gray-400'>
//                                     <button
//                                         className='w-6 rounded-l-xl text-sm flex justify-center items-center'
//                                         onClick={() => handleDecrement(product._id, product.productCount)}
//                                     >
//                                         {product.productCount > 1 ? <FaMinus /> : <MdDeleteForever className='text-[#db4444]' />}
//                                     </button>
//                                     <div className='w-8 bg-gray-200 text-center text-[16px] flex items-center justify-center'>
//                                         {product.productCount}

//                                         {/* {quantity} */}

//                                     </div>
//                                     <button
//                                         className='w-6 rounded-r-xl text-sm flex justify-center items-center'
//                                         onClick={() => handleIncrement(product._id, 1)}
//                                     >
//                                         <FaPlus />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     )) : (
//                         <div className='p-4 text-center'>
//                             <p className='font-semibold text-orange-600 text-xl'>Your cart is empty.</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className='border-2 mt-6 lg:mt-0 rounded-lg p-2 h-auto lg:h-[17rem] xl:h-[18rem] w-[23rem] lg:w-[17rem] xl:w-[23rem]'>
//                     <h4 className='font-bold flex items-center gap-2'>Coupons <MdOutlineLocalOffer className='text-orange-600' /></h4>
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
//                         <p className='text-[14px] my-1'>Total MRP: <span className='float-right'>₹ {totalMRP}</span></p>
//                         <p className='text-[14px] my-1'>Discount on MRP: <span className='float-right'>₹ {discountAmount}</span></p>
//                         <p className='text-[14px] my-1'>Coupon Discount: <span className='float-right text-orange-500 font-medium italic'>Apply Coupon</span></p>
//                         <p className='text-[14px] my-1'>Convenience Fee: <span className='float-right text-orange-500 font-medium '>₹ {totalPrice >= 1 && totalPrice < 500 ? 50 : "00"}</span></p>
//                         <hr />
//                         <p className='text-[14px] my-1 font-bold'>Total Amount: <span className='float-right'>₹ {payableAmount}</span></p>
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