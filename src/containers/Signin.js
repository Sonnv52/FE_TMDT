import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map_GG/text'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import './Login.css'
function SignIn() {
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
      <Map/>
      <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Sign Up</h2>
          <input placeholder="username..." className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="password..." className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input placeholder="password-comfirm..." className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Name..." className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="form-button" type="submit">Create</button>
          <div className="signup-link">
            
         <a href="/login">SignIn</a>
      </div>
      </form>
    </div>
  );
}

export default SignIn;
