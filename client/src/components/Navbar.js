import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null && token !== 'null'; // Check if token exists and is not 'null'
  };

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssvw_2bcKNCbvDs0hhqklWKNv8y8QOxb3aG2rkYaTjg&s" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MEDIKIT</span>
        </NavLink>

        <div className="flex flex-grow justify-center md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
          <NavLink to="/" className="text-gray-600 hover:text-blue-700 font-semibold text-lg px-4 py-2">
            Home
          </NavLink>
          {isAuthenticated() && ( // Use isAuthenticated() to check authentication
            <NavLink to="/adminpanel" className="text-gray-600 hover:text-blue-700 font-semibold text-lg px-4 py-2">
              Admin Panel
            </NavLink>
          )}
          <NavLink to="/contact" className="text-gray-600 hover:text-blue-700 font-semibold text-lg px-4 py-2">
            Contact
          </NavLink>
        </div>

        <div className="flex md:order-3 space-x-2 md:space-x-0 rtl:space-x-reverse">
          {!isAuthenticated() && ( // Use isAuthenticated() to check authentication
            <button onClick={() => navigate('/login')} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Login
            </button>
          )}
          {isAuthenticated() && ( // Use isAuthenticated() to check authentication
            <button onClick={handleLogout} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Logout
            </button>
          )}

          <button type="button" className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
