import {
  TOGGLE_FAVORITE_EAT,
  TOGGLE_FAVORITE_DOP,
  CHANGE_FAVORITE_EAT,
  CHANGE_FAVORITE_DOP,
} from "../type/favoriteTypes";
import { getFavoriteFromLocaleStorage } from "../../utils/getFavoriteFromLocaleStorage";

const savedFavorites = getFavoriteFromLocaleStorage();

const initialState = {
  favoritesEat: [],
  favoritesDop: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_FAVORITE_STORE":
      return {
        ...state,
        favorites: savedFavorites,
      };
    case TOGGLE_FAVORITE_EAT:
      updateFavorites(state.favoritesEat, action.payload.item);
      return {
        ...state,
        favoritesEat: [...state.favoritesEat],
      };
    case TOGGLE_FAVORITE_DOP:
      updateFavorites(state.favoritesDop, action.payload.item);
      return { ...state, favoritesDop: [...state.favoritesDop] };
    case CHANGE_FAVORITE_EAT:
      return {
        ...state,
        favoritesEat: state.favoritesEat.map((item) => {
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
    case CHANGE_FAVORITE_DOP:
      return {
        ...state,
        favoritesDop: state.favoritesDop.map((item) => {
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
    default:
      return state;
  }
};

const updateFavorites = (favorites, item) => {
  const index = favorites.findIndex(
    (card, index) =>
      card.id === item.id &&
      card.category.categoryName === item.category.categoryName
  );
  const isIncludes = index !== -1;
  if (isIncludes) {
    favorites.splice(index, 1);
  } else {
    favorites.push(item);
  }
};

export default reducer;