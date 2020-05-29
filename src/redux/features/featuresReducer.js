const initialState = {
  features_data: {
    1: {
      id: 1,
      title: "All kinds of apps",
      icon: "dashboard-web",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque Lorem ipsum dolor sit amet, consectetur.",
    },
    2: {
      id: 2,
      title: "After delivery support",
      icon: "live-support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque Lorem ipsum dolor sit amet, consectetur.",
    },
    3: {
      id: 3,
      title: "Business oriented products",
      icon: "search-stock",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque Lorem ipsum dolor sit amet, consectetur.",
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
