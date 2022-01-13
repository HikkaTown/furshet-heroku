import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const createdDiv = document.createElement("div");

    setContainer(createdDiv);

    document.body.appendChild(createdDiv);

    return () => {
      if (container) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return container ? createPortal(children, container) : null;
};

export default Portal;
