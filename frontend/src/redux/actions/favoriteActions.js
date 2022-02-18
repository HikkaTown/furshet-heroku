import {
  TOGGLE_FAVORITE_EAT,
  TOGGLE_FAVORITE_DOP,
  CHANGE_FAVORITE_DOP,
  CHANGE_FAVORITE_EAT,
} from "../type/favoriteTypes";

export const toggleFavoriteEat = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE_EAT, payload: { item } });
};

export const toggleDop = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE_DOP, payload: { item } });
};

export const changeFavoriteEat = (item) => (dispatch) => {
  dispatch({ type: CHANGE_FAVORITE_EAT, payload: { item } });
};

export const changeFavoriteDop = (item) => (dispatch) => {
  dispatch({ type: CHANGE_FAVORITE_DOP, payload: { item } });
};
