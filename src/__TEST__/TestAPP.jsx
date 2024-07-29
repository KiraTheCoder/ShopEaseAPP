import Store from "./Store"
import  Footer from '../layouts/Footer/index'
import LogInPage from  '../pages/LoginPage/LogInPage'
import SignupPage from "../pages/SignUpPage/SignupPage"
import Trustcard from '../components/customerTrustcard/Trustcard'
import Abouttrustcard from "@/components/aboutcusTrustcards/Abouttrustcard"
import TeamSection from '../components/aboutcusTrustcards/Ourteam'
import About from "@/pages/Aboutpage/About"
import Contact from "@/pages/contactpage/Contact"
const TestAPP = () => {
  return (
    <div>
          {/* <Store /> */}
          {/* <LogInPage/> */}
          {/* <SignupPage/> */}
          <About/>
         {/* <Contact/> */}
         {/* <Contact/> */}
          <Footer/>
    </div>
  )
}

export default TestAPP