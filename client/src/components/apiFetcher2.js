// ApiFetcher.js
import { useState, useEffect } from 'react';

const ApiFetcher = ({ setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/sales');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [setData]);

  return null;
};

export default ApiFetcher;
