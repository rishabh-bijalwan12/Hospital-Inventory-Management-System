import React from 'react';

function Contact() {
  return (
    <div className="bg-blue-200 flex justify-center items-center min-h-screen">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-xl md:flex md:flex-row md:items-center">
        <div className="md:flex md:w-1/2 lg:w-1/3 p-6 text-center md:text-left">
          <div className="space-y-6">
            <div className="p-4 bg-blue-100 rounded-lg shadow">
              <i className="fas fa-map-marker-alt text-3xl text-blue-500"></i>
              <h2 className="text-lg font-bold mt-2">Address</h2>
              <p>Swami Ram Nagar, Jolly Grant, Uttarakhand 248016</p>
              <p>Birendranagar 06</p>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg shadow">
              <i className="fas fa-phone-alt text-3xl text-blue-500"></i>
              <h2 className="text-lg font-bold mt-2">Phone</h2>
              <p>+0135 247 1200</p>
              <p>+07947146132</p>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg shadow">
              <i className="fas fa-envelope text-3xl text-blue-500"></i>
              <h2 className="text-lg font-bold mt-2">Email</h2>
              <p>himalayanhospital@gmail.com</p>
              <p>info.himalayanhospital@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-2/3 md:ml-auto p-6">
          <div className="text-3xl font-bold text-blue-500 mb-6">Send us a message</div>
          <p className="mb-6">If you have any types of queries related to our medicines, you can send us a message from here. It's our pleasure to help you.</p>
          <form action="#" className="space-y-4">
            <input type="text" placeholder="Enter your name" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Enter your email" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Enter the query you have" className="w-full p-3 border rounded-lg h-32 resize-none"></textarea>
            <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">Send Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
