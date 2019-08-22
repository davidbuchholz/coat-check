import React from "react";
import Happy from "./Happy";
import Unhappy from "./Unhappy";
import HeavyCoat from "./HeavyCoat";
import LightCoat from "./LightCoat";
import LongSleeve from "./LongSleeve";
import Hot from "./Hot";

export default class WeatherDecision extends React.Component {
  decide(e) {
    if (this.props.temperature > -20 && this.props.temperature <= 55) {
      return <HeavyCoat />;
    } else if (this.props.temperature > 55 && this.props.temperature <= 65) {
      return <LightCoat />;
    } else if (this.props.temperature > 65 && this.props.temperature <= 70) {
      return <LongSleeve />;
    } else if (this.props.temperature > 70 && this.props.temperature <=90) {
      return <Happy />;
    } else if (this.props.temperature > 90) {
      return <Hot />;
    } else {
      return <Unhappy />;
    }
  }
  render() {
    return <div>{this.decide()}</div>;
  }
}
