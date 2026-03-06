import React, { useState } from 'react'
import PersonalInfo from '../Compoents/Personalnfo'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Details = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/details/personal-info', label: 'Personal Info' },
    { path: '/details/work-experience', label: 'Work Experience' },
    { path: '/details/education', label: 'Education' },
    { path: '/details/key-skills', label: 'Key Skills' }
  ]

  const getCurrentPageTitle = () => {
    const currentItem = navItems.find(item => item.path === location.pathname)
    return currentItem ? currentItem.label : 'Details'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-800">{getCurrentPageTitle()}</h1>
          <div className="w-6"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          fixed md:static
          top-0 left-0
          h-full md:h-auto
          w-64 md:w-56
          bg-white md:bg-gray-100
          shadow-lg md:shadow-none
          border-r border-gray-300
          z-50 md:z-auto
          transition-transform duration-300 ease-in-out
        `}>
          {/* Close button for mobile */}
          <div className="md:hidden flex justify-end p-4 border-b">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="p-6 space-y-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-3 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                    : 'hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Details
