import React from "react";
import Portal from "../Portal/Portal";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import s from "./ModalFilter.module.scss";
import { motion } from "framer-motion";
function ModalFilter({
  types,
  thematics,
  setThematicId,
  thematicId,
  typeId,
  setTypeId,
  additionals,
  min,
  max,
  isDop,
  setIsDop,
  setName,
  handlerAdditionals,
  catalogData,
  setStartValue,
  setEndValue,

  isOpened,
  overlayClass,
  onClose,
}) {
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
        isOpened={isOpened}
        onClose={onClose}
      >
        <motion.div
          variants={variantsAnimate}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, type: "tween" }}
          className={s.block}
        >
          <FilterCatalog
            types={types}
            thematics={thematics}
            setThematicId={setThematicId}
            thematicId={thematicId}
            typeId={typeId}
            setTypeId={setTypeId}
            additionals={additionals}
            min={min}
            max={max}
            isDop={isDop}
            setIsDop={setIsDop}
            setName={setName}
            handlerAdditionals={handlerAdditionals}
            catalogData={catalogData}
            setStartValue={setStartValue}
            setEndValue={setEndValue}
            onClose={onClose}
            className={s.block_modal}
          />
        </motion.div>
      </OverlayingPopup>
    </Portal>
  );
}

export default ModalFilter;
