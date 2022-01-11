import React, { useEffect, useState } from "react";
import cs from "classnames";
import s from "./SeparatorTop.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";
import { LazyBackgroundImage } from "../../LazyBackgroundImage/LazyBackgroundImage";

export default function SeparatorTop({ className }) {
  const size = useWindowSize();
  const [viewport, setViewPort] = useState("");

  useEffect(() => {
    if (size.width >= 1175) {
      setViewPort("uikit/separator_top/desktop.svg");
    } else if (size.width < 1175 && size.width > 760) {
      setViewPort("uikit/separator_top/tablet.svg");
    } else if (size.width < 768 && size.width > 0) {
      setViewPort("uikit/separator_top/mobile.svg");
    }
  }, [size]);
  return (
    <LazyBackgroundImage
      lazy={true}
      className={cs(s.separator, className)}
      src={viewport}
    ></LazyBackgroundImage>
  );
}
