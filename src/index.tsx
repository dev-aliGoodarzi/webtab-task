// React
import React from "react";
import ReactDOM from "react-dom/client";
// React
// Main Component
import App from "./App";
// Main Component
// Modules
import { BrowserRouter as Router } from "react-router-dom";
// Modules

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
