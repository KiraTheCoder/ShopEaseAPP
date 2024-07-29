import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

function Header(){

    return(
        <>
        <div className="h-auto w-auto flex justify-evenly items-center mt-5 ">
             <div className="h-[3rem] w-[35rem]  flex justify-around items-center">
                <div className=" text-[24px]  font-bold ">Exclusive</div>
                <div className="flex  items-center list-none gap-5 ">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign Up</li>
                </div>
             </div>
             <div className="h-[3rem] w-[25rem] flex items-center ">
                <div className="flex m-auto items-center gap-5  ">
                    <input type="text" placeholder="What are you looking for? text-[5px] border-none"/>
                    <CiSearch className="text-[20px]"/>
                    <CiHeart className="text-[20px]"/>
                     <CiHeart className="text-[20px]"/>
                </div>

             </div>
        </div>
        </>
    )
}
export default Header
