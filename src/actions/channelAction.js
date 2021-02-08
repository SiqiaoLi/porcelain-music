export const selectChannel = (channel) => {
  return {
    type: "SELECT_CHANNEL",
    payload: channel,
  };
};
