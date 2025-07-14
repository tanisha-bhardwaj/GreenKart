import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cartSlice';
import './orderConfirmation.css';
import confetti from 'canvas-confetti';

function OrderConfirmation() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Confetti burst on page load
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
    };
    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
  
        if (timeLeft <= 0) {
          clearInterval(interval);
        }
  
        confetti({
          ...defaults,
          particleCount: 50,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2, // spreads more over page
          },
        });
      }, 200);
    }, []);

    const handleGoHome = () => {
         dispatch(clearCart());
        navigate('/home');
    };
  return (
    <div className="order-confirmation">
      <h1>🎉 Order Confirmed!</h1>
      <h2>Thank you for your order! Your items will be delivered soon.</h2>
        <button onClick={handleGoHome} className="go-home-button">
            Go to Home </button>
    </div>
  );
}   

export default OrderConfirmation;