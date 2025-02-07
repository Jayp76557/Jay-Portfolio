console.log("React app is starting...");

import React from "react";
import ReactDOM from "react-dom/client";


import "./index.css";
import App from "./App.jsx";
console.log("React app is starting...");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {console.log("Rendering App component")}
    <App />
  </React.StrictMode>
);
