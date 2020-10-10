import { combineReducers } from "redux";

import siteReducer from "./siteReducer";
import apiStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({ siteReducer, apiStatusReducer });

export default rootReducer;
