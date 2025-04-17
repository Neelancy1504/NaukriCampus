// File: src/pages/MyJobs.jsx
import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../api';
import JobCard from '../components/JobCard';

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getMyJobs = async () => {
      const res = await fetchJobs();
      setJobs(res.data);
    };
    getMyJobs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Posted Jobs</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map(job => <JobCard key={job._id} job={job} />)}
      </div>
    </div>
  );
};

export default MyJobs;
