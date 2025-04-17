// File: src/pages/PostJob.jsx
import React from 'react';
import JobForm from '../components/JobForm';

const PostJob = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Post a New Job</h1>
      <JobForm />
    </div>
  );
};
export default PostJob;
