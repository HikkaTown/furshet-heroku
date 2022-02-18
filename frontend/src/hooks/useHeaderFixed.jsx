import { useEffect, useState } from "react";

function useHeaderFixed() {
  const [isMenuShow, handler] = useState(false);
  const [isMenuFixed, onMinScrolled] = useState(false);
  let mediaScroll = 450;

  if (typeof window !== "undefined") {
    mediaScroll = window.innerHeight / 2;
  }

  useEffect(() => {
    let lastYPosition = 0;
    let prevScrollOffset = 0;

    const handleScroll = () => {
      const scrollOffset = window.pageYOffset;

      if (scrollOffset <= 60) {
        onMinScrolled(false);
      }

      if (scrollOffset <= mediaScroll) {
        lastYPosition = 0;
        handler(false);
        return;
      }
      onMinScrolled(true);

      if (scrollOffset + 50 >= lastYPosition) {
        handler(false);
      } else {
        handler(true);
      }

      if (scrollOffset > prevScrollOffset) {
        lastYPosition = scrollOffset;
      }

      prevScrollOffset = scrollOffset;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { isMenuShow, isMenuFixed };
}

export default useHeaderFixed;
