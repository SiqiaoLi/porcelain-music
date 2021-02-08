import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
import isPlayingReducer from "./isPlayingReducer";
import timeUpdateReducer from "./timeUpdateReducer";
import channelReducer from "./channelReducer";
import navReducer from "./navReducer";

const allReducers = combineReducers({
  music: musicReducer,
  isPlaying: isPlayingReducer,
  timeInfo: timeUpdateReducer,
  channel: channelReducer,
  navStatus: navReducer,
});

export default allReducers;
