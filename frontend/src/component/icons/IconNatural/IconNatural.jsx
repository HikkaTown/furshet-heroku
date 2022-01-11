import React from "react";
import s from "./IconNatural.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconNatural({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/natural.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
