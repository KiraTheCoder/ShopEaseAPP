import React from 'react'

function Size() {
    return (
        <div className="">
            <h3 className="font-bold ">Select Your Size</h3>
            <div className="flex items-center gap-2 mt-[0.5rem]">
                <div className="text-blue-600 text-[15px]">Size: </div>
                <div className="w-[2.2rem] h-[2.2rem] flex justify-center text-[14px] items-center font-bold bg-slate-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">
                    S
                </div>
                <div className="w-[2.2rem] h-[2.2rem] flex justify-center text-[14px] items-center font-bold bg-slate-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">
                    M
                </div>
                <div className="w-[2.2rem] h-[2.2rem] flex justify-center text-[14px] items-center font-bold bg-slate-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">
                    L
                </div>
                <div className="w-[2.2rem] h-[2.2rem] flex justify-center text-[14px] items-center font-bold bg-slate-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">
                    XL
                </div>
                <div className="w-[2.2rem] h-[2.2rem] flex justify-center text-[14px] items-center font-bold bg-slate-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">
                    XXL
                </div>
            </div>
        </div>
    )
}

export default Size