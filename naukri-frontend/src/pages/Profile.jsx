import { Edit, MapPin, Phone, Mail, Calendar, User } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-5xl overflow-hidden">
        <div className="flex flex-col md:flex-row ">
          {/* Main Profile Section */}
          <div className="flex-grow p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              {/* Profile Photo */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-36 h-36 rounded-full bg-gray-500 flex items-center justify-center text-white">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl mb-1">+</span>
                      <span className="text-sm">Add photo</span>
                    </div>
                  </div>
                  {/* Progress Circle */}
                  <div className="absolute inset-0 rounded-full border-4 border-green-500 border-l-transparent border-r-transparent border-b-transparent transform -rotate-45"></div>
                  <div className="absolute bottom-0 right-0 bg-white text-green-500 font-semibold text-sm px-2 py-0.5 rounded-full">
                    85%
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold">Neelancy</h1>
                  <button className="text-gray-400">
                    <Edit size={18} />
                  </button>
                </div>
                <h2 className="text-lg font-medium mb-1">B.Tech/B.E.</h2>
                <p className="text-gray-600 mb-6">Maharaja Surajmal Institute of Technology, Delhi</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} className="text-gray-400" />
                    <span>New Delhi</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={18} className="text-gray-400" />
                    <span>8595389738</span>
                    <span className="ml-1 text-green-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <User size={18} className="text-gray-400" />
                    <span>Female</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={18} className="text-gray-400" />
                    <span>neelancynain0205@...</span>
                    <span className="ml-1 text-green-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} className="text-gray-400" />
                    <span>15th November 2004</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-orange-50 p-6 md:w-80">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 19V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path d="M16 3v7l-4-3-4 3V3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="font-medium">Add Internship</span>
                </div>
                <span className="text-green-500 font-medium">↑ 8%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="font-medium">Add certificates</span>
                </div>
                <span className="text-green-500 font-medium">↑ 5%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M18 19c-1.5-2.5-3.5-4-6-4s-4.5 1.5-6 4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="font-medium">Upload photo</span>
                </div>
                <span className="text-green-500 font-medium">↑ 2%</span>
              </div>

              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-full mt-6 transition-colors">
                Add 3 missing details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
