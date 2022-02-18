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
import FavoriteButtonNav from "../uikit/FavoriteButtonNav/FavoriteButtonNav";

import dynamic from "next/dynamic";
import useHeaderFixed from "../../hooks/useHeaderFixed";

const DynamicModalNavigation = dynamic(
  () => import("../NavigationModal/NavigationModal"),
  {
    ssr: false,
  }
);

// TODO: появляется скролл в самом верху
export default function Header() {
  const { isMenuShow, isMenuFixed } = useHeaderFixed();

  const router = useRouter();
  const [path, setPath] = useState(false);
  const [isOpened, setOpen] = useState(false);

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
  }, [router.pathname]);

  return (
    <header
      className={cs(
        s.header,
        isMenuFixed && s.headerFixed,
        isMenuShow && s.headerShow
      )}
    >
      <div className={s.container}>
        <Link prefetch={false} className={s.logo_link} href="/">
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
          <FavoriteButtonNav
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
          <DynamicModalNavigation
            isOpened={isOpened}
            overlayClass={s.overlay_class}
            onClose={handleClose}
          />
        )}
      </div>
    </header>
  );
}
