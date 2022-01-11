import React from "react";
import s from "./IconGrill.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconGrill({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/grill.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
