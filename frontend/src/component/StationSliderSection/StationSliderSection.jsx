import React from "react";
import cs from "classnames";
import { LazyBackgroundImage } from "../LazyBackgroundImage/LazyBackgroundImage";
import s from "./StationSliderSection.module.scss";
import StationSlider from "../StationSlider/StationSlider";

export default function StationSliderSection({
  dataImages,
  dataText,
  secondBtn,
}) {
  return (
    <section className={s.section}>
      <LazyBackgroundImage
        lazy={true}
        className={cs(s.separator, s.separator_top)}
        src={"/uikit/separator_top/desktop.svg"}
      ></LazyBackgroundImage>
      <StationSlider
        dataImages={dataImages}
        dataText={dataText}
        secondBtn={secondBtn}
      />
      <LazyBackgroundImage
        className={cs(s.separator, s.separator_bottom)}
        src={"/uikit/separator_bottom/desktop.svg"}
      ></LazyBackgroundImage>
    </section>
  );
}
