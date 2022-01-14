import React from "react";
import Layout from "../../component/Layout/Layout";
import cs from "classnames";
import s from "./index.module.scss";
import Navigation from "../../component/Navigation/Navigation";
// TODO: Доделать страницу фаваритов
export default function index({ data }) {
  return (
    <>
      <Layout>
        <div className={s.container}>
          <h1 className={s.header}>Избранное</h1>
        </div>
        <div className={s.container}>
          {!data ? (
            <>
              <p className={s.title}>
                В избранном пока ничего нет. Воспользуйтесь поиском или
                перейдите в интересующий вас раздел
              </p>
              <Navigation className={s.nav} classNameBtn={s.nav_btn} />
            </>
          ) : (
            ""
          )}
        </div>
      </Layout>
    </>
  );
}
