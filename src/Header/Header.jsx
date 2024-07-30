import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

function Header() {
    const [activeLink, setActiveLink] = useState('signup');

    const handleToggle = (link) => {
        setActiveLink(link);
    };

    
    return (
        <>
            <div className="h-[5rem]  w-auto flex  items-center justify-around border">
                <div className="h-[3rem] w-[35rem]  flex justify-between items-center">
                    {/* <div className=" text-[24px]  font-bold ">SHOP.CO</div> */}
                    <h1 className=" text-4xl font-extrabold font-bold ">SHOP.CO</h1>
                    <div className="flex  items-center list-none gap-5 ">
                        <li className=" ">
                            <NavLink to={'/'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                Shop
                                
                            </NavLink>
                        </li>
                        <li className=" ">
                            <NavLink to={'/about'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                On Sale
                            </NavLink>
                        </li>
                        <li className=" ">
                            <NavLink to={'/contact'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                New Arrivales
                            </NavLink>
                        </li>
                        <li className=" ">
                            <NavLink to={'/contact'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                Brands
                            </NavLink>
                        </li>
                        {/* <li className="">
                            <NavLink to={`/${activeLink}`} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}  onClick={() => {activeLink==="signup"? handleToggle('login'):handleToggle("signup") }}>
                                {activeLink}
                            </NavLink>
                        </li> */}
                        {/* <li>
                            <NavLink to={'/login'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}  onClick={() => handleToggle('/login')}>
                                Login
                            </NavLink>
                        </li> */}




                    </div>
                </div>
                <div className="h-[3rem] w-[29rem]  flex justify-between items-center ">
                    <div className="flex gap-2 px-3 h-[3rem] w-[25rem] items-center rounded-3xl border-2 ">
                    <CiSearch className="text-2xl"/>
                        <input type="text" placeholder="Search for Product..." className=" h-[2rem] w-[20rem]  h-7  outline-none" />
                    </div>
                    <FaRegCircleUser className="text-[20px]"/>
                    <FaCartPlus className="text-[20px]"/>
                </div>
            </div>
        </>
    )
}
export default Header
