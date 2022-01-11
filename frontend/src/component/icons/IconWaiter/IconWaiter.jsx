import React from "react";
import s from "./IconWaiter.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconWaiter({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/waiter.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
