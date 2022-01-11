import React from "react";
import s from "./IconCockOne.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconCockOne({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/cock.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
