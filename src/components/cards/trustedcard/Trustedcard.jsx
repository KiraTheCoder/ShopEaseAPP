import React from 'react';

function Trustedcard({ icon, title, description , style, style2, hover}) {
    return (
        <div className={`text-center flex-col pt-4 ${style} border-2 rounded-md cursor-pointer group`}>
            <div className='h-[3.7rem] w-[3.7rem] bg-[#d4cdd4] rounded-[50%] m-auto flex justify-center items-center'>
                <div className='h-[2.7rem] w-[2.7rem] bg-black group-hover:bg-white duration-300 ease-in-out delay-150 rounded-3xl flex justify-center items-center'>
                    {icon}
                </div>
            </div>
            <h4 className={`font-Poppins font-Five ${style2} ${hover} mt-3`}>{title}</h4>
            <p className={`text-[15px] text-[#494949] ${hover}`}>{description}</p>
        </div>
    );
}

export default Trustedcard;
