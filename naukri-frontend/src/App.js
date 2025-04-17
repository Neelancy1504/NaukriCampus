import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import PostJob from './pages/PostJob';
import MyJobs from './pages/MyJobs';
import Prepare from './pages/Prepare';
import Participate from './pages/Participate';
import Opportunities from './pages/Opportunities';
import Profile from './pages/Profile';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route 
        path="/post-job" 
        element={
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/my-jobs" 
        element={
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        } 
      />
      <Route path="/prepare" element={<Prepare />} /> 
      <Route path="/participate" element={<Participate />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="container mx-auto pt-4">
            <AppRoutes />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;