/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const NameBell1 = ({
  color = "#3383E5",
  stroke = "black",
  className,
}) => {
  return (
    <svg
      className={`name-bell-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M14.5296 5C15.6805 5 16.613 5.9325 16.613 7.08333C16.613 8.23417 15.6805 9.16667 14.5296 9.16667C13.3788 9.16667 12.4463 8.23417 12.4463 7.08333C12.4463 5.9325 13.3796 5 14.5296 5Z"
        fill={color}
        fillRule="evenodd"
      />

      <path
        className="path"
        d="M14.5296 5C15.6805 5 16.613 5.9325 16.613 7.08333C16.613 8.23417 15.6805 9.16667 14.5296 9.16667C13.3788 9.16667 12.4463 8.23417 12.4463 7.08333C12.4463 5.9325 13.3796 5 14.5296 5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />

      <path
        className="path"
        d="M13.113 5.56334C12.4647 5.04001 11.6513 4.71417 10.7538 4.71417H10.7555H9.24467C7.15967 4.71417 5.46884 6.40417 5.46884 8.49001V8.49001V10.8208C5.46884 11.2625 5.29301 11.6867 4.98051 11.9992L4.44634 12.5333C4.13384 12.8458 3.95801 13.27 3.95801 13.7117V13.7117C3.95801 14.5817 4.66301 15.2867 5.53301 15.2867H14.4672C15.3372 15.2867 16.0422 14.5817 16.0422 13.7117V13.7117C16.0422 13.27 15.8663 12.8458 15.5538 12.5333L15.0197 11.9992C14.7072 11.6867 14.5313 11.2625 14.5313 10.8208V9.16584"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />

      <path
        className="path"
        d="M8.08984 15.2867V15.5908C8.08984 16.645 8.94484 17.5 9.99984 17.5V17.5C11.0548 17.5 11.9098 16.645 11.9098 15.59V15.2858"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />

      <path
        className="path"
        d="M11.5277 4.7925V4.0275C11.5277 3.18417 10.8443 2.5 10.0002 2.5V2.5C9.15599 2.5 8.47266 3.18417 8.47266 4.0275V4.7925"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
