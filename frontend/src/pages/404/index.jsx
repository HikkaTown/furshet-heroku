import React from "react";
import Header from "../../component/Header/Header";
import Layout from "../../component/Layout/Layout";
import Navigation from "../../component/Navigation/Navigation";
import s from "./index.module.scss";

export default function index() {
  return (
    <>
      <Layout>
        <section className={s.section}>
          <div className={s.container}>
            <h1 className={s.header}>404</h1>
            <p className={s.subtitle}>
              Страница не найдена... Воспользуйтесь поиском или перейдите в
              интересующий вас раздел
            </p>
            <Navigation className={s.nav} classNameBtn={s.nav_btn} />
          </div>
        </section>
      </Layout>
    </>
  );
}
