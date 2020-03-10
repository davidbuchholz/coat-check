import React from 'react';
import Happy from './Happy';
import Unhappy from './Unhappy';
import HeavyCoat from './HeavyCoat';
import LightCoat from './LightCoat';
import LongSleeve from './LongSleeve';
import Hot from './Hot';

export default class WeatherDecision extends React.Component {
  decide() {
    const { temperature } = this.props;
    if (temperature > -20 && temperature <= 55) {
      return <HeavyCoat />;
    }
    if (temperature > 55 && temperature <= 65) {
      return <LightCoat />;
    }
    if (temperature > 65 && temperature <= 70) {
      return <LongSleeve />;
    }
    if (temperature > 70 && temperature <= 90) {
      return <Happy />;
    }
    if (temperature > 90) {
      return <Hot />;
    }
    return <Unhappy />;
  }

  render() {
    return <div>{this.decide()}</div>;
  }
}
