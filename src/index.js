import React from "react";
import ReactDOM from "react-dom"
import "./app.css"
import { BrowserRouter } from "react-router-dom";
import { DrinkContextProvider } from "./DrinkContext";
import App from "./App"

ReactDOM.render(
  <BrowserRouter>
    <DrinkContextProvider>
      <App /> 
    </DrinkContextProvider>
  </BrowserRouter>,
  document.getElementById("root"))