import React from "react";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="forecastMonday">
          <div className="mondayLeftPart">
            <div>{this.props.day}</div>
            <div>{this.props.date}</div>
          </div>
          <img src={this.props.image} className="mondayIcon" />
          <div className="mondayRightPart">
            <div>{this.props.weather}</div>
            <div>{this.props.weatherDegree}</div>
          </div>
        </div>
        <div className="forecastWindHumidityFreeze">
          <div className="mondayWind">
            <i className="fa fa-leaf image-drop windIcon"></i>
            <div className="windSpeed">{this.props.windSpeed}</div>
          </div>
          <div className="mondayHumidity">
            <i className="fa fa-tint image-drop windIcon"></i>
            <div className="windSpeed">{this.props.humidity}</div>
          </div>
          <div className="mondayHumidity">
            <i className="fa fa-cloud image-drop windIcon"></i>
            <div className="windSpeed">{this.props.cloudness}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
