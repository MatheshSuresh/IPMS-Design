import React from "react";
import Reactdom from "react-dom";
// import "./app.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store/Store";
Reactdom.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
