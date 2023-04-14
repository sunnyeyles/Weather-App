import styled from "@emotion/styled";
import Temperature from "./Temperature";
import Search from "./Search";
import getWeatherByCity from "../useFetchData";
import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import { WeatherResponse } from "../types";

const Wrapper = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherResponse>({
    main: {
      temp: 0,
      humidity: 0,
      feels_like: 0,
    },
    weather: [],
    name: "",
  });
  const [icon, setIcon] = useState<string>("");

  const [searchField, setSearchField] = useState<string>("Berlin");
  const [search, setSearch] = useState<string>("Click to Search City");
  const [currentCity, setCurrentCity] = useState<string>(
    "Click to Search City"
  );
  // initial API call
  useEffect(() => {
    getWeatherByCity("Berlin").then((response) => {
      setCurrentWeather(response);
      // console.log(response.weather[0].icon);
      setIcon(response.weather[0].icon);
      console.log(icon);
    });
  }, []);

  // update search input
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value);
  };
  // search city
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    // convert the searchField string to uppercase to match the API call
    const uppercase: string = searchField
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    // update search values
    setCurrentCity(uppercase);
    setSearch(uppercase);
    // fetch data
    getWeatherByCity(uppercase)
      .then((response) => {
        setCurrentWeather(response);
        setIcon(response.weather[0].icon);
      })
      .catch((error) => {
        if (
          error.response &&
          (error.response.status === 400 || error.response.status === 404)
        ) {
          setCurrentCity("City not found");
          setTimeout(() => {
            setCurrentCity("Search a city");
          }, 2000);
        } else {
          console.error("Error:", error);
        }
      });
  };

  return (
    <StyledDiv>
      <Search
        handleChange={handleChange}
        handleClick={handleClick}
        city={currentCity}
        buttonText="Search City"
        value=""
      />
      <Temperature
        name={currentWeather.name}
        weather={currentWeather.weather}
        main={currentWeather.main}
        icon={`http://openweathermap.org/img/wn/${icon}@4x.png`}
      />
    </StyledDiv>
  );
};

export default Wrapper;
const StyledDiv = styled.div`
  padding: 0.8rem;
  background: linear-gradient(0deg, #3d348b 26%, #7678ed 94%);
  font-size: 24px;
  border-radius: 0.2rem;
  border: 5px solid #7678ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  width: 400px;
`;
