import React from 'react';

export default function DisplayWeatherResults(props) {
  const { temperature, imageID, city, description } = props;
  const URL = `https://openweathermap.org/img/wn/${imageID}@2x.png`;
  return (
    <div className="displayWeather">
      <p className="location">
        Your location is:
        {city}
      </p>
      <p className="temperature">
        The temperature is currently:
        {temperature}
      </p>
      <div className="description-container">
        <p>
          Today you can expect:
          {description}
        </p>
        <img className="weather-image" src={URL} alt="weather-icon" />
      </div>
    </div>
  );
}
