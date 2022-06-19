import axios from "axios";

import { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState(null);
  const [cityInput, setCityInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const onHandleClick = () => {
    setTemp(getWeather(cityInput));
    setIsClicked(true);
  };
  const getWeather = async (city) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/weather/${city}`);
      console.log(data);
      return data.list[0].main.temp - 273;
      //toFixed
    } catch (e) {
      console.log(e.message);
    } finally {
      setCityInput("");
    }
  };

  return (
    <div className="App">
      <h2>Weather</h2>
      <p>To get the current weather, Please enter a name of a city:</p>
      <div>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
        />
        <button onClick={onHandleClick}>Search</button>
      </div>
      {isClicked && (
        <p>
          The current tempature in {cityInput} is {temp}
        </p>
      )}
    </div>
  );
}

export default App;
