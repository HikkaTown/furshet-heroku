import React from "react";
import s from "./CardForNews.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { motion } from "framer-motion";
import { PATH_IMAGES } from "../../../utils/const";
import { useRouter } from "next/router";
import translit from "../../../utils/translit";
import useWindowSize from "../../../hooks/useWindowSize";
export default function CardForNews({ className, data }) {
  const router = useRouter();
  const size = useWindowSize();
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const [isMouse, toggleMouse] = React.useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };
  const subMenuAnimate = {
    initial: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      overflow: "hidden",
      height: "auto",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      height: "0",
      overflow: "hidden",
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };
  return (
    <motion.div
      className={cs(s.card, className)}
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      onClick={() => {
        size.width < 768 && toggleHover((prev) => !prev);
      }}
    >
      <LazyImageWrapper
        src={PATH_IMAGES + data.imageMob}
        className={[s.image]}
        wrapperClass={s.image_wrapper}
      />
      <div className={s.card_info}>
        <h2 className={s.card_name}>{data.name.slice(0, 50) + "..."}</h2>
        <p className={s.card_date}>{data.date}</p>
      </div>
      <motion.div
        className={s.animate_block}
        animate={isHover ? "visible" : "initial"}
        exit={"exit"}
        variants={subMenuAnimate}
      >
        <p className={s.card_description}>
          {data.description.slice(0, 64) + "..."}
        </p>
        <PrimaryButton
          text="Подробнее"
          className={s.btn}
          onClick={() => {
            router.push(`/news/${translit(data.name)}`);
          }}
        />
      </motion.div>
    </motion.div>
  );
}
