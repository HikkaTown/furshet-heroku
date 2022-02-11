import Link from "next/link";
import React, { useEffect, useState } from "react";
import cs from "classnames";
import s from "./NavigationButton.module.scss";
import { useRouter } from "next/router";

export default function NavigationButton({
  href,
  text,
  onClick,
  className,
  classNameActive,
  length,
}) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (router.pathname === href) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  return (
    <>
      {href ? (
        <Link prefetch={false} href={href} passHref>
          <button
            className={
              active
                ? cs(s.button, s.button_active, className, classNameActive)
                : cs(s.button, className)
            }
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          className={
            active
              ? cs(s.button, s.button_active, className)
              : cs(s.button, className)
          }
          onClick={() => {
            onClick(text);
          }}
        >
          {!!length && <span className={s.count}>{length}</span>}
          {text}
        </button>
      )}
    </>
  );
}
