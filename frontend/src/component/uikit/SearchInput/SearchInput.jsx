import React from "react";
import s from "./SearchInput.module.scss";
import cs from "classnames";
import SearchIcon from "../SearchIcon/SearchIcon";
import { motion } from "framer-motion";
export default function SearchInput({ className, onClose }) {
  const variantAnimate = {
    initial: {
      overflow: "hidden",
      opacity: 0,
      scale: 0,
    },
    visible: {
      overflow: "hidden",
      opacity: 1,
      scale: 1,
    },
    exit: {
      overflow: "hidden",
      opacity: 0,
      scale: 0,
    },
  };
  return (
    <motion.form
      variants={variantAnimate}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, type: "tween" }}
      className={cs(s.input_block, className)}
    >
      <button className={s.search_btn}>
        <SearchIcon
          classNameIcon={s.search_icon}
          classNameLine={s.icon_color}
        />
      </button>
      <input type="text" className={s.input} placeholder={"Поиск на сайте"} />
      <button type="button" onClick={onClose} className={s.clear}>
        <span className={s.line}></span>
        <span className={s.line}></span>
      </button>
    </motion.form>
  );
}
