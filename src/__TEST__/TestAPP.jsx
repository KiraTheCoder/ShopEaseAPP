import Header from "@/Header/Header"
import Store from "./Store"
import  Footer from '../layouts/Footer/index'
import LogInPage from  '../pages/LoginPage/LogInPage'
import SignupPage from "../pages/SignUpPage/SignupPage"
import Trustcard from '../components/cards/customerTrustcard/Trustcard'
import Abouttrustcard from "@/components/cards/aboutcusTrustcards/Abouttrustcard"
import TeamSection from '../components/cards/aboutcusTrustcards/Ourteam'
import About from "@/pages/Aboutpage/About"
import Contact from "@/pages/contactpage/Contact"
const TestAPP = () => {
  return (
    <div>
          <Header/>
          {/* <Store /> */}
          <LogInPage/>
          <SignupPage/>
          <About/>
         <Contact/>
          <Footer/>
    </div>
  )
}

export default TestAPP