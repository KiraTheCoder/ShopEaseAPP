import ProductCard from "@/components/product/Product"
import { useEffect, useState } from "react"
import { postData } from "@/services/apiCall"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Shimmer from "@/components/shimmer/Shimmer"
import { usePagination } from "@/services/zustandStore"



function ItemsCollection() {
  const pages = [1, 2, 3, 4, 5, 6, 6, 7, 8];
  const [products, setProducts] = useState([])
  const { pageNo, setPageNo } = usePagination(state => state)

  useEffect(() => {
    (async () => {
      const result = await postData("/user/products/all", {
        pageNo: pageNo,
        limit: 10
      });
      setProducts(result?.data)
    })()
  }, [pageNo])


  if (products?.length == 0)
    return <Shimmer />

  return (
    <div className="flex flex-col items-center gap-4">
      {/* products */}
      <div className="w-[95vw] m-auto flex  gap-3 items-center flex-wrap ">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* pagination navigator */}
      <div className={`flex gap-5 items-center  `}>
        <FaArrowAltCircleLeft
          className={`${pageNo <= 1 ? "opacity-35" : null} hover:cursor-pointer`}
          size={23}
          disabled={pageNo <= 1}
          onClick={() => {
            if (!(pageNo <= 1)) {
              const previousPage = pageNo - 1
              setPageNo(previousPage)
            }
          }}
        />
        <div className="flex gap-5">
          {
            pages
              .map((pageNumber, i) => (
                <span
                  className={`text-lg hover:cursor-pointer h-[1.65rem] w-[1.65rem] text-center rounded-full  ${pageNumber == pageNo ? "bg-red-500" : "bg-green-500"} `}
                  key={i}
                  onClick={() => { setPageNo(pageNumber) }}
                >{pageNumber}
                </span>)
              )
          }
        </div>
        <FaArrowAltCircleRight
          className={`${pageNo >= pages.length - 1 ? "opacity-35" : null} hover:cursor-pointer`}
          size={23}
          disabled={pageNo >= pages.length - 1}
          onClick={() => {
            if (!(pageNo >= pages.length - 1)) {
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