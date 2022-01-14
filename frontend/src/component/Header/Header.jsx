import React, { useEffect, useState } from "react";
import Link from "next/link";
import s from "./Header.module.scss";
import cs from "classnames";
import FavoriteButton from "../uikit/FavoriteButton/FavoriteButton";
import NavigationButton from "../uikit/NavigationButton/NavigationButton";
import NavSearchButton from "../uikit/NavSearchButton/NavSearchButton";
import NavCartButton from "../uikit/NavCartButton/NavCartButton";
import Navigation from "../Navigation/Navigation";
import NavCallButton from "../uikit/NavCallButton/NavCallButton";
import { useRouter } from "next/router";
import OpenNavigationButton from "../uikit/OpenNavigationButton/OpenNavigationButton";
import NavigationModal from "../NavigationModal/NavigationModal";
// TODO: появляется скролл в самом верху
export default function Header() {
  const router = useRouter();
  const [scroll, setScroll] = useState(0);
  const [path, setPath] = useState(false);
  const [isOpened, setOpen] = useState(false);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenFavorites = () => {
    router.push("/favorites");
  };

  useEffect(() => {
    const paths = router.pathname;
    if (
      paths === "/news" ||
      paths === "/cart" ||
      paths === "/privacy" ||
      paths === "/favorites" ||
      paths === "/search"
    ) {
      setPath(true);
    } else {
      setPath(false);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header
      className={cs(
        s.header,
        scroll > 300 && s.header_fixed,
        path && s.header_spec
      )}
    >
      <div className={s.container}>
        <Link className={s.logo_link} href="/">
          <a className={s.link}>
            <img className={s.logotip} src="uikit/logo.svg" alt="Главная" />
          </a>
        </Link>
        <Navigation
          className={s.nav}
          classNameBtn={s.navigation_btn}
          classNameActive={s.navigationActive}
        />
        <div className={s.quick_btns}>
          <NavSearchButton className={s.search} />
          <FavoriteButton
            onClick={handleOpenFavorites}
            className={s.favorite}
          />
          <NavCartButton className={s.cart} />
        </div>
        <NavCallButton className={s.call_btn} />
        <OpenNavigationButton
          onClose={handleClose}
          onClick={handleOpen}
          className={s.navigation_mobile}
        />
        {isOpened && (
          <NavigationModal isOpened={isOpened} onClose={handleClose} />
        )}
      </div>
    </header>
  );
}
