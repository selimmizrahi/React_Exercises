import React from "react";
import sunpicture from "./sunPicture.png";

class Todayweather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todayWeatherTopPart">
        <img src={sunpicture} class="imageToday" alt="Norway" />
        <div className = "todayWeatherRightSection">
          <p className="topAndBottomText">{this.props.country}</p>
          <h1 className="midText">{this.props.city}</h1>
          <p className="topAndBottomText">{this.props.weather}</p>
        </div>
      </div>
    );
  }
}

export default Todayweather;
