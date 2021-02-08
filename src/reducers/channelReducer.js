const channelReducer = (state = "热歌榜", action) => {
  switch (action.type) {
    case "SELECT_CHANNEL":
      return action.payload;
    default:
      return state;
  }
};

export default channelReducer;
