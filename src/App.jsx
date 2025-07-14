import { useState } from "react";
import Home from "./pages/home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import "./App.css";
import Checkout from "./pages/checkout";
import  OrderConfirmation from "./pages/orderConfirmation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="className">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Define route components */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </div>
  );
}

export default App;
