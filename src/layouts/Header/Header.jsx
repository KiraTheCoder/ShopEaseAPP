import { useEffect, useState, useRef, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useAuthStore, useGetCount, useGetSearchProduct } from "@/services/zustandStore/zustandStore";
import { FaCircleUser, FaHeart } from "react-icons/fa6";
import { useScrollToTop } from "@/services/hooks";
import { getData, postData } from "@/services/apiCall";
import { debounce } from "@/services/utils";
import { FcSearch } from "react-icons/fc";
const CustomNavLink = ({ to, children, onClick, isActiveLink }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
            `text-[12px] sm:text-[1rem] md:text-[0.9rem] lg:text-[0.8rem] xl:text-[1rem] font-medium text-white relative after:content-[''] 
            after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] 
            ${isActive || isActiveLink ? 'after:block' : 'after:hidden'}`
        }
    >
        {children}
    </NavLink>
);

function Header() {
    useScrollToTop();
    const { count, setCount, wishlistcount, setWishlistcount, } = useGetCount((state) => state);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { removeToken, token } = useAuthStore((state) => state);
    const isLoggedIn = !!token;
    const searchText = useRef(null);
    const [searchData, setSearchData] = useState([]);
    const { products, setSearchProduct } = useGetSearchProduct();

    const navigate = useNavigate()


    const fetchCartProductCount = async () => {
        const result = await getData("/user/products/cart_products_count");
        setWishlistcount(await (await getData("/user/products/wishlist_products"))?.data?.products?.length)
        setCount(result?.data?.productCartsCount || 0);
    };

    useEffect(() => {
        fetchCartProductCount();
    }, [setCount, setWishlistcount]);

    const handleSearch = useCallback(
        debounce(async () => {
            if (searchText.current?.value?.trim()) {
                const result = await postData("/user/products/search", { keyword: searchText.current.value });
                setSearchData(result?.data || []);
                setSearchProduct(result?.data || [])
                // console.log("searching result", result);

                if (result?.success) {
                    navigate("/searchproducts")
                }
            }
        }, 300),
        []
    );

    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="py-1 md:py-0 bg-cyan-950">
            <div className="flex h-[4rem] md:h-[5rem] lg:h-[6rem] justify-between sm:justify-around items-center">
                <div className="w-[35%] sm:w-[17%] flex justify-center">
                    <NavLink to="/" className="text-lg sm:text-2xl md:text-[1.5rem] lg:text-4xl font-bold text-white">
                        ShopEase
                    </NavLink>
                </div>
                <nav className="hidden md:flex justify-around w-[35%]">
                    <CustomNavLink to="/">Shop</CustomNavLink>
                    <CustomNavLink to="/newarrivals">New Arrivals</CustomNavLink>
                    {isLoggedIn ? (
                        <NavLink
                            to="/"
                            onClick={() => removeToken()}
                            className="text-white"
                        >
                            Logout
                        </NavLink>
                    ) : (
                        <CustomNavLink to="/login">Login</CustomNavLink>
                    )}
                </nav>
                <div className="w-[70%] sm:w-[65%] md:w-[50%] flex justify-between items-center">
                    <div className="flex justify-evenly items-center bg-slate-200 h-6 sm:h-8 md:h-7 lg:h-9 w-[75%] sm:w-[70%] md:w-[70%] lg:w-[80%] rounded-full">
                        <FcSearch className="text-md sm:text-[1.5rem]" />
                        <input
                            type="text"
                            ref={searchText}
                            onChange={handleSearch}
                            placeholder="Search for Product..."
                            className="h-[100%] w-[90%] px-1 rounded-full bg-transparent text-[13px] sm:text-[14px] md:text-[14px] lg:text-sm outline-none"
                        />
                    </div>
                    <div className="w-[25%] sm:w-[20%] md:w-[28%] flex justify-around sm:justify-between  md:justify-center md:gap-3 items-center">
                        <div className="relative">
                          { wishlistcount? <p className="text-white bg-orange-500 rounded-full h-[10px] sm:h-[10px] md:h-[12px] lg:h-[14px] w-[10px] sm:w-[10px] md:w-[12px] lg:w-[14px] flex justify-center items-center ml-[0.12rem] sm:ml-1 absolute bottom-4 sm:bottom-5 text-[7px] sm:text-[8px] md:text-[10px]">
                                {wishlistcount}
                            </p>:null}
                            <NavLink to="/wishlistproducts">
                                <FaHeart className="text-sm sm:text-xl text-red-500" />
                            </NavLink>
                        </div>
                        <div className="relative">
                            {count?<p className="text-white bg-orange-500 rounded-full h-[10px] sm:h-[10px] md:h-[12px] lg:h-[14px] w-[10px] sm:w-[10px] md:w-[12px] lg:w-[14px] flex justify-center items-center ml-[0.20rem] sm:ml-1 absolute bottom-4 sm:bottom-5 text-[7px] sm:text-[8px] md:text-[10px]">
                                {count}
                            </p> :null}
                            <NavLink to="/cart">
                                <FaCartPlus className="text-sm sm:text-xl text-white" />
                            </NavLink>
                        </div>

                        <NavLink to={"/useraccount"}>
                            <FaCircleUser className="text-sm sm:text-xl text-white" />
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex pl-1 sm:pl-2 gap-2 sm:gap-10 items-center">
                <button className="md:hidden items-center sm:items-start sm:w-auto text-white" onClick={handleToggleMenu}>
                    {isMenuOpen ? (
                        <HiX className="text-[1rem] sm:text-[1.2rem] md:text-2xl" />
                    ) : (
                        <HiMenu className="text-[1rem] sm:text-[1.2rem] md:text-2xl" />
                    )}
                </button>
                <div className={` ml-2 w-auto gap-8 sm:w-[80%] flex justify-around sm:justify-start sm:gap-7 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <CustomNavLink to="/">Shop</CustomNavLink>
                    <CustomNavLink to="/newarrivals">New Arrivals</CustomNavLink>
                    {isLoggedIn ? (
                        <CustomNavLink
                            to="/"
                            onClick={() => removeToken()}
                        >
                            Logout
                        </CustomNavLink>
                    ) : (
                        <CustomNavLink to="/login">Login</CustomNavLink>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;


