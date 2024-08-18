import React from "react";

export default function Billing(){

    return(
        <>
        <div className="h-auto w-full">
            <div className="h-auto w-auto flex justify-around border">
             <div className="h-auto w-[30rem] py-9 px-[4rem]">
                <p className="text-[13px] font-medium text-gray-500 py-4">Account / My Account / Product / View Cart / CheckOut</p>

                <div className="h-auto ">
                <h1 className="font-semibold text-2xl py-2">Billing Details</h1>

                <form>
        <div className="py-1">
          <label htmlFor="name" className=" text-[13px] font-medium text-gray-500">First Name</label>
          <input
            type="text"
            id="First Name"
            className=" py-1 w-full border-none outline-none bg-gray-100 border rounded-md  sm:text-[13px]"
          />
        </div>

        <div className="py-1">
          <label htmlFor="name" className=" text-[13px] font-medium text-gray-500">Company Name</label>
          <input
            type="text"
            id="Company Name"
            className= "py-1 w-full border-none outline-none bg-gray-100 border rounded-md  sm:text-[13px]"
          />
        </div>

        <div className="py-1">
          <label htmlFor="name" className=" text-[13px] font-medium text-gray-500">Street Addres</label>
          <input
            type="text"
            id="Strseet Addres"
            className= "py-1 w-full border-none outline-none bg-gray-100 border rounded-md  sm:text-[13px]"
          />
        </div>

        <div className="py-1">
          <label htmlFor="name" className=" text-[13px] font-medium text-gray-500">Town/City</label>
          <input
            type="text"
            id="Town/City"
            className= "py-1 w-full border-none outline-none bg-gray-100 border rounded-md  sm:text-[13px]"
          />
        </div>

        <div className="py-1">
          <label htmlFor="name" className=" text-[13px] font-medium text-gray-500">Name</label>
          <input
            type="text"
            id="name"
            className= "py-1 w-full border-none outline-none bg-gray-100 border rounded-md  sm:text-[13px]"
          />
        </div>

        <div className="py-1">
          <label htmlFor="name" className=" text-[13px] font-medium text-gray-500">Phone Number</label>
          <input
            type="text"
            id="Phone Number"
            className= "py-1 w-full border-none outline-none bg-gray-100 border rounded-md  sm:text-[13px]"
          />
        </div>

        <div className="py-1">
          <label htmlFor="name" className=" text-[13px] font-medium text-gray-500">Email Address</label>
          <input
            type="text"
            id="Email Address"
            className= "py-1 w-full border-none outline-none bg-gray-100 border rounded-md  sm:text-[13px]"
          />
        </div>
        <div className="flex items-center space-x-3">
       <input
        type="checkbox"
        id="checkbox"
        className="form-checkbox h-4 w-4  border-red-500 rounded"
      />
      <label htmlFor="checkbox" className="text-[13px] font-medium">
        Save this information for faster check-out next time
      </label>
    </div>

        </form>
             </div>
             </div>


             <div className="h-auto w-[30rem] py-[5rem]">
                 <div className="h-auto w-[20rem]  flex justify-between my-8">

                    <div className="h-5">
                  <p className="text-sm font-normal ">LCD Monitor</p>
                    </div>
                  <p className="text-sm">$650</p>
                 </div>

                 <div className="h-auto w-[20rem]  flex justify-between">
                    <div className="h-5">
                  <p className="text-sm font-normal ">LCD Monitor</p>
                    </div>
                  <p className="text-sm">$650</p>
                 </div>

                <div className="h-auto w-[20rem] my-5 ">
                <div className="flex justify-between border-b border-gray-300 py-3">
                <p className="text-sm">Subtotal:</p>
                <p className="text-sm">S500</p>
                 </div>

                 <div className="flex justify-between border-b border-gray-300 py-3">
                <p className="text-sm">Shipping:</p>
                <p className="text-sm">Free</p>
                 </div>

                 <div className="flex justify-between pt-3">
                <p className="text-sm">Total:</p>
                <p className="text-sm">s500</p>
                 </div>
                </div>

             <div className="flex items-center space-x-3 py-2">
              <input
              type="radio"
              id="radio"
              className="form-checkbox h-4 w-4  rounded"
              />
             <label htmlFor="checkbox" className="text-[13px] font-medium">
             <p>Bank</p>
            </label>
           </div>
           
           <div className="flex items-center space-x-3 py-2">
              <input
              type="radio"
              id="radio"
              className="form-checkbox h-4 w-4 rounded"
              />
             <label htmlFor="checkbox" className="text-[13px] font-medium">
             <p>Cash on delivery</p>
            </label>
           </div>
           
           <div className="py-3">
            <input type="text" className="h-[5vh] w-[17vw] border border-black text-[10px] pl-5 rounded-sm " placeholder="Apply coupon"/>
             <button className="h-[5vh] w-[12vw] bg-red-500 text-white text-[10px] ml-2 rounded-sm">Apply Coupon</button>
           </div>

           <button className="h-[5vh] w-[12vw] bg-red-500 text-white text-[10px] rounded-sm">Apply Coupon</button>
         
             </div>
            </div>
        </div>
        </>
    )


    
}