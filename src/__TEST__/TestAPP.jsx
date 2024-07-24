import Store from "./Store"
import  Footer from '../layouts/Footer/index'
import LogInPage from  '../pages/LoginPage/LogInPage'
// import Index from "../pages/SignUpPage/index"
import Signindex from "../pages/SignUpPage/index"
const TestAPP = () => {
  return (
    <div>
          {/* <Store /> */}
          <LogInPage/>
          <Signindex/>
          <Footer/>
    </div>
  )
}

export default TestAPP