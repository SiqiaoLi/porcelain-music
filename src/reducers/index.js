import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
import isPlayingReducer from "./isPlayingReducer";
import timeUpdateReducer from "./timeUpdateReducer";
import channelReducer from "./channelReducer";

const allReducers = combineReducers({
  music: musicReducer,
  isPlaying: isPlayingReducer,
  timeInfo: timeUpdateReducer,
  channel: channelReducer,
});

export default allReducers;
