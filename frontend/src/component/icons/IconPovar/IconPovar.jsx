import React from "react";
import s from "./IconPovar.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconPovar({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/povar.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
