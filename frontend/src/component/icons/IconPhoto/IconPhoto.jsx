import React from "react";
import s from "./IconPhoto.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconPhoto({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/photo.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
