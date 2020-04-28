import React from "react";
import Forecast from "./Day1/Geekout/Forecast";
import Todayweather from "./Day1/Geekout/Todayweather";
import sunpicture from "./Day1/Geekout/sunPicture.png";
import "./Day1/App.css";

function App() {
  return (
    <div className="fullPage">
      <div className="topPart">
        <Todayweather
          country={"Serbia"}
          city={"Belgrade"}
          weather={"19°C"}
        ></Todayweather>
      </div>
      <div className="bottomPart">
        <Forecast
          day={"mon"}
          date={"16.02"}
          image={sunpicture}
          weather={"Sunny"}
          weatherDegree={"19°C"}
          windSpeed={"4mph"}
          humidity={"63%"}
          cloudness={"14%"}
        ></Forecast>
        <Forecast
          day={"tu"}
          date={"17.02"}
          image={sunpicture}
          weather={"Rain"}
          weatherDegree={"19°C"}
          windSpeed={"4mph"}
          humidity={"63%"}
          cloudness={"14%"}
        ></Forecast>
        <Forecast
          day={"we"}
          date={"18.02"}
          image={sunpicture}
          weather={"Cloudy"}
          weatherDegree={"19°C"}
          windSpeed={"4mph"}
          humidity={"63%"}
          cloudness={"14%"}
        ></Forecast>
      </div>
    </div>
  );
}

export default App;
