
export const Button = ({ name, type, style }) => {
  return (
    <div>
      <button type={type} className={`text-[#fafafa] bg-[#db4444] h-[2rem] sm:h-[2.4rem] md:h-[2.5rem] my-1 rounded-md ${style}`}>{name}</button>
  
      {/* <button type={type} className={`${height?height:"py-3"} ${bgColor? bgColor:"bg-[#db4444]"} ${width?width:"px-5"} ${textColor? textColor:"text-black"} ${margin?margin:"m-0"} rounded-md ${border?border:"border-none"}`}>{name}</button> */}
    </div>
  )
}

