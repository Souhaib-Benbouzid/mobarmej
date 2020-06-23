import { GET_NAVIGATION_ITEMS } from "./navActions";

const initialState = {
  navItems: [
    { id: 1, name: "About", href: "/about" },
    { id: 2, name: "Contact", href: "/contact" },
    { id: 3, name: "Projects", href: "/projects" },
  ],
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAVIGATION_ITEMS:
      return {
        ...state,
        // fetch data from the api
        navItems: [...state.navItems],
      };
    default:
      return state;
  }
};

export default navReducer;
