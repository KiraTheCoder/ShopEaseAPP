import React, { useEffect, useState } from "react";
import couple from "@/assets/images/footerImages/couple.png";
import couple2 from "@/assets/images/footerImages/couple2.png"
import ItemsCollection from "../ItemsCollection/ItemsCollection";
// import useOnlineStatus from "@/services/hooks";

export default function Home() {

   //  const onlineStatus= useOnlineStatus()
   //  console.log("status", onlineStatus);

   // if (onlineStatus===false) 
   //    return (
   //       <h1 className="bg-pink-700 my-16">you are offline please cheeck your internet connection ...!</h1>
   //    )


   const images = [couple, couple2]; // Add more image here if needed

   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
         );
      }, 10000);

      return () => clearInterval(interval);
   }, [images.length]);

//  count +++
const [brands, setBrands] = useState(0);
const [products, setProducts] = useState(0);
const [customers, setCustomers] = useState(0);

useEffect(() => {
  let isMounted = true;
  
  const incrementValues = (start, end, setValue, delay) => {
    if (isMounted) {
      let current = start;
      const stepTime = Math.abs(Math.floor(delay / (end - start)));

      const timer = setInterval(() => {
        current += 1;
        setValue(current);

        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  };

  incrementValues(0, 200, setBrands, 1000);
  incrementValues(0, 2000, setProducts, 1500);
  incrementValues(0, 30000, setCustomers, 2000);

  return () => {
    isMounted = false;
  };
}, []);



   return (
      <>
         <div className="bg-[#e8ecef]">
            <div className="w-[90vw] pt-10 mb-0 m-auto ">
               <div className="h-auto w-auto  flex justify-between relative">
                  <div className="h-auto w-[45vw] pt-16">
                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black leading-tight">
                        FIND CLOTHES THAT MATCH YOUR STYLE
                     </h1>
                     <p className="py-5 text-gray-600 text-[14px]  sm:text-base md:text-lg">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                     </p>

                     <button className="h-[2rem] sm:h-[3rem] w-[12rem] bg-black rounded-3xl text-white">Shop Now</button>

                     {/* <div className="flex my-4  w-[90vw] sm:w-auto ">
                        <div className=" flex-1 text-center sm:text-left px-2 sm:px-3.5 border-r border-gray-300">
                           <h1 className="text-[1rem] sm:text-3xl md:text-4xl font-semibold">200+</h1>
                           <p className="text-gray-600 text-[12px] my-3 sm:my-4 sm:text-sm">International Brands</p>
                        </div>

                        <div className=" flex-1 text-center sm:text-left px-2 sm:px-3.5 border-r border-gray-300">
                           <h1 className="text-[1rem] sm:text-3xl md:text-4xl font-semibold">2,000+</h1>
                           <p className="text-gray-600 text-[12px] my-3 sm:my-4 sm:text-sm">High-Quality Products</p>
                        </div>

                        <div className=" flex-1 text-center sm:text-left px-2 sm:px-3.5">
                           <h1 className="text-[1rem] sm:text-3xl md:text-4xl font-semibold">30,000+</h1>
                           <p className="text-gray-600 text-[12px] my-3 sm:my-4 sm:text-sm">Happy Customers</p>
                        </div>
                     </div> */}
                     <div className="flex my-4 w-[90vw] sm:w-auto">
                        <div className="flex-1 text-center sm:text-left px-2 sm:px-3.5 border-r border-gray-300">
                           <h1 className="text-[1rem] sm:text-3xl md:text-4xl font-semibold">{brands}+</h1>
                           <p className="text-gray-600 text-[12px] my-3 sm:my-4 sm:text-sm">International Brands</p>
                        </div>

                        <div className="flex-1 text-center sm:text-left px-2 sm:px-3.5 border-r border-gray-300">
                           <h1 className="text-[1rem] sm:text-3xl md:text-4xl font-semibold">{products}+</h1>
                           <p className="text-gray-600 text-[12px] my-3 sm:my-4 sm:text-sm">High-Quality Products</p>
                        </div>

                        <div className="flex-1 text-center sm:text-left px-2 sm:px-3.5">
                           <h1 className="text-[1rem] sm:text-3xl md:text-4xl font-semibold">{customers}+</h1>
                           <p className="text-gray-600 text-[12px] my-3 sm:my-4 sm:text-sm">Happy Customers</p>
                        </div>
                     </div>

                  </div>

                  <div className="h-auto w-[40rem]">
                   {/* <img className="ml-2" src={images[currentImageIndex]} alt="Fashion" />  */}

                     <img className="ml-2" src={couple} alt="" />
                  </div>

               </div>
            </div>
         </div>

         <div className="bg-black overflow-hidden">
            <div className="w-full scrolling-text py-3 sm:py-4 md:py-6 lg:py-8 flex flex-wrap justify-around items-center">
               <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-normal">VERSACE</h1>
               <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-thin italic">ZARA</h1>
               <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-normal">GUCCI</h1>
               <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-normal italic">PRADA</h1>
               <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-extralight">Calvin Klein</h1>
            </div>
         </div>

         <div className="m-auto my-4">
            <ItemsCollection />
         </div>
      </>
   )
}

