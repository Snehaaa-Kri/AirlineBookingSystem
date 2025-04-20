import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./Router.jsx"; // Ensure correct import
import App from './App.jsx'

import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> 
  </StrictMode>
);
