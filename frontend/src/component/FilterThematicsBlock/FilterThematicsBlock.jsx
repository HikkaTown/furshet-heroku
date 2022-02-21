import React from "react";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import s from "./FilterThematicsBlock.module.scss";
import cs from "classnames";
import { motion } from "framer-motion";
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
      paddingTop: 0,
      paddingBottom: 0,
    },
    visible: {
      height: "auto",
      opacity: 1,
      paddingTop: "16px",
      paddingBottom: "16px",
    },
    hidden2: {
      opacity: 0,
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  };

  return (
    <motion.div
      variants={variantsAnimate}
      initial="hidden"
      animate="visible"
      exit="hidden2"
      transition={{ duration: 0.3, type: "tween" }}
      className={cs(classNameBlock)}
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
    </motion.div>
  );
}
