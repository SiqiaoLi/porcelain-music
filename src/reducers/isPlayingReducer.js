const isPlayingReducer = (state = false, action) => {
  switch (action.type) {
    case "PLAY_SONG":
      return !state;
    default:
      return state;
  }
};

export default isPlayingReducer;
