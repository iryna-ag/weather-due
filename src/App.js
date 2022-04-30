import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Simferopol" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://portfolioirynaagafonov.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Iryna Agafonov
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/iryna-ag/React-weather_updated"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-update.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
