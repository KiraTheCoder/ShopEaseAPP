import { Link } from "react-router-dom";
import { useFetchUserAddress } from "@/services/hooks";
import { MdDeleteForever } from "react-icons/md";
import { deleteData } from "@/services/apiCall";
import { toast } from "react-toastify";
import { useState } from "react";
import CreateAddress from "@/components/createAddress/CreateAddress";

function Address() {
    const { userAddress, refetch } = useFetchUserAddress(); 
    const [addId, setAddId] = useState('');

    const deleteAdd = async (Id) => {
        try {
            const deleteAddress = deleteData("/user/address", { addressId: Id });
            toast.promise(
                deleteAddress,
                {
                    pending: 'Deleting address...',
                    success: 'Address deleted successfully 👌',
                    error: 'Something went wrong 🤯',
                }
            );
            const result = await deleteAddress;
            if (result?.success) {
                refetch(); 
            }
        } catch (error) {
            // console.log('error ',error)
            toast.warn("Failed to delete address: " + error.message);
        }
    };

   
    if (!userAddress) return <div className="font-semibold">No addresses found.</div>;

    return (
        <div>
            {addId ? (
                <CreateAddress AddId={addId} />
            ) : (
                <>
                    <h3 className='uppercase font-DM font-bold text-lg text-[#db4444]'>My Addressbook</h3>
                    <div className='my-2'>
                        <div className="w-[30rem] flex gap-5 flex-wrap my-2 items-end">
                            {userAddress?.map((value, index) => (
                                <div key={index} className='flex items-center gap-4'>
                                    <div className='w-[20rem] flex items-center flex-wrap gap-2 text-[14px] p-3 bg-slate-200 capitalize border-4 border-amber-700'>
                                        <span className="font-semibold">Name:</span> {value?.fullName}, <span className="font-semibold">Street:</span> {value?.streetName}, <span className="font-semibold">Apartment / Floor:</span> {value?.aprtmentOrFloor}, <span className="font-semibold">Town / City:</span> {value?.townOrCity}, <span className="font-semibold">Mobile No.:</span> {value?.PhoneNumber}
                                    </div>
                                    <div>
                                        <li
                                            className='list-none text-[11px] text-[#db4444] underline cursor-pointer'
                                            onClick={() => setAddId(value._id)}
                                        >
                                            Modify Address
                                        </li>
                                        <MdDeleteForever
                                            className='text-[#db4444] text-xl cursor-pointer'
                                            onClick={() => deleteAdd(value._id)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-blue-500">
                            <Link to={"/useraccount/createaddress"}>New Address</Link>
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}

export { Address, useFetchUserAddress };




// import { Link } from "react-router-dom";
// import { useFetchUserAddress } from "@/services/hooks";
// import { MdDeleteForever } from "react-icons/md";
// import { deleteData } from "@/services/apiCall";
// import { toast } from "react-toastify";
// import { useState } from "react";
// import CreateAddress from "@/components/createAddress/CreateAddress";

// function Address() {
//     const { userAddress } = useFetchUserAddress();

//     const { addId, setAddId}=useState('')
      
//     const deleteAdd = async (Id) => {
//         try {
//             const deleteAddress = deleteData("/user/address", { addressId: Id });
//             toast.promise(
//                 deleteAddress,
//                 {

//                     pending: {
//                         render: 'Address deleted...',
//                         autoClose: 500,
//                     },
//                     success: {
//                         render: 'Address deleted Successfully 👌',
//                         autoClose: 500,
//                     },
//                     error: {
//                         render: 'Something went wrong.. 🤯',
//                         autoClose: 500,
//                     },

//                 }
//             );
//         const result =await deleteAddress;
//             if (result?.success) {
//                 useFetchUserAddress();
//             }

//         } catch (error) {
//             toast.warn("Failed to delete Address from user Profile" + error);
//         }
//     };

    
// console.log("userId is addid", addId);

//     return (
//         <div> 
//             {
//                 addId? <CreateAddress AddId={addId}/>:
//              <>
//             <h3 className='uppercase font-DM font-bold text-lg text-[#db4444]'>My Addressbook</h3>
//             <div className='my-2'>
//                 <div className="w-[30rem] flex gap-5 flex-wrap my-2 items-end">
//                     {
//                         userAddress?.map((value, index) => (
//                             <div key={index} className='flex items-center gap-4'>
//                                 <div className='w-[20rem] flex items-center flex-wrap gap-2 text-[14px] p-3 bg-slate-200 capitalize'>
//                                     <span className="font-semibold">Name:</span>{value?.fullName}, <span className="font-semibold">Street:</span>{value?.streetName}, <span className="font-semibold">Apartment / Floor:</span>{value?.aprtmentOrFloor}, <span className="font-semibold">Town / City:</span>{value?.townOrCity}, <span className="font-semibold">Mobile No.:</span>{value?.PhoneNumber}
//                                 </div>
//                                 <div>
//                                     <li className='list-none text-[11px] text-[#db4444] underline' onClick={() => setAddId(value._id)}> Modify Address</li>
//                                     <MdDeleteForever
//                                     className='text-[#db4444] text-xl cursor-pointer'
//                                     onClick={() => deleteAdd(value._id)}
//                                     />
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <p className="font-bold text-blue-500"><Link to={"/useraccount/createaddress"}>New Address</Link></p>
//             </div>
            
//             </>}
//         </div>
//     );
// }

// export { Address, useFetchUserAddress };








// import { Link } from "react-router-dom";
// import { useFetchUserAddress } from "@/services/hooks";

// function Address() {
//     const { userAddress } = useFetchUserAddress();

//     return (
//         <div>
//             <h3 className='uppercase font-DM font-bold text-lg text-[#db4444]'>My Addressbook</h3>
//             <div className='my-2'>
//                 <div className="w-[30rem] flex gap-5 flex-wrap my-2 items-end">
//                     {
//                         userAddress?.map((value, index) => (
//                             <div key={index} className='flex items-center gap-4'>
//                                 <div className='w-[20rem] flex items-center flex-wrap gap-2 text-[14px] p-3 bg-slate-200 capitalize'>
//                                     <span className="font-semibold">Name:</span>{value?.fullName}, <span className="font-semibold">Street:</span>{value?.streetName}, <span className="font-semibold">Apartment / Floor:</span>{value?.aprtmentOrFloor}, <span className="font-semibold">Town / City:</span>{value?.townOrCity}, <span className="font-semibold">Mobile No.:</span>{value?.PhoneNumber}
//                                 </div>
//                                 <div>
//                                     <Link to={""} className='list-none text-[11px] text-[#db4444] underline'>Modify Address</Link>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default { Address, useFetchUserAddress };





// import { getData } from "@/services/apiCall";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from 'react-toastify';

// function Address() {
//     const [userAddress, setUserAddress] = useState([]);

//     useEffect(() => {
//         fetchAddress();
//     }, []);

//     async function fetchAddress() {
//         try {
//             const fetchAdd = getData("/user/address/");
//             toast.promise(
//                 fetchAdd, {
//                     pending: "User address is being fetched...",
//                     success: "User address fetched successfully!",
//                     error: "User address couldn't be fetched."
//                 });
//             const response = await fetchAdd;
//             setUserAddress(response?.data?.addresses);
//         } catch (error) {
//             toast.error(error?.response?.data?.message || "An error occurred.");
//         }
//     }

//     return (
//         <div>
//             <h3 className='uppercase font-DM font-bold text-lg text-[#db4444]'>My Addressbook</h3>
//             <div className='my-2'>
//                 <div className="w-[30rem] flex gap-5 flex-wrap  my-2 items-end">
//                     {
//                         userAddress?.map((value, index) => (
//                             <div key={index} className=' flex items-center gap-4'>
//                                 <div className=' w-[20rem]  flex items-center flex-wrap gap-2 text-[14px] p-3 bg-slate-200 capitalize'>
//                                     <span className="font-semibold ">Name:</span>{value?.fullName}, <span className="font-semibold ">Street:</span>{value?.streetName}, <span className="font-semibold ">Apartment / Floor:</span>{value?.aprtmentOrFloor}, <span className="font-semibold ">Town / City:</span>{value?.townOrCity}, <span className="font-semibold ">Mobile No.:</span>{value?.PhoneNumber}
//                                 </div>
//                                 <div>
//                                     <Link to={""} className='list-none text-[11px] text-[#db4444] underline'>Modify Address</Link>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Address;







