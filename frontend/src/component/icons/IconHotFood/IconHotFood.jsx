import React from "react";
import s from "./IconHotFood.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconHotFood({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/hot_food.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
