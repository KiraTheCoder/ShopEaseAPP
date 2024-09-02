import { RiExchangeLine,RiCashLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
const DeliveryInfo=()=>{
    return(
    <>
        <div className="w-[35rem] flex justify-between flex-wrap">
            <div className="w-[8rem] bg-slate-100 flex flex-col items-center py-2 rounded-xl border-[1px] border-gray-800 cursor-pointer shadow-[0_0_8px_2px_rgba(0,0,0,0.7)] ...">
                <div><RiExchangeLine className="w-[2rem] h-[2rem] text-orange-600 mb-2 "/> </div>
                <div className="text-center text-sm">5 days Return & Exchange</div>
            </div>
            <div className="w-[8rem] bg-slate-100 flex flex-col items-center py-2 rounded-xl border-[1px] border-gray-800 cursor-pointer shadow-[0_0_8px_2px_rgba(0,0,0,0.7)] ...">
                <div><RiCashLine className="w-[2rem] h-[2rem] text-orange-600 mb-2 "/></div>
                <div className="text-center text-sm">Pay On delivery</div>
            </div>
            <div className="w-[8rem] bg-slate-100 flex flex-col items-center py-2 rounded-xl border-[1px] border-gray-800 cursor-pointer shadow-[0_0_8px_2px_rgba(0,0,0,0.7)] ...">
                <div><TbTruckDelivery className="w-[2rem] h-[2rem] text-orange-600 mb-2 "/></div>
                <div className="text-center text-sm">shisha milano Delivered</div>
            </div>
            <div className="w-[8rem] bg-slate-100 flex flex-col items-center py-2 rounded-xl border-[1px] border-gray-800 cursor-pointer shadow-[0_0_8px_2px_rgba(0,0,0,0.7)] ...">
                <div><GrSecure className="w-[2rem] h-[2rem] text-orange-600 mb-2 "/></div>
                <div className="text-center text-sm">Secure transaition</div>
            </div>
        </div>
    </>
    )
}
export default DeliveryInfo;