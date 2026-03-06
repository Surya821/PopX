import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    const result = login(email, password);
    if (result.success) {
      navigate('/profile');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen px-5 pt-10 page-fade-in max-w-[450px] mx-auto bg-white shadow-lg">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-text-dark mb-2 leading-tight">Signin to your <br />PopX account</h1>
        <p className="text-text-gray text-base leading-relaxed">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-7">
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input 
            type="email" 
            className="input-field"
            placeholder="Enter email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Password</label>
          <input 
            type="password" 
            className="input-field"
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-error text-sm mb-2.5">{error}</p>}

        <button 
          type="submit" 
          className={`btn-primary w-full ${(!email || !password) ? '!bg-[#CBCBCB]' : ''}`}
          disabled={!email || !password}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
