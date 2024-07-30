import React from 'react'
import Trustedcard from '../trustedcard/Trustedcard'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsBagHeartFill } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
function Abouttrustcard() {
  return (
    <div>
        <div className='w-[90vw] transition-colors duration-300 ease-in-out delay-150  my-5 sm:w-[90vw] md:w-[80vw] 2xl:w-[70vw] m-auto flex flex-wrap justify-around items-center gap-3'>
        <Trustedcard 
                icon={<SiHomeassistantcommunitystore className='text-[1.5rem] text-white group-hover:text-black transition-colors duration-300 ease-in-out delay-150' />} 
                title="10.5k " 
                description="Sallers active our site"
                style={"h-[11rem]  w-[12rem] pt-6 hover:bg-[#db4444] transition-colors duration-300 ease-in-out delay-150"}
                style2={"text-2xl"} 
                 hover={"group-hover:text-white transition-colors duration-300 ease-in-out delay-150"}
            />
        <Trustedcard 
                icon={<MdOutlineAttachMoney className='text-[1.5rem] text-white group-hover:text-black transition-colors duration-300 ease-in-out delay-150 ' />} 
                title="33k " 
                description="Mopnthly Produduct Sale"
                style={"h-[11rem]  w-[12rem] pt-6 hover:bg-[#db4444] transition-colors duration-300 ease-in-out delay-150 "}
                style2={"text-2xl"}
                hover={"group-hover:text-white transition-colors duration-300 ease-in-out delay-150"}
            />
        <Trustedcard 
                icon={<BsBagHeartFill className='text-[1.5rem] text-white group-hover:text-black transition-colors duration-300 ease-in-out delay-150' />} 
                title="45.5k " 
                description="Customer active in our site"
                style={"h-[11rem]  w-[12rem] pt-6 hover:bg-[#db4444] transition-colors duration-300 ease-in-out delay-150 "}
                style2={"text-2xl"}
                 hover={"group-hover:text-white transition-colors duration-300 ease-in-out delay-150"}
            />
        <Trustedcard 
                icon={<FaSackDollar className='text-[1.5rem] text-white group-hover:text-black transition-colors duration-300 ease-in-out delay-150' />} 
                title="25k " 
                description="Anual gross sale in our site"
                style={"h-[11rem]  w-[12rem] pt-6 hover:bg-[#db4444] transition-colors duration-300 ease-in-out delay-150 "}
                style2={"text-2xl"}
                 hover={"group-hover:text-white transition-colors duration-300 ease-in-out delay-150"}
            />
        </div>
    </div>
  )
}

export default Abouttrustcard