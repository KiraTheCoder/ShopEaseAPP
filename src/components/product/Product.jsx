import { MdOutlineStarPurple500,MdOutlineStarHalf } from "react-icons/md";
import {useGetProduct} from "@/services/zustandStore"
import {useNavigate} from "react-router-dom"

export const ProductCard = ({ product }) => {
  
  const  setProduct = useGetProduct((state=>state.setProduct))
  const navigate = useNavigate()

  return (
    <div onClick={()=>{
      setProduct(product)
      navigate("/productcart")
      }}  className="w-[15rem] hover:cursor-pointer bg-slate-200 rounded overflow-hidden shadow-lg m-4">
      <div className="w-full h-auto">
      <img className="w-full " src={`data:${product?.images[0]?.contentType};base64,${product?.images[0]?.data}`} alt={product?.productName} />
      </div>
      <div className="px-3 py-2">
        <h2 className="text-lg font-bold">{product?.productName}</h2>
        <p className="flex gap-1 text-yellow-600"><MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarHalf/></p>
      </div>
      <div className="px-3 ">
        <span className="text-gray-900 font-bold">Price: ${product?.price}</span>
      </div>
    </div>
  );
};
export default ProductCard;