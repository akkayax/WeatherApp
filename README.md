# Weather App ☀️🌧️

This is a weather application built with **React** and **Tailwind CSS** that fetches real-time weather data using the **OpenWeatherMap API**. It allows users to search for weather details of any city and view information such as temperature, humidity, wind speed, and sunrise/sunset times formatted according to the city's time zone.

## Features ✨
- **Search by city**: Users can search weather conditions by city name and either press the "Search" button or hit "Enter" to fetch weather data.
- **Real-time data**: Displays current weather conditions including temperature, humidity, wind speed, and weather descriptions.
- **Weather icons**: Weather icon dynamically update based on the weather condition and icons for sunrise, sunset, humidity, wind.
- **Responsive design**: A mobile-first responsive layout with a single-column view on small screens and a two-column view on larger screens.
- **Formatted sunrise and sunset times**: Shows local sunrise and sunset times with corresponding GMT offsets.
- **Error handling**: Displays appropriate error messages for invalid cities or API issues.

## Technologies Used 🛠️
- **React**: JavaScript library for building the UI.
- **Tailwind CSS**: CSS framework for responsive and modern design.
- **Axios**: Library for making API requests to OpenWeatherMap.
- **OpenWeatherMap API**: Provides real-time weather data.

## Installation and Setup 🚀

1. **Clone the repository**:
   ```bash
   git clone https://github.com/akkayax/WeatherApp.git
   cd weather-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the API key**:
   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key:
     ```bash
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

4. **Run the app**:
   ```bash
   npm start
   ```

   The app will run at `http://localhost:3000`.

## API Integration 🌐

This app uses the **OpenWeatherMap API** to fetch real-time weather data. You will need to sign up for an API key on [OpenWeatherMap](https://openweathermap.org/) and add it to the `.env` file as shown above.

## License 📝
This project is licensed under the MIT License.
