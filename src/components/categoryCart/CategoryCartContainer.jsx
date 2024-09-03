import React from 'react'
import CategoryCart from './CategoryCart'

const categoryOfProducts = [
    {
        productName: "Sleep wear",
        img: "https://www.fablar.com/wp-content/uploads/2020/09/1576030242dd9b45983f1a7bc29e7bac51cf0e2e01_wps%E5%9B%BE%E7%89%87.jpg",
        discount: "10-30%",
    },
    {
        productName: "summer wear",
        img: "https://th.bing.com/th/id/OIP.4Y4ytbFPD-bw2mkUmLIPhAHaLH?rs=1&pid=ImgDetMain",
        discount: "25-70%",
    },
    {
        productName: "Office Wear",
        img: "https://allsortsworkwear.com.au/cdn/shop/files/biz-collection-corporate-wear-biz-collection-men-s-edge-long-sleeve-shirt-s267ml-14693403295882_1cd0f7db-151a-49ff-975b-121536efc1e0.jpg?v=1721709036&width=480",
        discount: "10-50%",
    },
    {
        productName: "men's Ethnic wear",
        img: "https://www.rajwadi.com/image/cache/data/traditional-wear-silk-indowestern-set-for-men-41785-800x1100.jpg",
        discount: "20-70%",
    },
    {
        productName: "women's casual wear",
        img: "https://linnstyle.com/wp-content/uploads/2018/09/IMG_0127.jpg",
        discount: "5-40%",
    },
    {
        productName: "men's casual wear",
        img: "https://th.bing.com/th/id/OIP.X0YHxtrPBfWYzvdD1ThArwAAAA?rs=1&pid=ImgDetMain",
        discount: "10-40%",
    },
    {
        productName: "women's Ethnic wear",
        img: "https://th.bing.com/th/id/OIP.gYF68W6dRuxoS5KSeSuYiQHaKM?rs=1&pid=ImgDetMain",
        discount: "20-60%",
    },
    {
        productName: "Kid's Wear",
        img: "https://th.bing.com/th/id/OIP.GU-gRNeR9CKEluaTq4iahQHaJr?rs=1&pid=ImgDetMain",
        discount: "10-70%",
    },
    {
        productName: "Men's Sports wear",
        img: "https://www.instaloverz.com/wp-content/uploads/2017/04/25.-Sports-Outfits.jpg",
        discount: "20-30%",
    },
    {
        productName: "women's Sports wear",
        img: "https://th.bing.com/th/id/OIP.gzrixLZv2pl0C_MEaYMAPgHaKe?rs=1&pid=ImgDetMain",
        discount: "10-50%",
    },

];


function CategoryCartContainer() {

    return (<>
        <h2 className='font-light italic text-5xl text-center my-3'>Categories to cart</h2>
        <div className="w-[100vw] m-auto flex  justify-center gap-10 py-4 flex-wrap ">
            {categoryOfProducts?.map((product, index) => (
                <CategoryCart key={index} categoryproduct={product} />
            ))}
        </div>
    </>
    )
}

export default CategoryCartContainer