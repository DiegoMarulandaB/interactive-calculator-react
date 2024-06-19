import React from "react";
import Button from "../Button/Button";
import "./ButtonPanel.css";

const ButtonPanel = ({ onClick }) => {
  const buttons = [
    ["7", "8", "9", "/", "sin", "cos"],
    ["4", "5", "6", "*", "tan", "log"],
    ["1", "2", "3", "-", "sqrt", "pow"],
    ["0", ".", "=", "+", "(", ")"],
    ["AC", "±", "%"],
  ];

  return (
    <div className="button-panel">
      {buttons.flat().map((btn, index) => (
        <Button key={index} label={btn} onClick={onClick} />
      ))}
    </div>
  );
};

export default ButtonPanel;
