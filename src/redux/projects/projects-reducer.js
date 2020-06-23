/* here goes the projects reducer */

const initialState = {
  projects_data: [
    {
      id: "1",
      name: "Mobarmij",
      type: "web app",
      imgLink:
        "https://images.pexels.com/photos/2983226/pexels-photo-2983226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500",
    },
    {
      id: "2",
      name: "pexels",
      type: "mobile app",
      imgLink:
        "https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500",
    },
    {
      id: "3",
      name: "pexels desktop",
      type: "Desktop app",
      imgLink:
        "https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500",
    },
    {
      id: "4",
      name: "pexels desktop",
      type: "Desktop app",
      imgLink:
        "https://images.pexels.com/photos/1037996/pexels-photo-1037996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500",
    },
    {
      id: "5",
      name: "pexels desktop",
      type: "Desktop app",
      imgLink:
        "https://images.pexels.com/photos/3584973/pexels-photo-3584973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: "6",
      name: "pexels desktop",
      type: "Desktop app",
      imgLink:
        "https://images.pexels.com/photos/3584973/pexels-photo-3584973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: "7",
      name: "pexels desktop",
      type: "Desktop app",
      imgLink:
        "https://images.pexels.com/photos/3584973/pexels-photo-3584973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: "8",
      name: "pexels desktop",
      type: "Desktop app",
      imgLink:
        "https://images.pexels.com/photos/3584973/pexels-photo-3584973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: "9",
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
