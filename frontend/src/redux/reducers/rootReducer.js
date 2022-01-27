import {combineReducers} from "redux";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  favoriteReducer: favoriteReducer,
})

export default rootReducer;