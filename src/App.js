import { useState } from "react";
import "./styles.css";

function App() {
  const [temperature, setTemperature] = useState(10);
  const [temperatureColor, settemperatureColor] = useState("blue");
  const increaseTemperature = () => {
    if (temperature === 30) return;
    const newTemperature = temperature + 1;
    if (newTemperature >= 20) {
      settemperatureColor("red");
    }
    setTemperature(newTemperature);
  };
  const decreaseTemperature = () => {
    if (temperature === 0) return;
    const newTemperature = temperature - 1;
    if (newTemperature < 20) {
      settemperatureColor("blue");
    }
    setTemperature(newTemperature);
  };
  return (
    <div className="app-container">
      <h2>Temperature App</h2>
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperature}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={decreaseTemperature}>-</button>
        <button onClick={increaseTemperature}>+</button>
      </div>
    </div>
  );
}

export default App;
