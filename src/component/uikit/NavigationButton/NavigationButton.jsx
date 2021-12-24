import Link from "next/link";
import React from "react";
import cs from "classnames";
import s from "./NavigationButton.module.scss";

export default function NavigationButton({
  href,
  text,
  active = false,
  onClick,
}) {
  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <button className={active ? cs(s.button, s.button_active) : s.button}>
            {text}
          </button>
        </Link>
      ) : (
        <button
          className={active ? cs(s.button, s.button_active) : s.button}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
}
