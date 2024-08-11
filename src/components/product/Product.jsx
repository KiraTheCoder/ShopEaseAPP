export const ProductCard = ({ product }) => {
<<<<<<< HEAD
  
  return (
    <div className="w-[15rem] bg-slate-300 rounded overflow-hidden shadow-lg p-4 m-4">
      {product?.images?.map((image, index) => (
        <img key={index} className="w-full h-[8rem]" src={`data:${image.contentType};base64,${image.data};`} alt={product?.productName} />
      ))}

      {/* <h2 className="text-xl font-bold">{product?.productName}</h2> */}
      {/* <div className="px-6 py-4">
        <h2 className="text-xl font-bold">{product.productName}</h2>
        <p>{product.description}</p>
        <p>Stock: {product.stock}</p>
        <p>Category: {product.category}</p>
=======
  console.log(product);
  return (
    <div className="w-[15rem] bg-slate-300 rounded overflow-hidden shadow-lg p-4 m-4">
      {product.images?.map((image, index) => 
     {
        //  console.log(image);

      return <img key={index} className="w-full h-[8rem]" src={`data:${image.contentType};base64,${image.data}`} alt={product?.productName} />
    }
      )}
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold">{product?.productName}</h2>
        <p>{product?.description}</p>
        <p>Stock: {product?.stock}</p>
        <p>Category: {product?.category}</p>
>>>>>>> e30d6d9327ed5d0e57b75c2c2598e86c7235f2d9
      </div>
      <div className="px-6 py-4">
        <span className="text-gray-900 font-bold">{product?.price}</span>
      </div>
    </div>
  );
};
export default ProductCard;

