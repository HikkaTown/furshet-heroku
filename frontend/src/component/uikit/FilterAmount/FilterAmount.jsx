import React, { useCallback, useEffect, useRef, useState } from "react";
import s from "./FilterAmount.module.scss";
import debounce from "../../../utils/debounce";
import throttle from "../../../utils/throttle";
import spaceDigits from "../../../utils/converterNumber";

export default function FilterAmount({
  setStartValue,
  setEndValue,
  min,
  max,
  startValue,
  endValue,
}) {
  const [minInput, setMinInput] = useState(startValue ? minInput : null);
  const [maxInput, setMaxInput] = useState(endValue ? maxInput : null);

  // const onChangeHandlerMin = useCallback(() => {
  //   return (e) => {
  //     setMinInput(e.target.value);
  //     changeAmount(minInput, maxInput);
  //     return throttle((e) => {
  //       if (Number(e.target.value) < 0) {
  //         setStartValue(0);
  //         setEndValue(minInput.current.value);
  //       } else if (Number(e.target.value) > max) {
  //         setStartValue(Number(e.target.value));
  //         setEndValue(minInput.current.value);
  //       } else {
  //         setStartValue(Number(e.target.value));
  //         setEndValue(minInput.current.value);
  //         changeAmount(minInput, maxInput);
  //       }
  //     }, 500);
  //   };
  // }, []);
  const onChangeHandlerMin = (e) => {
    setMinInput(Number(e.target.value));
    setStartValue(Number(e.target.value));
  };

  const onChangeHandlerMax = (e) => {
    setMaxInput(Number(e.target.value));
    setEndValue(Number(e.target.value));
  };

  // const onChangeHandlerMax = useCallback(() => {
  //   return (e) => {
  //     setMaxInput(e.target.value);
  //     changeAmount(minInput, maxInput);
  //     return throttle((e) => {
  //       if (Number(e.target.value) < 0) {
  //         setStart(maxInput.current.value);
  //         setEnd(max);
  //       } else {
  //         setStart(maxInput.current.value);
  //         setEnd(Number(e.target.value));
  //         changeAmount(minInput, maxInput);
  //       }
  //     }, 500);
  //   };
  // }, []);

  useEffect(() => {
    setMaxInput(endValue);
    setMinInput(startValue);
  }, [startValue, endValue]);

  return (
    <div className={s.container}>
      <p className={s.head}>Цена, ₽</p>
      <div className={s.wrapper}>
        <input
          type="number"
          name="min"
          placeholder={`от ${min && spaceDigits(min)}`}
          onChange={onChangeHandlerMin}
          value={minInput ? minInput : ""}
          className={s.amount}
        />
        <input
          type="number"
          name="max"
          value={maxInput ? maxInput : ""}
          placeholder={`до ${max && spaceDigits(max)}`}
          className={s.amount}
          onChange={onChangeHandlerMax}
        />
      </div>
    </div>
  );
}
