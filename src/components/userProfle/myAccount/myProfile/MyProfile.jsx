import ShowFieldData from "@/components/ShowFieldData/ShowFieldData";
import { getData } from "@/services/apiCall";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

function MyProfile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        getUserData();
    }, []);

    async function getUserData() {
        try {
            const userdataPromise = getData("/user/user_data");
            const userdata = await userdataPromise;
            setUserData(userdata);
        } catch (error) {
            console.log('error in this page ', error)
        }
    }

    const { name, phoneNumber, email } = userData?.data || {};
    let arr = name ? name.split(" ") : []; 

    let firstName = arr[0] || "N/A";
    let middleName = arr.length === 3 ? arr[1] : null;
    let lastName = arr.length === 3 ? arr[2] : arr.slice(1).join(" ") || "N/A";

    if (!userData) return <div className="font-semibold">Loading...</div>;

    return (
        <div className="w-auto p-1">
            <h3 className='uppercase font-DM font-bold text-lg text-orange-500'>My Profile</h3>
            <div className='my-2'>
                <div className='flex gap-5 flex-wrap border my-2 items-end'>
                    <ShowFieldData heading={"First Name"} data={firstName} />
                    {middleName && <ShowFieldData heading={"Middle Name"} data={middleName} />}
                    <ShowFieldData heading={"Last Name"} data={lastName} />
                    <div><Link to={"/useraccount/updateName"} className='list-none '><FaRegEdit className="text-blue-400 text-xl"/></Link></div>
                </div>
                <div className='flex gap-5 flex-wrap border my-2 items-end'>
                    <ShowFieldData heading={"Email"} data={email || "N/A"} />
                    <ShowFieldData heading={"Mobile No"} data={phoneNumber || "N/A"} />
                    <div><Link to={"/updateAdd"} className='list-none '><FaRegEdit className="text-blue-400 text-xl"/></Link></div>
                </div>
                <div className='flex gap-5 flex-wrap border my-2 items-end'>
                    <ShowFieldData heading={"Password"} data={"•••••••••••••••"} />
                    <div><Link to={"/forgetpassword"} className='list-none '><FaRegEdit className="text-blue-400 text-xl"/></Link></div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;







