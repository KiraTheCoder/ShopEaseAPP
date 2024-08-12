import Qualityimg from '@/components/cards/productQualityImg/Qualityimg';
import React from 'react'

function ProductInfo() {
    return (
        <div className="w-[80vw] h-auto m-auto p-2 mx-auto my-4 rounded-sm">
            <div>
                <h4 className="font-bold py-2">Product Infomation</h4>
                <div>
                    <h3 className="font-bold text-gray-600 pt-2">About this item</h3>
                    <div className="flex justify-between flex-wrap">
                        <div className="py-2">
                            <ul>
                                <li className="text-[14px] text-gray-600"><span className="font-bold text-[15px]">Fabric : </span> Top-Pure Cambric Cotton , Bottom-Pure Cotton , Dupatta-Cotton</li>
                                <li className="text-[14px] text-gray-600"><span className="font-bold text-[15px]">Occasion Type:</span> Festival</li>
                                <li className="text-[14px] text-gray-600"><span className="font-bold text-[15px]">Sleeve Type:</span> 3/4 Sleeve</li>
                                <li className="text-[14px] text-gray-600"><span className="font-bold text-[15px]">Care instructions </span>Machine Wash</li>
                            </ul>
                        </div>
                        <div>
                            <Qualityimg />
                        </div>
                    </div>
                </div>
                <div>
                    <details className="cursor-pointer  ">
                        <summary className="font-bold text-gray-600 py-2 ">Product Details</summary>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Package Dimensions : </p> <p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :- 36.9 x 30.2 x 4.6 cm; 150 g</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Age range description </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :-  Adult</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Manufacturer </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :-  Monira, Monira,Magob, Surat - 395010</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Country of Origin : </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :- India</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Style :  </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :- Casual</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Included Components </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :- Dupatta</p></div>
                        <div className="flex w-[30rem] justify-between"><p className=" w-[8rem]  font-bold text-[15px] ">Care instructions </p><p className="w-[16rem] text-gray-600 text-[14px] text-start px-4"> :- Machine Wash</p></div>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;