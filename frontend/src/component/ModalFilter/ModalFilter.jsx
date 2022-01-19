import React from 'react';
import Portal from "../Portal/Portal";
import Overlay from "../Overlay/Overlay";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import FilterCatalog from "../FilterCatalog/FilterCatalog";

function ModalFilter({
                       catalogData,
                       handlerReset,
                       sortAmount,
                       setStart,
                       setEnd,
                       sortType,
                       isOpened,
                       onClose,
                       overlayClass,
                       types
                     }) {
  return (
    <Portal>
      <OverlayingPopup overlayClass={overlayClass} isOpened={isOpened} onClose={onClose}>
        <FilterCatalog sortType={sortType} handlerReset={handlerReset} sortAmount={sortAmount} onClose={onClose}
                       catalogData={catalogData}
                       types={types}
                       setStart={setStart} setEnd={setEnd}/>
      </OverlayingPopup>
    </Portal>
  );
}

export default ModalFilter;