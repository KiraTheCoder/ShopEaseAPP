import LoginImg from "@/assets/images/footerImages/loginImg.jpeg"
import { FcGoogle } from "react-icons/fc";
import { TextInput,Button } from '@/components/form';
import {signUpForm} from  "@/services/lib/YupFormikValidator"
import { Formik, Form } from 'formik';
import { postData } from "@/services/apiCall";


function SignupPage() {
    async function submitForm(values) {
        console.log(values);
        const val = values.phoneNumberOrEmail
        const isPhoneNumber = /^\d{10}$/.test(val);
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

        if (isPhoneNumber) {
            values.phoneNumber = val
        }
        else if (isEmail) {
            values.email = val
        }

        delete values.phoneNumberOrEmail
        // console.log("final value",values);
        await postData("/signup", values)

    }


    return (
        <div className='w-[100vw] md:w-[100vw] md:justify-around lg:w-[90vw] my-[3rem] h-auto  flex flex-wrap items-center justify-center sm:justify-center lg:justify-between '>
            <div className='w-[90vw] sm:w-[80vw] md:w-[45vw] lg:w-[50vw] xl:w-[55vw] h-auto  '>
                <img src={LoginImg} alt="" />
            </div>
            <div className='w-[15rem] mt-6 md:mt-0 sm:w-[20rem] md:w-[17rem] lg:w-[17rem] xl:w-[20rem]  h-auto '>
                <Formik
                    initialValues={signUpForm.initialVaues}
                    validationSchema={signUpForm.validationSchema}
                    onSubmit={submitForm}
                >
                    {(Values) => (
                        <Form action="">
                            <h2 className='font-inter text-[1.2rem] text-center sm:text-start  sm:text-[1.4rem] font-Five my-1 tracking-wider'>Sign Up to Exclusive</h2>
                            <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>Enter your details below</p>
                            <TextInput label={"UserName"}  name={"name"} type={"input"}/>
                            <TextInput label={"Email or Phone Number"} name={"phoneNumberOrEmail"} type={"input"} />
                            <TextInput label={"Password"} name={"password"} type={"password"} />
                            <TextInput label={"confirm Password"} name={"confirm_password"} type={"password"} />
                            {/* <button type="submit" className='h-[2rem] sm:h-[2.4rem] md:h-[2.5rem] bg-[#db4444] w-[100%] text-[#fafafa] rounded-md my-2'>Create Account</button> */}
                            <Button name={"Create Account"} type={"submit"} textColor={"text-[#fafafa]"} bgColor={"bg-[#db4444]"} height={"h-[2rem] sm:h-[2.4rem] md:h-[2.5rem]"} width={"w-[100%]"} margin={"my-2"} />
                            {/* <Button height={"h-[2rem] sm:h-[2.4rem] md:h-[2.5rem]"} width={"w-[100%]"} bgColor={"bg-blue-500"} margin={"my-2"} border={"border-2"}><span className="text-white">Sign up with Google</span></Button> */}
                            <button className='h-[2rem] sm:h-[2.4rem] md:h-[2.5rem] border-2  w-[100%] rounded-md my-2 flex justify-center gap-4 items-center'><span><FcGoogle className='text-[30px]' /></span> <span>Sign up with Google</span></button>
                            <li className='list-none flex items-center gap-6'><span className='text-[16px]'>Already have account :</span> <a className='no-underline hover:underline text-[#db4444] text-[13px]' href="#">Login A/c</a></li>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignupPage;
