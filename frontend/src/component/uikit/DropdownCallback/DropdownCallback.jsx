import React, { useRef, useState } from "react";
import cs from "classnames";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import s from "./DropdownCallback.module.scss";

export default function DropdownCallback({
  className,
  classNameHeader,
  classNameList,
  setCallbackType,
}) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const header = useRef(null);

  useOnClickOutside(ref, () => {
    setIsActive(false);
  });

  const handlerSelectItem = (e) => {
    const SelectItem = e.target.textContent;
    header.current.textContent = SelectItem;
    setCallbackType(SelectItem);
  };

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        if (isActive) {
          setIsActive(false);
        } else {
          setIsActive(true);
        }
      }}
      className={
        isActive
          ? cs(s.dropdown, s.dropdown_active, className)
          : cs(s.dropdown, className)
      }
      ref={ref}
    >
      <div className={cs(s.dropdown_head, classNameHeader)}>
        <span ref={header} className={s.head_text}>
          Общение по телефону
        </span>{" "}
        <span className={s.head_icon}>
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
      <div
        className={
          isActive
            ? cs(s.dropdown_list, s.dropdown_list_active, classNameList)
            : cs(s.dropdown_list, classNameList)
        }
        onClick={handlerSelectItem}
      >
        {header.current ? (
          header.current.textContent !== "Общение по телефону" ? (
            <div className={s.dropdown_item}>Общение по телефону</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "Написать в WhatApp" ? (
            <div className={s.dropdown_item}>Написать в WhatApp</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "Написать в Telegram" ? (
            <div className={s.dropdown_item}>Написать в Telegram</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
