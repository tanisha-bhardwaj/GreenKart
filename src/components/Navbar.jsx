// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';  
import { useSelector } from 'react-redux';  
import { useNavigate } from 'react-router-dom';



function Navbar({ selectedCategory, onSelectCategory }) {
  const tabs = ['Vegetables', 'Fruits', 'Flowers'];

    const {count } = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout')

    }

 // const cartCount = cartItems.length;
  return (
    <>
    <nav className="navbar">
      <h1>GreenKart </h1>
      <img src= {logo} alt="GreenKart Logo" className="logo-nav" />
      <input
          type="text"
          placeholder="Search items..."
            className="search-input"
        />
        <button className="search-button">Search 🔍</button>
        <img src={`/assets/cart.png`} alt="Cart" className="cart-logo" onClick={handleCheckout}/>
        {count > 0 &&
        <span className="cart-count">{count}</span>}
      </nav>
      <nav className="navbar-down">
      <ul className="nav-tabs">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={selectedCategory === tab ? 'active' : ''}
            onClick={() => onSelectCategory(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
}

export default Navbar;