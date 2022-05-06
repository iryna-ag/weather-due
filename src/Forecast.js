import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (!loaded) {
    const apiKey = "5f0a8a4c8b060e28a38c0762d7bac88e";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  } else {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map((forecastDay, index) => {
            if (index > 0 && index < 7) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={forecastDay} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
