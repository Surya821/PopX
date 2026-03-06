import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-bg-gray page-fade-in max-w-[450px] mx-auto bg-white shadow-lg flex flex-col">
      <div className="bg-white px-5 py-4 border-b border-[#E0E0E0]">
        <h2 className="text-lg font-medium text-text-dark">Account Settings</h2>
      </div>

      <div className="flex items-center gap-4 p-5 bg-bg-gray">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
            alt="Profile" 
            className="w-20 h-20 rounded-full object-cover" 
          />
          <div className="absolute bottom-0 right-0 bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold">{user.fullName || 'Marry Doe'}</h3>
          <p className="text-sm text-text-gray">{user.email || 'Marry@Gmail.Com'}</p>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-text-dark leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      
      <div className="px-5 border-t border-dashed border-[#CBCBCB] mt-5 pt-5">
        {/* Dash line as per design */}
      </div>

      <div className="p-5 mt-auto">
        <button onClick={logout} className="btn-secondary !w-auto !px-5 !py-2.5">Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
