import "../global.css";
import "../styleguide.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeReaPix } from "./screens/HomeReaPix";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <HomeReaPix />
  </StrictMode>,
);
