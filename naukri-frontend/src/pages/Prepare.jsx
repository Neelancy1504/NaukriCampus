// File: src/pages/Prepare.jsx
import React from 'react';

const Prepare = () => {
  const resources = [
    {
      id: 1,
      title: "Interview Preparation Guide",
      description: "Comprehensive guide covering technical and behavioral questions",
      type: "PDF Guide",
      difficulty: "All Levels"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms Course",
      description: "Master the fundamentals of DSA with practical examples",
      type: "Video Course",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Resume Building Workshop",
      description: "Learn how to create an ATS-friendly resume that stands out",
      type: "Workshop",
      difficulty: "Beginner"
    },
    {
      id: 4,
      title: "System Design for Frontend Developers",
      description: "Learn component architecture and state management best practices",
      type: "Tutorial Series",
      difficulty: "Advanced"
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Prepare for Your Dream Role</h1>
      <p className="text-lg text-gray-600 mb-8">Access resources to help you prepare for technical interviews and assessments.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map(resource => (
          <div key={resource.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{resource.type}</span>
              <span className="text-sm text-gray-500">{resource.difficulty}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
              Access Resource
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mock Interview Practice</h2>
        <p className="text-gray-600 mb-4">Book a mock interview session with industry experts to practice your skills and get feedback.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
          Schedule Now
        </button>
      </div>
    </div>
  );
};

export default Prepare;