// src/pages/CheckoutPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './checkout.css';

function CheckoutPage() {
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = totalAmount * 0.18; // 5% tax 
  const finalAmount = totalAmount + tax;

  const handlePlaceOrder = () => {
    navigate('/order-confirmation');
  };

  return (
    <div className="checkout-wrapper">
        <div className="checkout-header">
            
      <h2 className="checkout-title">🧾 Your Cart Summary</h2>
      {items.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <>
          <div className="checkout-table">
            <div className="table-header">
            <div className="col">Image</div>
            <div className="col">Item Name</div>
            <div className="col">Category</div>
            <div className="col">Quantity</div>
            <div className="col">Price</div>
            </div>

            {items.map((item, index) => (
              <div className="table-row" key={index}>
            
                <div className="col"><img src={`/assets/${item.name}.jpg`} alt={item.name} className="checkout-img" /></div>
                <div className="col">{item.name}</div>
                <div className="col">{item.category}</div>
                <div className="col">{item.quantity}</div>
                <div className="col">₹{item.price}</div>
              </div>
            ))}
          </div>

          
        </>
      )}
      </div>
      <div className="checkout-footer">
        <h2>Items Details</h2>
      <table className="billing-table">
              <tbody>
                <tr>
                  <td>Total Amount</td>
                  <td>₹{totalAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>GST (18%)</td>
                  <td>₹{tax.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Final Amount</strong></td>
                  <td><strong>₹{finalAmount.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
      <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order 🛍️
          </button>
          <p>Thank you for shopping with us! 🌱</p>
          
        </div>
        
    </div>
  );
}

export default CheckoutPage;
