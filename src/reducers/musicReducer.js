const initState = {
  hit: [],
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MUSIC":
      return {
        ...state,
        hit: action.payload.hit,
      };
    default:
      return {
        ...state,
      };
  }
};

export default musicReducer;
