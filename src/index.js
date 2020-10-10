import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import storeConfig from "./redux/storeConfig";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "./i18n";
import { startConnection as startSignalR } from "./redux/helpers/signalrConfig";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJleHBlcnQiLCJQZXJtaXNzaW9uIjpbIklzQWxtaWdodHkiLCJDYW5TZWN1cmVTaXRlcyIsIkNhbkVkaXRTaXRlcyIsIkNhbkVkaXRVc2VyR3JvdXBzIiwiQ2FuRWRpdFVzZXJzIl0sIm5iZiI6MTYwMjA2NDczMywiZXhwIjoxNjAyMTUxMTMzLCJpYXQiOjE2MDIwNjQ3MzN9.rqrlf4RvtXDDVprthuWlbV26dWbS1Q1t3Cb0jYAjJX4";

window.localStorage.setItem("token", token);

axios.defaults.baseURL =
  // "http://" + window.location.hostname + ":5000/api/web/";
  "http://192.168.0.10:5000/api/web/";
axios.defaults.headers.common["Authorization"] = "Bearer " + token;

startSignalR();

ReactDOM.render(
  <ReduxProvider store={storeConfig()}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
