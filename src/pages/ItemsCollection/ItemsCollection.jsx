import ProductCard from "@/components/product/Product"
import { useEffect, useState } from "react"
import { getData, postData } from "@/services/apiCall"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Shimmer from "@/components/shimmer/Shimmer"
import {useOptimizeProductsfetched, usePagination } from "@/services/zustandStore"


function ItemsCollection() {
  let limit = 10
  const [pagesLength, setPagesLength] = useState(0)
  const [products, setProducts] = useState([])
  const { pageNo, setPageNo } = usePagination(state => state)
const {datafetchedpageNo, fetchedProducts, setFetchedData}=useOptimizeProductsfetched((s)=>s)

  useEffect(() => {
    (async () => {
      const result1 = await getData("/user/products/all/count"); 
      if (result1?.success) {   
        const diviedPages = result1?.data?.count/ limit ;
        setPagesLength(Math.ceil(diviedPages))
      }
    })()
    
 if (datafetchedpageNo!=pageNo) {
    (async () => {
      const result2 = await postData("/user/products/all", {
        pageNo: pageNo,
        limit: limit
      });
      setFetchedData({datafetchedpageNo:pageNo, fetchedProducts:result2?.data})
    })()
  }
  }, [pageNo]) 


  if (fetchedProducts?.length == 0)
    return <Shimmer />

  return (
    <div className="flex bg-gray-100 flex-col items-center justify-center  gap-4 w-[100vw]  m-auto py-4">
      {/* products */}
      <div className="w-[95vw] m-auto flex  gap-3   justify-center py-4 flex-wrap ">
        {fetchedProducts?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* pagination navigator */}
      <div className={`flex gap-5 items-center  `}>
        <FaArrowAltCircleLeft
          className={`${pageNo <= 1 ? "opacity-35" : null} hover:cursor-pointer`}
          size={23}
          onClick={() => {
            if (!(pageNo <= 1)) {
              const previousPage = pageNo - 1
              setPageNo(previousPage)
            }
          }}
        />
        <div className="flex gap-5">

          {
            // pages
            //   .map((pageNumber, i) => (
            //     <span
            //       className={`text-lg hover:cursor-pointer h-[1.65rem] w-[1.65rem] text-center rounded-full  ${pageNumber == pageNo ? "bg-red-500" : "bg-green-500"} `}
            //       key={i}
            //       onClick={() => { setPageNo(pageNumber) }}
            //     >{pageNumber}
            //     </span>)
            //   )
          }

          <span>{pageNo}</span>
        </div>
        <FaArrowAltCircleRight
          className={`${pageNo >= pagesLength ? "opacity-35" : null} hover:cursor-pointer`}
          size={23}
          onClick={() => {
            if (!(pageNo >= pagesLength)) {
              const nextPage = pageNo + 1
              setPageNo(nextPage)
            }
          }}
        />
      </div>
    </div>
  )
}


export default ItemsCollection