import MyProfile from '@/components/userProfle/myAccount/myProfile/MyProfile'
// import Address from '@/components/userProfle/myAccount/AddressBook/Address'
import UserprofileImg from '@/components/userProfle/userMainProfile/UserprofileImg'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function UserAccount() {
    return (
        <div className='w-[95vw] sm:w-[90vw] lg:w-[80vw] py-4 m-auto flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 md:gap-6 lg:gap-12 my-4 '>
            <div className='w-full sm:w-[15rem] bg-slate-200 flex sm:flex-col justify-around sm:justify-start md:flex-none '>
                <div className=''>
                    <h4 className='font-semibold text-md'>Manage my account</h4>
                    <ul className='ml-4 list-none leading-7 text-[14px]'>
                        <li><NavLink to="/useraccount/profile" className={({ isActive }) => ` cursor-pointer ${isActive ? "text-orange-500 " : "text-gray-600"}`}>My Profile</NavLink></li>
                        <li><NavLink to="/useraccount/address" className={({ isActive }) => ` cursor-pointer ${isActive ? "text-orange-500 " : "text-gray-600"}`}>AddressBook</NavLink></li>
                        <li><NavLink to="/" className={({ isActive }) => ` cursor-pointer ${isActive ? "text-orange-500 " : "text-gray-600"}`}>My Payment Options</NavLink></li>
                    </ul>
                </div>
                <div className='sm:mt-3'>
                    <h4 className='font-semibold text-md'>My Orders</h4>
                    <ul className=' ml-4 list-none leading-7 text-[14px]'>
                        <li>My Returns</li>
                        <li>My Cancellations</li>
                    </ul>
                </div>
            </div>
            <div className='my-3 w-full flex justify-center sm:auto'>
                <Outlet/>
            </div>
        </div>
    )
}

export default UserAccount