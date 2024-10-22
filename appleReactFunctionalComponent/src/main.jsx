import React from "react"; // Importing React library
import ReactDOM from "react-dom/client"; // Importing ReactDOM from client bundle

import App from "./App.jsx"; // Importing the main App component

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/styles.css";
import "./js/Footer.js";

// Using ReactDOM to render the main App component
// Initialize a new React root at the HTML element with id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  // Enable strict mode for React to perform additional checks
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
