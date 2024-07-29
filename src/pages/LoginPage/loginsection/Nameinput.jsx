import React from 'react'

function Nameinput() {
  return (
    <div className="w-[100%] m-auto rounded-sm my-2">
      <label
        className="text-[14px] text-blue-500 py-2 text-start"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="h-[2.5rem] text-[18px] border-b-[1px] border-blue-950 rounded-sm w-[100%] px-2 outline-none bg-transparent"
        name="name"
        id="name"
        autoComplete="off"
        type="text"
        placeholder="name"
      />
      {/* <p className="text-red-500 text-[12px]"></p> */}

    </div>
  )
}

export default Nameinput
