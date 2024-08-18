import MyProfile from '@/components/userProfle/myAccount/myProfile/MyProfile'
import Address from '@/components/userProfle/myAccount/AddressBook/Address'
import UserprofileImg from '@/components/userProfle/userMainProfile/UserprofileImg'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function UserAccount() {
    return (
        <div className=' w-[80vw] py-4 m-auto flex gap-12 my-4 '>
            <div className=' w-[15rem]'>
                <div className=''>
                    <h4 className='font-semibold text-md'>Manage my account</h4>
                    <ul className='ml-4 list-none leading-7 text-[14px]'>
                        <li><NavLink to="/useraccount/profile" className={({ isActive }) => ` cursor-pointer ${isActive ? "text-orange-500 " : "text-gray-600"}`}>My Profile</NavLink></li>
                        <li><NavLink to="/useraccount/address" className={({ isActive }) => ` cursor-pointer ${isActive ? "text-orange-500 " : "text-gray-600"}`}>AddressBook</NavLink></li>
                        <li><NavLink to="/" className={({ isActive }) => ` cursor-pointer ${isActive ? "text-orange-500 " : "text-gray-600"}`}>My Payment Options</NavLink></li>
                    </ul>
                </div>
                <div className='mt-3'>
                    <h4 className='font-semibold text-md'>My Orders</h4>
                    <ul className=' ml-4 list-none leading-7 text-[14px]'>
                        <li>My Returns</li>
                        <li>My Cancellations</li>
                    </ul>
                </div>
            </div>
            <div className='my-3'>
                <Outlet/>
            </div>
        </div>
    )
}

export default UserAccount