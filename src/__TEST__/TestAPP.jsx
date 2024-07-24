import Store from "./Store"
import  Footer from '../layouts/Footer/index'
import LogInPage from  '../pages/LoginPage/LogInPage'
// import Index from "../pages/SignUpPage/index"
import SignupPage from "../pages/SignUpPage/SignupPage"
const TestAPP = () => {
  return (
    <div>
          {/* <Store /> */}
          <LogInPage/>
          <SignupPage/>
          <Footer/>
    </div>
  )
}

export default TestAPP