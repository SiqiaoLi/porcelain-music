import { combineReducers } from "redux";
import musicReducer from "./musicReducer";

const allReducers = combineReducers({
  music: musicReducer,
});

export default allReducers;
