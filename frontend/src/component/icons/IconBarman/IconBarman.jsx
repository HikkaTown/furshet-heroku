import React from "react";
import s from "./IconBarman.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconBarman({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/barman.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
