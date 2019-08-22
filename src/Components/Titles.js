import React from "react";

export default class Titles extends React.Component {
  render() {
    return (
      <div>
        <div className="authorTitle-container">
          <p>Created by</p>
          <p>:</p>
          <p className="authorTitle">David Buchholz</p>
        </div>
        <p className="maintTitle">Coat Check</p>
      </div>
    );
  }
}
