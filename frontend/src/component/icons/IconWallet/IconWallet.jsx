import React from "react";
import s from "./IconWallet.module.scss";
import cs from "classnames";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function IconWallet({ className, classNameWrapper }) {
  return (
    <LazyImageWrapper
      wrapperClass={cs(s.wrapper, classNameWrapper)}
      src={"/uikit/icons/wallet.svg"}
      className={[cs(s.icon, className)]}
      alt="s"
    />
  );
}
