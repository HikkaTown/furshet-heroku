import React from 'react';
import Portal from "../Portal/Portal";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import FilterCatalog from "./FilterCatalog";

function ModalFilter({
                       overlayClass,
                       types,
                       length,
                       catalogData,
                       setStart,
                       setEnd,
                       min,
                       max,
                       typeId,
                       setTypeId,
                       handlerReset,
                       additionals,
                       handlerAdditionals,
                       handlerClickType,
                       isOpened,
                       onClose,
                     }) {
  return (
    <Portal>
      <OverlayingPopup overlayClass={overlayClass} isOpened={isOpened} onClose={onClose}>
        <FilterCatalog
          types={types}
          length={length}
          catalogData={catalogData}
          setStart={setStart}
          setEnd={setEnd}
          min={min}
          max={max}
          typeId={typeId}
          setTypeId={setTypeId}
          handlerReset={handlerReset}
          additionals={additionals}
          handlerAdditionals={handlerAdditionals}
          handlerClickType={handlerClickType}
          onClose={onClose}
        />
      </OverlayingPopup>
    </Portal>
  );
}

export default ModalFilter;