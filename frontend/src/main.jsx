import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./Router.jsx"; // Ensure correct import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes /> 
  </StrictMode>
);
