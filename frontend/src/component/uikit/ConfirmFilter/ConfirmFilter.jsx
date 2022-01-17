import React from 'react';
import s from './ConfirmFilter.module.scss'

function ConfirmFilter({obj}) {
  return <div className={s.block}>
    <button className={s.submit}>
      Применить
    </button>
  </div>

}

export default ConfirmFilter;