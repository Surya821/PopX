import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-end min-h-screen px-5 pb-[60px] page-fade-in max-w-[450px] mx-auto bg-white shadow-lg">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-text-dark mb-2">Welcome to PopX</h1>
        <p className="text-text-gray text-base leading-relaxed">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,</p>
      </div>
      
      <div className="flex flex-col gap-2.5">
        <Link to="/signup" className="btn-primary">Create Account</Link>
        <Link to="/login" className="btn-secondary">Already Registered? Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;
