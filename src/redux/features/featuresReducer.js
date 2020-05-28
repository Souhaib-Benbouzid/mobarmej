const initialState = {
  features_data: {
    1: {
      title: "All kinds of apps",
      icon: "dashboard-web",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque",
    },
    2: {
      title: "After delivery support",
      icon: "live-support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque",
    },
    3: {
      title: "Business oriented products",
      icon: "search-stock",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque",
    },
  },
};

const featuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FEATURES_DATA":
      return {
        state,
      };
    default:
      return state;
  }
};

export default featuresReducer;
