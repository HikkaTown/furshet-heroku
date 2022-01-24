import React, {useCallback, useEffect, useRef, useState} from "react";
import s from "./FilterAmount.module.scss";
import debounce from "../../../utils/debounce";
import throttle from "../../../utils/throttle";
import spaceDigits from "../../../utils/converterNumber";

export default function FilterAmount({setStart, setEnd, start, end, min, max, changeAmount, sortAmount}) {
  const [minInput, setMinInput] = useState(min === null ? '' : min);
  const [maxInput, setMaxInput] = useState(max === null ? '' : max);

  // const onChangeHandlerMin = useCallback(() => {
  //   return (e) => {
  //     setMinInput(e.target.value);
  //     changeAmount(minInput, maxInput);
  //     return throttle((e) => {
  //       if (Number(e.target.value) < 0) {
  //         setStart(0)
  //         setEnd(minInput.current.value)
  //       } else if (Number(e.target.value) > max) {
  //         setStart(Number(e.target.value))
  //         setEnd(minInput.current.value)
  //       } else {
  //         setStart(Number(e.target.value))
  //         setEnd(minInput.current.value)
  //         changeAmount(minInput, maxInput)
  //       }
  //     }, 500);
  //   }
  // }, []);
  const onChangeHandlerMin = (e) => {
    setMinInput(Number(e.target.value));
    setStart(Number(e.target.value))
  }

  const onChangeHandlerMax = (e) => {
    setMaxInput(Number(e.target.value))
    setEnd(Number(e.target.value))
  }

  // const onChangeHandlerMax = useCallback(() => {
  //   return (e) => {
  //     setMaxInput(e.target.value);
  //     changeAmount(minInput, maxInput)
  //     return throttle((e) => {
  //       if (Number(e.target.value) < 0) {
  //         setStart(maxInput.current.value)
  //         setEnd(max)
  //       } else {
  //         setStart(maxInput.current.value)
  //         setEnd(Number(e.target.value))
  //         changeAmount(minInput, maxInput)
  //       }
  //     }, 500);
  //   }
  // }, []);

  useEffect(() => {
    setMaxInput(max);
    setMinInput(min);
  }, [max, min])

  return (
    <div className={s.container}>
      <p className={s.head}>Цена, ₽</p>
      <div className={s.wrapper}>
        <input type="number" name='min'
               placeholder={`от ${min && spaceDigits(min)}`}
               onChange={onChangeHandlerMin}
               value={minInput}
               className={s.amount}/>
        <input type="number" name='max'
               value={maxInput}
               placeholder={`до ${max && spaceDigits(max)}`}
               className={s.amount}
               onChange={onChangeHandlerMax}
        />
      </div>
    </div>
  );
}
