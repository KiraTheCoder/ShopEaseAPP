import ShowFieldData from "@/components/ShowFieldData/ShowFieldData"
import { Link } from "react-router-dom"
function MyProfile() {
    return (
        <div>
            <h3 className='uppercase font-DM font-bold text-lg text-[#db4444]'>My rofile</h3>
            <div className='my-2'>
                <div className='flex gap-5 my-2 items-end'>
                    <ShowFieldData heading={"First Name"} data={"md"} />
                    <ShowFieldData heading={"Last Name"} data={"rimal"} />
                    <div><li className='list-none text-[10px] text-[#db4444] underline'>Modify name</li></div>
                </div>
                <div className='flex gap-5 my-2 items-end'>
                    <ShowFieldData heading={"Email"} data={"example@gmail.com"} />
                    <ShowFieldData heading={"Mobile No"} data={"Mobile No"} />
                    <div><Link to={"/updateAdd"} className='list-none text-[10px] text-[#db4444] underline'>Modify / Add email</Link></div>
                </div>
                <div className='flex gap-5 my-2 items-end'>
                <ShowFieldData heading={"Password"} data={"•••••••••••••••"} />
                    <div><Link to={"/forgetpassword"} className='list-none text-[10px] text-[#db4444] underline'>Modify password</Link></div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile