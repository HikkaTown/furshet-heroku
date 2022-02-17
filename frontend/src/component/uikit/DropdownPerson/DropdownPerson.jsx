import React, { useRef, useState } from "react";
import cs from "classnames";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import s from "./DropdownPerson.module.scss";

export default function DropdownPerson({ setPeopleNumber }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const header = useRef(null);

  useOnClickOutside(ref, () => {
    setIsActive(false);
  });

  const handlerSelectItem = (e) => {
    const regExp = /-?\d+(\.\d+)?/g;
    const SelectItem = e.target.textContent;
    header.current.textContent = SelectItem;
    setPeopleNumber(+header.current.textContent.match(regExp));
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
      onPointerLeave={() => {
        setIsActive(false);
      }}
      className={isActive ? cs(s.dropdown, s.dropdown_active) : cs(s.dropdown)}
      ref={ref}
    >
      <div className={s.dropdown_head}>
        <span ref={header} className={s.head_text}>
          до 25
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
          header.current.textContent !== "до 25" ? (
            <div className={s.dropdown_item}>до 25</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "до 5" ? (
            <div className={s.dropdown_item}>до 5</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "до 10" ? (
            <div className={s.dropdown_item}>до 10</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "до 15" ? (
            <div className={s.dropdown_item}>до 15</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== "до 20" ? (
            <div className={s.dropdown_item}>до 20</div>
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
