import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';


const barChart = ({ data, groupKey }) => {
  const computeChartData = (data, key) => {
    const groupedData = data.reduce((acc, item) => {
      const keyValue = item[key];
      if (keyValue) {
        acc[keyValue] = (acc[keyValue] || 0) + 1;
      }
      return acc;
    }, {});

    return {
      labels: Object.keys(groupedData),
      datasets: [{
        label: `${key.charAt(0).toUpperCase() + key.slice(1)} Distribution`,
        data: Object.values(groupedData),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 0, 0, 0.6)',
          'rgba(0, 255, 0, 0.6)',
          'rgba(0, 0, 255, 0.6)',
          'rgba(255, 255, 0, 0.6)',
          'rgba(255, 0, 255, 0.6)',
          'rgba(0, 255, 255, 0.6)',
          'rgba(128, 0, 0, 0.6)',
          'rgba(0, 128, 0, 0.6)',
          'rgba(0, 0, 128, 0.6)',
          
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(255, 255, 0, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(0, 255, 255, 1)',
          'rgba(128, 0, 0, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(0, 0, 128, 1)',
     
        ],
        borderWidth: 1
      }]
    };
  };

  const chartData = data && data.length > 0 ? computeChartData(data, groupKey) : null;
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        align: 'end',
        anchor: 'end',
        color: '#444',
        font: {
          weight: 'bold'
        },
        formatter: (value, context) => {
          return value;
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <>
      {chartData && (
        <div className="w-3/10 h-96">
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
      {!chartData && <p>Loading or no data available...</p>}
    </>
  );
};

export default barChart;
