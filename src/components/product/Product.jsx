export const ProductCard = ({ products }) => {
  return (
    <div className="w-[15rem] bg-slate-300 rounded overflow-hidden shadow-lg p-4 m-4">
      {products[0].images?.map((image, index) => 
     {   console.log(image);
      return <img key={index} className="w-full h-[8rem]" src={`data:${image.contentType};base64,${image.data}`} alt={products?.productName} />
    }
      )}
      {/* <div className="px-6 py-4">
        <h2 className="text-xl font-bold">{products.productName}</h2>
        <p>{products.description}</p>
        <p>Stock: {products.stock}</p>
        <p>Category: {products.category}</p>
      </div>
      <div className="px-6 py-4">
        <span className="text-gray-900 font-bold">{products.price}</span>
      </div> */}
    </div>
  );
};
export default ProductCard;

