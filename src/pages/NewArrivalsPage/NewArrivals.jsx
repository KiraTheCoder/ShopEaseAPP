const sampleArrivals = [
    {
        id: 1,
        name: "Men's Casual Shirt",
        category: 'Men',
        price: 49.99,
        image: 'https://th.bing.com/th/id/OIP.uw0EBiqnjhoxva93HWPsWgHaHa?rs=1&pid=ImgDetMain', // Replace with actual image URL
    },
    {
        id: 2,
        name: "Women's Summer Dress",
        category: 'Women',
        price: 59.99,
        image: 'https://i.pinimg.com/originals/23/45/89/234589033b9f077ef0b16ee06523b50a.png', // Replace with actual image URL
    },
    {
        id: 3,
        name: "Men's Denim Jacket",
        category: 'Men',
        price: 89.99,
        image: 'https://i.pinimg.com/originals/d8/0a/f4/d80af4b8486c0810bcf5271125615147.jpg', // Replace with actual image URL
    },
    {
        id: 4,
        name: "Women's Casual Top",
        category: 'Women',
        price: 39.99,
        image: 'https://www.kaleidoscope.co.uk/blog/wp-content/uploads/2020/04/together-tie-blouse_65G875FRSP-737x1024.jpg', // Replace with actual image URL
    },
];



const NewArrivals = () => {
   
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-center">New Arrivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleArrivals?.map((item) => (
                    <div key={item.id} className="bg-white p-4 h-fit rounded-lg shadow-md">
                        <div className='w-full h-auto object-cover rounded-t-lg'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-600 mb-2">{item.category}</p>
                            <p className="text-gray-800 font-bold">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewArrivals;
