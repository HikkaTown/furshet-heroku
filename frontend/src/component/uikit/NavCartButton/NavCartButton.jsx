import Link from "next/link";
import React from "react";
import s from "./NavCartButton.module.scss";
import cs from "classnames";
import {useSelector} from "react-redux";
import {cartSelector} from "../../../redux/selectors/cartSelector";

export default function NavCartButton({className}) {
  const cartLength = useSelector(cartSelector()).length;
  return (
    <Link href={"/cart"}>
      <a className={cs(s.button, className)}>
        {cartLength !== 0 && <span className={s.count}>{cartLength}</span>}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={s.icon}
        >
          <path
            d="M3.31416 8.19996C3.34768 7.7823 3.53729 7.39258 3.84522 7.10843C4.15315 6.82428 4.55682 6.66654 4.97582 6.66663H15.0242C15.4432 6.66654 15.8468 6.82428 16.1548 7.10843C16.4627 7.39258 16.6523 7.7823 16.6858 8.19996L17.355 16.5333C17.3734 16.7626 17.3441 16.9933 17.269 17.2107C17.1939 17.4282 17.0746 17.6277 16.9186 17.7968C16.7626 17.9659 16.5732 18.1009 16.3625 18.1932C16.1518 18.2855 15.9242 18.3332 15.6942 18.3333H4.30582C4.07576 18.3332 3.8482 18.2855 3.63747 18.1932C3.42675 18.1009 3.23742 17.9659 3.0814 17.7968C2.92539 17.6277 2.80607 17.4282 2.73097 17.2107C2.65586 16.9933 2.62659 16.7626 2.64499 16.5333L3.31416 8.19996V8.19996Z"
            className={s.icon_stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3334 9.16663V4.99996C13.3334 4.1159 12.9822 3.26806 12.3571 2.64294C11.732 2.01782 10.8841 1.66663 10.0001 1.66663C9.11603 1.66663 8.26818 2.01782 7.64306 2.64294C7.01794 3.26806 6.66675 4.1159 6.66675 4.99996V9.16663"
            className={s.icon_stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </Link>
  );
}
