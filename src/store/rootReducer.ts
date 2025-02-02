import { combineReducers } from "@reduxjs/toolkit";
import statReducer from "./reducers/statReducer";

const rootReducer = combineReducers({
  stats: statReducer,
});

export default rootReducer;
