import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Trustedcard from '../trustedcard/Trustedcard';

function Trustcard() {
    return (
        <div className='w-[90vw] my-5 sm:w-[90vw] md:w-[80vw] lg:w-[70vw] m-auto flex flex-wrap justify-around items-center gap-3'>
            <Trustedcard 
                icon={<RiCustomerServiceFill className='text-[1.5rem] text-white group-hover:text-black ' />} 
                title="24/7 CUSTOMER SERVICE" 
                description="Friendly 24/7 customer support"
                style={"h-[9rem] w-[16rem]"}
                style2={"text-[17px]"}
            />
            <Trustedcard 
                icon={<TbTruckDelivery className='text-[1.5rem] text-white group-hover:text-black ' />} 
                title="FAST DELIVERY" 
                description="Quick and reliable delivery service"
                style={"h-[9rem] w-[16rem]"}
                style2={"text-[17px]"}
            />
            <Trustedcard 
                icon={<VscWorkspaceTrusted className='text-[1.5rem] text-white group-hover:text-black ' />} 
                title="TRUSTED SERVICE" 
                description="Trustworthy and reliable service"
                style={"h-[9rem] w-[16rem]"}
                style2={"text-[17px]"}
            />
        </div>
    );
}

export default Trustcard;
