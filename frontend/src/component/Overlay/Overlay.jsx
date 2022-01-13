import React, { useCallback, useEffect } from "react";
import cs from "classnames";
import s from "./Overlay.module.scss";

const Overlay = ({ onClose, isLeft }) => {
  const onKeyDown = useCallback((evt) => {
    if (evt.code === "Escape") {
      onClose(false);
    }
  }, []);

  useEffect(() => {
    if (document) {
      document.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      className={cs(s.wrapper, isLeft && s.wrapperLeft)}
      onClick={onClose}
      role="button"
      tabIndex={0}
    />
  );
};

export default Overlay;
