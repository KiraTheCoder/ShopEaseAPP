import { useState } from "react";
import DeliveryInfo from "@/components/cards/deliveryInfo/DeliveryInfo";
import Offercard from "@/components/cards/offercard/Offercard";
import { Button } from "@/components/form";
import Counter from "@/components/productDetails/counter/Counter";
import ProductInfo from "@/components/productDetails/prductinfo/ProductInfo";
import { postData } from "@/services/apiCall";
import { useGetProduct, useCartStore } from "@/services/zustandStore";

function ProductCart() {
    const Product = useGetProduct((state) => state.product);
    const { images, discount, price, productName, description, color, _id } = Product;
    const MRP = Math.ceil(price / (1 - discount / 100));

    const [mainImg, setMainImg] = useState(images[0]);

    // Add to cart function
    const AddCart = async (Id) => {
        try {
            const result = await postData("/products/add_to_cart", { productId: Id });
            console.log("Add to Cart successful", result);
        } catch (error) {
            console.error("Failed to add to cart", error);
        }
    };




    return (
        <>
            <section className="my-4 sm:my-12">
                <div className="w-[90vw] m-auto flex justify-around flex-wrap">
                    <div className="w-[24rem] h-auto py-[1.5rem] flex flex-col items-center">
                        <div className="w-[24rem] h-[30rem] flex flex-col items-center justify-center shadow-[0_0_10px_2px_rgba(0,0,0,0.2)]">
                            <img src={`data:${mainImg?.contentType};base64,${mainImg?.data}`} alt={productName} className="h-full w-auto"/>
                        </div>
                        <div className="flex justify-around w-[23rem] mt-[2rem]">
                            {images?.map((img, index) => (
                                <div key={index} className="h-[5.2rem] w-[5rem] border-[1px] border-gray-600 rounded-lg">
                                    <img
                                        src={`data:${img?.contentType};base64,${img?.data}`}
                                        alt={productName}
                                        className="w-[100%] h-[100%] rounded-lg cursor-pointer"
                                        onClick={() => setMainImg(img)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-around mt-8 w-full">
                            <Button
                                name={"BUY NOW"}
                                type={"submit"}
                                style={"py-2 px-10 text-white font-bold text-sm rounded-3xl bg-green-800 hover:bg-green-600 hover:text-black"}
                            />
                            <Button
                                name={"ADD TO CART"}
                                type={"button"}
                                style={"py-2 px-10 text-white font-bold text-sm rounded-3xl bg-orange-600 hover:bg-orange-400 hover:text-black"}
                                onClick={() => AddCart(_id)}
                            />
                        </div>
                    </div>
                    <div className="w-[30rem] h-auto">
                        <h4 className="font-bold text-xl uppercase py-2">{productName}</h4>
                        <div>
                            <p className="text-[13px] font-bold text-gray-500 flex">
                                <h5 className="font-bold text-green-600 text-xl mr-8">
                                    ₹ {price} /- <span className="text-[14px]">Only</span>{" "}
                                </h5>
                                M.R.P :
                                <span className="italic text-[14px] line-through text-red-400">₹ {MRP} /-</span>
                            </p>
                        </div>
                        <p className="text-gray-400 leading-5 text-sm">{description}</p>
                        <h3 className="font-bold my-2">Colors <span className="text-gray-400 text-[12px]">{color}</span></h3>
                        <div className="flex w-[6rem] overflow-hidden h-auto gap-2 bg-slate-50 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] overflow-x-auto">
                            <div className="w-[4.5rem] m-auto h-auto flex-shrink-0 flex flex-col justify-center items-center">
                                <img
                                    src={`data:${images[0]?.contentType};base64,${images[0]?.data}`}
                                    alt={productName}
                                    className="cursor-pointer w-full"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="w-[10rem]">
                                <h3 className="font-bold">Quantity</h3>
                                <Counter />
                            </div>
                        </div>
                        <Offercard />
                    </div>
                </div>
            </section>
            <section>
                <div className="w-[80vw] h-auto m-auto p-2 mx-auto my-4 rounded-sm">
                    <DeliveryInfo />
                </div>
            </section>
            <section>
                <ProductInfo details={Product} />
            </section>
            <section className="w-full my-8">
                <h2 className="font-bold text-xl text-center italic">Viewers Also Liked</h2>
                {/* <CartCollection /> */}
            </section>
        </>
    );
}

export default ProductCart;
