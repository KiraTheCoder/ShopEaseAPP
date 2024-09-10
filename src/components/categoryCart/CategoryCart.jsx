import React from 'react';
import { useNavigate } from 'react-router-dom';
import decoration from "@/assets/images/footerImages/decoration.webp";
import girlsGroup from "@/assets/images/footerImages/girlsGroup.png";
import { postData } from '@/services/apiCall';
import { useGetSearchProduct } from '@/services/zustandStore';

function CategoryCart({categoryproduct}) {
    const {discount, productName, img}=categoryproduct
    const { products, setSearchProduct } = useGetSearchProduct();
    
const navigate=useNavigate()
    const handleSearch = async (searchText) => {
        const result = await postData("/user/products/search", { keyword: searchText });
        setSearchProduct(result?.data || [])
        console.log("searching result", result);
    }



    return (
        <div
        onClick={()=>{
        handleSearch(productName)
        navigate("/searchproducts")
        }}
         className="h-[23rem] w-[20rem] flex justify-end items-end rounded-md  shadow-lg bg-cover" style={{ backgroundImage: `url(${decoration})` }}>
            <div className="h-full w-[16rem] relative  rounded-r-md " >
                <img src={img} alt="" className='h-full w-full rounded-r-md' />
            </div>
            <div className=" w-[16rem] p-2 text-white text-center absolute font-extrabold uppercase bg-[#0000003c]  rounded-r-md">
                <p className="text-lg ">{productName}</p>
                <h3 className="text-4xl ">{discount} OFF</h3>
                <h3 className="mt-2 text-lg">SHOP NOW</h3>
            </div>
        </div>
    );
}

export default CategoryCart;
