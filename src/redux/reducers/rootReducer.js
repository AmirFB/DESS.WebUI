import { combineReducers } from "redux";

import siteReducer from "./siteReducer";
import userReducer from "./userReducer";
import apiStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  siteReducer,
  userReducer,
  apiStatusReducer,
});

export default rootReducer;
