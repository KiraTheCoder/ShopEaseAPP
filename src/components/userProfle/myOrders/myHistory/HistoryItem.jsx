import { useGetProduct } from '@/services/zustandStore';
import React from 'react'

function HistoryItem() {

  const Product = useGetProduct((state) => state.product);
  console.log("product is aaaa", Product?.productIDs);


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#db4444]">My Ordered items details</h2>
      <div>

      </div>
    </div>
  )
}

export default HistoryItem