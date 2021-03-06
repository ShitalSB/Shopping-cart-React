import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
