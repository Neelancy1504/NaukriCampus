// // File: src/components/LoginForm.jsx
// import React, { useState } from 'react';
// import { loginUser } from '../api';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
    
//     try {
//       const response = await loginUser(formData);
      
//       // Store token in localStorage
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
      
//       console.log('Login successful!', response.data);
      
//       // Redirect to job posting page
//       navigate('/post-job');
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
//       {error && <div className="p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}
      
//       <div>
//         <label className="block mb-1">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
      
//       <div>
//         <label className="block mb-1">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
      
//       <button 
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
//         disabled={loading}
//       >
//         {loading ? 'Logging in...' : 'Login'}
//       </button>
//     </form>
//   );
// };

// export default LoginForm;


// File: src/components/LoginForm.jsx
import React, { useState } from 'react';
import { loginUser } from '../api';
import { useNavigate, Link } from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await loginUser(formData);
      
      // Store token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      console.log('Login successful!', response.data);
      
      // Redirect to job posting page
      navigate('/post-job');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login to Your Account</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}
        
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
          <div className="text-right mt-1">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
        
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 w-full font-medium transition-colors"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        
        <div className="text-center text-gray-600">
          Don't have an account? 
          <Link to="/register" className="text-blue-600 hover:underline ml-1">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;