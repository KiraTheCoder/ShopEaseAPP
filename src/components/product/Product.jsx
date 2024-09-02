import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import { useGetCount, useGetProduct } from "@/services/zustandStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getData, postData } from "@/services/apiCall";

export const ProductCard = ({ product }) => {
  const setProduct = useGetProduct((state) => state.setProduct);
  const navigate = useNavigate();
  const { setCount } = useGetCount((state) => state);
  const AddCart = async (Id, quantity) => {
    console.log("cart add", Id, quantity);
    
    try {
      const addProductPromise = postData("/user/products/add_to_cart", { productId: Id, productQuantity: quantity });
      toast.promise(
        addProductPromise,
        {
          pending: 'Adding product...',
          success: 'Product added successfully 👌',
          error: 'Something went wrong.. 🤯',
        }
      );

      const addProduct = await addProductPromise;
      
      if (addProduct?.success) {
        setCount(await (await getData("/user/products/cart_products_count"))?.data?.productCartsCount);     
      }
    } catch (error) {
      toast.error("No response received or other error: " + error?.message);
    }
  };

  const MRP = Math.ceil(product?.price / (1 - parseInt(product?.discount) / 100));  

  return (
    <div className="w-[15rem] bg-white h-[26rem] rounded overflow-hidden shadow-lg m-4 relative">
      <div
        onClick={() => {
          setProduct(product);
          navigate("/productcart");
        }}
        className="hover:cursor-pointer "
      >
        <div className="w-full h-[14rem] rounded-t-xl">
          <img
            className="w-full h-full object-contain rounded-t-lg"
            src={`data:${product?.images[0]?.contentType};base64,${product?.images[0]?.data}`}
            alt={product?.productName}
          />
        </div>
        <div className="px-3 pt-2">
          <h2 className="text-md leading-5  font-bold">{product?.productName}</h2>
          <div className="flex gap-8 items-center mt-2">
          <p className="flex gap-1 my-1 text-yellow-600">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarHalf />
          </p>
          <p className=" text-gray-600">MRP: <span className="line-through">{MRP}</span></p>
          </div>
        </div>
        <div className="px-3 mb-8 flex gap-8 items-center">
          <span className="text-gray-900 font-bold">Price: ₹ <span className="text-orange-400">{product?.price}</span></span>
          {/* <span className=""></span> */}
          {/* <h4 className="text-lg italic">Off : <span>{product?.discount}</span><span className="text-[12px] text-red-600"> %</span></h4> */}
        </div>
      </div>
      <button
        className=" h-12 px-2 w-full font-bold absolute bottom-0 left-0 bg-gray-900 text-white"
        onClick={() => AddCart(product._id, 1)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;








// import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
// import { useGetCount, useGetProduct } from "@/services/zustandStore"
// import { useNavigate } from "react-router-dom"
// import { toast } from "react-toastify";
// import { postData } from "@/services/apiCall";

// export const ProductCard = ({ product }) => {

//   const setProduct = useGetProduct((state => state.setProduct))
//   const navigate = useNavigate()

//   const { setCount } = useGetCount((state) => state);

//   const AddCart = async (Id, quantity) => {
//     console.log("id and qua", Id, quantity);

//     try {
//       const addProductPromise = postData("/user/products/add_to_cart", { productId: Id, productQuantity: quantity });
//       toast.promise(
//         addProductPromise,
//         {
//           pending: 'Product addddd...',
//           success: 'Product Add Successfully 👌',
//           error: 'something went wrong.. 🤯',
//         }
//       );

//       const addProduct = await addProductPromise;
//       if (addProduct.success) {
//         setCount(await (await getData("/user/products/cart_products_count"))?.data?.productCartsCount)
//       }

//     } catch (error) {
//       toast.error("No response received or other error:" + error?.message)
//     }
//   };


//   return (
//     <>
//       <div onClick={() => {
//         setProduct(product)
//         navigate("/productcart")
//       }} className="w-[15rem] hover:cursor-pointer bg-slate-200 rounded overflow-hidden shadow-lg m-4 relative">
//         <div className="w-full h-auto ">
//           <img className="w-full " src={`data:${product?.images[0]?.contentType};base64,${product?.images[0]?.data}`} alt={product?.productName} />
//         </div>
//         <div className="px-3 py-2">
//           <h2 className="text-lg font-bold">{product?.productName}</h2>
//           <p className="flex gap-1 text-yellow-600"><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarHalf /></p>
//         </div>
//         <div className="px-3 ">
//           <span className="text-gray-900 font-bold">Price: ${product?.price}</span>
//         </div>
//       </div>
//       <div className="bg-red-600 h-6 px-2 w-auto absolute " onClick={() => AddCart(product._id, 1)}>add to cart</div>
//     </>
//   );
// };
// export default ProductCard;