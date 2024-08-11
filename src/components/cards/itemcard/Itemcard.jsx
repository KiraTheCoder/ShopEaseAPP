import React from 'react'
import { IoStar, IoStarHalf } from "react-icons/io5";
import Frame from "@/assets/images/footerImages/assests (2)/Frame 33.png"
function Itemcord() {
  const img = "https://s3-alpha-sig.figma.com/img/04a1/915f/d6cedd7c8b1073685c5f1be1b50e1ac6?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NPr7WnmaiKG0QI-cwNAbRrc8kfu7cCpCjOUKglGcbPkyEaBm5y2raXpptEz1BtO5HNruoJ2PSRsMOvN7GpwO6knwytvuY0NIv0HIhxxxOCE1TVoCT2EHgXTflbOmAxrssCbNvd5Rm8qrl6nuGnnwRnGs2bylENL6rHzzoAPZZkFOnpRmHl9c0tWInKOMVkJLCcLjAD5y6w-YdflbB2Xq0fBoU4S2mgSYUCkj1Gz6YDX2KrDMo0dAr5oXCM0W-OsRoTlYMizkFcPC7tOOt2B5QTlAg-jqpFSfniOwR~5WUVZ8HnyPvDR2rrQLmXOIsNTgXmmNafrwQjATJRtpNR51RQ__"

  return (
    <div className='h-auto w-[14rem] m-auto my-12 pb-2  rounded-md'>
      <div className=' w-full flex justify-center items-center  rounded-t-md'>
        <img className='h-[100%] '  src={Frame} alt="" />
      </div>
      <div className='px-2'>
        <h4 className='capitalize text-sm tracking-wide my-2'>qualited satin jacket</h4>
        <div className='text-sm flex gap-1 text-yellow-500 my-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></div>
        <p className=' flex items-center gap-5 my-2'><span className='text-red-500 text-sm'>$1999</span> <span className='text-gray-500 text-sm line-through'>$1299</span> <span className='bg-green-300 p-1 text-[13px]'>30% OFF</span></p>
      </div>
    </div>
  )
}

export default Itemcord