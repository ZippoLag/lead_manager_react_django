import { combineReducers } from "redux";
import leadReducer from "./leadReducer";
import errorReducer from "./errorReducer";
import messageReducer from "./messageReducer";
import authReducer from "./authReducer";

export default combineReducers({
  leadReducer,
  errorReducer,
  messageReducer,
  authReducer
});
