import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/selectors/cartSelector";
import CartOrderContainer from "../CartOrderContainer/CartOrderContainer";
import Navigation from "../Navigation/Navigation";
import CardBasketForThreeValue from "../uikit/CardBasketForThreeValue/CardBasketForThreeValue";
import CardForBasketFurshet from "../uikit/CardForBasketFurshet/CardForBasketFurshet";
import CardForBasketGastro from "../uikit/CardForBasketGastro/CardForBasketGastro";
import s from "./CartBlock.module.scss";
export default function CartBlock() {
  const cartStore = useSelector(cartSelector());

  let totalPrice = 0;
  cartStore.map((item) => {
    totalPrice += item.totalPrice;
  });

  return (
    <div className={s.section}>
      <div className={s.cart_list}>
        {cartStore.length > 0 &&
          cartStore.map((item) => {
            if (item?.threeValue) {
              return <CardBasketForThreeValue key={item.id} data={item} />;
            } else if (item.category.categoryName === "Фуршет") {
              return <CardForBasketFurshet key={item.id} data={item} />;
            } else if (
              item.category.categoryName === "Гастро-станции" ||
              item.category.categoryName === "Бар" ||
              item.category.categoryName === "Мастер-класс"
            ) {
              return <CardForBasketGastro key={item.id} data={item} />;
            } else if (typeof item.params === "string") {
              return <CardForBasketFurshet key={item.id} data={item} />;
            }
          })}
        {!cartStore.length && (
          <>
            <p className={s.title}>
              Ваша корзина пуста. Воспользуйтесь поиском или перейдите в
              интересующий вас раздел
            </p>
            <Navigation className={s.nav} classNameBtn={s.nav_btn} />
          </>
        )}
      </div>
      <div className={s.cart_order}>
        <CartOrderContainer totalPrice={totalPrice} />
      </div>
    </div>
  );
}
