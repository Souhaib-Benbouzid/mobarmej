/* here goes the projects reducer */

const initialState = {
  projects_data: [
    {
      id: "1",
      name: "Mobarmij",
      type: "web app",
      imgLink:
        "https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: "2",
      name: "pexels",
      type: "mobile app",
      imgLink:
        "https://images.pexels.com/photos/3585090/pexels-photo-3585090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: "3",
      name: "pexels desktop",
      type: "Desktop app",
      imgLink:
        "https://images.pexels.com/photos/3584973/pexels-photo-3584973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROJECTS_DATA":
      return {
        state,
      };
    default:
      return state;
  }
};

export default projectsReducer;
