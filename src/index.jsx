
import "../global.css";
import "../styleguide.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { HomeReaPix } from "./screens/HomeReaPix";

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <HomeReaPix />
  </React.StrictMode>
);
