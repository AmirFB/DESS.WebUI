import { updateStatus } from "../actions/signalrActions";
import {
  HttpTransportType,
  HubConnectionBuilder,
  LogLevel,
  withCallbacks,
} from "redux-signalr";

function getToken() {
  return window.localStorage.getItem("token");
}

export const connection = new HubConnectionBuilder()
  .configureLogging(LogLevel.Debug)
  .withUrl("http://192.168.0.10:5000/api/web/hub/ef/", {
    accessTokenFactory: () => getToken(),
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets,
  })
  .build();

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJleHBlcnQiLCJQZXJtaXNzaW9uIjpbIklzQWxtaWdodHkiLCJDYW5TZWN1cmVTaXRlcyIsIkNhbkVkaXRTaXRlcyIsIkNhbkVkaXRVc2VyR3JvdXBzIiwiQ2FuRWRpdFVzZXJzIl0sIm5iZiI6MTYwMjA2NDczMywiZXhwIjoxNjAyMTUxMTMzLCJpYXQiOjE2MDIwNjQ3MzN9.rqrlf4RvtXDDVprthuWlbV26dWbS1Q1t3Cb0jYAjJX4";

export const callbacks = withCallbacks().add(
  "UpdateStatus",
  (status) => (dispatch) => {
    dispatch(updateStatus(status));
  }
);

export function startConnection() {
  connection.start().catch(() => {
    setTimeout(startConnection, 3000);
  });
}

connection.onclose(startConnection);
