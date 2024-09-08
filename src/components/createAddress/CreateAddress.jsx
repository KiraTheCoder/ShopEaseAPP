// import { Button, TextInput } from "@/components/form";
// import { Formik, Form } from 'formik';
// import { billingAddress } from "@/services/lib/YupFormikValidator";
// import { toast } from 'react-toastify';
// import { patchData, postData } from "@/services/apiCall";
// import { useNavigate } from "react-router-dom";

// function CreateAddress({ AddId, navigatepage }) {
//     const navigate = useNavigate();

//     async function submitForm(values, actions) {
//         console.log("vani", navigatepage);

//         const isPhoneNumber = /^\d{10}$/.test(values.phoneNumber);

//         if (isPhoneNumber) {
//             values.phoneNumber = "+91" + values.phoneNumber;
//         }

//         if (AddId) {
//             values.addressId = AddId;
//         }

//         if (values.addressId === AddId) {
//             try {
//                 const updateAdd = await patchData("/user/address/", values);
//                 toast.promise(
//                     updateAdd, {
//                         pending: "User address is being updated...",
//                         success: "User address updated successfully!",
//                         error: "User address couldn't be updated."
//                     }
//                 );

//                 if (updateAdd.success) {
//                     if (navigatepage) {
//                         navigate("/billing");
//                     } else {
//                         navigate("/useraccount/address");
//                     }
//                     actions.resetForm();
//                 }
//             } catch (error) {
//                 toast.error(error?.response?.data?.message || "An error occurred.");
//             }
//         } else {
//             try {
//                 const saveAdd = await postData("/user/address/", values);
//                 toast.promise(
//                     saveAdd, {
//                         pending: "User address is being saved...",
//                         success: "User address saved successfully!",
//                         error: "User address couldn't be saved."
//                     }
//                 );

//                 if (saveAdd.success) {
//                     if (navigatepage) {
//                         navigate("/billing");
//                     } else {
//                         navigate("/useraccount/address");
//                     }
//                     actions.resetForm();
//                 }
//             } catch (error) {
//                 toast.error(error?.response?.data?.message || "An error occurred.");
//             }
//         }
//     }

//     return (
//         <div>
//             <h2 className="uppercase text-[#db4444] font-bold">Create Address</h2>
//             <div>
//                 <Formik
//                     initialValues={billingAddress.initialValues}
//                     enableReinitialize
//                     validationSchema={billingAddress.validationSchema}
//                     onSubmit={submitForm}
//                 >
//                     {() => (
//                         <Form>
//                             <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>
//                                 Enter your Address details below
//                             </p>
//                             <TextInput label="Name *" name="fullName" type="text" />
//                             <TextInput label="Street Name *" name="streetName" type="text" />
//                             <TextInput label="Apartment/Floor *" name="apartmentOrFloor" type="text" />
//                             <TextInput label="City/Town *" name="townOrCity" type="text" />
//                             <TextInput label="Mobile No. *" name="phoneNumber" type="text" />
//                             <Button type="submit" name="SAVE ADDRESS" style="w-[100%] my-0 mb-2" />
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//     );
// }

// export default CreateAddress;




import { Button, TextInput } from "@/components/form";
import { Formik, Form } from 'formik';
import { billingAddress } from "@/services/lib/YupFormikValidator";
import { toast } from 'react-toastify';
import { patchData, postData } from "@/services/apiCall";
import { useNavigate } from "react-router-dom";

function CreateAddress({ AddId,onEditComplete }) {
    const navigate = useNavigate()

    async function submitForm(values, actions) {
        const val = values.phoneNumber;
        const isPhoneNumber = /^\d{10}$/.test(val);

        if (isPhoneNumber) {
            values.phoneNumber = "+91" + val;
        }

        if (AddId) {
            values.addressId = AddId;
        }

        if (values.addressId = AddId) {
            try {
                const updateAdd = patchData("/user/address/", values);
                toast.promise(
                    updateAdd, {
                    pending: "User address is being update...",
                    success: "User address updated successfully!",
                    error: "User address couldn't be update."
                }
                );
                const updateAddress = await updateAdd;
                if (updateAddress.success) {
                    onEditComplete();
                    actions.resetForm();
                }
            }
            catch (error) {
                toast.error(error?.response?.data?.message || "An error occurred.");
            }
        }
        else {
            try {
                const saveAdd = postData("/user/address/", values);
                toast.promise(
                    saveAdd, {
                    pending: "User address is being saved...",
                    success: "User address saved successfully!",
                    error: "User address couldn't be saved."
                }
                );

                const result = await saveAdd;
                if (result.success) {
                    navigate("/useraccount/address")
                    actions.resetForm();
                }
            }
            catch (error) {
                toast.error(error?.response?.data?.message || "An error occurred.");
            }
        }
    }

    return (
        <div>
            <h2 className="uppercase text-[#db4444] font-bold">Create Address</h2>
            <div>

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
                            <Button type={"submit"} name={"SAVE ADDRESS"} style="w-[100%] mx-0 mb-2" />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CreateAddress