import React from "react";
import cs from "classnames";
import s from "./StudyList.module.scss";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import { PATH_IMAGES } from "../../utils/const";
// TODO: ПОДВЯЗАТЬ BACKEND
export default function StudyList({ data }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <LazyImageWrapper
          src={`${PATH_IMAGES}${data.firstImage}`}
          wrapperClass={s.imageWrapper}
          className={[s.image]}
          alt={data.header}
          lazy={true}
        />
        <h3 className={s.head}>{data.firstImageText}</h3>
        <LazyImageWrapper
          src={"uikit/studyBlock/arrow_mob.svg"}
          wrapperClass={s.wrapper_arrow}
          className={[s.arrow]}
        />
      </li>
      <li className={s.item}>
        <LazyImageWrapper
          src={`${PATH_IMAGES}${data.secondImage}`}
          wrapperClass={s.imageWrapper}
          className={[s.image]}
          alt={data.header}
          lazy={true}
        />
        <h3 className={s.head}>{data.secondImageText}</h3>
        <LazyImageWrapper
          src={"uikit/studyBlock/arrow_mob.svg"}
          wrapperClass={s.wrapper_arrow}
          className={[s.arrow]}
        />
      </li>
      <li className={s.item}>
        <LazyImageWrapper
          src={`${PATH_IMAGES}${data.threeImage}`}
          wrapperClass={s.imageWrapper}
          className={[s.image]}
          alt={data.header}
          lazy={true}
        />
        <h3 className={s.head}>{data.threeImageText}</h3>
        <LazyImageWrapper
          src={"uikit/studyBlock/arrow_mob.svg"}
          wrapperClass={s.wrapper_arrow}
          className={[s.arrow]}
        />
      </li>
      <li className={s.item}>
        <LazyImageWrapper
          src={`${PATH_IMAGES}${data.fourImage}`}
          wrapperClass={s.imageWrapper}
          className={[s.image]}
          alt={data.header}
          lazy={true}
        />
        <h3 className={s.head}>{data.fourImageText}</h3>
      </li>
    </ul>
  );
}
