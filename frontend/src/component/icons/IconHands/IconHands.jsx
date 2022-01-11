import React from "react";
import s from "./IconHands.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconHands({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/hands.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
