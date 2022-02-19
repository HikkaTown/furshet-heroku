import React from "react";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import s from "./FilterThematicsBlock.module.scss";
import cs from "classnames";
// import { motion } from "framer-motion";

export default function FilterThematicsBlock({
  thematics,
  setThematicId,
  setStartValue,
  setEndValue,
  thematicId,
  classNameBlock,
}) {
  const variantsAnimate = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      height: "auto",
      opacity: 1,
    },
    hidden2: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <
      // variants={variantsAnimate}
      // initial="hidden"
      // animate="visible"
      // transition={{ duration: 0.3, type: "tween" }}
      // exit="hidden2"
      // className={cs(classNameBlock)}
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
      {thematics.map((item, index) => {
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
    </>
  );
}
