import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const CustomNavLink = ({ to, children, onClick, isActiveLink }) => (
    <NavLink 
        to={to} 
        onClick={onClick} 
        className={({ isActive }) => 
            `text-[12px] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] font-medium text-white relative after:content-[''] 
            after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] 
            ${isActive || isActiveLink ? 'after:block' : 'after:hidden'}`
        }
    >
        {children}
    </NavLink>
);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('signup');

    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleToggle = () => setActiveLink(prevLink => (prevLink === 'signup' ? 'login' : 'signup'));

    return (
        <div className=" py-1 md:py-0 bg-cyan-950">
            <div className="flex h-[4rem] md:h-[5rem] lg:h-[6rem] justify-between sm:justify-around items-center">
                <div className='w-[35%] sm:w-[17%] flex justify-center'>
                    <h1 className="text-lg sm:text-2xl md:text-[1.5rem] lg:text-4xl font-bold text-white">SHOP.CO</h1>
                </div>
                <nav className="hidden md:block md:flex justify-around w-[35%]">
                    <CustomNavLink to="/">Shop</CustomNavLink>
                    <CustomNavLink to="/uploaded">On Sale</CustomNavLink>
                    {/* <CustomNavLink to="/onsale">On Sale</CustomNavLink> */}
                    <CustomNavLink to="/contact">New Arrivals</CustomNavLink>
                    <CustomNavLink to="/brands">Brands</CustomNavLink>
                    {/* <CustomNavLink to={`/${activeLink}`} onClick={handleToggle} isActiveLink={true}>{activeLink}</CustomNavLink> */}
                    <CustomNavLink to={`/${activeLink}`} onClick={handleToggle} >{activeLink}</CustomNavLink>
                </nav>
                <div className="w-[60%] sm:w-[65%] md:w-[40%] flex justify-between items-center">
                    <div className="flex justify-evenly items-center bg-slate-200 h-6 sm:h-8 md:h-7 lg:h-9 w-[75%] sm:w-[70%] md:w-[70%] lg:w-[80%] rounded-full">
                        <CiSearch className="text-md sm:text-[1.5rem] text-gray-500" />
                        <input 
                            type="text" 
                            placeholder="Search for Product..." 
                            className="h-[100%] w-[90%] px-1 rounded-full bg-transparent text-[13px] sm:text-[14px] md:text-[14px] lg:text-sm outline-none" 
                        />
                    </div>
                    <div className="w-[22%] sm:w-[15%] md:w-[20%] lg:w-[15%] flex justify-around sm:justify-between md:justify-between lg:justify-start lg:gap-3 items-center">
                    <NavLink to="/cart">
                        <FaCartPlus className="text-sm sm:text-xl text-white" />
                    </NavLink>
                        <FaRegCircleUser className="text-sm sm:text-xl text-white" />
                    </div>
                </div>
            </div>
            <div className="block md:hidden flex pl-1 sm:pl-2 gap-2 sm:gap-10 items-center">
                <button className="md:hidden items-center sm:items-start sm:w-auto text-white" onClick={handleToggleMenu}>
                    {isMenuOpen ? <HiX className="text-[1rem] sm:text-[1.2rem] md:text-2xl" /> : <HiMenu className="text-[1rem] sm:text-[1.2rem] md:text-2xl" />}
                </button>
                <div className={`w-[87%] sm:w-[80%] flex justify-around sm:justify-start sm:gap-7 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <CustomNavLink to="/">Shop </CustomNavLink>
                    <CustomNavLink to="/onsale">On Sale</CustomNavLink>
                    <CustomNavLink to="/contact">New Arrivals</CustomNavLink>
                    <CustomNavLink to="/brands">Brands</CustomNavLink>
                    <CustomNavLink to={`/${activeLink}`} onClick={handleToggle} >{activeLink}</CustomNavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;



// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
// import { FaCartPlus } from "react-icons/fa";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { HiMenu, HiX } from "react-icons/hi";
// function Header() {

//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('signup');

//     const handleToggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleToggle = () => {
//         setActiveLink(prevLink => (prevLink === 'signup' ? 'login' : 'signup'));
//     };

//     return (
//         <div className=" w-[100vw] py-1 md:py-0 bg-cyan-950">

//             <div className="flex h-[4rem] md:h-[5rem] lg:h-[6rem] justify-between sm:justify-evenly items-center ">
//                 <div className='w-[35%] sm:w-[17%] flex justify-center'>
//                     <h1 className="text-lg sm:text-2xl md:text-[1.5rem] lg:text-4xl font-bold text-white">SHOP.CO</h1>
//                 </div>
//                 <nav className={`hidden md:block md:flex justify-around w-[35%]`}>
//                     <NavLink to="/" className={({ isActive }) => `text-[12px] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px]  after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'} `}>
//                         Shop
//                     </NavLink>
//                     <NavLink to="/about" className={({ isActive }) => `text-[12px] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px]  after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'} `}>
//                         On Sale
//                     </NavLink>
//                     <NavLink to="/contact" className={({ isActive }) => `text-[12px] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px]  after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'} `}>
//                         New Arrivals
//                     </NavLink>
//                     <NavLink to="/" className={({ isActive }) => `text-[12px] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px]  after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'} `}>
//                         Brands
//                     </NavLink>
//                     <NavLink to={`/${activeLink}`} className={({ isActive }) => `text-[12px] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'}`} onClick={handleToggle}>
//                         {activeLink}
//                     </NavLink>
//                 </nav>
//                 <div className=" w-[60%] sm:w-[65%] md:w-[38%] flex justify-between items-center bg-black ">
//                     <div className="  flex justify-evenly  items-center bg-slate-200 h-6 sm:h-8 md:h-7 lg:h-9 w-[75%] sm:w-[70%] md:w-[70%] lg:w-[80%] rounded-full  ">
//                         <CiSearch className="text-md sm:text-[1.5rem] text-gray-500 " />
//                         <input type="text" placeholder="Search for Product..." className="h-[100%] w-[90%] px-1 rounded-full  bg-transparent text-[13px] sm:text-[14px] md:text-[14px] lg:text-sm outline-none " />
//                     </div>
//                     <div className=" w-[22%]  sm:w-[15%] md:w-[20%] lg:w-[15%] flex justify-around sm:justify-between  md:justify-between lg:justify-start lg:gap-3 items-center ">
//                         <FaCartPlus className="text-sm sm:text-xl text-white" />
//                         <FaRegCircleUser className="text-sm sm:text-xl text-white" />
//                     </div>
//                 </div>
//             </div>
//             <div className="block  md:hidden flex pl-1 sm:pl-2 gap-2 sm:gap-10  items-center">
//                 <button className="md:hidden  items-center sm:items-start sm:w-auto text-white" onClick={handleToggleMenu}>
//                     {isMenuOpen ? <HiX className="text-[1rem] sm:text-[1.2rem] md:text-2xl" /> : <HiMenu className="text-[1rem] sm:text-[1.2rem] md:text-2xl" />}
//                 </button>
//                 <div className={`w-[87%] sm:w-[80%] flex justify-around sm:justify-start sm:gap-7 ${isMenuOpen ? 'block' : 'hidden'}`}>
//                     <NavLink to="/" className={({ isActive }) => `text-[13px] sm:text-sm font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px]  after:w-1/2 after:bg-[#db4444] pb-[0.12rem] ${isActive ? 'after:block' : 'after:hidden'} `}>
//                         Shop
//                     </NavLink>
//                     <NavLink to="/about" className={({ isActive }) => `text-[13px] sm:text-sm font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px]  after:w-1/2 after:bg-[#db4444] pb-[0.12rem] ${isActive ? 'after:block' : 'after:hidden'} `}>
//                         On Sale
//                     </NavLink>
//                     <NavLink to="/contact" className={({ isActive }) => `text-[13px] sm:text-sm font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px]  after:w-1/2 after:bg-[#db4444] pb-[0.12rem] ${isActive ? 'after:block' : 'after:hidden'} `}>
//                         New Arrivals
//                     </NavLink>
//                     <NavLink to="/" className={({ isActive }) => `text-[13px] sm:text-sm font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px]  after:w-1/2 after:bg-[#db4444] pb-[0.12rem] ${isActive ? 'after:block' : 'after:hidden'} `}>
//                         Brands
//                     </NavLink>
//                     <NavLink to={`/${activeLink}`} className={({ isActive }) => `text-[13px] sm:text-sm font-medium text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.12rem] ${isActive ? 'after:block' : 'after:hidden'}`} onClick={handleToggle}>
//                         {activeLink}
//                     </NavLink>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
// import { FaCartPlus, FaRegCircleUser } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";
// import DropdownMenu from "./dropdownItems"; // import the DropdownMenu component

// const CustomNavLink = ({ to, children, onClick, isActiveLink, isDropdown, dropdownItems }) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         if (isDropdown) setIsDropdownOpen(!isDropdownOpen);
//     };

//     return (
//         <div className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//             <NavLink 
//                 to={to} 
//                 onClick={onClick} 
//                 className={({ isActive }) => 
//                     `text-[12px] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] font-medium text-white relative after:content-[''] 
//                     after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] 
//                     ${isActive || isActiveLink ? 'after:block' : 'after:hidden'}`
//                 }
//             >
//                 {children}
//             </NavLink>
//             {isDropdown && <DropdownMenu isOpen={isDropdownOpen} items={dropdownItems} />}
//         </div>
//     );
// };

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('signup');

//     const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
//     const handleToggle = () => setActiveLink(prevLink => (prevLink === 'signup' ? 'login' : 'signup'));

//     const dropdownItems = [
//         { to: "/shop/mens", label: "Men's Clothing" },
//         { to: "/shop/womens", label: "Women's Clothing" },
//         { to: "/shop/accessories", label: "Accessories" }
//     ];

//     return (
//         <div className="w-full py-1 md:py-0 bg-cyan-950">
//             <div className="flex h-[4rem] md:h-[5rem] lg:h-[6rem] justify-between sm:justify-around items-center">
//                 <div className='w-[35%] sm:w-[17%] flex justify-center'>
//                     <h1 className="text-lg sm:text-2xl md:text-[1.5rem] lg:text-4xl font-bold text-white">SHOP.CO</h1>
//                 </div>
//                 <nav className="hidden md:flex justify-around w-[35%]">
//                     <CustomNavLink to="/" isDropdown={true} dropdownItems={dropdownItems}>Shop</CustomNavLink>
//                     <CustomNavLink to="/about">On Sale</CustomNavLink>
//                     <CustomNavLink to="/contact">New Arrivals</CustomNavLink>
//                     <CustomNavLink to="/">Brands</CustomNavLink>
//                     <CustomNavLink to={`/${activeLink}`} onClick={handleToggle} isActiveLink={true}>{activeLink}</CustomNavLink>
//                 </nav>
//                 <div className="w-[60%] sm:w-[65%] md:w-[40%] flex justify-between items-center">
//                     <div className="flex justify-evenly items-center bg-slate-200 h-6 sm:h-8 md:h-7 lg:h-9 w-[75%] sm:w-[70%] md:w-[70%] lg:w-[80%] rounded-full">
//                         <CiSearch className="text-md sm:text-[1.5rem] text-gray-500" />
//                         <input 
//                             type="text" 
//                             placeholder="Search for Product..." 
//                             className="h-full w-[90%] px-1 rounded-full bg-transparent text-[13px] sm:text-[14px] md:text-[14px] lg:text-sm outline-none" 
//                         />
//                     </div>
//                     <div className="w-[22%] sm:w-[15%] md:w-[20%] lg:w-[15%] flex justify-around sm:justify-between md:justify-between lg:justify-start lg:gap-3 items-center">
//                         <FaCartPlus className="text-sm sm:text-xl text-white" />
//                         <FaRegCircleUser className="text-sm sm:text-xl text-white" />
//                     </div>
//                 </div>
//             </div>
//             <div className="block md:hidden flex pl-1 sm:pl-2 gap-2 sm:gap-10 items-center">
//                 <button className="md:hidden items-center sm:items-start sm:w-auto text-white" onClick={handleToggleMenu}>
//                     {isMenuOpen ? <HiX className="text-[1rem] sm:text-[1.2rem] md:text-2xl" /> : <HiMenu className="text-[1rem] sm:text-[1.2rem] md:text-2xl" />}
//                 </button>
//                 <div className={`w-[87%] sm:w-[80%] flex justify-around sm:justify-start sm:gap-7 ${isMenuOpen ? 'block' : 'hidden'}`}>
//                     <CustomNavLink to="/" isDropdown={true} dropdownItems={dropdownItems}>Shop</CustomNavLink>
//                     <CustomNavLink to="/about">On Sale</CustomNavLink>
//                     <CustomNavLink to="/contact">New Arrivals</CustomNavLink>
//                     <CustomNavLink to="/">Brands</CustomNavLink>
//                     <CustomNavLink to={`/${activeLink}`} onClick={handleToggle} isActiveLink={!true}>{activeLink}</CustomNavLink>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Header;
