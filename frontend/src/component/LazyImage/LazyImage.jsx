/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import LazyLoad from "vanilla-lazyload";
import clsx from "classnames";

import { MOBILE, TABLET } from "./const";

import s from "./LazyImage.module.css";

let lazyLoadInstance = null;

const LazyImage = ({
  src,
  srcWebp,
  srcTablet,
  srcTabletWebp,
  srcMobile,
  srcMobileWebp,
  alt,
  className,
  itemprop,
  width = "auto",
  height = "auto",
  server = false,
  onClick,
  isNoscript = true,
  type = "jpg",
  lazy = true,
}) => {
  // const fallback = server ? PATH_TO_SERVER + src : src

  useEffect(() => {
    if (!lazyLoadInstance) {
      lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
      });
    }
    lazyLoadInstance?.update();
  }, []);

  const renderImage = () => (
    <>
      <picture>
        {srcMobileWebp && (
          <source
            data-srcset={srcMobileWebp}
            srcSet={lazy ? undefined : srcMobileWebp}
            media={`(max-width: ${MOBILE}px)`}
            type="image/webp"
          />
        )}
        {srcMobile && (
          <source
            data-srcset={srcMobile}
            srcSet={lazy ? undefined : srcMobile}
            media={`(max-width: ${MOBILE}px)`}
            type={`image/${type}`}
          />
        )}

        {srcTabletWebp && (
          <source
            data-srcset={srcTabletWebp}
            srcSet={lazy ? undefined : srcTabletWebp}
            media={`(max-width: ${TABLET}px)`}
            type="image/webp"
          />
        )}
        {srcTablet && (
          <source
            data-srcset={srcTablet}
            srcSet={lazy ? undefined : srcTablet}
            media={`(max-width: ${TABLET}px)`}
            type={`image/${type}`}
          />
        )}

        {srcWebp && (
          <source
            data-srcset={srcWebp}
            srcSet={lazy ? undefined : srcWebp}
            type="image/webp"
          />
        )}
        <img
          alt={alt}
          className={clsx(className, "lazy")}
          data-src={src}
          src={lazy ? undefined : src}
          itemProp={itemprop || undefined}
          width={width}
          height={height}
        />
      </picture>
      {isNoscript && (
        <noscript>
          <img
            src={src}
            alt={alt}
            title={alt}
            itemProp={itemprop || undefined}
          />
        </noscript>
      )}
    </>
  );

  return onClick ? (
    <>
      {renderImage()}
      <button
        className={s.button}
        type="button"
        onClick={onClick}
        aria-label="image button"
      />
    </>
  ) : (
    renderImage()
  );
};

const LazyImageWrapper = (props) => {
  const { wrapperClass, onClick, ratio, className } = props;
  return (
    <span
      className={clsx(s.wrapper, wrapperClass, onClick && s.wrapperInteractive)}
      style={{ paddingTop: `${ratio * 100}%` }}
    >
      <LazyImage
        {...props}
        className={clsx(s.image, onClick ? s.imageInteractive : "", className)}
      />
    </span>
  );
};

export { LazyImage, LazyImageWrapper };
