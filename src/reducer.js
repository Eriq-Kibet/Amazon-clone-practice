export const initialState = {
  basket: [],
};
const reducer = (state, action) => {
  console.log(action.item);
  console.log(state.basket);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic add item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //logic to remove from basket
      return { state };

    default:
      return state;
  }
};
export default reducer;
