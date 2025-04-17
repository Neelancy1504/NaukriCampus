// File: src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../api';
import JobCard from '../components/JobCard';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const res = await fetchJobs();
      setJobs(res.data);
    };
    getJobs();
  }, []);

  return (
    <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map(job => <JobCard key={job._id} job={job} />)}
    </div>
  );
};

export default Home;