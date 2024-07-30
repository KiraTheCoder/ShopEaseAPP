import React from "react";
import { VscStarFull } from "react-icons/vsc";

import couple from "@/assets/images/footerImages/couple.png";
export default function Home() {

   return (
      <>

         <div className="w-[90vw] mt-10 mb-0 m-auto">
            <div className="h-auto w-auto  flex justify-between">
               <div className="h-auto w-[45vw] pt-16 ">
                  <h1 className="text-black text-6xl font-extrabold font-inter">
                     FIND CLOTHES THAT MATCHES YOUR STYLE
                  </h1>
                  <p className="py-5 text-gray-500 text-sm">
                     Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                  </p>

                  <button className="h-[3rem] w-[12rem] bg-black rounded-3xl text-white">Shop Now</button>

                  <div className="h-auto w-auto py-7 flex">

                     <div className="h-[5rem] w-auto px-3.5 border-r">
                        <h1 className="text-[40px] font-semibold">200+</h1>
                        <p className="text-gray-500 text-sm">International Brands</p>
                     </div>

                     <div className="h-[5rem] w-auto px-3.5 border-r">
                        <h1 className="text-[40px] font-semibold">2,000+</h1>
                        <p className="text-gray-500 text-sm">High-Quality Products</p>
                     </div>

                     <div className="h-[5rem] w-auto px-3.5 ">
                        <h1 className="text-[40px] font-semibold">30,000+</h1>
                        <p className="text-gray-500 text-sm">Happy costomers</p>
                     </div>
                  </div>

               </div>

               <div className="h-auto w-[40rem]">
                  <img className="ml-2" src={couple} alt="" />
               </div>

            </div>

         </div>

      </>
   )
}