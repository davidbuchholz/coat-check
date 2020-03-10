import React from 'react';

export default class DisplayWeatherImage extends React.Component {
  render() {
    const weatherIconID = this.props.imageID;
    return (
      <div>
        <img
          className="weather-image"
          src={URL}
          alt="weather-icon"
        ></img>
      </div>
    );
  }
}
