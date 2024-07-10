import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const temperatureColor = temperature > 20 ? 'rgb(255,0,0)' : 'blue';

  return (
    <div>
     <span style={{ color: temperatureColor }}>Temperature: {temperature}</span> <br></br>
     <span>Conditions: {conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
