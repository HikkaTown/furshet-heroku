import React from 'react';
import Portal from "../Portal/Portal";
import Overlay from "../Overlay/Overlay";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import FilterCatalog from "../FilterCatalog/FilterCatalog";

function ModalFilter({
                       isOpened,
                       overlayClass,
                       types,
                       typeId,
                       setTypeId,
                       handlerReset,
                       thematics,
                       onClose,
                       setStart,
                       setEnd,
                       additionals,
                       min,
                       visiblePeople,
                       max,
                       //-----
                       handlerAdditionals,
                       handlerClickType,
                       thematicID,
                       setThematics
                     }) {
  return (
    <Portal>
      <OverlayingPopup overlayClass={overlayClass} isOpened={isOpened} onClose={onClose}>
        <FilterCatalog
          onClose={onClose}
          types={types}
          setStart={setStart}
          setEnd={setEnd}
          min={min}
          thematics={thematics}
          max={max}
          typeId={typeId}
          setTypeId={setTypeId}
          handlerReset={handlerReset}
          additionals={additionals}
          thematicID={thematicID}
          setThematics={setThematics}
          // ---
          handlerAdditionals={handlerAdditionals}
          handlerClickType={handlerClickType}
          visiblePeople={visiblePeople}
        />
      </OverlayingPopup>
    </Portal>
  );
}

export default ModalFilter;