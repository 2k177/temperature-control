import { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(10);
  const increaseTemperature = () => {
    const newTemperature = temperature + 1;
    setTemperature(newTemperature);
  };
  const decreaseTemperature = () => {
    const newTemperature = temperature - 1;
    setTemperature(newTemperature);
  };
  return (
    <div className="App">
      <h1>Temperature control App</h1>
      <button onClick={increaseTemperature}>+</button>
      <button onClick={decreaseTemperature}>-</button>
      <h4>{temperature}</h4>
    </div>
  );
}

export default App;
