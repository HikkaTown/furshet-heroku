import React from "react";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import s from "./FilterThematicsBlock.module.scss";
import cs from "classnames";
import { motion } from "framer-motion";

export default function FilterThematicsBlock({
  thematics,
  setThematicId,
  setStartValue,
  setEndValue,
  thematicId,
}) {
  // const variantsAnimate = {
  //   hidden: {
  //     height: 0,
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     height: "auto",
  //   },
  //   hidden2: {
  //     opacity: 0,
  //     height: 0,
  //   },
  // };

  return (
    <div
    // variants={variantsAnimate}
    // initial="hidden"
    // animate="visible"
    // transition={{ duration: 0.3, type: "tween" }}
    // exit="hidden2"
    // className={s.block}
    >
      <SecondaryButton
        onClick={() => {
          setThematicId(null);
          setStartValue(null);
          setEndValue(null);
        }}
        className={cs(
          s.thematics_btn,
          thematicId === null && s.thematics_btn_active
        )}
        text={"Без тематики"}
      />
      {thematics &&
        thematics.map((item) => {
          return (
            <SecondaryButton
              key={item.id}
              onClick={() => {
                setThematicId(item.id);
                setStartValue(null);
                setEndValue(null);
              }}
              className={cs(
                s.thematics_btn,
                thematicId === item.id && s.thematics_btn_active
              )}
              text={item.name}
            />
          );
        })}
    </div>
  );
}
