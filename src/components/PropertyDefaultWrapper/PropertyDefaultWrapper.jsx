/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icons464 } from "../../icons/Icons464";
import { Icons485 } from "../../icons/Icons485";
import { Icons488 } from "../../icons/Icons488";
import { Icons865 } from "../../icons/Icons865";
import { Icons880 } from "../../icons/Icons880";
import { Icons882 } from "../../icons/Icons882";
import { NameReceivedCoins1 } from "../../icons/NameReceivedCoins1";
import { Component } from "../Component";
import "./style.css";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  componentIcon = <Icons485 className="icon-instance-node" color="#4B5964" />,
  componentProperty1 = "defalut",
  componentPropertyDefalutClassName,
  override = <Icons865 className="icon-instance-node" color="#4B5964" />,
  componentIcon1 = <Icons880 className="icon-instance-node" color="#4B5964" />,
  componentIcon2 = (
    <NameReceivedCoins1 className="icon-instance-node" color="#4B5964" />
  ),
  componentIcon3 = <Icons882 className="icon-instance-node" color="#4B5964" />,
}) => {
  return (
    <div className={`property-default-wrapper ${className}`}>
      <div className="frame-2">
        <div className={`text-wrapper-2 property-1-${property1}`}>SERVIÇOS</div>

        <div className="buttons-button-2">
          {property1 === "aberto" && (
            <Icons488 className="icons-2" color="#01131A" />
          )}

          {property1 === "default" && (
            <Icons464 className="icons-2" color="#4B5964" />
          )}
        </div>
      </div>

      {property1 === "aberto" && (
        <div className="frame-3">
          <Component
            className={componentPropertyDefalutClassName}
            icon={componentIcon}
            property1={componentProperty1}
            text="Área pix"
          />
          <Component
            className="component-instance"
            icon={override}
            property1="defalut"
            text="Pagamentos"
          />
          <Component
            className="component-instance"
            icon={componentIcon1}
            property1="defalut"
            text="Transferências"
          />
          <Component
            className="component-instance"
            icon={componentIcon2}
            property1="defalut"
            text="Depósitos"
          />
          <Component
            className="component-instance"
            icon={componentIcon3}
            property1="defalut"
            text="Extrato"
          />
        </div>
      )}
    </div>
  );
};
