import React from 'react';

export default class LongSleeve extends React.Component {
  componentDidMount() {
    document.body.style.background = 'rgb(76, 202, 236) no-repeat';
    document.body.style.background =
      'linear-gradient(140deg, rgba(76,202,236,0.5047152650122548) 40%, rgba(236,110,76,0.5047152650122548) 60%) no-repeat fixed';
  }

  render() {
    return <div className="coat-check">Wear a long sleeve...!</div>;
  }
}
