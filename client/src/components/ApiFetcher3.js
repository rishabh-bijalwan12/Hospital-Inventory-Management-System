import { useEffect } from 'react';

const ApiFetcher3 = ({ setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/predictions');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [setData]);

  return null;
};

export default ApiFetcher3;
