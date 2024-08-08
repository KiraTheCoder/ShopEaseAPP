import React from "react";
import { VscStarFull } from "react-icons/vsc";
import couple from "@/assets/images/footerImages/couple.png";
import couple2 from "@/assets/images/footerImages/couple2.png"
import ItemsCollection from "../ItemsCollection/ItemsCollection";

export default function Home() {

   return (
      <>

         <div className="w-[90vw] mt-10 mb-0 m-auto ">
            <div className="h-auto w-auto  flex justify-between relative">
               <div className="h-auto w-[45vw] pt-16">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black leading-tight">
                     FIND CLOTHES THAT MATCH YOUR STYLE
                  </h1>
                  <p className="py-5 text-gray-600 text-[14px]  sm:text-base md:text-lg">
                     Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                  </p>

                  <button className="h-[3rem] w-[12rem] bg-black rounded-3xl text-white">Shop Now</button>

                  <div className="flex md:bg-white lg:bg-transparent flex-row my-6 space-y-4 sm:space-y-0 sm:space-x-4">
                      <div className="flex-1 text-center sm:text-left px-2 sm:px-3.5 border-b sm:border-b-0 sm:border-r sm:border-gray-300">
                         <h1 className="text-lg sm:text-3xl md:text-4xl font-semibold">200+</h1>
                         <p className="text-gray-600 text-[14px] sm:text-sm">International Brands</p>
                      </div>

                      <div className="flex-1 text-center sm:text-left px-2 sm:px-3.5 border-b sm:border-b-0 sm:border-r sm:border-gray-300">
                         <h1 className="text-lg sm:text-3xl md:text-4xl font-semibold">2,000+</h1>
                         <p className="text-gray-600 text-[14px] sm:text-sm">High-Quality Products</p>
                      </div>

                      <div className="flex-1 text-center sm:text-left px-2 sm:px-3.5">
                         <h1 className="text-lg sm:text-3xl md:text-4xl font-semibold">30,000+</h1>
                         <p className="text-gray-600 text-[14px] sm:text-sm">Happy Customers</p>
                      </div>
                   </div>

               </div>

               <div className="h-auto w-[40rem] ">
                  <img className="ml-2 " src={couple} alt="" />
                  {/* <img className="ml-2 block xl:hidden" src={couple2} alt="" /> */}
               </div>

            </div>
         </div>
         <div className="w-full py-3 sm:py-4 md:py-6 lg:py-8 bg-orange-400 flex flex-wrap justify-around items-center">
            <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-normal">VERSACE</h1>
            <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-thin italic">ZARA</h1>
            <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-normal">GUCCI</h1>
            <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-normal italic">PRADA</h1>
            <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-extralight">Calvin Klein</h1>
         </div>
         <div className="m-auto bg-lime-500">
            <ItemsCollection/>
         </div>
      </>
   )
}

