import React, { useState } from 'react';
import LoginImg from "@/assets/images/footerImages/loginImg.jpeg";
import { FcGoogle } from "react-icons/fc";
import { TextInput, Button } from '@/components/form';
import { signUpForm, otpForm } from "@/services/lib/YupFormikValidator";
import { Formik, Form } from 'formik';
import { postData } from "@/services/apiCall";

function SignupPage() {
    const [otpID, setOtpID] = useState(null);

    async function submitForm(values, actions) {
        // console.log("rohit valueaaaa",values);
        const val = values.phoneNumberOrEmail;
        const isPhoneNumber = /^\d{10}$/.test(val);
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

        if (isPhoneNumber) {
            values.phoneNumber = "+91" + val;
        } else if (isEmail) {
            values.email = val;
        }

        delete values.phoneNumberOrEmail;
        // console.log("all value",values);

        try {
            if (otpID) {
                values.otpID = otpID;
                const response = await postData("/signup", values);
                alert("Sign up successful 🥰");
                // Reset the form after successful signup
                actions.resetForm();
            } else {
                const otpData = await postData("/send_signup_otp", values);
                // console.log("ygfkuayfg",otpData.data.otpID);
                setOtpID(otpData.data.otpID);
                alert("OTP sent successfully to your phone number or email.");
                // console.log("rohit kumar otp id", otpID);
            }
        } catch (error) {
            alert("Error message:", error);
        }
        actions.resetForm();
        // console.log("otpid is print  rohit",otpID);
    }
    
    return (
        <div className='w-[100vw] md:w-[100vw] md:justify-around lg:w-[90vw] my-[3rem] h-auto flex flex-wrap items-center justify-center sm:justify-center lg:justify-between'>
            <div className='w-[90vw] sm:w-[80vw] md:w-[45vw] lg:w-[50vw] xl:w-[55vw] h-auto'>
                <img className="rounded-[0.25rem]" src={LoginImg} alt="Login" />
            </div>
            <div className='w-[15rem] mt-6 md:mt-0 sm:w-[20rem] md:w-[17rem] lg:w-[17rem] xl:w-[20rem] h-auto'>
                {otpID ? (
                    <Formik
                        initialValues={{ ...signUpForm.initialVaues, otpID }}
                        validationSchema={signUpForm.validationSchema}
                        onSubmit={submitForm}
                    >
                        {(Values) => (
                            <Form>
                                <h2 className='font-inter text-[1.2rem] text-center sm:text-start sm:text-[1.4rem] font-Five my-1 tracking-wider'>Sign Up to Exclusive</h2>
                                <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>Enter your details below</p>
                                <TextInput label="Email or Phone Number" name="phoneNumberOrEmail" type="input" />
                                <TextInput label="Username" name="name" type="input" />
                                <TextInput label="Password" name="password" type="password" />
                                <TextInput label="Confirm Password" name="confirm_password" type="password" />
                                <TextInput label="OTP" name="otp" type="text" />
                                <Button type="submit" name="Create Account" style="w-[100%] my-0 mb-2" />
                                <button className='h-[2rem] sm:h-[2.4rem] md:h-[2.5rem] border-2 w-[100%] rounded-md my-2 flex justify-center gap-4 items-center'>
                                    <FcGoogle className='text-[30px]' />
                                    <span>Sign up with Google</span>
                                </button>
                                <div className='list-none flex items-center gap-6'>
                                    <span className='text-[16px]'>Already have an account:</span>
                                    <a className='no-underline hover:underline text-[#db4444] text-[13px]' href="#">Login A/c</a>
                                </div>
                            </Form>
                        )}
                    </Formik>
                ) : (
                    <Formik
                        initialValues={otpForm.initialVaues}
                        validationSchema={otpForm.validationSchema}
                        onSubmit={submitForm}
                    >
                        {(Values) => (
                            <Form>
                                <h2 className='font-inter text-[1.2rem] text-center sm:text-start sm:text-[1.4rem] font-Five my-1 tracking-wider'>Sign Up to Exclusive</h2>
                                <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>Enter your details below</p>
                                <TextInput label="Email or Phone Number" name="phoneNumberOrEmail" type="input" />
                                <Button type="submit" name="Send OTP" style="w-[5.5rem] my-0 mb-2" />
                            </Form>
                        )}
                    </Formik>
                )}
            </div>
        </div>
    );
}

export default SignupPage;
