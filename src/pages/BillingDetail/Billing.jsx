import { Button, TextInput } from "@/components/form";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { postData, deleteData, getData } from "@/services/apiCall";
import { billingAddress, orderForm } from "@/services/lib/YupFormikValidator";
import { useBuyProduct, useGetCount } from "@/services/zustandStore/zustandStore";
import { Address, useFetchUserAddress } from "../../components/userProfle/myAccount/AddressBook/Address";
import congratulationsMsg from "@/assets/images/footerImages/thankYou.png";
import { useEffect, useState } from "react";
import { BillingAddress } from "@/components/userProfle/billingAddress/BillingAddress";
import CreateBillingAdd from "@/components/userProfle/createBillingAdd/CreateBillingAdd";
// import MyPayment from "../paymentpage/MyPayment";

export default function Billing() {
  // const navigate=useNavigate()
  const { userAddress, refetch } = useFetchUserAddress();
  const { cartitems } = useGetCount((state) => state);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [congratulations, setCongratulations] = useState(false);
  const { buyingProduct, setBuyProduct } = useBuyProduct();
  const { cartData, payableAmount } = cartitems;
  // cart related code start
  const setCount = useGetCount((state) => state.setCount);
  const [cart, setCart] = useState([]);
  // payment option start
  // const [paymentCompleted, setPaymentCompleted] = useState(false);




  useEffect(()=>{
    refetch();
  },[]);
  
    useEffect(() => {
        const totalQuantity = cart.reduce((total, product) => total + product.productCount,0);
        setCount(totalQuantity);
    }, [cart, setCount]);
// cart related code end

  // Calculate total amount
  let buyTotalAmt = buyingProduct?.quantity * buyingProduct?.price;
  if (buyTotalAmt > 0 && buyTotalAmt < 500) {
    buyTotalAmt += 50; // Add shipping fee if the total is less than 500
  }

  const totalPrice = buyTotalAmt || payableAmount;

  // Extract product IDs from cart or buyingProduct
  const productIDs = buyingProduct
    ? [buyingProduct._id]
    : cartData?.map((product) => product._id);

    // ordered called
  async function orderSubmit(values, actions) {
    if (!selectedAddress) {
      toast.error("Select your address first");
      return;
    }

    // payment option start
    // if (values.paymentMethod === 'Bank' && !paymentCompleted) {
    //   toast.error("Please complete the payment before placing the order.");
    //   return;
    // }
  
    const addressCopy = { ...selectedAddress };
    delete addressCopy._id; 
    values.totalAmount = `${totalPrice}`;
    values.productIDs = productIDs;
    values.addresses = addressCopy;
    
    try {
      const OrderDone = postData("/user/orders/", values);
      toast.promise(
        OrderDone,
        {
          pending: "Your order is being processed...",
          success: "Your order was placed successfully!",
          error: "Your order could not be placed.",
        }
      );

      const result = await OrderDone;
      if (result.success) {
        setCongratulations(true);
        actions.resetForm();
        setBuyProduct(null);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred.");
    } finally {
      actions.setSubmitting(false);
    }

    // cart data empty code
    const deleteProduct = async () => {

      const getCartData = async () => {
        try {
            const result = await getData("/user/products/cart_products");
            setCart(result?.data?.products || []);
        } catch (error) {
            console.error("Failed to fetch cart data", error);
        }
    };
    
      
      if (!buyingProduct) {
        const fetchProducts = async () => {
          try {
            const results = await Promise.all(
              productIDs.map(async (productId) => {
                return deleteData("/user/products/delete_from_cart", { productId: productId  });
              })
            );
            results.map((result)=>{
              if (result.success) {
                      toast.success("Your cart is Empty Now.");
                      getCartData()
                    }
            })
          } catch (error) {
            console.error('Error something went wrong :', error);
          }
        };
        fetchProducts();
     };
    
    }
deleteProduct();
  }


  return congratulations ? (
    <div className="h-auto w-full flex justify-center items-center">
      <div className="w-auto px-4 flex justify-center items-center flex-col">
        <img src={congratulationsMsg} alt="Thank you" className="h-auto w-[50vw]" />
      </div>
    </div>
  ) : (
    <div className="h-auto w-full">
      <div className="py-12 h-auto w-auto flex justify-around flex-wrap border">
        {userAddress.length > 0 ? (
          <BillingAddress selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} />
        ) : (
          <CreateBillingAdd />
        )}

        <div className="h-auto w-[30rem]">
          {buyingProduct ? (
            <div className="h-auto w-[20rem] flex justify-between items-center my-4">
              <div className="flex gap-4 items-center">
                <img
                  src={
                    buyingProduct?.images?.length > 0 && buyingProduct.images[0]?.data
                      ? `data:${buyingProduct.images[0].contentType};base64,${buyingProduct.images[0].data}`
                      : 'placeholder-image-url' // Fallback image URL if no image is available
                  }
                  alt={buyingProduct?.productName || 'Product Image'}
                  className="h-[4rem] w-[4rem] rounded-sm"
                />
                <p className="text-sm font-semibold">{buyingProduct?.productName || 'Product Name'}</p>
                <p className="text-sm font-semibold">({buyingProduct?.quantity || 'No of products'})</p>
              </div>
              <p className="text-sm">₹ {(buyingProduct?.price) * (buyingProduct.quantity) || 'Price not available'}</p>
            </div>
          ) : (
            <>
              {cartData?.length > 0 ? cartData?.map((product) => (
                <div key={product._id} className="h-auto w-[20rem] flex justify-between items-center my-4">
                  <div className="flex gap-4 items-center">
                    <img
                      src={
                        product?.images?.length > 0 && product.images[0]?.data
                          ? `data:${product.images[0].contentType};base64,${product.images[0].data}`
                          : 'placeholder-image-url' // Fallback image URL if no image is available
                      }
                      alt={product?.productName || 'Product Image'}
                      className="h-[4rem] w-[4rem] rounded-sm"
                    />
                    <p className="text-sm font-semibold">{product?.productName || 'Product Name'}</p>
                    <p className="text-sm font-semibold">({product?.productCount || 'No of products'})</p>
                  </div>
                  <p className="text-sm">₹ {(product?.price) * (product.productCount) || 'Price not available'}</p>
                 {/* <button 
                    className="text-red-500 hover:text-red-700 ml-4"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Remove
                  </button>*/}
                </div>
              )) : <p>No items in cart</p>}
            </>
          )}

          <div className="h-auto w-[20rem] my-5">
            <div className="flex justify-between border-b border-gray-300 py-3">
              <p className="text-sm font-semibold">Subtotal:</p>
              <p className="text-sm">₹ {buyTotalAmt || payableAmount}</p>
            </div>

            <div className="flex justify-between border-b border-gray-300 py-3">
              <p className="text-sm font-semibold">Shipping:</p>
              <p className="text-sm">₹ {totalPrice > 500 ? "00" : "50"}</p>
            </div>

            <div className="flex justify-between pt-3">
              <p className="text-sm font-semibold">Total:</p>
              <p className="text-sm">₹ {totalPrice}</p>
            </div>
          </div>

        <Formik
          initialValues={orderForm.initialValues}
          enableReinitialize
          validationSchema={orderForm.validationSchema}
          onSubmit={orderSubmit}
         >
          {({ values , errors, touched }) => (
            <Form>
              <div className="flex items-center space-x-3 py-2">
                <Field type="radio" name="paymentMethod" id="radio1" value="Bank" className="form-checkbox h-4 w-4 rounded" />
                <label htmlFor="radio1" className="text-[13px] font-medium"  >Bank</label>
              </div>
              <div>
                {/* Conditionally render MyPayment component */}
                {/* {values.paymentMethod === 'Bank' && (
                  <MyPayment
                    amount={totalPrice}
                    onPaymentSuccess={() => setPaymentCompleted(true)}
                  />
                )} */}
              </div>
              <div className="flex items-center space-x-3 py-2">
                <Field type="radio" name="paymentMethod" id="radio2" value="Cash on delivery" className="form-checkbox h-4 w-4 rounded" />
                <label htmlFor="radio2" className="text-[13px] font-medium">Cash on delivery</label>
              </div>
              <ErrorMessage name="paymentMethod" component="div" className="text-red-500 text-xs mt-1" />
              <Button type={"submit"} name={"PLACE ORDER"} style="w-[60%] m-4 bg-orange-400 hover:bg-orange-500"  />
            </Form>
          )}
        </Formik>

          <Link to="/" className="w-full inline-block">
            <Button name="CONTINUE SHOPPING" style="w-[60%] m-4 bg-orange-400 hover:bg-orange-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}










// import { Button, TextInput } from "@/components/form";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Link } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { postData } from "@/services/apiCall";
// import { billingAddress, orderForm } from "@/services/lib/YupFormikValidator";
// import { useBuyProduct, useGetCount } from "@/services/zustandStore/zustandStore";
// import { Address, useFetchUserAddress } from "../../components/userProfle/myAccount/AddressBook/Address";
// import { useState } from "react";
// import congratulationsMsg from "@/assets/images/footerImages/thankYou.png";

// export default function Billing() {
//   const { userAddress, refetch } = useFetchUserAddress();
//   const { cartitems } = useGetCount((state) => state);
//   let { cartData, payableAmount, totalPrice } = cartitems;
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [congratulations, setCongratulations] = useState(false);
//   const { buyingProduct, setBuyProduct } = useBuyProduct();

//   let buyTotalAmt = buyingProduct?.quantity * buyingProduct?.price;
//   let buyTotalAmtShow = buyingProduct?.quantity * buyingProduct?.price;
//   if (buyTotalAmt > 0 && buyTotalAmt < 500) {
//     buyTotalAmt = buyTotalAmt + 50;
//   }
//   totalPrice = buyTotalAmt ? buyTotalAmt : totalPrice;

//   console.log("cartdata",cartData);
  
//   const productIDs = buyingProduct     ?[ buyingProduct._id]
//     : (cartData ? cartData.map((value) => value._id) : []);

//   console.log("cart data is ", productIDs);


//   async function submitForm(values, actions) {
//     const val = values.phoneNumber;
//     const isPhoneNumber = /^\d{10}$/.test(val);

//     if (isPhoneNumber) {
//       values.phoneNumber = "+91" + val;
//     }

//     try {
//       const saveAdd = postData("/user/address/", values);
//       toast.promise(
//         saveAdd, {
//         pending: "User address is being saved...",
//         success: "User address saved successfully!",
//         error: "User address couldn't be saved."
//       }
//       );

//       const result = await saveAdd;
//       if (result.success) {
//         refetch();
//         actions.resetForm();
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "An error occurred.");
//     } finally {
//       actions.setSubmitting(false);
//     }
//   }

//   async function orderSubmit(values, actions) {

//     console.log("for data", values);

//     if (!selectedAddress) {
//       toast.error("Select your address first");
//       return;
//     }

//     const addressCopy = { ...selectedAddress };
//     delete addressCopy._id;

//     values.totalAmount = `${buyTotalAmt ? buyTotalAmt : payableAmount}`;
//     values.productIDs = productIDs
//     values.addresses = addressCopy;

//     try {
//       console.log("before submit order" , values);
      
//       const OrderDone = postData("/user/orders/", values);
//       toast.promise(
//         OrderDone, {
//         pending: "Your order is being processed...",
//         success: "Your order was placed successfully!",
//         error: "Your order could not be placed."
//       }
//       );

//       const result = await OrderDone;
//       if (result.success) {
//         setCongratulations(true);
//         actions.resetForm();
//         setBuyProduct(" ")

//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "An error occurred.");
//     } finally {
//       actions.setSubmitting(false);
//     }
//   }

//   // delete cart all product 

//   const deleteProduct = async (Id) => {
//     try {
//       const deleteItem = await deleteData("/user/products/delete_from_cart", { productId: Id });
//       console.log("after deleded product from cart", deleteItem);
//   } catch (error) {
//     toast.warn("Failed to delete product from cart" + error);
//   }
//    };

// return congratulations ? (
//   <div className="h-auto w-full flex justify-center items-center">
//     <div className="w-auto px-4 flex justify-center items-center flex-col">
//       <img src={congratulationsMsg} alt="Thank you" className="h-auto w-[50vw]" />
//     </div>
//   </div>
// ) : (
//   <div className="h-auto w-full">
//     <div className="py-12 h-auto w-auto flex justify-around flex-wrap border">
//       {userAddress.length > 0 ? (
//         <>
//           <Address selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} />
//         </>
//       ) : (
//         <div className="h-auto w-[30rem] px-[4rem]">
//           <h1 className="font-semibold text-2xl py-2">Billing Details</h1>
//           <Formik
//             initialValues={billingAddress.initialValues}
//             enableReinitialize
//             validationSchema={billingAddress.validationSchema}
//             onSubmit={submitForm}
//           >
//             {() => (
//               <Form>
//                 <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>
//                   Enter your Address details below
//                 </p>
//                 <TextInput label="Name *" name="fullName" type="text" />
//                 <TextInput label="Street Name *" name="streetName" type="text" />
//                 <TextInput label="Apartment/Floor *" name="aprtmentOrFloor" type="text" />
//                 <TextInput label="City/Town *" name="townOrCity" type="text" />
//                 <TextInput label="Mobile No. *" name="phoneNumber" type="text" />
//                 <Button type="submit" name="SAVE" style="w-[100%] my-0 mb-2" />
//               </Form>
//             )}
//           </Formik>
//         </div>
//       )}

//       <div className="h-auto w-[30rem]">
//         {buyingProduct ? (
//           <div className="h-auto w-[20rem] flex justify-between items-center my-4">
//             <div className="flex gap-4 items-center">
//               <img
//                 src={
//                   buyingProduct?.images?.length > 0 && buyingProduct.images[0]?.data
//                     ? `data:${buyingProduct.images[0].contentType};base64,${buyingProduct.images[0].data}`
//                     : 'placeholder-image-url' // Fallback image URL if no image is available
//                 }
//                 alt={buyingProduct?.productName || 'Product Image'}
//                 className="h-[4rem] w-[4rem] rounded-sm"
//               />
//               <p className="text-sm font-semibold">{buyingProduct?.productName || 'Product Name'}</p>
//               <p className="text-sm font-semibold">({buyingProduct?.quantity || 'No of products'})</p>
//             </div>
//             <p className="text-sm">₹ {(buyingProduct?.price) * (buyingProduct.quantity) || 'Price not available'}</p>
//           </div>
//         ) : (
//           <>
//             {cartData.length > 0 ? cartData?.map((product) => (
//               <div key={product._id} className="h-auto w-[20rem] flex justify-between items-center my-4">
//                 <div className="flex gap-4 items-center">
//                   {/* <img
//                       src={product?.images?.length > 0
//                         ? `data:${product.images[0].contentType};base64,${product.images[0].data}`
//                         : 'placeholder-image-url'} // Fallback image URL if no image is available
//                       alt={product?.productName || 'Product Image'}
//                       className="h-[4rem] w-[4rem] rounded-sm"
//                     /> */}
//                   <img
//                     src={
//                       product?.images?.length > 0 && product.images[0]?.data
//                         ? `data:${product.images[0].contentType};base64,${product.images[0].data}`
//                         : 'placeholder-image-url' // Fallback image URL if no image is available
//                     }
//                     alt={product?.productName || 'Product Image'}
//                     className="h-[4rem] w-[4rem] rounded-sm"
//                   />
//                   <p className="text-sm font-semibold">{product?.productName || 'Product Name'}</p>
//                   <p className="text-sm font-semibold">({product?.productCount || 'No of products'})</p>
//                 </div>
//                 <p className="text-sm">₹ {(product?.price) * (product.productCount) || 'Price not available'}</p>
//               </div>
//             )) : <p>No items in cart</p>}
//           </>
//         )}

//         <div className="h-auto w-[20rem] my-5">
//           <div className="flex justify-between border-b border-gray-300 py-3">
//             <p className="text-sm font-semibold">Subtotal:</p>
//             <p className="text-sm">₹ {buyTotalAmtShow ? buyTotalAmtShow : totalPrice}</p>
//           </div>

//           <div className="flex justify-between border-b border-gray-300 py-3">
//             <p className="text-sm font-semibold">Shipping:</p>
//             <p className="text-sm"> ₹ {totalPrice > 500 ? "00" : "50"}</p>
//           </div>

//           <div className="flex justify-between pt-3">
//             <p className="text-sm font-semibold">Total:</p>
//             <p className="text-sm">₹ {buyTotalAmt ? buyTotalAmt : payableAmount}</p>
//           </div>
//         </div>

//         <Formik
//           initialValues={orderForm.initialValues}
//           enableReinitialize
//           validationSchema={orderForm.validationSchema}
//           onSubmit={orderSubmit}
//         >
//           {({ errors, touched }) => (
//             <Form>
//               <div className="flex items-center space-x-3 py-2">
//                 <Field type="radio" name="paymentMethod" id="radio1" value="Bank" className="form-checkbox h-4 w-4 rounded" />
//                 <label htmlFor="radio1" className="text-[13px] font-medium">Bank</label>
//               </div>
//               <div className="flex items-center space-x-3 py-2">
//                 <Field type="radio" name="paymentMethod" id="radio2" value="Cash on delivery" className="form-checkbox h-4 w-4 rounded" />
//                 <label htmlFor="radio2" className="text-[13px] font-medium">Cash on delivery</label>
//               </div>
//               <ErrorMessage name="paymentMethod" component="div" className="text-red-500 text-xs mt-1" />
//               <Button type={"submit"} name={"ORDER"} style="w-[60%] m-4" />
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   </div>
// );
// }






