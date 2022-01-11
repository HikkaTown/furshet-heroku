import React from "react";
import s from "./IconCalendar.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconCalendar({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/calendar.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
