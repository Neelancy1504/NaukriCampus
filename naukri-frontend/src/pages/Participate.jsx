// File: src/pages/Participate.jsx
import React from 'react';

const Participate = () => {
  const events = [
    {
      id: 1,
      title: "Frontend Hackathon 2025",
      date: "May 12-14, 2025",
      description: "Build innovative web applications with React in this 48-hour coding challenge",
      participants: 1250,
      registrationOpen: true
    },
    {
      id: 2,
      title: "Code Olympics: Algorithm Challenge",
      date: "June 5, 2025",
      description: "Test your problem-solving skills with competitive programming challenges",
      participants: 876,
      registrationOpen: true
    },
    {
      id: 3,
      title: "UI/UX Design Sprint",
      date: "May 25, 2025",
      description: "Design user-friendly interfaces and present your solutions to industry experts",
      participants: 543,
      registrationOpen: true
    },
    {
      id: 4,
      title: "Backend Systems Architecture Competition",
      date: "July 10-11, 2025",
      description: "Design scalable backend systems and databases for real-world problems",
      participants: 420,
      registrationOpen: false
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Participate in Coding Challenges</h1>
      <p className="text-lg text-gray-600 mb-8">Join competitions, hackathons, and coding events to showcase your skills to potential employers.</p>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-semibold mb-3">Upcoming Featured Event</h2>
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
          <div className="w-full md:w-1/3 bg-blue-600 text-white p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">Full Stack Development Challenge</h3>
            <p className="mb-2">April 28-30, 2025</p>
            <div className="flex items-center">
              <span className="text-sm bg-blue-800 px-3 py-1 rounded-full">Registration Open</span>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-6">
            <p className="text-gray-600 mb-4">
              Build a complete web application with frontend and backend components. Compete for prizes and job opportunities with top tech companies.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">React</span>
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Node.js</span>
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">MongoDB</span>
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">UI/UX</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{event.title}</h3>
            <p className="text-blue-600 font-medium mb-2">{event.date}</p>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{event.participants} participants</span>
              {event.registrationOpen ? (
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm transition-colors">
                  Register
                </button>
              ) : (
                <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Coming Soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participate;