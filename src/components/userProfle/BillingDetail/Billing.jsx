import { Button, TextInput } from "@/components/form";
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { postData } from "@/services/apiCall";
import { billingAddress } from "@/services/lib/YupFormikValidator";
import { useGetCount } from "@/services/zustandStore/zustandStore";
import { Address, useFetchUserAddress } from "../myAccount/AddressBook/Address";

export default function Billing() {
  const { userAddress } = useFetchUserAddress();
  const { cartitems } = useGetCount((state) => state);
  const { cartData, payableAmount, totalPrice } = cartitems;

  async function submitForm(values, actions) {
    const val = values.phoneNumber;
    const isPhoneNumber = /^\d{10}$/.test(val);

    if (isPhoneNumber) {
      values.phoneNumber = "+91" + val;
    }

    try {
      const saveAdd = postData("/user/address/", values);
      toast.promise(
        saveAdd, {
          pending: "User address is being saved...",
          success: "User address saved successfully!",
          error: "User address couldn't be saved."
        }
      );
      
      await saveAdd;
      actions.resetForm();
    } 
    catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred.");
    }
  }

  return (
    <div className="h-auto w-full">
      <div className="py-12 h-auto w-auto flex justify-around flex-wrap border">
        {userAddress.length > 0 ? (
          <>
          <Address />
          {/* <li><Link></Link></li> */}
          </>      
          
        ) : (
          <div className="h-auto w-[30rem] px-[4rem]">
            <h1 className="font-semibold text-2xl py-2">Billing Details</h1>

            <Formik
              initialValues={billingAddress.initialValues}
              enableReinitialize
              validationSchema={billingAddress.validationSchema}
              onSubmit={submitForm}
            >
              {() => (
                <Form action="">
                  <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>
                    Enter your Address details below
                  </p>
                  <TextInput label="Name *" name={"fullName"} type="text" />
                  <TextInput label="Street Name *" name={"streetName"} type="text" />
                  <TextInput label="Apartment/Floor *" name={"aprtmentOrFloor"} type="text" />
                  <TextInput label="City/Town *" name={"townOrCity"} type="text" />
                  <TextInput label="Mobile No. *" name={"PhoneNumber"} type="text" />
                  <Button type={"submit"} name={"SAVE"} style="w-[100%] my-0 mb-2" />
                </Form>
              )}
            </Formik>
          </div>
        )}
        
        <div className="h-auto w-[30rem] ">
          {cartData.length > 0 ? cartData.map((product) => (
            <div key={product._id} className="h-auto w-[20rem] flex justify-between items-center my-4">
              <div className="flex gap-4 items-center">
                <img 
                  src={product?.images?.length > 0 
                    ? `data:${product.images[0].contentType};base64,${product.images[0].data}` 
                    : 'placeholder-image-url'} // Fallback image URL if no image is available
                  alt={product?.productName || 'Product Image'}
                  className='h-[4rem] w-[4rem] rounded-sm'
                />
                <p className="text-sm font-semibold">{product?.productName || 'Product Name'}</p>
                <p className="text-sm font-semibold">({product?.productCount || 'No of products'})</p>
              </div>
              <p className="text-sm">₹ {(product?.price)*(product.productCount) || 'Price not available'}</p>
            </div>
          )) : <p>No items in cart</p>}

          <div className="h-auto w-[20rem] my-5">
            <div className="flex justify-between border-b border-gray-300 py-3">
              <p className="text-sm font-semibold">Subtotal:</p>
              <p className="text-sm">₹ {totalPrice}</p>
            </div>

            <div className="flex justify-between border-b border-gray-300 py-3">
              <p className="text-sm font-semibold">Shipping:</p>
              <p className="text-sm">₹ {totalPrice > 500 ? "00" : "50"}</p>
            </div>

            <div className="flex justify-between pt-3">
              <p className="text-sm font-semibold">Total:</p>
              <p className="text-sm">₹ {payableAmount}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 py-2">
            <input type="radio" name="tick" id="radio1" className="form-checkbox h-4 w-4 rounded" />
            <label htmlFor="radio1" className="text-[13px] font-medium">Bank</label>
          </div>

          <div className="flex items-center space-x-3 py-2">
            <input type="radio" name="tick" id="radio2" className="form-checkbox h-4 w-4 rounded" />
            <label htmlFor="radio2" className="text-[13px] font-medium">Cash on delivery</label>
          </div>
          
          <Button type={"submit"} name={"Final Submit"} style="w-[60%] m-4" />
          <li className="my-4 list-none">
            <Link to={"/cart"} className="text-blue-700">↩ Back...</Link>
          </li>
        </div>
      </div>
    </div>
  );
}





// import { Button, TextInput } from "@/components/form";
// import { Formik, Form } from 'formik'
// import { Link } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { postData } from "@/services/apiCall";
// import { billingAddress } from "@/services/lib/YupFormikValidator";
// import { useGetCount } from "@/services/zustandStore/zustandStore";
// import { Address,useFetchUserAddress } from "../myAccount/AddressBook/Address";


// export default function Billing() {

//   const { userAddress } = useFetchUserAddress();
//   console.log("rohit useraddress",userAddress);
  

//   const { cartitems} = useGetCount((state) => state);
//  const {cartData, payableAmount, totalPrice}=cartitems
  
//   async function submitForm(values, actions) {
//     // Adjust phoneNumber or email based on validation
//     console.log("rohit", values);
//     const val = values.phoneNumber;
//     const isPhoneNumber = /^\d{10}$/.test(val);

//     if (isPhoneNumber) {
//       values.phoneNumber = "+91" + val;
//     }

//     console.log("Form submitted with values:", values);

//     try {
//       const saveAdd = postData("/user/address/", values);
//       toast.promise(
//         saveAdd, {
//           pending: "User address is being saved...",
//           success: "User address saved successfully!",
//           error: "User address couldn't be saved."
//         }
//       );

//       await saveAdd;
//       actions.resetForm();
//     } 
//     catch (error) {
//       toast.error(error?.response?.data?.message || "An error occurred.");
//     }
//   }

//   return (
//     <div className="h-auto w-full">
//       <div className="h-auto w-auto flex justify-around flex-wrap border">
//         {
//        userAddress.length >0 ? <Address/> 
//        :
//         <div className="h-auto w-[30rem]  py-9 px-[4rem]">
//           <h1 className="font-semibold text-2xl py-2">Billing Details</h1>

//           <Formik
//             initialValues={billingAddress.initialValues}
//             enableReinitialize
//             validationSchema={billingAddress.validationSchema}
//             onSubmit={submitForm}
//           >
//             {() => (
//               <Form action="">
//                 <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>Enter your Address details below</p>
//                 <TextInput label="Name *" name={"fullName"} type="text" />
//                 <TextInput label="Street Name *" name={"streetName"} type="text" />
//                 <TextInput label="Apartment/Floor *" name={"aprtmentOrFloor"} type="text" />
//                 <TextInput label="City/Town *" name={"townOrCity"} type="text" />
//                 <TextInput label="Mobile No. *" name={"PhoneNumber"} type="text" />
//                 <Button type={"submit"} name={"SAVE"} style="w-[100%] my-0 mb-2" />
//               </Form>
//             )}
//           </Formik>
//         </div>
//         }
//         <div className="h-auto w-[30rem]  py-[5rem]">
//           {/* Billing summary and payment options */}
//           {cartData.length > 0 ? cartData.map((product) => (
//             <div key={product._id} className="h-auto w-[20rem] flex justify-between items-center my-4">
//               <div className="flex gap-4 items-center">
//                   <img 
//                     src={product?.images?.length > 0 
//                       ? `data:${product.images[0].contentType};base64,${product.images[0].data}` 
//                       : 'placeholder-image-url'} // Fallback image URL if no image is available
//                       alt={product?.productName || 'Product Image'}
//                       className=' h-[4rem] w-[4rem] rounded-sm'
//                       />
//                   <p className="text-sm font-semibold">{product?.productName || 'Product Name'}</p>
//                   <p className="text-sm font-semibold">({product?.productCount || 'No of products'})</p>
//               </div>
//               <p className="text-sm">₹ {(product?.price)*(product.productCount) || 'Price not available'}</p>
//             </div>
//              )) : <p>No items in cart</p>}

//           <div className="h-auto w-[20rem] my-5">
//             <div className="flex justify-between border-b border-gray-300 py-3">
//               <p className="text-sm font-semibold">Subtotal:</p>
//               <p className="text-sm">₹ {totalPrice}</p>
//             </div>

//             <div className="flex justify-between border-b border-gray-300 py-3">
//               <p className="text-sm font-semibold">Shipping:</p>
//               <p className="text-sm">₹ {totalPrice>500 ? "00" : "50"}</p>
//             </div>

//             <div className="flex justify-between pt-3">
//               <p className="text-sm font-semibold">Total:</p>
//               <p className="text-sm">₹ {payableAmount}</p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-3 py-2">
//             <input type="radio" name="tick" id="radio1" className="form-checkbox h-4 w-4 rounded" />
//             <label htmlFor="radio1" className="text-[13px] font-medium">Bank</label>
//           </div>

//           <div className="flex items-center space-x-3 py-2">
//             <input type="radio" name="tick" id="radio2" className="form-checkbox h-4 w-4 rounded" />
//             <label htmlFor="radio2" className="text-[13px] font-medium">Cash on delivery</label>
//           </div>
          
//           <Button type={"submit"} name={"Final Submit"} style="w-[60%]  m-4" />
//           <li className="my-4 list-none">
//            <Link to={"/cart"} className="text-blue-700 ">↩ Back...</Link>            
//           </li>
//         </div>
//       </div>
//     </div>
//   );
// }
