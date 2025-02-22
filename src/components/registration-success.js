import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Registration Successful!</h1>
        <p className="text-gray-700 mb-6">Thank you for registering your church with us. We're excited to have you on board.</p>
        <div className="space-y-4">
          <div className="flex justify-center">
            <img src="https://via.placeholder.com/150" alt="Church" className="rounded-lg shadow-md" />
          </div>
          <p className="text-gray-700">You will receive a confirmation email with further details. If you have any questions, please feel free to contact us.</p>
        </div>
        <button
          onClick={handleHomeClick}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
