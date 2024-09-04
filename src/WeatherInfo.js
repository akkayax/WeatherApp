import React from 'react';

const WeatherInfo = ({ weather, error }) => {
    const formatTime = (timestamp, timezone) => {
        const date = new Date((timestamp + timezone) * 1000);
        const hoursOffset = timezone / 3600; // Convert seconds to hours
        const absoluteOffset = Math.abs(hoursOffset);
        const sign = hoursOffset >= 0 ? '+' : '-';
        const timezoneOffset = `${sign}${String(absoluteOffset).padStart(2, '0')}:00`;

        return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (GMT${timezoneOffset})`;
    };

    return (
        <div className="weather-info mt-8 text-white text-center">
            {error && <p className="text-red-500">{error}</p>}
            {weather && (
                <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg p-6 rounded-md shadow-md">
                    <h2 className="text-3xl font-semibold mb-2">
                        {weather.name}, {weather.sys.country}
                    </h2>
                    <p className="text-4xl font-bold mb-4">
                        {Math.round(weather.main.temp)}°C
                    </p>
                    <p className="text-lg mb-2">Feels Like: {Math.round(weather.main.feels_like)}°C</p>
                    <p className="text-lg mb-4">{weather.weather[0].main}</p>
                    <p className="italic mb-6">{weather.weather[0].description}</p>

                    <div className="grid grid-cols-2 gap-4 text-left">
                        <p><strong>Min Temp:</strong> {Math.round(weather.main.temp_min)}°C</p>
                        <p><strong>Max Temp:</strong> {Math.round(weather.main.temp_max)}°C</p>
                        <p><strong>Sunrise:</strong> {formatTime(weather.sys.sunrise, weather.timezone)}</p>
                        <p><strong>Sunset:</strong> {formatTime(weather.sys.sunset, weather.timezone)}</p>
                        <p><strong>Pressure:</strong> {weather.main.pressure} hPa</p>
                        <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
                        {weather.main.sea_level && <p><strong>Sea Level:</strong> {weather.main.sea_level} hPa</p>}
                        {weather.main.grnd_level && <p><strong>Ground Level:</strong> {weather.main.grnd_level} hPa</p>}
                        <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherInfo;
