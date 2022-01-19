import React, {useRef, useState} from "react";
import cs from "classnames";
import s from "./DropdownTematic.module.scss";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

function DropdownTematic({list, setThematics}) {
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
      setThematics(null);
    }

    const SelectItem = e.target.textContent;
    header.current.textContent = SelectItem;
    let res;
    list.map((item) => {
      if (item.name === SelectItem) {
        res = item.id;
      }
    })
    setThematics(res)
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
          header.current.textContent !== list[0].name ? (
            <div className={s.dropdown_item}>{list[0].name}</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== list[1].name ? (
            <div className={s.dropdown_item}>{list[1].name}</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== list[2].name ? (
            <div className={s.dropdown_item}>{list[2].name}</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== list[3].name ? (
            <div className={s.dropdown_item}>{list[3].name}</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {header.current ? (
          header.current.textContent !== list[4].name ? (
            <div className={s.dropdown_item}>{list[4].name}</div>
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

export default React.memo(DropdownTematic)