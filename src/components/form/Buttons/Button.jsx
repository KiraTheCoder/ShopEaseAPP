import React from 'react'

export const Button = ({ name, type, textColor, bgColor, height, width, margin, border }) => {
  return (
    <div>
      <button type={type} className={`${height?height:"py-3"} ${bgColor? bgColor:"bg-[#db4444]"} ${width?width:"px-5"} ${textColor? textColor:"text-black"} ${margin?margin:"m-0"} rounded-md ${border?border:"border-none"}`}>{name}</button>
    </div>
  )
}

