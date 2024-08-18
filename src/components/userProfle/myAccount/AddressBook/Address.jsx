import { Link } from "react-router-dom"

function Address() {
    return (
        <div className=' '>
            <h3 className='uppercase font-DM font-bold text-lg text-[#db4444]'>My Addressbook</h3>
            <div className='my-2 '>
                <div className="flex gap-6">
                    <div className='border-2 border-gray-200 rounded-sm min-h-10 flex items-center w-[20rem] text-[14px] pl-3 bg-slate-200'>address</div>
                    <div><Link to={""} className='list-none text-[10px] text-[#db4444] underline'>Modify Address</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Address