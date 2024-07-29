import React from 'react'

function Passwordinput() {
  return (
    <div className="w-[100%] m-auto rounded-sm my-3">
      <label
        className="text-[14px] text-blue-500 py-1 text-start"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="h-[2.5rem] text-[18px] border-b-[1px] border-blue-950 rounded-sm w-[100%] outline-none bg-transparent"
        name="password"
        id="password"
        autoComplete="off"
        type="password"
        placeholder="password"
      />
      {/* <p className="text-red-500 text-[12px]"></p> */}

    </div>
  )
}

export default Passwordinput
