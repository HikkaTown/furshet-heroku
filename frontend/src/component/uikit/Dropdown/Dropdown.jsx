import React, {useRef, useState} from "react";
import cs from "classnames";
import s from "./Dropdown.module.scss";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

export default function Dropdown({setSortTypeName}) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const header = useRef(null);

  useOnClickOutside(ref, () => {
    setIsActive(false);
  });

  const handlerSelectItem = (e) => {
    const SelectItem = e.target.textContent;
    header.current.textContent = SelectItem;
    setSortTypeName(SelectItem)
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
        setIsActive(false)
      }}
      className={isActive ? cs(s.dropdown, s.dropdown_active) : cs(s.dropdown)}
      ref={ref}
    >
      <div className={s.dropdown_head}>
        <span ref={header} className={s.head_text}>
          По умолчанию
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
        onClick={(e) => {
          handlerSelectItem(e)
        }}
      >
        {header.current ? (
          header.current.textContent !== "По умолчанию" ? (
            <div className={s.dropdown_item}>По умолчанию</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <div onClick={() => {
        }} className={s.dropdown_item}>По возрастанию
        </div>
        <div onClick={() => {
        }} className={s.dropdown_item}>По убыванию
        </div>
      </div>
    </div>
  );
}
