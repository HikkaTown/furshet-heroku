import {CHANGE_IN_CART, TOGGLE_TO_CART} from "../type/cartTypes";

export const toggleToCart = (item) => (dispatch) => {
  dispatch({type: TOGGLE_TO_CART, payload: {item}});
}

export const changeInCart = (item) => (dispatch) => {
  dispatch({type: CHANGE_IN_CART, payload: {item}});
}