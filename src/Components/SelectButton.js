import React from "react";

export default class SelectButton extends React.Component{
    render(){
        return(
            <div>
                <button className = "button" onClick = {this.props.getTheWeather}>Do I Need My Coat?</button>
            </div>
        );
    }
}