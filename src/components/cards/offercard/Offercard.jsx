import React from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";

function Offercard() {
    return (
            <div className="border-y-[1px] border-gray-300 py-4 w-[100%] mt-[3rem]">
                <p className="flex gap-2 font-bold pb-3">
                    <span className="">
                        <BiSolidOffer className="h-[1.5rem] w-[1.5rem] text-orange-400" />
                    </span>{" "}
                    Offers
                </p>
                {/* <p className="flex gap-2 font-bold pb-3"><span className=''><CiDiscount1 className="h-[1.5rem] w-[1.5rem] text-orange-400"/></span> Offers</p> */}
                <div className="flex flex-wrap justify-between items-center">
                    <div className="rounded-sm p-[0.5rem] w-[9.5rem] h-[9.5rem] bg-orange-50 mx-1 shadow-[0_0_6px_2px_rgba(0,0,0,0.3)] ...">
                        <h5 className="font-bold text-[15px]  flex gap-1">
                            <MdLocalOffer className="text-xl text-blue-500" />
                            <span>Bnak Offer</span>
                        </h5>
                        <p className="text-[13px] text-gray-600">
                            10% Instant Discount up to INR 1000 on Citibank Credit Card
                            Non-EMI Trxn. Minimum purchase value ₹5,000
                        </p>
                    </div>
                    <div className="rounded-sm p-[0.5rem] w-[9.5rem] h-[9.5rem]  bg-orange-50 mx-1 shadow-[0_0_6px_2px_rgba(0,0,0,0.3)] ...">
                        <h5 className="font-bold text-[15px]  flex gap-1">
                            <MdLocalOffer className="text-xl text-blue-500" />
                            <span>partner Offers</span>
                        </h5>
                        <p className="text-[13px] text-gray-600">
                            Buy 2 or more and get 5% off on Qualifying items offered by
                            Meera Fab{" "}
                        </p>
                    </div>
                    <div className="rounded-sm p-[0.5rem] w-[9.5rem] h-[9.5rem] bg-orange-50 mx-1 shadow-[0_0_6px_2px_rgba(0,0,0,0.3)] ...">
                        <h5 className="font-bold text-[15px] flex gap-1">
                            <MdLocalOffer className="text-xl text-blue-500" />
                            <span>Cashback Offer</span>
                        </h5>
                        <p className="text-[13px] text-gray-600">
                            Unlock rewards worth Rs.500 & Enjoy 1-click checkout with
                            paytm. Add Rs.500 to avail the offer. *T&C apply
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Offercard