import React from "react";
import "../../stylesheets/ClearButton/ClearButton.css";
const ClearButton = (props) => (
  <div className="clear-button" onClick={props.driveClick}>
    {props.children}
  </div>
);
export default ClearButton;
