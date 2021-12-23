import React, { useRef, useState } from "react";
import cs from "classnames";
import s from "./DropdownTematic.module.scss";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

export default function DropdownTematic() {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const header = useRef(null);

  useOnClickOutside(ref, () => {
    setIsActive(false);
  });

  const handlerSelectItem = (e) => {
    if (e.target.textContent === "Без тематикик") {
      const SelectItem = "Тематика";
      header.current.textContent = SelectItem;
    }

    const SelectItem = e.target.textContent;
    header.current.textContent = SelectItem;
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
      className={isActive ? cs(s.dropdown, s.dropdown_active) : cs(s.dropdown)}
      ref={ref}
    >
      <div className={s.dropdown_head}>
        <span ref={header} className={s.head_text}>
          Тематика
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
            ? cs(s.dropdown_list, s.dropdown_list_active)
            : cs(s.dropdown_list)
        }
        onClick={handlerSelectItem}
      >
        {header.current ? (
          header.current.textContent !== "Тематика" ? (
            <div className={s.dropdown_item}>Без тематики</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "23 Февраля" ? (
            <div className={s.dropdown_item}>23 Февраля</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "Масленница" ? (
            <div className={s.dropdown_item}>Масленница</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "8 Марта" ? (
            <div className={s.dropdown_item}>8 Марта</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "Новый Год" ? (
            <div className={s.dropdown_item}>Новый Год</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "В стиле СССР" ? (
            <div className={s.dropdown_item}>В стиле СССР</div>
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
