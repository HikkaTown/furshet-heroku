import React, { useEffect, useRef, useState } from "react";
import cs from "classnames";
import s from "./Counter.module.scss";

export default function Counter() {
  const [count, setCount] = useState(1);
  const cb = (value) => {
    console.log(value);
    if (value < 1) {
      setCount(1);
    } else {
      setCount(value);
    }
  };

  const handlerIncrement = () => {
    const value = count + 1;
    setCount(value);
  };

  const handlerDecrement = () => {
    if (count > 1) {
      const value = count - 1;
      setCount(value);
    }
  };

  return (
    <div className={s.container}>
      <ButtonDecrement handlerDecrement={handlerDecrement} />
      <InputValue onChange={cb} initState={count} />
      <ButtonIncrement onIncrement={handlerIncrement} />
    </div>
  );
}

const ButtonDecrement = ({ handlerDecrement }) => {
  return (
    <button className={cs(s.button, s.decrement)} onClick={handlerDecrement}>
      <svg
        width="16"
        height="2"
        viewBox="0 0 16 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={s.decrement_icon}
      >
        <path
          className={s.decrement_line}
          d="M1 1H15"
          stroke="#B4B4B4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const ButtonIncrement = ({ onIncrement }) => {
  return (
    <button className={cs(s.button, s.increment)} onClick={onIncrement}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={s.icon}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={s.icon_line}
          d="M12 5V19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={s.icon_line}
          d="M5 12H19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const InputValue = ({ onChange, initState = "1" }) => {
  const [count, setCount] = useState(initState);

  const handlerChange = (e) => {
    if (typeof e.target.value !== "string") {
      const value = +e.target.value;
      if (+value >= 1) {
        setCount(+value);
      } else if (+value < 1) {
        setCount(1);
      }
      onChange(value);
    }
  };

  return (
    <input
      type="text"
      onChange={handlerChange}
      className={s.value}
      value={count}
    />
  );
};
