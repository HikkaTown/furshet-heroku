import React from 'react';
import Portal from "../Portal/Portal";
import Overlay from "../Overlay/Overlay";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import FilterCatalog from "../FilterCatalog/FilterCatalog";

function ModalFilter({catalogData, isOpened, onClose, overlayClass, types}) {
  return (
    <Portal>
      <OverlayingPopup overlayClass={overlayClass} isOpened={isOpened} onClose={onClose}>
        <FilterCatalog catalogData={catalogData} types={types}/>
      </OverlayingPopup>
    </Portal>
  );
}

export default ModalFilter;