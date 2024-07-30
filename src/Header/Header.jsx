import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsBagHeartFill } from "react-icons/bs";

function Header() {
    const [activeLink, setActiveLink] = useState('signup');

    const handleToggle = (link) => {
        setActiveLink(link);
    };
    return (
        <>
            <div className="h-[5rem] bg-slate-200 w-auto flex justify-evenly items-center  ">
                <div className="h-[3rem] w-[35rem]  flex justify-around items-center">
                    <div className=" text-[24px]  font-bold ">Exclusive</div>
                    <div className="flex  items-center list-none gap-5 ">
                        <li className=" ">
                            <NavLink to={'/'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                Home
                            </NavLink>
                        </li>
                        <li className=" ">
                            <NavLink to={'/about'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                About
                            </NavLink>
                        </li>
                        <li className=" ">
                            <NavLink to={'/contact'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                Contact
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={`/${activeLink}`} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}  onClick={() => {activeLink==="signup"? handleToggle('login'):handleToggle("signup") }}>
                                {activeLink}
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={'/login'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}  onClick={() => handleToggle('/login')}>
                                Login
                            </NavLink>
                        </li> */}




                    </div>
                </div>
                <div className="h-[3rem] w-[25rem] flex items-center ">
                    <div className="flex m-auto items-center gap-5  ">
                        <input type="text" placeholder="What are you looking for?" className="w-[12rem] text-[15px] border-2 rounded-2xl h-7 px-2 outline-none" />
                        <CiSearch className="text-[20px]" />
                        <CiHeart className={`text-[20px] text-red-500 `} />
                        <BsBagHeartFill className="text-[20px]" />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Header
