import React, { useEffect } from "react";
import cs from "classnames";
import s from "./InputPhoneNumber.module.scss";
import setMask from "../../../utils/setMask";
// s.input_error - класс ошибки
export default function InputPhoneNumber({ className }) {
  useEffect(() => {
    setMask();
  });
  return (
    <input
      className={cs(s.input, "tel", className)}
      placeholder="+7 495 999 99 99"
      type="text"
    />
  );
}
