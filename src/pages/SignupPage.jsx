import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });
  const [errors, setErrors] = useState({});
  const { signup } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      signup(formData);
      navigate('/profile');
    }
  };

  return (
    <div className="flex flex-col min-h-screen px-5 pt-10 page-fade-in max-w-[450px] mx-auto bg-white shadow-lg overflow-y-auto">
      <div>
        <h1 className="text-[28px] font-semibold text-text-dark mb-8 leading-tight">Create your <br />PopX account</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        <div className="input-group">
          <label className="input-label bg-white px-1 z-10">Full Name<span className="text-error">*</span></label>
          <input
            type="text"
            name="fullName"
            className="input-field"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
        </div>

        <div className="input-group">
          <label className="input-label bg-white px-1 z-10">Phone number<span className="text-error">*</span></label>
          <input
            type="text"
            name="phone"
            className="input-field"
            placeholder="1234567890"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        <div className="input-group">
          <label className="input-label bg-white px-1 z-10">Email address<span className="text-error">*</span></label>
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="marrydoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label className="input-label bg-white px-1 z-10">Password<span className="text-error">*</span></label>
          <input
            type="password"
            name="password"
            className="input-field"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <div className="input-group">
          <label className="input-label bg-white px-1 z-10">Company name</label>
          <input
            type="text"
            name="company"
            className="input-field"
            placeholder="Company name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="mb-10">
          <p className="text-text-dark font-medium mb-2.5">Are you an Agency?<span className="text-error">*</span></p>
          <div className="flex gap-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                className="accent-primary w-4.5 h-4.5"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span className="text-text-dark text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="no"
                className="accent-primary w-4.5 h-4.5"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              <span className="text-text-dark text-sm">No</span>
            </label>
          </div>
        </div>

        <div className="mt-auto py-10">
          <button type="submit" className="btn-primary">Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
