import React from "react";
import Layout from "../../component/Layout/Layout";
import Head from "next/head";
import s from "./cart.module.scss";
import ClearCartButton from "../../component/uikit/ClearCartButton/ClearCartButton";
import CartBlock from "../../component/CartBlock/CartBlock";
import { useDispatch, useSelector } from "react-redux";
import { clearCartStore } from "../../redux/actions/cartActions";
import { cartSelector } from "../../redux/selectors/cartSelector";
// import AdditionalsSlider from "../../component/AdditionalsSlider/AdditionalsSlider";
// import axios from "axios";

export default function Cart({ additionalsCards }) {
  console.log(additionalsCards);
  const dispatch = useDispatch();
  const cartStore = useSelector(cartSelector());
  const handlerClearBasket = () => {
    dispatch(clearCartStore());
  };
  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>
      <Layout>
        <section className={s.section}>
          <div className={s.container}>
            <h1 className={s.head}>Корзина</h1>
            {cartStore.length > 0 && (
              <ClearCartButton onClick={handlerClearBasket} />
            )}
          </div>
          <CartBlock />
          {/* <AdditionalsSlider /> */}
        </section>
      </Layout>
    </>
  );
}

// export async function getStaticProps({ preview = null }) {
//   const additionalList = await axios(
//     `http://localhost:3000/api/additionalsAll`
//   );

//   return {
//     props: {
//       additionalsCards: additionalList,
//     },
//   };
// }
