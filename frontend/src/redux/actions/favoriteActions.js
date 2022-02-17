import {
  TOGGLE_FAVORITE_EAT,
  TOGGLE_FAVORITE_DOP,
} from "../type/favoriteTypes";

export const toggleFavoriteEat = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE_EAT, payload: { item } });
};

export const toggleDop = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE_DOP, payload: { item } });
};
