import React, { useState } from 'react';
import ApiFetcher from './ApiFetcher3';

function PredictedData() {
    const [data, setData] = useState(null);

    // Render the data without using a table
    const renderData = () => {
        if (Array.isArray(data)) {
            return (
                <div className="space-y-4">
                    {data.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold">{item.key1}</h3>
                            <p className="text-gray-700">{item.key2}</p>
                            <p className="text-gray-700">{item.key3}</p>
                        </div>
                    ))}
                </div>
            );
        } else if (data !== null) {
            return <p>Loading...</p>;
        } else {
            return null; // No need to render anything if data is null
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md p-4">
                <ApiFetcher setData={setData} />
                <div className="text-center">
                    <h1 className="text-3xl mb-4">Predicted Data</h1>
                    {renderData()}
                </div>
            </div>
        </div>
    );
}

export default PredictedData;
