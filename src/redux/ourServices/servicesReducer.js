const initialState = {
  services_data: [
    "Web design",
    "Web development",
    "android / iOS development",
    "Windows Apps",
    "Search engine optimization",
    "Branding",
    "Online marketing",
  ],
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SERVICES_DATA":
      return {
        state,
      };
    default:
      return state;
  }
};

export default servicesReducer;
