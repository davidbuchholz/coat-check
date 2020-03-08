import React from 'react';
import './App.css';
import Titles from './Components/Titles';
import SelectButton from './Components/SelectButton';
import DisplayWeatherResults from './Components/DisplayWeatherResults';
import WeatherDecision from './Components/WeatherDecision';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      city: undefined,
      temperature: undefined,
      imageID: undefined,
      lat: '',
      lon: '',
      loading: true,
      isHidden: true,
    };
  }

  /*   getTheLocation = async e => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  }

  function displayLocationInfo(position) {
    const long = position.coords.longitude;
    const lati = position.coords.latitude;
    this.setState = ({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }).bind()
    console.log(`longitude: ${ long } | latitude: ${ lati }`);
  }
} */
  async getTheWeather(e) {
    e.preventDefault();
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=imperial&appid=78c8954cfc788e1248bcd83dc32befc8`;
    const url = `https://api.openweathermap.org/data/2.5/weather?id=5128638&units=imperial&appid=78c8954cfc788e1248bcd83dc32befc8`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      weatherData: data,
      city: data.name,
      temperature: data.main.temp,
      imageID: data.weather[0].icon,
      description: data.weather[0].description,
      loading: false,
      isHidden: false,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="titles-container">
          <Titles />
        </div>
        <div className="button-container">
          <SelectButton getTheWeather={this.getTheWeather} />
        </div>
        <div className="dialogue-container">
          {!this.state
            .isHidden /* Hide this component until data is fetched from API */ && (
            <div>
              <WeatherDecision temperature={this.state.temperature} />
              <DisplayWeatherResults
                city={this.state.city}
                temperature={this.state.temperature}
                imageID={this.state.imageID}
                description={this.state.description}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
