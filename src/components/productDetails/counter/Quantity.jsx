import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

function Quantity() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className='w-20 h-6 rounded-xl flex justify-between bg-gray-400'>
            {quantity >= 2 ? (
                <button
                    className='w-6 rounded-l-xl text-sm flex justify-center items-center'
                    onClick={handleDecrement}
                >
                    <FaMinus />
                </button>
            ) : (
                <button
                    className='w-6 rounded-l-xl text-lg flex justify-center items-center text-[#db4444]'
                    onClick={handleDecrement}
                >
                    <MdDeleteForever />
                </button>
            )}
            <div className='w-8 bg-gray-200 text-center text-[16px] flex items-center justify-center'>
                {quantity}
            </div>
            <button
                className='w-6 rounded-r-xl text-sm flex justify-center items-center'
                onClick={handleIncrement}
            >
                <FaPlus />
            </button>
        </div>
    );
}

export default Quantity;
