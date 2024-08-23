import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { getData } from "@/services/apiCall";
import { toast } from 'react-toastify';

 const useFetchUserAddress = () => {
    const [userAddress, setUserAddress] = useState([]);

    useEffect(() => {
        fetchAddress();
    }, []);

    async function fetchAddress() {
        try {
            // const fetchAdd =await getData("/user/address/");
            const fetchAdd = getData("/user/address/");
            // toast.promise(
            //     fetchAdd, {
            //         pending: "User address is being fetched...",
            //         success: "User address fetched successfully!",
            //         error: "User address couldn't be fetched."
            //     });

            const response = await fetchAdd;
            setUserAddress(response?.data?.addresses);
            // setUserAddress(fetchAdd?.data?.addresses);
        } catch (error) {
            // toast.error(error?.response?.data?.message || "An error occurred.");
            console.log(error?.response?.data?.message || "An error occurred.");
        }
    }

    return { userAddress };
};


function useOnlineStatus() {
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    }, [])
    return onlineStatus
}

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export { useOnlineStatus,useScrollToTop,useFetchUserAddress};


