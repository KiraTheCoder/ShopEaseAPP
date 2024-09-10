
export const Button = ({ name, type, style, onClick }) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={` font-bold hover:text-white transition-colors h-[2rem] sm:h-[2.4rem] md:h-[2.5rem] my-1 m-4 bg-orange-400 hover:bg-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${style}`}>{name}</button>
    </div>
  )
}

