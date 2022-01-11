import React from "react";
import s from "./IconWow.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconWow({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/wow.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
