// import React from "react";
// function Topheader(){

//     return(
//         <>
//         <div className="w-[1440px] h-[48px] bg-[#000000] flex items-center">
//             <div className="w-[859px] h-[24px] top-[12px] ml-[445px] gap-[231px] flex justify-between justify-center items-center">
//                 <div className="w-[550px] h-[24px] gap-[8px] flex">
//                  <div className="w-[474px] h-[18px] text-[14px] text-[#FAFAFA] leading-[21px] font-normal">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </div>
//                  <div className="w-[68px] h-[24px] text-[14px] leading-[24px] text-center text-[#FAFAFA] font-semibold">ShopNow</div>
//                 </div>

//                 <div className="w-[78px] h-[24px] gap-[5px] text-[#FAFAFA] flex">
//                     <div className="w-[49px] h-[21px] font-normal leading-[21px] text-[14px]">English
//                         <select name="" id="">
//                             <option value="">ghg</option>
//                             <option value="">eyh</option>
//                             <option value="">trge</option>
//                             <option value="">r</option>
//                         </select>
//                     </div>
//                     <div className="w-[24px] h-[24px]">
//                         <div className="h-[7.78px] h-[12.73px] top-[8px] ml-[18.73px] text-[#FFFFFF]">/</div>
//                     </div>
//                     </div>
//             </div>

//         </div>
//         </>
//     )

// }
// export default Topheader




import React from "react";

function Topheader() {
    return (
        <div className="w-full h-12 bg-black flex items-center ">
            <div className="w-auto mx-auto flex justify-around items-center">
                <div className="flex gap-2 ">
                    <div className="text-white text-sm leading-5">
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </div>
                    <div className=" text-white text-sm leading-6 px-3 font-semibold">
                        Shop Now
                    </div>
                </div>

            </div>

             <div className="flex items-center text-white  mr-[5rem] ">
                        <select className="ml-1 px-1 py-0.5 bg-transparent border-b-1 border-white text-white text-sm">
                            <option value="en">English</option>
                            <option value="en">South</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="es">Spanish</option>
                        </select>
                </div>
                
            
        </div>
    );
}

export default Topheader;
