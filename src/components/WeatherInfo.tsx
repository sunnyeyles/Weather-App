import styled from "@emotion/styled";
import getWeatherByCity from "../useFetchData";
import { useState, useEffect, useMemo } from "react";
import { WeatherResponse } from "../types";
const WeatherInfo = () => {
  // const [currentWeather, setCurrentWeather] = useState({ name: "", temp: 0 });

  // useEffect(() => {
  //   getWeatherByCity("New York").then((data) => {
  //     console.log(`The temperature in ${data.name} is ${data.main.temp} °C`);
  //     setCurrentWeather({ name: data.name, temp: data.main.temp });
  //   });
  // }, []);

  return <StyledDiv>hi</StyledDiv>;
};
export default WeatherInfo;
const StyledDiv = styled.div`
  width: 100%;
  background: #3d348b;
  border-radius: 1rem;
  box-shadow: 2px 5px 5px 1px #7678ed;
  height: 100px;
`;
