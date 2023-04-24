export const initialState = {
  category: null,
  search: null,
  maxRange: null,
};

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.item,
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.item,
      };
    case "SET_RANGE":
      return {
        ...state,
        maxRange: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
