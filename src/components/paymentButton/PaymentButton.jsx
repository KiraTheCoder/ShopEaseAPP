import { postData } from "@/services/apiCall";
import React from "react";
import { Button } from "../form";

const PaymentButton = ({ amount,deleteCartProducts }) => {
  const handlePayment = async () => {
    try {
      const order = await postData("/user/payment/create-order", {
        amount,
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "ShopEase",
        description: "Transaction",
        order_id: order.id,
        handler: async (response) => {
          const res = await postData("/user/payment/verify", response);
          await deleteCartProducts();
          alert("Payment Success: " + res.status);
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment Failed");
    }
  };

  return (
    <Button
      type={"button"}
      name={`Pay ₹ ${amount}`}
      onClick={handlePayment}
      style="w-[60%] focus:ring-orange-500"
    />
  );
};

export default PaymentButton;
