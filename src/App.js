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
      imageID: undefined,
      isHidden: true,
    };
    this.callAPI = this.callAPI.bind(this);
  }

  callAPI() {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=5128638&units=imperial&appid=78c8954cfc788e1248bcd83dc32befc8`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          city: data.name,
          temperature: data.main.temp,
          imageID: data.weather[0].icon,
          description: data.weather[0].description,
          isHidden: false,
        });
      });
  }

  render() {
    const {
      isHidden,
      temperature,
      city,
      description,
      imageID,
    } = this.state;
    return (
      <div className="container">
        <div className="titles-container">
          <Titles />
        </div>
        <div className="button-container">
          <SelectButton callAPI={this.callAPI} />
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
