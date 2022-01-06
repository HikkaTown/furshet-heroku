import React, { useEffect, useRef } from "react";
import LazyLoad from "vanilla-lazyload";
import clsx from "classnames";

let lazyLoadInstance = null;

const LazyBackgroundImage = (props) => {
  const { src, className, children, lazy } = props;
  const refElement = useRef(null);

  useEffect(() => {
    if (lazy) {
      if (!lazyLoadInstance) {
        lazyLoadInstance = new LazyLoad({
          elements_selector: ".lazy",
        });
      }
      LazyLoad.resetStatus(refElement.current);
      lazyLoadInstance.update();
    }
  }, [src]);

  return (
    <div className={clsx(className, "lazy")} data-bg={src} ref={refElement}>
      {children}
    </div>
  );
};

export { LazyBackgroundImage };
