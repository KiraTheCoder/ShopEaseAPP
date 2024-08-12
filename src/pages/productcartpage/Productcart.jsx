import DeliveryInfo from "@/components/cards/deliveryInfo/DeliveryInfo";
import Offercard from "@/components/cards/offercard/Offercard";
import { Button } from "@/components/form";
import Counter from "@/components/productDetails/counter/Counter";
import ProductInfo from "@/components/productDetails/prductinfo/ProductInfo";
import Productcolor from "@/components/productDetails/productcolor/Productcolor";
import { useEffect , useState} from "react";
import { getData } from "@/services/apiCall"

function ProductCart() {
    const imgs = [
        "https://sashamilano.com/wp-content/uploads/2023/12/black1-980x1470.webp",
        "https://sashamilano.com/wp-content/uploads/2023/12/black4-980x1470.webp",
        "https://sashamilano.com/wp-content/uploads/2023/12/navy6-980x1470.webp",
        "https://sashamilano.com/wp-content/uploads/2023/12/black3-980x1470.webp",
    ]

    const [product, setProduct] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
  
      try {
        const productId = "66b8758340cc73cf2cbdba82"; 
        const result = await getData(`/products/${productId}`);
        setProduct(result?.data); 
      } catch (error) {
        console.error("Error fetching the product:", error);
      }
    };

 
    return (
        <>
            <section className="">
                <h1 className="text-center font-sans font-semibold text-2xl text-fuchsia-600 mb-[3rem]">
                    PRODUCT CART
                </h1>
                <div className="w-[90vw] m-auto flex justify-around flex-wrap  ">
                    <div className="w-[24rem] h-auto py-[1.5rem]   flex flex-col items-center  ">
                        <div className="w-[24rem] h-[30rem]  flex flex-col items-center justify-center shadow-lg shadow-gray-500  rounded-tl-[10%] rounded-br-[10%]">
                            <img src="https://sashamilano.com/wp-content/uploads/2023/12/black1-980x1470.webp" className="w-[18rem] h-[28rem]  " alt="img" />
                        </div>
                        <div className="flex justify-around w-[23rem] mt-[2rem] ">
                            {imgs.map((img, index) => (
                                <div key={index} className="h-[5rem] w-[4rem] border-[1px] border-gray-600 rounded-lg">
                                    <img
                                        src={img}
                                        className="w-[100%] h-[100%] rounded-lg cursor-pointer "
                                        alt="img"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-around mt-8 w-full">
                            <Button name={"BUY NOW"} type={"submit"} style={"py-2 px-10 text-white font-bold text-sm rounded-3xl bg-green-800 hover:bg-green-600 hover:text-black"} />
                            <Button name={"ADD TO CART"} type={""} style={"py-2 px-10 text-white font-bold text-sm rounded-3xl  bg-orange-600 hover:bg-orange-400 hover:text-black"} />
                        </div>
                    </div>
                    <div className="w-[30rem] h-auto ">
                        <h4 className="font-bold text-xl uppercase py-2">
                            MEERA FAB Women's Cotton Printed White Anarkali
                        </h4>
                        <div className="">
                            <p className="text-[13px] font-bold text-gray-500 flex">
                                <h5 className="font-bold text-green-600 text-xl mr-8">
                                    ₹ 2999 /- <span className="text-[14px]  ">Only</span>{" "}
                                </h5>
                                M.R.P :
                                <span className="italic text-[14px] line-through text-red-400">
                                    ₹ 5999 /-
                                </span>
                            </p>
                        </div>
                        <p className=" text-gray-400 leading-5 text-sm">
                            Discover the allure of the Lemonade Shirt Dress, a wide-fit wonder
                            with overlapping panels, dynamic box pleats, and a playful wide
                            cuff ring adorned with a self-fabric ribbon. Expertly crafted, it
                            promises a stylish and customizable silhouette that effortlessly
                            blends comfort and contemporary charm.
                        </p>
                        <h3 className="font-bold my-2">Colors</h3>
                        {/* product color collection */}
                        <Productcolor />
                        <div className="flex justify-between  mt-6">
                            <div className=" w-[10rem]">
                                <h3 className="font-bold  ">Quantity</h3>
                                <Counter />
                            </div>
                        </div>
                        {/* offer start */}
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
                <ProductInfo />
            </section>
            <section className="w-full my-8">
                <h2 className="font-bold text-xl text-center italic">
                    Viewers Also Liked
                </h2>
                {/* <CartCollection /> */}
            </section>
        </>
    );
}

export default ProductCart;
