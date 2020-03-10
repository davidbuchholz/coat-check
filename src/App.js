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
      city: undefined,
      temperature: undefined,
      location: undefined,
      imageID: undefined,
      isHidden: true,
      isDisabled: true,
    };
    this.callAPI = this.callAPI.bind(this);
    this.findCoordinates = this.findCoordinates.bind(this);
  }

  componentDidMount() {
    this.findCoordinates();
  }

  findCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            location: position.coords,
            isDisabled: false,
          });
        },
        error => console.error(error.message),
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 1000,
        },
      );
    } else {
      console.log(`Geolocation is not supported by your device`);
    }
  }

  callAPI() {
    const { location } = this.state;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          city: data.name,
          temperature: data.main.temp,
          imageID: data.weather[0].icon,
          description: data.weather[0].description,
          isHidden: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {
      isHidden,
      temperature,
      city,
      description,
      imageID,
      isDisabled,
    } = this.state;
    return (
      <div className="container">
        <div className="titles-container">
          <Titles />
        </div>
        <div className="button-container">
          <SelectButton
            callAPI={this.callAPI}
            isDisabled={isDisabled}
          />
        </div>
        <div className="dialogue-container">
          {!isHidden /* Hide this component until data is fetched from API */ && (
            <div>
              <WeatherDecision temperature={temperature} />
              <DisplayWeatherResults
                city={city}
                temperature={temperature}
                imageID={imageID}
                description={description}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
