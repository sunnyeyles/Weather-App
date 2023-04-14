import styled from "@emotion/styled";
import { WeatherResponse } from "../types";
interface Weather extends WeatherResponse {
  icon: string;
}

const Temperature = ({ weather, main, name, icon }: Weather) => {
  return (
    <Wrapper>
      <div>
        <Location>{name}</Location>
        <Temp>
          {Math.round(main.temp)}
          <span style={{ fontSize: "5rem" }}>&#176;</span>
        </Temp>
        <div style={{ fontSize: "1rem", margin: "1rem" }}>
          Feels like {Math.round(main.feels_like)}&#176;
        </div>
      </div>
      <img src={icon} alt="weather icon" />
    </Wrapper>
  );
};
export default Temperature;
const Wrapper = styled.div`
  width: 100%;
  background: #7678ed;
  border-radius: 0.2rem;
  box-shadow: 2px 5px 5px 1px #3d348b;
  display: flex;
`;

const Temp = styled.div`
  font-size: 5rem;
  text-align: left;
  width: 100%;
  margin-top: -3.5rem;
  padding: 1rem;
`;

const Location = styled.div`
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem;
`;
