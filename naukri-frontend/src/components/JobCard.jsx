// // File: src/components/JobCard.jsx
// import React from 'react';

// const JobCard = ({ job }) => {
//   return (
//     <div className="border rounded-xl p-4 shadow hover:shadow-lg">
//       <h2 className="text-xl font-semibold">{job.title}</h2>
//       <p className="text-gray-600">{job.company} - {job.location}</p>
//       <p className="mt-2">{job.description}</p>
//       <p className="mt-1 text-sm text-green-600 font-medium">₹{job.salary}</p>
//     </div>
//   );
// };

// export default JobCard;

// File: src/components/JobCard.jsx
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 my-4 shadow-sm hover:shadow-md transition-shadow bg-white relative">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
          <div className="flex items-center mt-1">
            <span className="text-gray-600 font-medium">{job.company}</span>
            {job.company && <span className="mx-1 text-gray-400">•</span>}
            <span className="text-gray-600">{job.location}</span>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <img 
            src={job.companyLogo || "/placeholder-logo.png"} 
            alt={`${job.company} logo`} 
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>
      
      <div className="mt-4">
        <div className="text-sm text-gray-700 line-clamp-2">{job.description}</div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {job.skills && job.skills.map((skill, index) => (
          <span key={index} className="text-xs text-gray-600 px-2 py-1 bg-gray-100 rounded-full">
            {skill}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
        <div className="text-sm text-green-600 font-medium">₹{job.salary}</div>
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:text-blue-800 text-sm">Save</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;