import { useState } from "react";
import "./styles.css";

function App() {
  const [temperature, setTemperature] = useState(10);
  const [temperatureColor, settemperatureColor] = useState("red");
  const increaseTemperature = () => {
    const newTemperature = temperature + 1;
    setTemperature(newTemperature);
  };
  const decreaseTemperature = () => {
    const newTemperature = temperature - 1;
    setTemperature(newTemperature);
  };
  return (
    <div className="app-container">
      <h1>Temperature control App</h1>
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperature}
        </div>
      </div>
      <button onClick={increaseTemperature}>+</button>
      <button onClick={decreaseTemperature}>-</button>
      {/* <h4>{temperature}</h4> */}
    </div>
  );
}

export default App;
