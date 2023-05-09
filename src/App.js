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
      <h1>Temperature control App</h1>
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperature}
        </div>
      </div>
      <button onClick={increaseTemperature}>+</button>
      <button onClick={decreaseTemperature}>-</button>
    </div>
  );
}

export default App;
