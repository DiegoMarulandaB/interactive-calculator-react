import React, { useState } from "react";
import "./Calculator.css";
import Display from "../Display/Display";
import Button from "../Button/Button";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [previousInput, setPreviousInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);

  const handleButtonClick = (value) => {
    if (!isNaN(value) || value === ".") {
      if (isOperatorClicked) {
        setInput(value);
        setIsOperatorClicked(false);
      } else {
        setInput(input === "0" ? value : input + value);
      }
    } else if (value === "C") {
      setInput("0");
      setPreviousInput("");
      setOperator(null);
      setIsOperatorClicked(false);
    } else if (value === "+/-") {
      setInput((prev) => (prev[0] === "-" ? prev.slice(1) : "-" + prev));
    } else if (value === "%") {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    } else if (value === "=") {
      if (operator && previousInput !== "") {
        const current = parseFloat(input);
        const previous = parseFloat(previousInput);
        let result;
        switch (operator) {
          case "+":
            result = previous + current;
            break;
          case "-":
            result = previous - current;
            break;
          case "*":
            result = previous * current;
            break;
          case "/":
            result = previous / current;
            break;
          default:
            return;
        }
        setInput(result.toString());
        setPreviousInput("");
        setOperator(null);
        setIsOperatorClicked(false);
      }
    } else {
      setPreviousInput(input);
      setOperator(value);
      setIsOperatorClicked(true);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {[
          "C",
          "+/-",
          "%",
          "/",
          "7",
          "8",
          "9",
          "*",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "0",
          ".",
          "=",
        ].map((btn) => (
          <Button key={btn} value={btn} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
