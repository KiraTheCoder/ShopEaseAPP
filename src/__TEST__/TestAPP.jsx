import CategoryCart from "@/components/categoryCart/CategoryCart"
import CategoryCartContainer from "@/components/categoryCart/CategoryCartContainer"
import Billing from "@/pages/BillingDetail/Billing"
import Cart from "@/pages/cartpage/Cart"
import UserAccount from "@/pages/userAccount/UserAccount"
import MyComponent from "./pathLocations"

const TestAPP = () => {
  return (
    <div className="w-[100vw] flex justify-center items-center py-14 m-auto">
      {/* <Billing/> */}
      {/* <CategoryCart/> */}
      {/* <CategoryCartContainer/> */}
      <MyComponent/>
      </div>
  )
}

export default TestAPP