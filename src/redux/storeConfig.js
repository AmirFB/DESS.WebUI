import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { signalMiddleware } from "redux-signalr";
import { connection, callbacks } from "./helpers/signalrConfig";

const signalR = signalMiddleware({
  callbacks,
  connection,
  shouldConnectionStartImmediately: false,
});

export default function storeConfig(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  console.log(window.localStorage.getItem("token"));
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, signalR, reduxImmutableStateInvariant())
    )
  );
}
