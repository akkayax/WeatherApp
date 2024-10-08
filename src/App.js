import React, { useState } from 'react';
import './index.css';
import { getWeatherByCity } from './api/weather';
import WeatherInfo from './WeatherInfo';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    setCity('');

    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-6">WeatherApp</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="px-4 py-2 rounded-l-md"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-r-md hover:bg-gray-100 transition"
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>
      <WeatherInfo weather={weather} error={error} />
    </div>
  );
}

export default App;
