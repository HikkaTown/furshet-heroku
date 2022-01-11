import React from "react";
import s from "./IconFood.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconFood({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/food.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
