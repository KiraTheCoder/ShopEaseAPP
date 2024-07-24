
function Account() {
    
     const Text_color = "#fafafa"
    return (
        <>
            <h4 className={`text-[${Text_color}] text-[17px] sm:text-[19px] md:text-[20px] mb-3 font-inter font-semibold`}>Account</h4>
            <ul>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]">My Account</li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]">Login / Register</li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]">Cart</li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]">Wishlist</li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]">Shop</li>
            </ul>
              </>
    )
}
export default Account