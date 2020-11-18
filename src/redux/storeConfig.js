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

const store = createStore(
  rootReducer,
  {},
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
    applyMiddleware(thunk, signalR, reduxImmutableStateInvariant())
  )
);

export default store;
