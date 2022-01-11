import React, { useRef, useState } from "react";
import s from "./Question.module.scss";
import cs from "classnames";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
// TODO:Добавить динамическую подругзку данных
export default function Question({ setClose, ques, answer }) {
  const [isOpen, setOpen] = useState(false);
  const block = useRef(null);

  const handleOpen = (e) => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  useOnClickOutside(block, handleClose);

  return (
    <div ref={block} onPointerLeave={handleClose} className={s.container}>
      <div
        onClick={handleOpen}
        className={isOpen ? cs(s.block, s.block_active) : s.block}
      >
        <p className={s.quest}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
          aspernatur?
        </p>
        <span className={s.arrow}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#212121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className={isOpen ? cs(s.answer, s.answer_visible) : s.answer}>
        <p className={s.answer_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          incidunt eligendi veritatis et, aut voluptatibus nemo minima
          reiciendis tempora accusantium.
        </p>
      </div>
    </div>
  );
}
