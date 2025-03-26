/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icons448 } from "../../icons/Icons448";
import { Icons449 } from "../../icons/Icons449";
import { Icons464 } from "../../icons/Icons464";
import { Icons488 } from "../../icons/Icons488";
import { Icons658 } from "../../icons/Icons658";
import { Component } from "../Component";
import "./style.css";

export const MenuCta = ({ property1, className }) => {
  return (
    <div className={`menu-CTA ${className}`}>
      <div className="frame">
        <div className={`text-wrapper ${property1}`}>GERAIS</div>

        <div className="icons-wrapper">
          {property1 === "aberto" && (
            <Icons488 className="icons" color="#01131A" />
          )}

          {property1 === "default" && (
            <Icons464 className="icons" color="#4B5964" />
          )}
        </div>
      </div>

      {property1 === "aberto" && (
        <div className="div">
          <Component
            className="component-1"
            icon={<Icons658 className="instance-node" color="#4B5964" />}
            property1="defalut"
            text="Início"
          />
          <Component
            className="component-1"
            icon={<Icons448 className="instance-node" color="#4B5964" />}
            property1="defalut"
            text="Histórico"
          />
          <Component
            className="component-1"
            icon={<Icons449 className="instance-node" color="#4B5964" />}
            property1="defalut"
            text="Cartões"
          />
        </div>
      )}
    </div>
  );
};
