
export const Button = ({ name, type, style, onClick }) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={` font-bold hover:text-white transition-colors h-[2rem] sm:h-[2.4rem] md:h-[2.5rem] my-1 rounded-md ${style}`}>{name}</button>
    </div>
  )
}

