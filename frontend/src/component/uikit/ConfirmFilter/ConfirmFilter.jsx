import React from 'react';
import s from './ConfirmFilter.module.scss'
import cs from 'classnames';

function ConfirmFilter({onClick, className}) {
  return <div className={cs(s.block, className)}>
    <button onClick={onClick} className={s.submit}>
      Применить
    </button>
  </div>

}

export default ConfirmFilter;