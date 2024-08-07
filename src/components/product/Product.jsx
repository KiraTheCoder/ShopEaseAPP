// src/App.js
import React from 'react';
const product=[
  {
    imageUrl:"",
    name:"Product 1",
    description:"",

  },
]

export  const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <img className="w-full" src={product.imageUrl} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="text-gray-900 font-bold">{product.price}</span>
        <p className=' flex items-center gap-5 my-2'><span className='text-red-500 text-sm'>{product.price}</span> <span className='text-gray-500 text-sm line-through'>$1299</span> <span className='bg-green-300 p-1 text-[13px]'>30% OFF</span></p>
      </div>
    </div>
  );
};

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
