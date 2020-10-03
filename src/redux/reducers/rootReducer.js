import { combineReducers } from "redux";
import siteReducer from "./siteReducer";

const rootReducer = combineReducers({ siteReducer });

export default rootReducer;
