const initialState = { currentTime: 0, duration: 0, animationPercentage: 0 };

const timeUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TIME_UPDATE":
      return {
        ...state,
        currentTime: action.payload.current,
        duration: action.payload.duration,
        animationPercentage: action.payload.percentage,
      };
    default:
      return {
        ...state,
      };
  }
};

export default timeUpdateReducer;
