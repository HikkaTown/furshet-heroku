import React, {useEffect} from "react";
import cs from "classnames";
import s from "./PrimaryButton.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {cartSelector} from "../../../redux/selectors/cartSelector";

export default function PrimaryButton({text, onClick, className, categoryName, id}) {
  const cartData = useSelector(cartSelector());
  const dispatch = useDispatch();
  return (
    <button onClick={onClick} className={cs(s.button, className)}>
      {text}
    </button>
  );
}
