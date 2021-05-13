import { combineReducers } from "redux";
import uiReducer from "./ui";
import authReducer from "./auth";
import blogReducer from "./blog";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  blog: blogReducer,
});

export default rootReducer;
