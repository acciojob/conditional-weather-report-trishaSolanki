
import React from "react";
import './../styles/App.css';

// src/components/App.js
import React, { useState, useEffect } from 'react';
import WeatherDisplay from '././WeatherDesplay';

function App() {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherInput);
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;

