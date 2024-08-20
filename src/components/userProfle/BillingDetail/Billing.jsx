import { Button, TextInput } from "@/components/form";
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify';
import { postData } from "@/services/apiCall";
import { billingAddress } from "@/services/lib/YupFormikValidator";

export default function Billing() {

  async function submitForm(values, actions) {
    // Adjust phoneNumber or email based on validation
    console.log("rohit", values);
    const val = values.phoneNumber;
    const isPhoneNumber = /^\d{10}$/.test(val);

    if (isPhoneNumber) {
      values.phoneNumber = "+91" + val;
    }

    console.log("Form submitted with values:", values);

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
      <div className="h-auto w-auto flex justify-around flex-wrap border">
        <div className="h-auto w-[30rem] bg-orange-300 py-9 px-[4rem]">
          <h1 className="font-semibold text-2xl py-2">Billing Details</h1>

          <Formik
            initialValues={billingAddress.initialValues}
            enableReinitialize
            validationSchema={billingAddress.validationSchema}
            onSubmit={submitForm}
          >
            {() => (
              <Form action="">
                <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>Enter your Address details below</p>
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

        <div className="h-auto w-[30rem] bg-pink-500 py-[5rem]">
          {/* Billing summary and payment options */}
          <div className="h-auto w-[20rem] flex justify-between my-8">
            <p className="text-sm font-normal">LCD Monitor</p>
            <p className="text-sm">$650</p>
          </div>

          <div className="h-auto w-[20rem] flex justify-between">
            <p className="text-sm font-normal">LCD Monitor</p>
            <p className="text-sm">$650</p>
          </div>

          <div className="h-auto w-[20rem] my-5">
            <div className="flex justify-between border-b border-gray-300 py-3">
              <p className="text-sm">Subtotal:</p>
              <p className="text-sm">S500</p>
            </div>

            <div className="flex justify-between border-b border-gray-300 py-3">
              <p className="text-sm">Shipping:</p>
              <p className="text-sm">Free</p>
            </div>

            <div className="flex justify-between pt-3">
              <p className="text-sm">Total:</p>
              <p className="text-sm">S500</p>
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
          <Button type={"submit"} name={"Final Submit"} style="w-[100%] my-0 mb-2" />
        </div>
      </div>
    </div>
  );
}








// import { Button, TextInput } from "@/components/form";
// import { Formik, Form } from "formik";
// import { toast } from 'react-toastify';
// import { postData } from "@/services/apiCall";
// import { BillingAddress } from "@/services/lib/YupFormikValidator";
// export default function Billing() {

//   async function submitForm(values, actions) {
//     const val = values.phoneNumber;
//     const isPhoneNumber = /^\d{10}$/.test(val);
//     const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

//     if (isPhoneNumber) {
//       values.phoneNumber = "+91" + val;
//       delete values.phoneNumber; // Remove original field if needed
//     } else if (isEmail) {
//       values.email = val;
//       delete values.phoneNumber; // Remove original field if needed
//     }

//     console.log("Form submitted with values:", values);
    
//     try {
//       const saveAdd = postData("/user/address", values);
//       toast.promise(
//           saveAdd, {
//           pending: "user Address saved..",
//           success: "user Address saved successfully..",
//           reject: "user Address can't saved.."
//         });

//         const response = await saveAdd;
//       } 
//       catch (error) {
//         toast(error?.response?.data?.message);
//       }
      
//       if (actions.resetForm) {
//         actions.resetForm();
//       }
//     }

// return (
//   <>
//     <div className="h-auto w-full">
//       <div className="h-auto w-auto flex justify-around border">
//         <div className="h-auto w-[30rem] py-9 px-[4rem]">

//           <div className="h-auto ">
//             <h1 className="font-semibold text-2xl py-2">Billing Details</h1>

//             <Formik
//               initialValues={BillingAddress.initialValues}
//               enableReinitialize
//               validationSchema={BillingAddress.validationSchema}
//               onSubmit={submitForm}
//             >
//               {({ handleSubmit }) => (
//                 <Form onSubmit={handleSubmit}>
//                   <h2 className='font-inter text-[1.2rem] text-center sm:text-start sm:text-[1.4rem] font-Five my-1 tracking-wider'>Sign Up to ShopEase</h2>
//                   <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>Enter your details below</p>
//                   <TextInput label="Name *" name="fullName" type="input" />
//                   <TextInput label="Street Name *" name="streetName" type="input" />
//                   <TextInput label="Aprtment/Floor *" name="aprtmentOrFloor" type="input" />
//                   <TextInput label="City/Town *" name="townCity" type="input" />
//                   <TextInput label="Mobile No. *" name="phoneNumberOrEmail" type="input" />
//                   <Button type="submit" name={"Submit Data"} style="w-[100%] my-0 mb-2" />
//                 </Form>
//               )}
//             </Formik>

//           </div>
//         </div>
//         <div className="h-auto w-[30rem] py-[5rem]">
//           <div className="h-auto w-[20rem]  flex justify-between my-8">

//             <div className="h-5">
//               <p className="text-sm font-normal ">LCD Monitor</p>
//             </div>
//             <p className="text-sm">$650</p>
//           </div>

//           <div className="h-auto w-[20rem]  flex justify-between">
//             <div className="h-5">
//               <p className="text-sm font-normal ">LCD Monitor</p>
//             </div>
//             <p className="text-sm">$650</p>
//           </div>

//           <div className="h-auto w-[20rem] my-5 ">
//             <div className="flex justify-between border-b border-gray-300 py-3">
//               <p className="text-sm">Subtotal:</p>
//               <p className="text-sm">S500</p>
//             </div>

//             <div className="flex justify-between border-b border-gray-300 py-3">
//               <p className="text-sm">Shipping:</p>
//               <p className="text-sm">Free</p>
//             </div>

//             <div className="flex justify-between pt-3">
//               <p className="text-sm">Total:</p>
//               <p className="text-sm">s500</p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-3 py-2">
//             <input
//               type="radio"
//               name="tick"
//               id="radio"
//               className="form-checkbox h-4 w-4  rounded"
//             />
//             <label htmlFor="checkbox" className="text-[13px] font-medium">
//               <p>Bank</p>
//             </label>
//           </div>

//           <div className="flex items-center space-x-3 py-2">
//             <input
//               type="radio"
//               name="tick"
//               id="radio"
//               className="form-checkbox h-4 w-4 rounded"
//             />
//             <label htmlFor="checkbox" className="text-[13px] font-medium">
//               <p>Cash on delivery</p>
//             </label>
//           </div>

//           <div className="py-3">
//             <input type="text" className="h-[5vh] w-[17vw] border border-black text-[10px] pl-5 rounded-sm " placeholder="Apply coupon" />
//             <button className="h-[5vh] w-[12vw] bg-red-500 text-white text-[10px] ml-2 rounded-sm">Apply Coupon</button>
//           </div>
//           <button className="h-[5vh] w-[12vw] bg-red-500 text-white text-[10px] rounded-sm">Apply Coupon</button>

//         </div>
//       </div>
//     </div>
//   </>
// )

// }

