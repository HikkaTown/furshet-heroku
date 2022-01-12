import React from "react";
import cs from "classnames";
import s from "./StudyList.module.scss";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import { URL_SERVER } from "../../utils/const";
// TODO: ПОДВЯЗАТЬ BACKEND
export default function StudyList({ data }) {
  const dataList = data;
  return (
    <ul className={s.list}>
      {dataList.map((item, index) => {
        if (dataList.length - 1 === index) {
          return (
            <li key={index} className={s.item}>
              <LazyImageWrapper
                // src={`${URL_SERVER}${item.image}`}
                src={item.image}
                wrapperClass={s.imageWrapper}
                className={[s.image]}
                alt={item.text}
                lazy={true}
              />
              <h3 className={s.head}>{item.text}</h3>
            </li>
          );
        } else {
          return (
            <li key={index} className={s.item}>
              <LazyImageWrapper
                // src={`${URL_SERVER}${item.image}`}
                src={item.image}
                wrapperClass={s.imageWrapper}
                className={[s.image]}
                alt={item.text}
                lazy={true}
              />
              <h3 className={s.head}>{item.text}</h3>
              <LazyImageWrapper
                src={"uikit/studyBlock/arrow_mob.svg"}
                wrapperClass={s.wrapper_arrow}
                className={[s.arrow]}
              />
            </li>
          );
        }
      })}
      {/* <li className={s.item}>
        <LazyImageWrapper
          src={"images/banner-min.jpg"}
          // srcMobile={}
          wrapperClass={s.imageWrapper}
          className={[s.image]}
          alt={""}
          lazy={true}
        />
        <h3 className={s.head}>Заголовок</h3>
        <LazyImageWrapper
          src={"uikit/studyBlock/arrow_mob.svg"}
          wrapperClass={s.wrapper_arrow}
          className={[s.arrow]}
        />
      </li>
      <li className={s.item}>
        <LazyImageWrapper
          src={"images/banner-min.jpg"}
          // srcMobile={}
          wrapperClass={s.imageWrapper}
          className={[s.image]}
          alt={""}
          lazy={true}
        />
        <h3 className={s.head}>Заголовок</h3>
        <LazyImageWrapper
          src={"uikit/studyBlock/arrow_mob.svg"}
          wrapperClass={s.wrapper_arrow}
          className={[s.arrow]}
        />
      </li>
      <li className={s.item}>
        <LazyImageWrapper
          src={"images/banner-min.jpg"}
          // srcMobile={}
          wrapperClass={s.imageWrapper}
          className={[s.image]}
          alt={""}
          lazy={true}
        />
        <h3 className={s.head}>Заголовок</h3>
        <LazyImageWrapper
          src={"uikit/studyBlock/arrow_mob.svg"}
          wrapperClass={s.wrapper_arrow}
          className={[s.arrow]}
        />
      </li>
      <li className={s.item}>
        <LazyImageWrapper
          src={"images/banner-min.jpg"}
          // srcMobile={}
          wrapperClass={s.imageWrapper}
          className={[s.image]}
          alt={""}
          lazy={true}
        />
        <h3 className={s.head}>Заголовок</h3>
      </li> */}
    </ul>
  );
}
