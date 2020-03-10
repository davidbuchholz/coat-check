import React from 'react';

export default class HeavyCoat extends React.Component {
  componentDidMount() {
    document.body.style.background = 'rgb(76, 202, 236) no-repeat';
    document.body.style.background =
      'linear-gradient(140deg, rgba(76,202,236,0.5047152650122548) 78%, rgba(236,110,76,0.577544396664916) 93%) no-repeat fixed';
  }

  render() {
    return (
      <div className="coat-check">
        Grab the thickest coat you can find and hunker down
      </div>
    );
  }
}
