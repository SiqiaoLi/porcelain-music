const initState = {
  song: [],
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MUSIC":
      return {
        ...state,
        song: action.payload.song,
      };
    default:
      return {
        ...state,
      };
  }
};

export default musicReducer;
