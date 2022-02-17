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
// TODO: Доделать страницу фаваритов
export default function Index({ data }) {
  const favoritesEat = useSelector(favoriteSelectorEat());
  const favoritesDops = useSelector(favoriteSelectorDop());
  const [category, setCategory] = useState("Фуршет");
  const [visibleCards, setVisibleCards] = useState(null);
  const [valuesCards, setValuesCards] = useState({
    favoritesMasterClass: 0,
    favoritesGastro: 0,
    favoritesBuffets: 0,
    favoritesBar: 0,
    favoritesDop: 0,
  });
  const selectCategory = (text) => {
    setCategory(text);
  };

  const checkCategoryFavorites = async (category) => {
    let data = null;
    let cards = [];

    // if (category === "Фуршет") {
    //   data = await fetch("http://localhost:3000/api/getBufets").then((res) => {
    //     return res.json();
    //   });
    //   data.map((item) => {
    //     favoritesBuffets.find((card) => {
    //       item.id === card.id ? cards.push(item) : false;
    //     });
    //   });
    // } else if (category === "Гастро-станции") {
    //   data = await fetch("http://localhost:3000/api/getStations").then(
    //     (res) => {
    //       return res.json();
    //     }
    //   );
    //   data.map((item) => {
    //     favoritesGastro.find((card) => {
    //       item.id === card.id ? cards.push(item) : false;
    //     });
    //   });
    // } else if (category === "Мастер-классы") {
    //   data = await fetch("http://localhost:3000/api/getMasterClass").then(
    //     (res) => {
    //       return res.json();
    //     }
    //   );
    //   data.map((item) => {
    //     favoritesMasterClass.find((card) => {
    //       item.id === card.id ? cards.push(item) : false;
    //     });
    //   });
    // } else if (category === "Выездные бары") {
    //   data = await fetch("http://localhost:3000/api/getBarCards").then(
    //     (res) => {
    //       return res.json();
    //     }
    //   );
    //   data.map((item) => {
    //     favoritesBar.find((card) => {
    //       card.id === item.id ? cards.push(item) : "";
    //     });
    //   });
    // } else {
    //   // data = запрос за допами
    //   data.map((item) => {
    //     favoritesDops.find((card) => {
    //       card.id === item.id && card.categoryName === item.categoryName
    //         ? cards.push(item)
    //         : "";
    //     });
    //   });
    // }
    return cards;
  };

  useEffect(async () => {
    // const newData = await checkCategoryFavorites(category);
    // setVisibleCards(newData);
    favoritesEat.map((item) => {
      if (item.category.categoryName === "Фуршет") {
        setValuesCards((prevstate) => {
          return {
            ...prevstate,
            favoritesBuffets: prevstate.favoritesBuffets + 1,
          };
        });
      }
    });
  }, [category]);

  return (
    <>
      <Layout>
        <div className={s.container}>
          <h1 className={s.header}>Избранное</h1>
        </div>
        <div className={s.container}>
          {!(
            valuesCards.favoritesMasterClass !== 0 ||
            valuesCards.favoritesGastro !== 0 ||
            valuesCards.favoritesBuffets !== 0 ||
            valuesCards.favoritesBar !== 0 ||
            valuesCards.favoritesDop !== 0
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
                buffetsLength={valuesCards.favoritesBuffets}
                gastroLength={valuesCards.favoritesGastro}
                masterclassLength={valuesCards.favoritesMasterClass}
                barLength={valuesCards.favoritesBar}
                dopsLenght={valuesCards.favoritesDops}
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
