import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={addToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-600 transition"
      >
        <FaShoppingCart className="text-xl" />
        <span>Add to Cart</span>
      </button>
      {cartItems > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
          {cartItems}
        </div>
      )}
    </div>
  );
};

export default CartButton;
