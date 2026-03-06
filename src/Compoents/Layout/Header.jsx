import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
       
        <h1 className="text-2xl font-bold">
          <span className="bg-red-600 text-white px-2 py-1 rounded">AI</span>
          <span> maBetter</span>
        </h1>

       
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

       
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-gray-700 font-medium p-4 md:p-0">
            <li>
              <button
                onClick={() => navigate("/")}
                className="hover:text-blue-600 transition py-2 cursor-pointer"
              >
                Resume Templates
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/resumes")}
                className="hover:text-blue-600 transition py-2"
              >
                My Resumes
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/about-us")}
                className="hover:text-blue-600 transition py-2"
              >
                About Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
