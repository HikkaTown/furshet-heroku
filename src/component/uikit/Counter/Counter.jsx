import React, { useEffect, useRef, useState } from "react";
import cs from "classnames";
import s from "./Counter.module.scss";
import {
  handlerDecrement,
  handlerIncrement,
  handlerUp,
} from "../../../utils/counterFunction";

export default function Counter() {
  const [count, setCount] = useState(1);
  const timer = useRef();

  const cb = (value) => {
    if (value < 1) {
      setCount(1);
    } else {
      setCount(value);
    }
  };

  const handlerAddValue = (e) => {
    e.preventDefault();
    handlerIncrement(timer, setCount, count);
  };

  const handlerClearTimeout = () => {
    handlerUp(timer);
  };

  const handlerDecrementValue = (e) => {
    e.preventDefault();
    handlerDecrement(timer, setCount, count);
  };

  return (
    <div className={s.container}>
      <ButtonDecrement
        onDown={handlerDecrementValue}
        onUp={handlerClearTimeout}
      />
      <InputValue onChange={cb} initState={count} />
      <ButtonIncrement
        onIncrement={handlerAddValue}
        onUp={handlerClearTimeout}
      />
    </div>
  );
}

const ButtonDecrement = ({ onDown, onUp }) => {
  return (
    <button
      className={cs(s.button, s.decrement)}
      onPointerDown={onDown}
      onPointerUp={onUp}
    >
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const ButtonIncrement = ({ onIncrement, onUp }) => {
  return (
    <button
      className={cs(s.button, s.increment)}
      onPointerUp={onUp}
      onPointerDown={onIncrement}
    >
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

const InputValue = ({ onChange, initState }) => {
  const [counter, setCount] = useState(initState);

  const handlerChange = (e) => {
    const value = +e.target.value;
    if (value > 999) {
      setCount(999);
      onChange(999);
    } else if (value >= 1) {
      setCount(value);
      onChange(value);
    } else if (value < 1) {
      setCount(1);
      onChange(value);
    }
  };

  return (
    <input
      type="number"
      onChange={handlerChange}
      className={s.input}
      value={initState}
    />
  );
};
