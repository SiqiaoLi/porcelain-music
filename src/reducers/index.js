import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
import isPlayingReducer from "./isPlayingReducer";
import timeUpdateReducer from "./timeUpdateReducer";

const allReducers = combineReducers({
  music: musicReducer,
  isPlaying: isPlayingReducer,
  timeInfo: timeUpdateReducer,
});

export default allReducers;
