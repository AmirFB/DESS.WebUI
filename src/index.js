import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import storeConfig from "./redux/storeConfig";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { startConnection as startSignalR } from "./redux/helpers/signalrConfig";

import * as serviceWorker from "./serviceWorker";

import "leaflet/dist/leaflet.css";
import "./index.css";
import "./i18n";
import "helvatica-neue-lt/index.css";

axios.defaults.baseURL =
  "http://" + window.location.hostname + ":5000/api/web/";
axios.defaults.withCredentials = true;

startSignalR();

ReactDOM.render(
  <Router>
    <ReduxProvider store={storeConfig}>
      <App />
    </ReduxProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
