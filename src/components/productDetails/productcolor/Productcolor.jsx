import React from 'react'

function Productcolor() {
    return (
        <div className="flex w-[43%] gap-2 bg-slate-50 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] ...">
            <div
                className=" h-[6rem] w-[6rem] flex  flex-col justify-center items-center "
                // onClick={() => setChangeImg(Img1Arr)}
            >
                <img
                    src="https://m.media-amazon.com/images/I/61Qip7UftKL._SL1500_.jpg"
                    className=" cursor-pointer w-[4rem] h-[5rem]  "
                    alt="img"
                />
                <p className="text-pink-500 text-[12px]">Pink</p>
            </div>
            <div
                className=" h-[6rem] w-[6rem] flex flex-col justify-center items-center "
                // onClick={() => setChangeImg(Img2Arr)}
            >
                <img
                    src="https://m.media-amazon.com/images/I/41DUsh6UOiL.jpg"
                    className=" cursor-pointer w-[4rem] h-[5rem] "
                    alt="img"
                />
                <p className="text-blue-500 text-[12px]">BLue</p>
            </div>
        </div>
    )
}

export default Productcolor