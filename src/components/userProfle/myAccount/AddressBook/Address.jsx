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
                            <div key={index} className=' flex items-center gap-4'>
                                <div className=' w-[20rem]  flex items-center flex-wrap gap-2 text-[14px] p-3 bg-slate-200 capitalize'>
                                    <span className="font-semibold ">Name:</span>{value?.fullName}, <span className="font-semibold ">Street:</span>{value?.streetName}, <span className="font-semibold ">Apartment / Floor:</span>{value?.aprtmentOrFloor}, <span className="font-semibold ">Town / City:</span>{value?.townOrCity}, <span className="font-semibold ">Mobile No.:</span>{value?.PhoneNumber}
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



