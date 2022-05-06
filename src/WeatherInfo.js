import React from "react";
import DateFormatted from "./DateFormatted";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateFormatted date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-2">
        <div className="col-8">
          <div className="clearfix">
            <div className="float-left weather-icon">
              <WeatherIcon
                iconID={props.data.iconID}
                alt={props.data.description}
                width={64}
              />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4 Weather-details">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
