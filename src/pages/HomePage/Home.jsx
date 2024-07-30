import React from "react";
import { VscStarFull } from "react-icons/vsc";

import couple from "@/assets/images/footerImages/couple.png";
 export default function Home(){
  
    return(
        <>
        <div className="h-auto w-[90vw] m-auto">
            <div className="h-auto  w-full mb-0 flex ">

             <div className=" pt-[3rem] flex-cols justify-center w-[48vw] ">
                <h1 className="text-black text-7xl font-extrabold font-inter">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="py-5 text-gray-500">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>

                 <button className="h-[3rem] w-[12rem] bg-black rounded-3xl text-white">Shop Now</button>

                 <div className="h-auto w-auto py-7 flex">

                 <div className="h-[7rem] w-auto px-3.5 ">
                    <h1 className="text-[40px] font-semibold">200+</h1>
                    <p className="text-gray-500">International Brands</p>
                 </div>

                 <div className="h-[7rem] w-auto px-3.5 ">
                    <h1 className="text-[40px] font-semibold">2,000+</h1>
                    <p className="text-gray-500">High-Quality Products</p>
                 </div>

                 <div className="h-[7rem] w-auto px-3.5">
                    <h1 className="text-[40px] font-semibold">30,000+</h1>
                    <p className="text-gray-500">Happy costomers</p>
                 </div>
                 </div>
             </div>

             <div className=" w-[48vw] ">
                <img className="" src={couple} alt="" />
                {/* <VscStarFull /> */}
             </div>

            </div>
        </div>   
        </>
    )
}