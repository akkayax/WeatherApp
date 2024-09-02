import React, { useState } from 'react';
import './index.css';

function App() {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching weather for ${city}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-6">WeatherApp</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          className="px-4 py-2 rounded-l-md"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-r-md hover:bg-gray-100 transition"
        >
          Search
        </button>
      </div>
      <div className="mt-8">
        {/*  */}
      </div>
    </div>
  );
}

export default App;
