// // // File: src/components/JobForm.jsx
// // import React, { useState } from 'react';
// // import { postJob } from '../api';

// // const JobForm = () => {
// //   const [formData, setFormData] = useState({ title: '', company: '', location: '', description: '', salary: '' });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await postJob(formData);
// //       alert('Job posted successfully!');
// //     } catch (err) {
// //       console.error(err);
// //       alert('Failed to post job');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-4">
// //       <input name="title" placeholder="Job Title" className="w-full p-2 border rounded" onChange={handleChange} required />
// //       <input name="company" placeholder="Company" className="w-full p-2 border rounded" onChange={handleChange} required />
// //       <input name="location" placeholder="Location" className="w-full p-2 border rounded" onChange={handleChange} required />
// //       <input name="salary" placeholder="Salary" className="w-full p-2 border rounded" onChange={handleChange} required />
// //       <textarea name="description" placeholder="Job Description" className="w-full p-2 border rounded" onChange={handleChange} required />
// //       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Post Job</button>
// //     </form>
// //   );
// // };

// // export default JobForm;

// // File: src/components/JobForm.jsx
// import React, { useState } from 'react';
// import { postJob } from '../api';
// import { useNavigate } from 'react-router-dom';

// const JobForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: '',
//     company: '',
//     location: '',
//     description: '',
//     salary: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Check if we have a token
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setError('You need to login first!');
//         return;
//       }
      
//       await postJob(formData);
//       // On success, redirect to my jobs page
//       navigate('/my-jobs');
//     } catch (error) {
//       console.error('Error posting job:', error);
//       setError(error.response?.data?.message || 'Failed to post job. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {error && <div className="p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}
      
//       <div>
//         <label className="block mb-1">Job Title</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
      
//       <div>
//         <label className="block mb-1">Company</label>
//         <input
//           type="text"
//           name="company"
//           value={formData.company}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
      
//       <div>
//         <label className="block mb-1">Location</label>
//         <input
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
      
//       <div>
//         <label className="block mb-1">Description</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           rows="4"
//           required
//         />
//       </div>
      
//       <div>
//         <label className="block mb-1">Salary</label>
//         <input
//           type="text"
//           name="salary"
//           value={formData.salary}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
      
//       <button 
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Post Job
//       </button>
//     </form>
//   );
// };

// export default JobForm;

// File: src/components/JobForm.jsx
import React, { useState } from 'react';
import { postJob } from '../api';
import { useNavigate } from 'react-router-dom';


const JobForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    salary: '',
    skills: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if we have a token
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You need to login first!');
        return;
      }
      
      // Convert skills string to array if provided
      const dataToSubmit = {...formData};
      if (formData.skills) {
        dataToSubmit.skills = formData.skills.split(',').map(skill => skill.trim());
      }
      
      await postJob(dataToSubmit);
      // On success, redirect to my jobs page
      navigate('/my-jobs');
    } catch (error) {
      console.error('Error posting job:', error);
      setError(error.response?.data?.message || 'Failed to post job. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Post a New Job</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Salary</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g. 50,000-2 Lacs PA"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Skills Required</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g. React, CSS, JavaScript (comma-separated)"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            rows="5"
            required
          />
        </div>
        
        <div className="flex justify-end">
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;