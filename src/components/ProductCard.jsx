import React from 'react';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cartSlice';

function ProductCard({ name, category, price }) {
  const dispatch = useDispatch();

  const itemInCart = useSelector((state) =>
    state.cart.items.find((item) => item.name === name)
  );

  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleAdd = () => {
    dispatch(addToCart({ name, category, price }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ name }));
  };

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <img className="img-style" src={`/assets/${name}.jpg`} alt={name} />
      <button className="remove-btn" onClick={handleRemove}>🗑</button>
      <h3>₹{price} (100g)</h3>
      <button
        className={quantity > 0 ? "add-style-selected" : "add-style"}
        onClick={handleAdd}
      >
        {quantity > 0 ? `Added (${quantity})` : 'Add to Cart 🛒'}
      </button>
    </div>
  );
}

export default ProductCard;
