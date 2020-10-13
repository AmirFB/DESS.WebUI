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
  .withUrl("http://" + window.location.hostname + ":5000/api/web/hub/ef/", {
    accessTokenFactory: () => getToken(),
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets,
  })
  .build();

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
