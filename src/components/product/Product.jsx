export const ProductCard = ({ product }) => {
  console.log(product.image[0]);
  return (
    <div className="w-[15rem] bg-slate-300 rounded overflow-hidden shadow-lg p-4 m-4">
      <img className="w-full h-[8rem] " src={`http://localhost:8080/${product.image[0]}`} alt={product.productName} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold">{product.productName}</h2>
        <p>{product.description}</p>
        <p>Stock: {product.stock}</p>
        <p>Category: {product.category}</p> </div>
      <div className="px-6 py-4">
        <span className="text-gray-900 font-bold">{product.price}</span>
      </div>
    </div>
  );
};
export default ProductCard;

