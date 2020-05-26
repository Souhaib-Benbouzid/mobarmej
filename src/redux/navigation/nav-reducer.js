const INITIAL_STATE = {
  isOpen: false,
};

const navReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_NAVIGATION_BAR":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default navReducer;
