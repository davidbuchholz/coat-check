import React from "react";

export default class DisplayWeatherResults extends React.Component {
  render() {
    const weatherIconID = this.props.imageID;
    const URL = `https://openweathermap.org/img/wn/${weatherIconID}@2x.png`;
    return (
      <div className="displayWeather">
        <p className = "location">Your location is: {this.props.city}</p>
        <p className = "temperature">The temperature is currently: {this.props.temperature}</p>
        <div className="description-container">
          <p>Today you can expect: {this.props.description}</p>
          <img className = "weather-image" src={URL} alt="weather-icon" />
        </div>
      </div>
    );
  }
}
