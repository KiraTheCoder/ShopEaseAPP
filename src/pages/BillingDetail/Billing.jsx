import { Button } from "@/components/form";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { postData, deleteData, getData } from "@/services/apiCall";
import { orderForm } from "@/services/lib/YupFormikValidator";
import {
  useBuyProduct,
  useGetCount,
} from "@/services/zustandStore/zustandStore";
import { useFetchUserAddress } from "../../components/userProfle/myAccount/AddressBook/Address";
import congratulationsMsg from "@/assets/images/footerImages/thankYou.png";
import { useEffect, useState } from "react";
import { BillingAddress } from "@/components/userProfle/billingAddress/BillingAddress";
import CreateBillingAdd from "@/components/userProfle/createBillingAdd/CreateBillingAdd";
import { useNavigate } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import { CheckCircleIcon } from "@heroicons/react/solid";
import PaymentButton from "@/components/paymentButton/PaymentButton";

export default function Billing() {
  const { userAddress, refetch } = useFetchUserAddress();
  const { cartitems } = useGetCount((state) => state);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [congratulations, setCongratulations] = useState(false);
  const { buyingProduct, setBuyProduct } = useBuyProduct();
  const { cartData, payableAmount } = cartitems;

  // cart related code start
  const setCount = useGetCount((state) => state.setCount);
  const [cart, setCart] = useState([]);
  // payment option start
  // const [paymentCompleted, setPaymentCompleted] = useState(false);

  // const location= useLocation()

  // useEffect(() => {
  //   if (location.pathname !== "/cart") {
  //     setBuyProduct(null);
  //   }
  // }, [location.pathname, setBuyProduct]);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    const totalQuantity = cart.reduce(
      (total, product) => total + product.productCount,
      0
    );
    setCount(totalQuantity);
  }, [cart, setCount]);
  // cart related code end

  // Calculate total amount
  let buyTotalAmt = buyingProduct?.quantity * buyingProduct?.price;
  if (buyTotalAmt > 0 && buyTotalAmt < 500) {
    buyTotalAmt += 50; // Add shipping fee if the total is less than 500
  }

  const totalPrice = buyTotalAmt || payableAmount;

  // Extract product IDs from cart or buyingProduct
  const productIDs = buyingProduct
    ? [buyingProduct._id]
    : cartData?.map((product) => product._id);

  async function deleteCartProducts() {
    if (!productIDs || productIDs.length === 0) {
      console.error("No product IDs to delete from cart.");
      return;
    } else {
      await Promise.all(
        productIDs.map(async (productId) => {
          console.log("ids", productId);

          return deleteData("/user/products/delete_from_cart", {
            productId: productId,
          });
        })
      );

      console.log("Products deleted from cart successfully.");
      toast.success("Your cart is Empty Now.");
    }
  }

  // ordered called
  // async function orderSubmit(values, actions) {
  //   if (!selectedAddress) {
  //     toast.error("Select your address first");
  //     return;
  //   }

  //   // payment option start
  //   // if (values.paymentMethod === 'Bank' && !paymentCompleted) {
  //   //   toast.error("Please complete the payment before placing the order.");
  //   //   return;
  //   // }

  //   const addressCopy = { ...selectedAddress };
  //   delete addressCopy._id;
  //   if (addressCopy.addressId) {
  //     delete addressCopy.addressId;
  //   }
  //   values.totalAmount = `${totalPrice}`;
  //   values.productIDs = productIDs;
  //   values.addresses = addressCopy;

  //   try {
  //     const OrderDone = postData("/user/orders/", values);
  //     toast.promise(OrderDone, {
  //       pending: "Your order is being processed...",
  //       success: "Your order was placed successfully!",
  //       error: "Your order could not be placed.",
  //     });

  //     const result = await OrderDone;
  //     if (result.success) {
  //       setCongratulations(true);
  //       actions.resetForm();
  //       setBuyProduct(null);
  //     }
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message || "An error occurred.");
  //   } finally {
  //     actions.setSubmitting(false);
  //   }

  //   // cart data empty code
  //   const deleteProduct = async () => {
  //     const getCartData = async () => {
  //       try {
  //         const result = await getData("/user/products/cart_products");
  //         setCart(result?.data?.products || []);
  //       } catch (error) {
  //         console.error("Failed to fetch cart data", error);
  //       }
  //     };

  //     if (!buyingProduct) {
  //       const fetchProducts = async () => {
  //         try {
  //           const results = await Promise.all(
  //             productIDs.map(async (productId) => {
  //               console.log("ids", productId);

  //               return deleteData("/user/products/delete_from_cart", {
  //                 productId: productId,
  //               });
  //             })
  //           );

  //           results.map((result) => {
  //             if (result.success) {
  //               toast.success("Your cart is Empty Now.");
  //               getCartData();
  //             }
  //           });
  //         } catch (error) {
  //           console.error("Error something went wrong :", error);
  //         }
  //       };
  //       fetchProducts();
  //     }
  //   };
  //   deleteProduct();
  // }

  // successfull order
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  return congratulations ? (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6 bg-gray-200 "
      //  style={{ backgroundImage: `url(${"https://www.nicepng.com/png/full/103-1039126_set-green-spirals-as-background-image-transparent-green.png"})`}}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800">
          Congratulations!
        </h1>
        <p className="text-gray-600 mt-2">
          Your order has been successfully placed. Thank you for shopping with
          us!
        </p>
        <p className="text-gray-600 mt-1">
          Order Number: <strong>#123456789</strong>
        </p>
        <button
          onClick={handleContinueShopping}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  ) : (
    // <div className="h-auto w-full flex justify-center items-center">
    //   <div className="w-auto px-4 flex justify-center items-center flex-col">
    //     <img src={congratulationsMsg} alt="Thank you" className="h-auto w-[50vw]" />
    //   </div>
    // </div>
    <div className="h-auto w-full">
      <div className="py-12 h-auto w-auto flex justify-around flex-wrap border">
        {userAddress.length > 0 ? (
          <BillingAddress
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
        ) : (
          <CreateBillingAdd sendAddress={setSelectedAddress} />
        )}
        <div className="h-auto w-[30rem]">
          {buyingProduct ? (
            <div className="h-auto w-[20rem] flex justify-between items-center my-4">
              <div className="flex gap-4 items-center">
                <img
                  src={
                    buyingProduct?.images?.length > 0 &&
                    buyingProduct.images[0]?.data
                      ? `data:${buyingProduct.images[0].contentType};base64,${buyingProduct.images[0].data}`
                      : "placeholder-image-url"
                  }
                  alt={buyingProduct?.productName || "Product Image"}
                  className="h-[4rem] w-[4rem] rounded-sm"
                />
                <p className="text-sm font-semibold">
                  {buyingProduct?.productName || "Product Name"}
                </p>
                <p className="text-sm font-semibold">
                  ({buyingProduct?.quantity || "No of products"})
                </p>
              </div>
              <p className="text-sm">
                ₹{" "}
                {buyingProduct?.price * buyingProduct.quantity ||
                  "Price not available"}
              </p>
            </div>
          ) : (
            <>
              {cartData?.length > 0 ? (
                cartData?.map((product) => (
                  <div
                    key={product._id}
                    className="h-auto w-[20rem] flex justify-between items-center my-4"
                  >
                    <div className="flex gap-4 items-center">
                      <img
                        src={
                          product?.images?.length > 0 && product.images[0]?.data
                            ? `data:${product.images[0].contentType};base64,${product.images[0].data}`
                            : "placeholder-image-url"
                        }
                        alt={product?.productName || "Product Image"}
                        className="h-[4rem] w-[4rem] rounded-sm"
                      />
                      <p className="text-sm font-semibold">
                        {product?.productName || "Product Name"}
                      </p>
                      <p className="text-sm font-semibold">
                        ({product?.productCount || "No of products"})
                      </p>
                    </div>
                    <p className="text-sm">
                      ₹{" "}
                      {product?.price * product.productCount ||
                        "Price not available"}
                    </p>
                  </div>
                ))
              ) : (
                <p>No items in cart</p>
              )}
            </>
          )}

          <div className="h-auto w-[20rem] my-5">
            <div className="flex justify-between border-b border-gray-300 py-3">
              <p className="text-sm font-semibold">Subtotal:</p>
              <p className="text-sm">₹ {buyTotalAmt || payableAmount}</p>
            </div>

            <div className="flex justify-between border-b border-gray-300 py-3">
              <p className="text-sm font-semibold">Shipping:</p>
              <p className="text-sm">₹ {totalPrice > 500 ? "00" : "50"}</p>
            </div>

            <div className="flex justify-between pt-3">
              <p className="text-sm font-semibold">Total:</p>
              <p className="text-sm">₹ {totalPrice}</p>
            </div>
          </div>

          {/* <Formik
          initialValues={orderForm.initialValues}
          enableReinitialize
          validationSchema={orderForm.validationSchema}
          onSubmit={orderSubmit}
         >
          {({ values , errors, touched }) => (
            <Form>
              <div className="flex items-center space-x-3 py-2">
                <Field type="radio" name="paymentMethod" id="radio1" value="Bank" className="form-checkbox h-4 w-4 rounded" />
                <label htmlFor="radio1" className="text-[13px] font-medium"  >Bank</label>
              </div>
              <div>
             
              </div>
              <div className="flex items-center space-x-3 py-2">
                <Field type="radio" name="paymentMethod" id="radio2" value="Cash on delivery" className="form-checkbox h-4 w-4 rounded" />
                <label htmlFor="radio2" className="text-[13px] font-medium">Cash on delivery</label>
              </div>
              <ErrorMessage name="paymentMethod" component="div" className="text-red-500 text-xs mt-1" />
              <Button type={"submit"} name={"PLACE ORDER"} style="w-[60%] focus:ring-orange-500"  />
            </Form>
          )}
        </Formik> */}

          <PaymentButton
            amount={totalPrice}
            deleteCartProducts={deleteCartProducts}
          />

          <Link to="/" className="w-full inline-block">
            <Button
              name="CONTINUE SHOPPING"
              style="w-[60%] m-4 focus:ring-orange-500"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
