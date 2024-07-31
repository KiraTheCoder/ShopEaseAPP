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
            <div className="h-[5rem]  w-auto flex  items-center justify-around border bg-red-500">
                <div className="h-[3rem] w-[35rem]  flex justify-between items-center">
                    {/* <div className=" text-[24px]  font-bold ">SHOP.CO</div> */}
                    <h1 className=" px-2 text-1xl sm:2px font-bold  md:text-4xl md:font-extrabold md:font-bold ">SHOP.CO</h1>
                    <div className="flex hidden sm:inline-flex md:visible md:items-center md:list-none md:gap-5 ">
                        <li className=" ">
                            <NavLink to={'/'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] md:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                Shop
                                
                            </NavLink>
                        </li>
                        <li className=" ">
                            <NavLink to={'/about'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] md:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                On Sale
                            </NavLink>
                        </li>
                        <li className=" ">
                            <NavLink to={'/contact'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] md:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                New Arrivales
                            </NavLink>
                        </li>
                        <li className=" ">
                            <NavLink to={'/contact'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] md:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}>
                                Brands
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={`/${activeLink}`} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] md:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}  onClick={() => {activeLink==="signup"? handleToggle('login'):handleToggle("signup") }}>
                                {activeLink}
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={'/login'} className={({ isActive }) => `text-[9px] sm:text-[12px] md:text-[14px] md:text-[16px] xl:text-[17px] capitalize relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-1 ${isActive ? 'after:block' : 'after:hidden'}`}  onClick={() => handleToggle('/login')}>
                                Login
                            </NavLink>
                        </li> */}




                    </div>
                </div>
                <div className=" h-[25px] w-[30rem] bg-green-500 md:h-[3rem] md:w-[29rem]  flex md:justify-between items-center ">
                    <div className="flex h-[20px] w-[22px] gap-2 px-3 md:h-[3rem] md:w-[25rem] items-center rounded-3xl  bg-gray-100">
                    <CiSearch className="text-[10px] text-gray-500 md:text-2xl md:text-gray-500"/>
                        <input type="text" placeholder="Search for Product..." className="h-[19px] w-[25px] md:h-[2rem] md:w-[20rem] bg-gray-100 h-7  outline-none" />
                    </div>
                    <FaRegCircleUser className="text-[20px] "/>
                    <FaCartPlus className="text-[20px]"/>
                </div>
            </div>
        </>
    )
}
export default Header




// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
// import { FaCartPlus } from "react-icons/fa";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { HiMenu, HiX } from "react-icons/hi";

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const handleToggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <header className="bg-red-500 py-4">
//             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
//                 {/* Logo */}
//                 <div className="flex items-center justify-between w-full md:w-auto">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">SHOP.CO</h1>
//                     <button className="md:hidden text-white" onClick={handleToggleMenu}>
//                         {isMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
//                     </button>
//                 </div>
                
//                 {/* Navigation Links */}
//                 <nav className={`md:flex md:items-center md:space-x-4 mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
//                     <NavLink to="/" className={({ isActive }) => `text-sm sm:text-base md:text-lg font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-1/2 after:bg-[#db4444] ${isActive ? 'after:block' : 'after:hidden'} mb-2 md:mb-0`}>
//                         Shop
//                     </NavLink>
//                     <NavLink to="/about" className={({ isActive }) => `text-sm sm:text-base md:text-lg font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-1/2 after:bg-[#db4444] ${isActive ? 'after:block' : 'after:hidden'} mb-2 md:mb-0`}>
//                         On Sale
//                     </NavLink>
//                     <NavLink to="/contact" className={({ isActive }) => `text-sm sm:text-base md:text-lg font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-1/2 after:bg-[#db4444] ${isActive ? 'after:block' : 'after:hidden'} mb-2 md:mb-0`}>
//                         New Arrivals
//                     </NavLink>
//                     <NavLink to="/brands" className={({ isActive }) => `text-sm sm:text-base md:text-lg font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-1/2 after:bg-[#db4444] ${isActive ? 'after:block' : 'after:hidden'} mb-2 md:mb-0`}>
//                         Brands
//                     </NavLink>
                     
//                 </nav>
                
//                 {/* Search and Icons */}
//                 <div className="flex items-center space-x-4 mt-4 md:mt-0">
//                     <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
//                         <CiSearch className="text-lg text-gray-500" />
//                         <input type="text" placeholder="Search for Product..." className="ml-2 bg-gray-100 outline-none px-2 py-1 w-[60vw] sm:w-[60vw]  md:w-64" />
//                     </div>
//                     <FaRegCircleUser className="text-xl text-white" />
//                     <FaCartPlus className="text-xl text-white" />
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;
