import React from "react";
import cs from "classnames";
import s from "./InputPhoneNumber.module.scss";
// s.input_error - класс ошибки
export default function InputPhoneNumber() {
  return (
    <input
      className={cs(s.input, "phone")}
      placeholder="+7 495 999 99 99"
      type="text"
    />
  );
}
