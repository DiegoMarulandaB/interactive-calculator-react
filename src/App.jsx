import "./App.css";
import freecodecampLogo from "./assets/img/freecodecamp-logo.png";
import Button from "./components/ButtonComponents/Button";
import ClearButton from "./components/ClearButtonComponents/ClearButton";
import Screen from "./components/ScreenComponents/Screen";
import "./stylesheets/resets.css";
import { useState } from "react";
import { evaluate } from "mathjs"; //pnpm install mathjs

// luego crear el componente calculator y meter esta const
function App() {
  //add numbers
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please enter a number to perform mathematical calculations.");
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={freecodecampLogo}
          alt="photo-freecodecamp-logo"
        />
      </div>
      {/* Screen */}
      <div className="container-calculator">
        <Screen input={input} />
        {/* row, buttons */}
        <div className="row">
          <ClearButton driveClick={() => setInput("")}>C</ClearButton>
          <Button driveClick={addInput}>+/-</Button>
          <Button driveClick={addInput}>%</Button>
          <Button driveClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Button driveClick={addInput}>7</Button>
          <Button driveClick={addInput}>8</Button>
          <Button driveClick={addInput}>9</Button>
          <Button driveClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button driveClick={addInput}>4</Button>
          <Button driveClick={addInput}>5</Button>
          <Button driveClick={addInput}>6</Button>
          <Button driveClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button driveClick={addInput}>1</Button>
          <Button driveClick={addInput}>2</Button>
          <Button driveClick={addInput}>3</Button>
          <Button driveClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button driveClick={addInput}>0</Button>
          <Button driveClick={addInput}>,</Button>
          <Button driveClick={calculateResult}> =</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
