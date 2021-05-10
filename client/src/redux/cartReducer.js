import { TOGGLE_CART } from "../redux/types";

const initialState = {
  cartOpen: false,
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };
    default:
      return state
  }
};
