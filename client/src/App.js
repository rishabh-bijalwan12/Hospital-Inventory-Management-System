import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex ml-36 flex-col md:flex-row items-center justify-between py-12">
            <div className="space-y-6 md:w-1/2">
              <h1 className="text-6xl font-extrabold text-gray-800">
                <span className="text-green-500">Check Your</span><br />Stock
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
               Check Admin panel for remaining stock of medicine and see the predicted model to solve the understock and overstock problem 
              </p>
              <button className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg transform hover:scale-110">
                Book medicine
              </button>
            </div>
            <div className="rounded-lg overflow-hidden max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto md:mx-0 my-6 md:my-0 shadow-2xl">
              <div className="relative">
                <img style={{height:"14cm"}} src="https://blog.medkart.in/wp-content/uploads/2024/01/DM-Full-Form-in-Medical.jpg" alt="Medicine" className="object-cover w-full h-96 transition duration-300 ease-in-out transform hover:scale-110" />
                <div className="absolute inset-0 bg-green-500 bg-opacity-20 rounded-lg"></div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default App;
