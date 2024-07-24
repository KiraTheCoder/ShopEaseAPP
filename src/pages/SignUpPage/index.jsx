import React from 'react'

import LoginImg from "@/assets/images/footerImages/loginImg.jpeg"
import Nameinput from '../LoginPage/loginsection/Nameinput'
import Emailinput from '../LoginPage/loginsection/Emailinput'
import Passwordinput from '../LoginPage/loginsection/passwordinput'
import Con_passwordinput from '../LoginPage/loginsection/Con_passwordinput'
import { FcGoogle } from "react-icons/fc";
function Signindex() {
    return (
        <div className='w-[100vw] md:w-[100vw] md:justify-around lg:w-[90vw] my-[3rem] h-auto  flex flex-wrap items-center justify-center sm:justify-center lg:justify-between '>
            <div className='w-[90vw] sm:w-[80vw] md:w-[45vw] lg:w-[50vw] xl:w-[55vw] h-auto  '>
                <img src={LoginImg} alt="" />
            </div>
            <div className='w-[15rem] mt-6 md:mt-0 sm:w-[20rem] md:w-[17rem] lg:w-[17rem] xl:w-[20rem]  h-auto '>
                <form action="">
                    <h2 className='font-inter text-[1.2rem] text-center sm:text-start  sm:text-[1.4rem] font-Five my-1 tracking-wider'>Sign Up to Exclusive</h2>
                    <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>Enter your details below</p>
                    <Nameinput />
                    <Emailinput />
                    <Passwordinput />
                    <button className='h-[2rem] sm:h-[2.4rem] md:h-[2.5rem] bg-[#db4444] w-[100%] text-[#fafafa] rounded-md my-2'>Create Account</button>
                    <button className='h-[2rem] sm:h-[2.4rem] md:h-[2.5rem] border-2  w-[100%] rounded-md my-2 flex justify-center gap-4 items-center'><span><FcGoogle className='text-[30px]'/></span> <span>Sign up with Google</span></button>
                    <li className='list-none flex items-center gap-6'><span className='text-[16px]'>Already have account :</span> <a className='no-underline hover:underline text-[#db4444] text-[13px]' href="#">Login A/c</a></li>


                </form>
            </div>
        </div>
    )
}

export default Signindex;
