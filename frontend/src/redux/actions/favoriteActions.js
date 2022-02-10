import {
  TOGGLE_FAVORITE_BAR,
  TOGGLE_FAVORITE_BUFFETS,
  TOGGLE_FAVORITE_DOP,
  TOGGLE_FAVORITE_GASTRO,
  TOGGLE_FAVORITE_MASTERCLASS,
} from "../type/favoriteTypes";

export const toggleFavoriteBuffets = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE_BUFFETS, payload: { item } });
};

export const toggleFavoriteGastro = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE_GASTRO, payload: { item } });
};

export const toggleFavoriteMasterclass = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE_MASTERCLASS, payload: { item } });
};

export const toggleFavoriteBar = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE_BAR, payload: { item } });
};

export const toggleDop = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE_DOP, payload: { item } });
};
