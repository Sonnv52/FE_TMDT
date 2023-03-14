import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import './Login.css'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7164/api/Accounts/SignIn', { email, password });
      const token = response.data.token;
      const decoded = jwt_decode(token);
      localStorage.setItem('token', response.data.token);
      if (response.token != "Password or Email incorect") {
        navigate('/');
      } else {
        alert("Invalid username or password");
      }
      // save the token to localStorage or sessionStorage
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Login</h2>
          <input placeholder="username..." className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="password..." className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="form-button" type="submit">Login</button>
          <div className="signup-link">
         <a href="/signin">Create one</a>
      </div>
      </form>
      
    </div>
  );
}

export default Login;