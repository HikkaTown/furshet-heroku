import React from "react";
import s from "./IconCockTwo.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconCockTwo({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/cock2.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
