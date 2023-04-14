import { Button } from "@chakra-ui/react";
import getWeatherByCity from "./useFetchData";
import Wrapper from "./components/Wrapper";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <Wrapper />
    </div>
  );
}

export default App;
