import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BarCharts from './barChart';
import PieCharts from './pieChart';
import ApiFetcher from './apiFetcher2';
import 'chart.js/auto';
import 'tailwindcss/tailwind.css';

function Sales() {
  const [data, setData] = useState([]);
  const [pieKey, setPieKey] = useState('drug_type');
  const [barKey, setBarKey] = useState('drug_type');
  const fields = [
    'drug_name', 'drug_type', 'January_sales', 'February_sales', 'March_sales',
    'April_sales', 'May_sales', 'June_sales', 'July_sales', 'August_sales', 'September_sales', 'October_sales','December_sales','total_Quantity','price','total_price'
  ];

  return (
    <>
      <div className="flex justify-center gap-4 my-5">
        <Link to="/adminpanel">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600 transition duration-300">Purchased</button>
        </Link>
        <Link to="/predicted">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600 transition duration-300">Predicted Data</button>
        </Link>
      </div>
      <div className="min-h-screen text-gray-700 font-sans bg-gray-50">
        <h1 style={{ marginLeft: "17cm" }} className="text-3xl font-bold mb-5 ml-96">Sales Data</h1>
        <ApiFetcher setData={setData} />

        {/* Bar chart section */}
        <div className="m-5 p-4 rounded-lg shadow bg-blue-100">
          <span className="font-semibold text-black">Filter</span>
          <select className="ml-4 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-150 bg-blue-200 text-blue-800"
            onChange={(e) => setBarKey(e.target.value)} value={barKey}>
            {fields.map(field => (
              <option key={field} value={field}>{field}</option>
            ))}
          </select>
          <div className="mt-4">
            <BarCharts data={data} groupKey={barKey} />
          </div>
        </div>

        {/* Pie Chart section */}
        <div className="p-4 rounded-lg shadow bg-white m-5">
          <span className="font-semibold text-black">Filter</span>
          <select className="ml-4 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-150 bg-blue-200 text-blue-800"
            onChange={(e) => setPieKey(e.target.value)} value={pieKey}>
            {fields.map(field => (
              <option key={field} value={field}>{field}</option>
            ))}
          </select>
          <div className='flex flex-wrap justify-center items-center mt-4'>
            <div className="w-full lg:w-1/2 p-2 bg-blue-100 flex justify-center items-center">
              <PieCharts data={data} groupKey={pieKey} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;
