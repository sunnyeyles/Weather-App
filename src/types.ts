import { ChangeEvent, MouseEvent } from "react";

export interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  name: string;
}
export interface SearchProps {
  buttonText: string;
  city: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
