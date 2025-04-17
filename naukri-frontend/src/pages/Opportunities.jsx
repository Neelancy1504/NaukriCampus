// File: src/pages/Opportunities.jsx
import React, { useState } from 'react';

const Opportunities = () => {
  const [activeTab, setActiveTab] = useState('internships');
  
  const internships = [
    {
      id: 1,
      title: "Frontend Development Intern",
      company: "TechCorp Solutions",
      location: "Remote",
      duration: "3 months",
      stipend: "₹25,000/month",
      skills: ["React", "JavaScript", "CSS"]
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      company: "CreativeMinds",
      location: "Delhi",
      duration: "6 months",
      stipend: "₹20,000/month",
      skills: ["Figma", "UI Design", "Prototyping"]
    },
    {
      id: 3,
      title: "Full Stack Developer Intern",
      company: "WebFusion Technologies",
      location: "Bangalore",
      duration: "4 months",
      stipend: "₹30,000/month",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Mobile App Development Intern",
      company: "AppLabs",
      location: "Hybrid",
      duration: "6 months",
      stipend: "₹28,000/month",
      skills: ["React Native", "JavaScript", "API Integration"]
    }
  ];
  
  const trainings = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      organization: "CodeAcademy",
      duration: "12 weeks",
      mode: "Online",
      fee: "₹15,000",
      features: ["24/7 Mentor Support", "Certification", "Job Assistance"]
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      organization: "DataLearn",
      duration: "8 weeks",
      mode: "Hybrid",
      fee: "₹20,000",
      features: ["Live Projects", "Industry Experts", "Career Counseling"]
    },
    {
      id: 3,
      title: "Full Stack JavaScript",
      organization: "TechSkill Institute",
      duration: "16 weeks",
      mode: "Online",
      fee: "₹25,000",
      features: ["MERN Stack", "Portfolio Projects", "Interview Prep"]
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Career Opportunities</h1>
      <p className="text-lg text-gray-600 mb-8">Explore internships, trainings, and other career opportunities.</p>
      
      <div className="mb-8 border-b">
        <div className="flex space-x-6">
          <button 
            className={`py-3 px-4 font-medium ${activeTab === 'internships' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            onClick={() => setActiveTab('internships')}
          >
            Internships
          </button>
          <button 
            className={`py-3 px-4 font-medium ${activeTab === 'trainings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            onClick={() => setActiveTab('trainings')}
          >
            Trainings
          </button>
        </div>
      </div>
      
      {activeTab === 'internships' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internships.map(internship => (
            <div key={internship.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{internship.title}</h2>
              <p className="text-gray-600 font-medium mb-3">{internship.company}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {internship.location}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {internship.duration}
                </div>
                <div className="flex items-center text-green-600">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {internship.stipend}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {internship.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === 'trainings' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.map(training => (
            <div key={training.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{training.title}</h2>
              <p className="text-gray-600 font-medium mb-3">{training.organization}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>{training.duration}</span>
                <span>{training.mode}</span>
              </div>
              <p className="text-green-600 font-medium mb-4">{training.fee}</p>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h3>
                <ul className="text-sm text-gray-600">
                  {training.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-1">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Opportunities;