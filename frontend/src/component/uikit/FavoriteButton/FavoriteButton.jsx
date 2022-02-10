import React, { useEffect, useState } from "react";
import cs from "classnames";
import s from "./FavoriteButton.module.scss";
import {
  toggleFavoriteBar,
  toggleFavoriteBuffets,
  toggleFavoriteGastro,
  toggleFavoriteMasterclass,
  toggleDop,
} from "../../../redux/actions/favoriteActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  favoriteSelectorBar,
  favoriteSelectorBuffets,
  favoriteSelectorDop,
  favoriteSelectorGastro,
  favoriteSelectorMasterclass,
} from "../../../redux/selectors/favoriteSelector";

export default function FavoriteButton({ className, id, categoryName }) {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const favoritesBuffets = useSelector(favoriteSelectorBuffets());
  const favoritesGastro = useSelector(favoriteSelectorGastro());
  const favoritesMasterClass = useSelector(favoriteSelectorMasterclass());
  const favoritesBar = useSelector(favoriteSelectorBar());
  const favoriteDops = useSelector(favoriteSelectorDop());

  const handlerClick = () => {
    if (categoryName === "Фуршет") {
      setAdded(!added);
      dispatch(
        toggleFavoriteBuffets({
          id: id,
          categoryName: categoryName,
        })
      );
    } else if (categoryName === "Гастро-станции") {
      setAdded(!added);
      dispatch(
        toggleFavoriteGastro({
          id: id,
          categoryName: categoryName,
        })
      );
    } else if (categoryName === "Мастер-классы") {
      setAdded(!added);
      dispatch(
        toggleFavoriteMasterclass({
          id: id,
          categoryName: categoryName,
        })
      );
    } else if (categoryName === "Выездные бары") {
      setAdded(!added);
      dispatch(
        toggleFavoriteBar({
          id: id,
          categoryName: categoryName,
        })
      );
    } else {
      setAdded(!added);
      dispatch(
        toggleDop({
          id: id,
          categoryName: categoryName,
        })
      );
    }
  };
  useEffect(() => {
    if (categoryName === "Фуршет") {
      setAdded(
        favoritesBuffets.find(
          (item) => item.id === id && categoryName === item.categoryName
        )
      );
    } else if (categoryName === "Гастро-станции") {
      setAdded(
        favoritesGastro.find(
          (item) => item.id === id && categoryName === item.categoryName
        )
      );
    } else if (categoryName === "Мастер-классы") {
      setAdded(
        favoritesMasterClass.find(
          (item) => item.id === id && categoryName === item.categoryName
        )
      );
    } else if (categoryName === "Выездные бары") {
      setAdded(
        favoritesBar.find(
          (item) => item.id === id && categoryName === item.categoryName
        )
      );
    } else {
      setAdded(
        favoriteDops.find(
          (item) => item.id === id && categoryName === item.categoryName
        )
      );
    }
  }, [
    favoritesBuffets,
    favoritesGastro,
    favoritesMasterClass,
    favoritesBar,
    id,
    categoryName,
  ]);
  return (
    <button
      onClick={handlerClick}
      className={
        added
          ? cs(s.button, s.button_added, className)
          : cs(s.button, className)
      }
    >
      <svg
        width="30"
        height="28"
        viewBox="0 0 30 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={s.icon}
      >
        <path
          d="M26.7867 4.14666C26.1057 3.46533 25.2971 2.92485 24.4071 2.5561C23.5172 2.18735 22.5633 1.99756 21.6 1.99756C20.6367 1.99756 19.6828 2.18735 18.7929 2.5561C17.9029 2.92485 17.0943 3.46533 16.4133 4.14666L15 5.55999L13.5867 4.14666C12.2111 2.77107 10.3454 1.99827 8.4 1.99827C6.45462 1.99827 4.58892 2.77107 3.21333 4.14666C1.83774 5.52225 1.06494 7.38795 1.06494 9.33333C1.06494 11.2787 1.83774 13.1444 3.21333 14.52L4.62666 15.9333L15 26.3067L25.3733 15.9333L26.7867 14.52C27.468 13.839 28.0085 13.0304 28.3772 12.1405C28.746 11.2505 28.9358 10.2966 28.9358 9.33333C28.9358 8.37001 28.746 7.41613 28.3772 6.52619C28.0085 5.63624 27.468 4.82767 26.7867 4.14666V4.14666Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
