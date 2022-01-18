import React from 'react';
import Portal from "../Portal/Portal";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import s from './ModalSort.module.scss'
import PrimaryButton from "../uikit/PrimaryButton/PrimaryButton";
import ConfirmFilter from "../uikit/ConfirmFilter/ConfirmFilter";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";

function ModalSort({setAttribute, isOpened, overlayClass, onClose}) {
  return (
    <Portal>
      <OverlayingPopup overlayClass={overlayClass} onClose={onClose} isOpened={isOpened}>
        <div className={s.block}>
          <button onClick={onClose} className={s.close}>
            <span className={s.close__line}></span>
            <span className={s.close__line}></span>
          </button>
          <div className={s.content}>
            <div className={s.row}>
              <h3 className={s.head}>Сортировка</h3>
            </div>
            <div className={s.row}>
              <SecondaryButton className={s.sort_btn} text={'По умолчанию'}/>
              <SecondaryButton className={s.sort_btn} text={'По возрастанию'}/>
              <SecondaryButton className={s.sort_btn} text={'По убыванию'}/>
            </div>
          </div>
          <ConfirmFilter className={s.btn}/>
        </div>
      </OverlayingPopup>
    </Portal>
  );
}

export default ModalSort;