import React from "react";
import { VscStarFull } from "react-icons/vsc";

import couple from "@/assets/images/footerImages/couple.png";
 export default function Home(){
  
    return(
        <>
        <div className="h-auto w-auto">
        <div className="h-[80vh] w-[100vw]">
            <div className="h-auto w-auto border pt-[5rem] px-[3rem] flex relative">

             <div className="h-auto w-[37rem] border ">
                <h1 className="text-black text-7xl font-extrabold font-inter">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="py-5 text-gray-500">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>

                 <button className="h-[3rem] w-[12rem] bg-black rounded-3xl text-white">Shop Now</button>

                 <div className="h-auto w-auto py-7 flex">

                 <div className="h-[7rem] w-auto px-3.5 border">
                    <h1 className="text-[40px] font-semibold">200+</h1>
                    <p className="text-gray-500">International Brands</p>
                 </div>

                 <div className="h-[7rem] w-auto px-3.5 border">
                    <h1 className="text-[40px] font-semibold">2,000+</h1>
                    <p className="text-gray-500">High-Quality Products</p>
                 </div>

                 <div className="h-[7rem] w-auto px-3.5 border">
                    <h1 className="text-[40px] font-semibold">30,000+</h1>
                    <p className="text-gray-500">Happy costomers</p>
                 </div>
                 </div>

                 {/* <div>
                 <img src={couple} alt="" />
                 </div> */}

             </div>

             <div className="h-auto w-[40rem] border">
                <img className="ml-2" src={couple} alt="" />
                <VscStarFull />
             </div>

            </div>
           
        </div>
        </div>   
        </>
    )
}