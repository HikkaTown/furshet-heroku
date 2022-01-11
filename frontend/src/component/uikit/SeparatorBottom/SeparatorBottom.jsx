import React, { useEffect, useState } from "react";
import cs from "classnames";
import s from "./SeparatorBottom.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";
import { LazyBackgroundImage } from "../../LazyBackgroundImage/LazyBackgroundImage";

export default function SeparatorBottom({ className }) {
  const size = useWindowSize();
  const [viewport, setViewPort] = useState("");

  useEffect(() => {
    if (size.width >= 1175) {
      setViewPort("uikit/separator_bottom/desktop.svg");
    } else if (size.width < 1175 && size.width > 760) {
      setViewPort("uikit/separator_bottom/tablet.svg");
    } else if (size.width < 768 && size.width > 0) {
      setViewPort("uikit/separator_bottom/mobile.svg");
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
