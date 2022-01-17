import React, {useState} from 'react';
import s from './CatalogBlock.module.scss'
import cs from 'classnames';
import {LazyImageWrapper} from "../LazyImage";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import ModalFilter from "../ModalFilter/ModalFilter";

function CatalogBlock({catalogData, data, types}) {
  const [isOpened, setOpen] = useState(false)

  const handleOpenFilter = () => {
    setOpen(true);
  }

  const handleCloseFilter = () => {
    setOpen(false);
  }

  return (
    <section className={s.section}>
      <h2 className={s.head}>{catalogData.name}</h2>
      <div className={s.content}>
        <div className={s.row_buttons}>
          <button onClick={handleOpenFilter} className={s.filter_btn}>
            <LazyImageWrapper
              src={'/uikit/catalog/icon_filter.svg'}
              className={[s.btn_icon]}
              wrapperClass={s.wrapper_icon}
              lazy={true}
            /> Фильтр
          </button>
          <button className={s.sort_btn}>
            <LazyImageWrapper
              src={'/uikit/catalog/icon_sorting.svg'}
              className={[s.btn_icon]}
              wrapperClass={s.wrapper_icon}
              lazy={true}
            /> Фильтр
          </button>
        </div>
        {isOpened &&
          <ModalFilter catalogData={catalogData} types={types} overlayClass={s.overlay} isOpened={isOpened}
                       onClose={handleCloseFilter}/>}
      </div>
    </section>
  );
}

export default CatalogBlock;