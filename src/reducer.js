import { cuisineData, restaurantsData } from "./data";

export const restroInitialState = {
  cuisineData: cuisineData,
  restaurantsData: restaurantsData,
  modal: false,
  input: {
    rating: "1",
    comment: "",
    revName: "",
    pp: "",
  },
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_CUISINE":
      return {
        ...state,
        cuisineData: action.payload,
      };

    case "TOGGLE_MODAL":
      return {
        ...state,
        modal: action.payload,
      };

    case "UPDATE_INPUT":
      return {
        ...state,
        input: action.payload,
      };

    case "ADD_RATINGS":
      return {
        ...state,
        restaurantsData: state.restaurantsData.map((item) => {
          if (item.id === Number(action.payload.id)) {
            return {
              ...item,
              ratings: [...item.ratings, state.input],
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
