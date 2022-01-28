import {
  TOGGLE_FAVORITE_BAR,
  TOGGLE_FAVORITE_BUFFETS,
  TOGGLE_FAVORITE_GASTRO,
  TOGGLE_FAVORITE_MASTERCLASS
} from "../type/favoriteTypes";
import {getFavoriteFromLocaleStorage} from "../../utils/getFavoriteFromLocaleStorage";

const savedFavorites = getFavoriteFromLocaleStorage();

const initialState = {
  favoritesBuffets: [],
  favoritesGastro: [],
  favoritesMasterClass: [],
  favoritesBar: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_FAVORITE_STORE':
      return {
        ...state,
        favorites: savedFavorites
      }
    case TOGGLE_FAVORITE_BUFFETS:
      updateFavorites(state.favoritesBuffets, action.payload.item);
      return {
        ...state,
        favoritesBuffets: [...state.favoritesBuffets]
      }
    case TOGGLE_FAVORITE_GASTRO:
      console.log(action.payload.item)
      updateFavorites(state.favoritesGastro, action.payload.item);
      return {
        ...state,
        favoritesGastro: [...state.favoritesGastro]
      }
    case TOGGLE_FAVORITE_MASTERCLASS:
      updateFavorites(state.favoritesMasterClass, action.payload.item);
      return {
        ...state,
        favoritesMasterClass: [...state.favoritesMasterClass]
      }
    case TOGGLE_FAVORITE_BAR:
      updateFavorites(state.favoritesBar, action.payload.item)
      return {
        ...state,
        favoritesBar: [...state.favoritesBar]
      }
    default:
      return state
  }
}

const updateFavorites = (favorites, item) => {
  const index = favorites.findIndex((card, index) => card.id === item.id && card.categoryName === item.categoryName);
  const isIncludes = index !== -1;
  if (isIncludes) {
    favorites.splice(index, 1);
  } else {
    favorites.push(item);
  }

}

export default reducer