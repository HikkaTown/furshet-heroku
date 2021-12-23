import React from "react";
import s from "./PrimaryButton.module.scss";

export default function PrimaryButton({ text }) {
  return <button className={s.button}>{text}</button>;
}
