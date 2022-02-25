import React, { useEffect, useState } from "react";
import Link from "next/link";
import s from "./Header.module.scss";
import cs from "classnames";
import NavSearchButton from "../uikit/NavSearchButton/NavSearchButton";
import NavCartButton from "../uikit/NavCartButton/NavCartButton";
import Navigation from "../Navigation/Navigation";
import NavCallButton from "../uikit/NavCallButton/NavCallButton";
import { useRouter } from "next/router";
import OpenNavigationButton from "../uikit/OpenNavigationButton/OpenNavigationButton";
import FavoriteButtonNav from "../uikit/FavoriteButtonNav/FavoriteButtonNav";

import dynamic from "next/dynamic";
import useHeaderFixed from "../../hooks/useHeaderFixed";
import SearchInput from "../uikit/SearchInput/SearchInput";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

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
  const [searchOpened, setSearchOpened] = useState(null);

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
      paths === "/404" ||
      paths.includes("/news") ||
      path === "/news" ||
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
        isMenuShow && s.headerShow,
        path && s.shadow_header
      )}
    >
      <div className={s.container}>
        <Link prefetch={false} className={cs(s.logo_link)} href="/">
          <a className={cs(s.link, searchOpened && s.display_none)}>
            <img className={s.logotip} src="/uikit/logo.svg" alt="Главная" />
          </a>
        </Link>

        <AnimatePresence>
          {!searchOpened ? (
            <Navigation
              className={cs(s.nav)}
              classNameBtn={s.navigation_btn}
              classNameActive={s.navigationActive}
              searchState={searchOpened}
            />
          ) : (
            <SearchInput
              onClose={() => {
                setSearchOpened((prev) => !prev);
              }}
            />
          )}
        </AnimatePresence>

        <div className={s.quick_btns}>
          {!searchOpened && (
            <NavSearchButton
              onClick={() => {
                setSearchOpened((prev) => !prev);
              }}
              className={s.search}
            />
          )}
          <FavoriteButtonNav
            onClick={handleOpenFavorites}
            className={cs(s.favorite, searchOpened && s.display_none)}
          />
          <NavCartButton
            className={cs(s.cart, searchOpened && s.display_none)}
          />
        </div>
        <NavCallButton className={s.call_btn} />
        {!searchOpened && (
          <OpenNavigationButton
            onClose={handleClose}
            onClick={handleOpen}
            className={cs(s.navigation_mobile)}
          />
        )}
        <AnimatePresence>
          {isOpened && (
            <DynamicModalNavigation
              isOpened={isOpened}
              overlayClass={s.overlay_class}
              onClose={handleClose}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
