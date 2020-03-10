import React from 'react';

export default class SelectButton extends React.Component {
  render() {
    const { callAPI, isDisabled } = this.props;
    return (
      <div>
        <input
          type="button"
          className="button"
          onClick={callAPI}
          value="Do I Need My Coat?"
          disabled={isDisabled}
        />
      </div>
    );
  }
}
