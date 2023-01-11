import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`the weather in New York is ${response.data.main.temp}°`);
  }
  let ApiKey = "45c635f6554467de219d60506c6e3432";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New york&appid=${ApiKey}&units=metric`;
  axios.get(ApiUrl).then(handleResponse);
  return <h2>Hello from weather App</h2>;
}
