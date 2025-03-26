/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { Icons658 } from "../../icons/Icons658";
import "./style.css";

export const ButtonsButton = ({
  iconTrailing = true,
  iconLeading = true,
  size,
  hierarchy,
  icon,
  stateProp,
  className,
  override = <Icons658 className="icons-490" color="black" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "sm",

    hierarchy: hierarchy || "primary",

    icon: icon || "default",

    state: stateProp || "default",
  });

  return (
    <div
      className={`buttons-button ${state.hierarchy} icon-${state.icon} ${state.size} state-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.icon === "dot-leading" && (
        <>
          <div className="dot">
            <div className="dot-2" />
          </div>

          <div className="text">Button CTA</div>
        </>
      )}

      {state.icon === "default" && (
        <>
          <>
            {iconLeading && (
              <Icons658
                className={`${state.size === "two-xl" ? "class" : "icons-490"}`}
                color={
                  [
                    "link-color",
                    "link-gray",
                    "secondary-color",
                    "tertiary-color",
                    "tertiary-gray",
                  ].includes(state.hierarchy)
                    ? "#001D47"
                    : state.hierarchy === "secondary-gray"
                      ? "#01131A"
                      : state.hierarchy === "primary" &&
                          state.state === "disabled"
                        ? "black"
                        : "#FEFEFE"
                }
              />
            )}
          </>

          <div className="text-padding">
            {[
              "primary",
              "secondary-color",
              "secondary-gray",
              "tertiary-color",
              "tertiary-gray",
            ].includes(state.hierarchy) && (
              <div className="text-2">Button CTA</div>
            )}

            {["link-color", "link-gray"].includes(state.hierarchy) && (
              <>Button CTA</>
            )}
          </div>

          <>
            {iconTrailing && (
              <Icons658
                className={`${state.size === "two-xl" ? "class" : "icons-490"}`}
                color={
                  [
                    "link-color",
                    "link-gray",
                    "secondary-color",
                    "tertiary-color",
                    "tertiary-gray",
                  ].includes(state.hierarchy)
                    ? "#001D47"
                    : state.hierarchy === "secondary-gray"
                      ? "#01131A"
                      : state.hierarchy === "primary" &&
                          state.state === "disabled"
                        ? "black"
                        : "#FEFEFE"
                }
              />
            )}
          </>
        </>
      )}

      {state.icon === "only" && <>{override}</>}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}
