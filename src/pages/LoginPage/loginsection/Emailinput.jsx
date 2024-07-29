
function Emailinput() {
  return (
    <div className="w-[100%] m-auto rounded-sm my-3">
      <label
        className="text-[14px] text-blue-500 py-1 text-start"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="h-[2.5rem] text-[18px] border-b-[1px] border-blue-950 rounded-sm w-[100%] outline-none bg-transparent"
        name="email"
        id="email"
        autoComplete="off"
        type="email"
        placeholder="email"
      />
      {/* <p className="text-red-500 text-[12px]"></p> */}

    </div>
  )
}

export default Emailinput
