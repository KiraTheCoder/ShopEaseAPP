import MyProfile from '@/components/userProfle/myAccount/myProfile/MyProfile'
import React from 'react'
import { Outlet } from 'react-router-dom'

function MyAccount() {
    return (
        <div className=' w-[90vw] flex gap-12 '>
            <div className='bg-orange-400 w-[15rem]'>
                <div>
                    <ul className='list-none text-[16px]'>
                    <h4 className='font-four text-sm'>Manage my account</h4>
                        <li>My Profile</li>
                        <li>AddressBook</li>
                        <li>My Payment Options</li>
                    </ul>
                </div>
                <div>
                    <ul className='list-none text-[16px]'>
                    {/* <h4 className='font-four text-sm'>My Orders</h4> */}
                    <p>hello</p>
                        <li>My Returns</li>
                        <li>My Cancellations</li>
                    </ul>
                </div>
            </div>
            <div>
              {/* <Outlet/> */}
              <MyProfile/>
            </div>
        </div>
    )
}

export default MyAccount