export const playSong = () => {
  return {
    type: "PLAY_SONG",
  };
};

export const timeUpdate = ({ current, duration, percentage }) => {
  return {
    type: "TIME_UPDATE",
    payload: {
      current: current,
      duration: duration,
      percentage: percentage,
    },
  };
};
