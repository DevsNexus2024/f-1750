
import "../global.css";
import "../styleguide.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { HomeReaPix } from "./screens/HomeReaPix";

const rootElement = document.getElementById("app");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HomeReaPix />
    </React.StrictMode>
  );
} else {
  console.error("Root element with id 'app' not found");
}
