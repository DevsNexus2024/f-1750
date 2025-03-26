/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icons658 } from "../../icons/Icons658";
import "./style.css";

export const Component = ({
  property1,
  className,
  icon = <Icons658 className="icons-658" color="#003380" />,
  text = "Início",
  divClassName,
}) => {
  return (
    <div className={`component ${property1} ${className}`}>
      {icon}
      <div className={`in-cio ${divClassName}`}>{text}</div>
    </div>
  );
};
