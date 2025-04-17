// File: src/pages/Login.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4 text-center">Login to Your Account</h1>
      <p className="text-gray-600 mb-6 text-center">Enter your credentials to access your account</p>
      <LoginForm />
    </div>
  );
};

export default Login;