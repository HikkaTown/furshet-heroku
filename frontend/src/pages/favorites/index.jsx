import React, { useEffect, useState } from "react";
import Layout from "../../component/Layout/Layout";
import cs from "classnames";
import s from "./index.module.scss";
import Navigation from "../../component/Navigation/Navigation";
import { useSelector } from "react-redux";
import {
  favoriteSelectorEat,
  favoriteSelectorDop,
} from "../../redux/selectors/favoriteSelector";
import TabsForFavorites from "../../component/uikit/TabsForFavorites/TabsForFavorites";
import CardsBlockFavorites from "../../component/CardsBlockFavorites/CardsBlockFavorites";
export default function Index() {
  const favoritesEat = useSelector(favoriteSelectorEat());
  const favoritesDop = useSelector(favoriteSelectorDop());
  const [category, setCategory] = useState(null);
  const [visibleCards, setVisibleCards] = useState(null);
  const selectCategory = (text) => {
    setCategory(text);
  };
  const favoritesMasterClass = [];
  const favoritesGastro = [];
  const favoritesBuffets = [];
  const favoritesBar = [];

  favoritesEat.forEach((item) => {
    if (item.category.categoryName === "Фуршет") {
      favoritesBuffets.push(item);
      if (category === null) {
        setCategory("Фуршет");
      }
    } else if (item.category.categoryName === "Гастро-станции") {
      favoritesGastro.push(item);
      if (category === null) {
        setCategory("Гастро-станции");
      }
    } else if (item.category.categoryName === "Мастер-класс") {
      favoritesMasterClass.push(item);
      if (category === null) {
        setCategory("Мастер-классы");
      }
    } else if (item.category.categoryName === "Бар") {
      favoritesBar.push(item);
      if (category === null) {
        setCategory("Выездные бары");
      }
    } else {
      setCategory("Дополнительно");
    }
  });

  useEffect(() => {
    if (category === "Фуршет") {
      setVisibleCards(favoritesBuffets);
    } else if (category === "Гастро-станции") {
      setVisibleCards(favoritesGastro);
    } else if (category === "Выездные бары") {
      setVisibleCards(favoritesBar);
    } else if (category === "Мастер-классы") {
      setVisibleCards(favoritesMasterClass);
    } else {
      setVisibleCards(favoritesDop);
    }
  }, [category]);

  return (
    <>
      <Layout>
        <div className={s.container}>
          <h1 className={s.header}>Избранное</h1>
        </div>
        <div className={s.container}>
          {!(
            favoritesMasterClass.length !== 0 ||
            favoritesGastro.length !== 0 ||
            favoritesBuffets.length !== 0 ||
            favoritesBar.length !== 0 ||
            favoritesDop.length !== 0
          ) ? (
            <>
              <p className={s.title}>
                В избранном пока ничего нет. Воспользуйтесь поиском или
                перейдите в интересующий вас раздел
              </p>
              <Navigation className={s.nav} classNameBtn={s.nav_btn} />
            </>
          ) : (
            <div className={s.block}>
              <TabsForFavorites
                category={category}
                onClick={selectCategory}
                buffetsLength={favoritesBuffets.length}
                gastroLength={favoritesGastro.length}
                masterclassLength={favoritesMasterClass.length}
                barLength={favoritesBar.length}
                dopsLenght={favoritesDop.length}
              />
              <CardsBlockFavorites
                data={visibleCards}
                categoryName={category}
              />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
