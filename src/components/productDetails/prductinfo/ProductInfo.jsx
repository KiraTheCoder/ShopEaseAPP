import Qualityimg from '@/components/cards/productQualityImg/Qualityimg';
import React from 'react'

function ProductInfo({ details }) {
    // console.log("product details==>", details);

    const { age,manufacturer ,category, material, soft,discount } = details

    return (
        <div className="w-[80vw] h-auto m-auto p-2 mx-auto my-4 rounded-sm">
            <div>
                <h4 className="font-bold py-2">Product Infomation</h4>
                <div>
                    <h3 className="font-bold text-gray-600 pt-2">About this item</h3>
                    <div className="flex justify-between flex-wrap">
                        <div className="py-2">
                            <ul>
                                <li className="text-[14px] text-gray-600"><span className="font-bold text-[15px]">Fabric : </span>{material}</li>
                                <li className="text-[14px] text-gray-600"><span className="font-bold text-[15px]">Occasion Type:</span> Festival / Normal</li>
                                <li className="text-[14px] text-gray-600"><span className="font-bold text-[15px]">Category: </span>{category}</li>
                                <li className="text-[14px] text-gray-600"><span className="font-bold text-[15px]">Care instructions </span>{soft ? "Machine wash" : "Easy to wash"}</li>
                                
                            </ul>
                        </div>
                        {
                            soft=="true" ?
                                <div>
                                    <Qualityimg />
                                </div> : null
                        }
                    </div>
                </div>
                <div>
                    <details className="cursor-pointer  ">
                        <summary className="font-bold text-gray-600 py-2 ">Product Details</summary>
                        {/* <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Package Dimensions : </p> <p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :- 36.9 x 30.2 x 4.6 cm; 150 g</p></div> */}
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Discount : </p> <p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :- {discount} %</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Age range description </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :-  {age}</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Manufacturer </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :-  {manufacturer}</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Country of Origin : </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :- India</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Style :  </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :- Casual</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Care instructions </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :- {soft ? "Machine wash" : "Easy to wash"}</p></div>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;