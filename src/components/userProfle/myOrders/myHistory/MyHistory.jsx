import { getData } from '@/services/apiCall';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useGetProduct } from '@/services/zustandStore';
function MyHistory() {
    // Correctly initialize state
    const [historyItems, setHistoryItems] = useState([]);
    const  setProduct = useGetProduct((state=>state.setProduct))
    const navigate=useNavigate()

    useEffect(() => {
        historyData();
    }, []);

    async function historyData() {
        try {
            // Await the API call
            const historyDone = getData("/user/orders/");
            toast.promise(
                historyDone,
                {
                    pending: "Your history is being processed...",
                    success: "Your history was retrieved successfully!",
                    error: "Your history could not be retrieved.",
                }
            );
            const result = await historyDone;
            setHistoryItems(result?.data?.orderHistory?.orderHistory || []);
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred.");
        }
    }

    return (
        <div className="p-4 scrollbar-hide ">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">My History</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {historyItems.length > 0 ? (
                    historyItems.map((item) => (
                        <div
                            onClick={()=>{
                            setProduct(item)
                            navigate("/useraccount/historyitems")
                            }} 
                            key={item.id}
                            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow "
                         >
                            <p className="text-gray-600 mb-2">Price: ₹ {item?.totalAmount}</p>
                            <p className="text-gray-600 mb-2">Address: <span className='text-[13px] text-gray-400'>{"user address"}</span></p>
                            <p className="text-gray-600 mb-2">Payment: {item?.paymentMethod}</p>
                            <p className="text-gray-500 text-sm">Date: {item?.date}</p>
                        </div>
                    ))
                ) : (
                    <p>No history items found.</p>
                )}
            </div>
        </div>
    );
}

export default MyHistory;
