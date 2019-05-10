import { combineReducers } from "redux";
import dashboard from "./src/auth/reducers/dashboard.reducer";
import user from "./src/auth/reducers/auth.reducer";

export default combineReducers({
  user,
  dashboard
});
