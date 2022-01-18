import React, {useState} from 'react';
import s from './CatalogBlock.module.scss'
import cs from 'classnames';
import {LazyImageWrapper} from "../LazyImage";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import ModalFilter from "../ModalFilter/ModalFilter";
import ModalSort from "../ModalSort/ModalSort";
import BlockCards from "../BlockCards/BlockCards";

function CatalogBlock({catalogData, catalogType, cards}) {
  const [isOpened, setOpen] = useState(false)
  const [isOpenedSort, setOpenSort] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(null);

  const [stateCards, setStateCards] = useState(cards);


  const handlerSort = (cards) => {
    setStateCards('');
  }

  const cehck = (item, id) => {
    return item.id === id
  }

  const sortType = (id) => {
    let data = [];
    const newCards = cards.map((item) => {
      item.type.map((itemType) => {
        if (itemType.id === id) {
          data.push(item);
        }
      })
    });

    setStateCards(data);
  }

  const sortAmount = () => {
    let data = [];
    const newCards = stateCards.map((item) => {
      Number(item.price) >= Number(start) && Number(item.price) <= Number(end) ? data.push(item) : '';
    })

    setStateCards(data);
  }


  const handlerReset = () => {
    setStateCards(cards);
  }

  const handleOpenFilter = () => {
    setOpen(true);
  }
  const handleCloseFilter = () => {
    setOpen(false);
  }

  const handleOpenSort = () => {
    setOpenSort(true)
  }
  const handleCloseSort = () => {
    setOpenSort(false);
  }

  return (
    <section className={s.section}>
      <div className={s.hash} id="catalog"></div>
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
          <button onClick={handleOpenSort} className={s.sort_btn}>
            <LazyImageWrapper
              src={'/uikit/catalog/icon_sorting.svg'}
              className={[s.btn_icon]}
              wrapperClass={s.wrapper_icon}
              lazy={true}
            /> Сортировка
          </button>
        </div>
        <BlockCards cards={stateCards}/>
        {isOpened &&
          <ModalFilter sortType={sortType}
                       catalogData={catalogData}
                       types={catalogType}
                       overlayClass={s.overlay}
                       isOpened={isOpened}
                       onClose={handleCloseFilter}
                       setStart={setStart}
                       setEnd={setEnd}
                       sortAmount={sortAmount}
          />}
        {isOpenedSort && <ModalSort isOpened={isOpenedSort} overlayClass={s.overlay} onClose={handleCloseSort}
        />}
      </div>
    </section>
  )
}

export default CatalogBlock;