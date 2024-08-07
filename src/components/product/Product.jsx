export  const ProductCard = ({ product }) => {
  console.log("rohit", product.image[0]);
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <img className="w-full h-9 " src={`http://localhost:5173/${product.image[0]}`} alt={product.name} />
      <div className="px-6 py-4">
      <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            {/* <p>${product.price}</p> */}
            <p>Stock: {product.stock}</p>
            <p>Category: {product.category}</p> </div>
      <div className="px-6 py-4">
        <span className="text-gray-900 font-bold">{product.price}</span>
        {/* <p className=' flex items-center gap-5 my-2'><span className='text-red-500 text-sm'>{product.price}</span> <span className='text-gray-500 text-sm line-through'>$1299</span> <span className='bg-green-300 p-1 text-[13px]'>30% OFF</span></p> */}
      </div>
    </div>
  );
};
export default ProductCard;


// export  const ProductCard = () => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
//       <img className="w-full" src="" alt="" />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">sgdfd</div>
//         <p className="text-gray-700 text-base">asdfasdasdgas</p>
//       </div>
//       <div className="px-6 py-4">
//         <span className="text-gray-900 font-bold">123124</span>
//         <p className=' flex items-center gap-5 my-2'><span className='text-red-500 text-sm'>saf</span> <span className='text-gray-500 text-sm line-through'>$1299</span> <span className='bg-green-300 p-1 text-[13px]'>30% OFF</span></p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// const App = () => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default App;
