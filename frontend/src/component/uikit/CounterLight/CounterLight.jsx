import React, {useRef, useState} from "react";
import cs from "classnames";
import {
  handlerDecrement,
  handlerIncrement,
  handlerUp,
  onClickDecrement,
  onClickIncrement,
} from "../../../utils/counterFunction";
import s from "./CounterLight.module.scss";

export default function CounterLight({count, setCount}) {
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

  const handlerOnClickIncrement = () => {
    onClickIncrement(count, setCount);
  };

  const handlerOnClickDecrement = () => {
    onClickDecrement(count, setCount, 1);
  };

  return (
    <div className={s.container}>
      <ButtonDecrement
        onDown={handlerDecrementValue}
        onUp={handlerClearTimeout}
        onClick={handlerOnClickDecrement}
      />
      <InputValue onChange={cb} initState={count}/>
      <ButtonIncrement
        onIncrement={handlerAddValue}
        onUp={handlerClearTimeout}
        onClick={handlerOnClickIncrement}
      />
    </div>
  );
}

const ButtonDecrement = ({onDown, onUp, onClick}) => {
  return (
    <button
      className={cs(s.button, s.decrement)}
      onPointerDown={onDown}
      onPointerUp={onUp}
      onPointerLeave={onUp}
      onClick={onClick}
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
const ButtonIncrement = ({onIncrement, onUp, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={cs(s.button, s.increment)}
      onPointerUp={onUp}
      onPointerLeave={onUp}
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

const InputValue = ({onChange, initState}) => {
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
