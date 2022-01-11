import React from "react";
import s from "./IconDish.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconDish({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/dish.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
