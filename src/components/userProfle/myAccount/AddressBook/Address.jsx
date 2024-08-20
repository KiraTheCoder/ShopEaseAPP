import { getData } from "@/services/apiCall";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function Address() {
    const [userAddress, setUserAddress] = useState([]);

    useEffect(() => {
        fetchAddress();
    }, []);

    async function fetchAddress() {
        console.log("rohit address fetched");

        try {
            const fetchAdd = getData("/user/address/");
            toast.promise(
                fetchAdd, {
                    pending: "User address is being fetched...",
                    success: "User address fetched successfully!",
                    error: "User address couldn't be fetched."
                }
            );

            const response = await fetchAdd;
            setUserAddress(response?.data?.addresses);
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred.");
        }
    }

    return (
        <div>
            <h3 className='uppercase font-DM font-bold text-lg text-[#db4444]'>My Addressbook</h3>
            <div className='my-2'>
                <div className="w-[30rem] flex gap-5 flex-wrap  my-2 items-end">
                    {
                        userAddress?.map((value, index) => (
                            <div key={index} className=' flex gap-4'>
                                <div className=' w-[20rem] min-h-10 flex items-center text-[14px] pl-3 bg-slate-200'>
                                    {value?.fullName}, {value?.streetName},{value?.aprtmentOrFloor},{value?.townOrCity} {value?.PhoneNumber}
                                </div>
                                <div>
                                    <Link to={""} className='list-none text-[11px] text-[#db4444] underline'>Modify Address</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Address;





// import { getData } from "@/services/apiCall";
// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import { toast } from 'react-toastify';
// function Address() {
//     const [userAddress, setUserAddress] = useState({})

//     useEffect(() => {
//         fetchAddress()
//     }, [])

//     async function fetchAddress() {
//         console.log("rohit address fetched");

//         try {
//             const fetchAdd = getData("/user/address/",);
//             toast.promise(
//                 fetchAdd, {
//                 pending: "User address is being fetched...",
//                 success: "User address fetched successfully!",
//                 error: "User address couldn't be fetched."
//             }
//             );

//             const response = await fetchAdd;
//             // console.log(response?.data);
            
//             setUserAddress(response?.data)
//             actions.resetForm();
//         }
//         catch (error) {
//             toast.error(error?.response?.data?.message || "An error occurred.");
//         }
//     }

//     return (
//         <div className=' '>
//             <h3 className='uppercase font-DM font-bold text-lg text-[#db4444]'>My Addressbook</h3>
//             <div className='my-2 '>
//                 <div className="flex gap-5 flex-wrap border my-2 items-end">
//                     {
//                         userAddress? userAddress?.map((value, index)=>{
//                             <div className='border-2 border-gray-200 rounded-sm min-h-10 flex items-center w-[90vw] sm:w-[20rem] text-[14px] pl-3 bg-slate-200'>{value.fullName, value.streetName, value.PhoneNumber}</div>
//                             <div><Link to={""} className='list-none text-[10px] text-[#db4444] underline'>Modify Address</Link></div>

//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Address