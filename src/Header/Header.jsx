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

// import { NavLink } from "react-router-dom"
// function Navbar() {
//     return (
//         <>
//             <div className="bg-transparent absolute z-10 h-13 sm:h-16 md:h-18 lg:h-22 xl:h-24 border-b-2 border-b-white flex items-center">
//                 <nav className="h-[3rem] w-[100vw] px-4 sm:px-12 md:px-19 lg:px-22 xl:px-[5rem] text-white flex justify-between items-center ">
//                     <div className="logo  w-[20%] sm:w-[25%] md:w-[30%] lg:w-1/3  text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] uppercase font-bold tracking-widest">acting school</div>
//                     <div className="flex gap-2 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-5 w-[60%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-1/3 ">
//                         <li className="list-none font-semibold " ><NavLink to={'/'} className={({ isActive }) => `text-[9px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>Home</NavLink></li>
//                         <li className="list-none font-semibold " ><NavLink to={'/about'} className={({ isActive }) => `text-[9px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>About</NavLink></li>
//                         {/* <li className="list-none font-semibold " ><NavLink to={'/blog'} className={({ isActive }) => `text-[9px] sm:text-[13px]  md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>Blog</NavLink></li> */}
//                         <li className="list-none font-semibold " ><NavLink to={'/ourclients'} className={({ isActive }) => `text-[9px] sm:text-[13px]  md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>clients</NavLink></li>
//                         <li className="list-none font-semibold " ><NavLink to={'/contact'} className={({ isActive }) => `text-[9px] sm:text-[13px]  md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>contact</NavLink></li>
//                     </div>
//                 </nav>
//             </div>
//         </>
//     )
// }
// export default Navbar