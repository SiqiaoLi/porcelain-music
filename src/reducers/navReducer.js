const navReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return !state;
    default:
      return state;
  }
};

export default navReducer;
