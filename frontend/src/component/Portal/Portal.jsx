import { useEffect, ReactPortal, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const createdDiv = document.body;
    setContainer(createdDiv);
  }, []);

  return container ? createPortal(children, container) : null;
};

export default Portal;
