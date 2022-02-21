import {
  CHANGE_IN_CART,
  CLEAR_CART_STORE,
  TOGGLE_TO_CART,
} from "../type/cartTypes";

export const toggleToCart = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_TO_CART, payload: { item } });
};

export const changeInCart = (item) => (dispatch) => {
  dispatch({ type: CHANGE_IN_CART, payload: { item } });
};

export const clearCartStore = (item) => (dispatch) => {
  dispatch({ type: CLEAR_CART_STORE, payload: { item } });
};
