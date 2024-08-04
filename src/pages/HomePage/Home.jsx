import React from "react";
import { VscStarFull } from "react-icons/vsc";

import couple from "@/assets/images/footerImages/couple.png";
export default function Home() {

   return (
      <>

         <div className="w-[90vw] mt-10 mb-0 m-auto ">
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

                     <div className="h-[5rem] w-auto px-2 sm:px-3.5 border-r">
                        <h1 className="text-[40px] font-semibold">200+</h1>
                        <p className="text-gray-500 text-sm">International Brands</p>
                     </div>

                     <div className="h-[5rem] w-auto px-2 sm:px-3.5 border-r">
                        <h1 className="text-[40px] font-semibold">2,000+</h1>
                        <p className="text-gray-500 text-sm">High-Quality Products</p>
                     </div>

                     <div className="h-[5rem] w-auto px-2 sm:px-3.5 ">
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
         <div className="h-auto w-[100vw] py-8 flex justify-around items-center bg-black">
            <h1 className=" text-5xl text-white  font-normal  ">VERSACE</h1>
            <h1 className=" text-5xl text-white  font-thin italic ">ZARA</h1>
            <h1 className=" text-5xl text-white  font-normal ">GUCCI</h1>
            <h1 className=" text-5xl text-white  font-normal italic">PRADA</h1>
            <h1 className=" text-5xl text-white  font-extralight  ">Calvin klein</h1>
         </div>
      </>
   )
}




// import React from "react";
// import couple from "@/assets/images/footerImages/couple.png";

// export default function Home() {
//    return (
//       <>
//          {/* Hero Section */}
//          <div className="w-full mt-10 mb-0 mx-auto px-4 sm:px-6 lg:px-8 bg-orange-600">
//             <div className="flex flex-col-reverse md:flex-row items-center justify-between">
//                {/* Text Section */}
//                <div className="w-full md:w-[90%] bg-black md:z-10 md:absolute lg:w-1/2 pt-8 md:pt-16 ">
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black leading-tight">
//                      FIND CLOTHES THAT MATCH YOUR STYLE
//                   </h1>
//                   <p className="py-5 text-gray-600 text-[14px] sm:text-sm sm:text-base md:text-lg">
//                      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//                   </p>
//                   <button className="h-12 w-full sm:w-[50%] px-6 py-2 bg-black rounded-full text-white text-sm sm:text-base md:text-lg">
//                      Shop Now
//                   </button>

//                   <div className="flex bg-black md:bg-white lg:bg-transparent flex-row mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
//                      <div className="flex-1 text-center sm:text-left px-2 sm:px-3.5 border-b sm:border-b-0 sm:border-r sm:border-gray-300">
//                         <h1 className="text-lg sm:text-3xl md:text-4xl font-semibold">200+</h1>
//                         <p className="text-gray-600 text-[14px] sm:text-sm">International Brands</p>
//                      </div>

//                      <div className="flex-1 text-center sm:text-left px-2 sm:px-3.5 border-b sm:border-b-0 sm:border-r sm:border-gray-300">
//                         <h1 className="text-lg sm:text-3xl md:text-4xl font-semibold">2,000+</h1>
//                         <p className="text-gray-600 text-[14px] sm:text-sm">High-Quality Products</p>
//                      </div>

//                      <div className="flex-1 text-center sm:text-left px-2 sm:px-3.5">
//                         <h1 className="text-lg sm:text-3xl md:text-4xl font-semibold">30,000+</h1>
//                         <p className="text-gray-600 text-[14px] sm:text-sm">Happy Customers</p>
//                      </div>
//                   </div>
//                </div>

//                {/* Image Section */}
//                <div className="bg-black rounded-tr-2xl h-[15rem] w-[15rem] rotate-[-45deg] sm:rotate-0 overflow-hidden sm:overflow-visible rounded-full sm:rounded-none mt-8 sm:mt-2 md:w-[90%] relative sm:left-[10%] lg:w-[60%] lg:left-[42%] xl:left-[51%] xl:w-[50%] md:mt-0">
//                   <img className="w-full h-auto object-cover  rotate-[45deg] sm:rotate-0" src={couple} alt="Couple" />
//                </div>
//             </div>
//          </div>

//          {/* Brands Section */}
//          <div className="w-full py-3 sm:py-4 md:py-6 lg:py-8 bg-orange-400 flex flex-wrap justify-around items-center">
//             <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-normal">VERSACE</h1>
//             <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-thin italic">ZARA</h1>
//             <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-normal">GUCCI</h1>
//             <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-normal italic">PRADA</h1>
//             <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-extralight">Calvin Klein</h1>
//          </div>
//       </>
//    );
// }
