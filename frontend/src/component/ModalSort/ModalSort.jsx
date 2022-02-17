import React, { useState } from "react";
import Portal from "../Portal/Portal";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import s from "./ModalSort.module.scss";
import cs from "classnames";
import ConfirmFilter from "../uikit/ConfirmFilter/ConfirmFilter";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import { motion } from "framer-motion";

const textBtn = ["По умолчанию", "По возрастанию", "По убыванию"];

function ModalSort({
  setSortTypeName,
  isOpened,
  overlayClass,
  onClose,
  sortTypeName,
}) {
  const [active, setActive] = useState(0);
  const variantsAnimate = {
    hidden: {
      left: "100%",
    },
    visible: {
      left: "0",
    },
    exited: {
      left: "100%",
    },
  };
  return (
    <Portal>
      <OverlayingPopup
        overlayClass={overlayClass}
        onClose={onClose}
        isOpened={isOpened}
      >
        <motion.div
          variants={variantsAnimate}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, type: "tween" }}
          className={s.block}
        >
          <button onClick={onClose} className={s.close}>
            <span className={s.close__line} />
            <span className={s.close__line} />
          </button>
          <div className={s.content}>
            <div className={s.row}>
              <h3 className={s.head}>Сортировка</h3>
            </div>
            <div className={s.row}>
              {textBtn.map((item, index) => {
                return (
                  <SecondaryButton
                    onClick={(e) => {
                      setSortTypeName(e.target.textContent);
                      setActive(index);
                    }}
                    key={index}
                    className={cs(
                      s.sort_btn,
                      sortTypeName === item ||
                        (sortTypeName === "" &&
                          item === "По умолчанию" &&
                          s.btn_active)
                    )}
                    text={item}
                  />
                );
              })}
            </div>
          </div>
          <ConfirmFilter
            onClick={() => {
              onClose();
            }}
            className={s.btn}
          />
        </motion.div>
      </OverlayingPopup>
    </Portal>
  );
}

export default ModalSort;
