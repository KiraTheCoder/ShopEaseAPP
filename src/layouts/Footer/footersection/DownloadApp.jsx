import { FaInstagram, FaLinkedinIn,FaFacebookF } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";

function Downloadapp() {
    
     const Text_color = "#fafafa"
    return (
        <>
            <h4 className={`text-[${Text_color}] text-[17px] sm:text-[19px] md:text-[20px] font-inter mb-3 font-semibold`}>Download App</h4>
            <p className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]">Save $3 with App New User Only</p>
            
            <div className="w-[100%] bg-slate-100 h-[5rem] flex justify-between">
                <div className="w-[40%] "><img src="../../.././assets/images/footerQR.jpeg" alt="" /></div>
                <div className="w-[50%] grid items-end bg-green-800">
                    <img className="h-[2rem] w-[100%] " src="../assets/images/googlepay.png" alt="" />
                    <img className="h-[2rem] w-[100%] " src="../assets/images/footer_appstoreImg.png" alt="" />
                </div>
            </div>
            <div className="w-[100%] flex gap-4 my-4">
                <div className="flex justify-center items-center w-[1.2rem] sm:w-[1.4rem] md:w-[1.7rem] h-[1.2rem] sm:h-[1.4rem] md:h-[1.7rem]"><FaInstagram  className="w-[0.8rem] sm:w-[1.1rem] md:w-[1.3rem] h-[0.8rem] sm:h-[1.1rem] md:h-[1.3rem] text-[#fafafa]"/></div>
                <div className="flex justify-center items-center w-[1.2rem] sm:w-[1.4rem] md:w-[1.7rem] h-[1.2rem] sm:h-[1.4rem] md:h-[1.7rem]"><FaLinkedinIn  className="w-[0.8rem] sm:w-[1.1rem] md:w-[1.3rem] h-[0.8rem] sm:h-[1.1rem] md:h-[1.3rem] text-[#fafafa]"/></div>
                <div className="flex justify-center items-center w-[1.2rem] sm:w-[1.4rem] md:w-[1.7rem] h-[1.2rem] sm:h-[1.4rem] md:h-[1.7rem]"><FaFacebookF  className="w-[0.8rem] sm:w-[1.1rem] md:w-[1.3rem] h-[0.8rem] sm:h-[1.1rem] md:h-[1.3rem] text-[#fafafa]"/></div>
                <div className="flex justify-center items-center w-[1.2rem] sm:w-[1.4rem] md:w-[1.7rem] h-[1.2rem] sm:h-[1.4rem] md:h-[1.7rem]"><LuTwitter  className="w-[0.8rem] sm:w-[1.1rem] md:w-[1.3rem] h-[0.8rem] sm:h-[1.1rem] md:h-[1.3rem] text-[#fafafa]"/></div>
            </div>
        </>
    )
}

export default Downloadapp