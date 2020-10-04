import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./redux/configureStore";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const store = configureStore();

axios.defaults.baseURL =
  // "http://" + window.location.hostname + ":5000/api/web/";
  "http://192.168.0.10:5000/api/web/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJleHBlcnQiLCJQZXJtaXNzaW9uIjpbIklzQWxtaWdodHkiLCJDYW5TZWN1cmVTaXRlcyIsIkNhbkVkaXRTaXRlcyIsIkNhbkVkaXRVc2VyR3JvdXBzIiwiQ2FuRWRpdFVzZXJzIl0sIm5iZiI6MTYwMTc0ODQwNSwiZXhwIjoxNjAxODM0ODA1LCJpYXQiOjE2MDE3NDg0MDV9.5g7D0gk7HwZD6AJ-gMwA_ckW6Z0QJPmDvPANoIhGxTI";

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
