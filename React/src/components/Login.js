import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

import Header from './Header';
import Footer from './Footer';
const Login = () => {
  const [userType, setUserType] = useState('employee');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === 'employee') {
      navigate('/employee');
    } else if (userType === 'hr') {
      navigate('/hr');
    }
  };

  return (
    <div>    <Header />
    <div className="login-container">
      <h1>Login</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <select onChange={(e) => setUserType(e.target.value)}>
        <option value="employee">Employee</option>
        <option value="hr">HR</option>
      </select>
      <button onClick={handleLogin} className="button-animation">
        Login
      </button>
      <div className="footer">Mercedes-Benz © 2023</div>
    </div>
    < Footer/>
    </div>
  );
};

export default Login;
