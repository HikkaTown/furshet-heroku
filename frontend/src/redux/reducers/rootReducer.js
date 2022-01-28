import {combineReducers} from "redux";
import favoriteReducer from "./favoriteReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  favoriteReducer: favoriteReducer,
  cartReducer: cartReducer,
})

export default rootReducer;