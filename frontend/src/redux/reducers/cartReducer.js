// const savedCart = getCartFromLocaleStorage();

import {
  CHANGE_IN_CART,
  CLEAR_CART_STORE,
  TOGGLE_TO_CART,
} from "../type/cartTypes";
import { act } from "react-dom/test-utils";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_CART_STORE":
      return {
        ...state,
        cart: savedCart,
      };
    case TOGGLE_TO_CART:
      toggleFunction(state.cart, action.payload.item);
      return {
        ...state,
        cart: [...state.cart],
      };
    case CHANGE_IN_CART:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (
            item.id === action.payload.item.id &&
            item.category.categoryName ===
              action.payload.item.category.categoryName
          ) {
            return action.payload.item;
          } else {
            return item;
          }
        }),
      };
    case CLEAR_CART_STORE:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

const toggleFunction = (cart, item) => {
  const index = cart.findIndex(
    (card, index) =>
      card.id === item.id &&
      card.category.categoryName === item.category.categoryName
  );
  const isIncludes = index !== -1;
  if (isIncludes) {
    cart.splice(index, 1);
  } else {
    cart.push(item);
  }
};

export default reducer;
