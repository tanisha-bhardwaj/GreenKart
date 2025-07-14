import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../assets/logo.png';


function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, isAuthenticated } = useSelector((state) => state.user);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      await dispatch(loginUser(credentials));
      navigate('/home');
    };
  
    return (
      <div className="login-container">
        {/* <h2>Login to GreenKart</h2> */}
        <img src={logo} alt="GreenKart Logo" className="logo" />
        <form onSubmit={handleLogin} className ="form-style" >
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            required
          />
          <input
            
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    );
  }
  
  export default Login;