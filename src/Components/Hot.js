import React from 'react';

export default class Hot extends React.Component {
  componentDidMount() {
    document.body.style.background = 'rgb(76, 202, 236) no-repeat';
    document.body.style.background =
      'linear-gradient(140deg, rgba(76,202,236,0.5047152650122548) 7%, rgba(236,110,76,0.577544396664916) 22%) no-repeat fixed';
  }

  render() {
    const message = `It's SO hot! Where are we?..Abu Dhabi??`;
    return <div className="coat-check">{message}</div>;
  }
}
