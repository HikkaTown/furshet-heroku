import React, {useEffect, useState} from 'react';
import s from './CatalogBlock.module.scss'
import cs from 'classnames';
import {LazyImageWrapper} from "../LazyImage";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import ModalFilter from "../ModalFilter/ModalFilter";
import ModalSort from "../ModalSort/ModalSort";
import BlockCards from "../BlockCards/BlockCards";
import DropdownPerson from "../uikit/DropdownPerson/DropdownPerson";
import DropdownTematic from "../uikit/DropdownTematic/DropdownTematic";
import Dropdown from "../uikit/Dropdown/Dropdown";

function CatalogBlock({catalogData, catalogType, cards}) {
  const [isOpened, setOpen] = useState(false)
  const [isOpenedSort, setOpenSort] = useState(false);
  //amount input
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(null);
  //cards 
  const [stateCards, setStateCards] = useState(null);
  const [visibleCards, setVisibleCards] = useState(null);


  const cehck = (item, id) => {
    return item.id === id
  }

  function sortType(id) {
    let data = [];
    const newCards = cards.map((item) => {
      item.type.map((itemType) => {
        if (itemType.id === id) {
          data.push(item);
        }
      })
    });
    setStateCards(data);
    sortDefault();
  }

  const sortAmount = () => {
    let data = [];
    const newCards = visibleCards.map((item) => {
      if (+item.price >= start && +item.price <= end) {
        data.push(item)
      }
    })
    setVisibleCards(data);
  }

  const sortDefault = () => {
    setVisibleCards(stateCards);
  }

  const sortToDown = () => {
    let data = [];
    const newCards = visibleCards.slice();
    newCards.sort((cardOne, cardSecond) => {
      return Number(cardOne.price) - Number(cardSecond.price)
    })
    setVisibleCards(newCards);
  }

  const sortToUp = () => {
    let data = [];
    const newCards = visibleCards.slice();
    newCards.sort((cardOne, cardSecond) => {
      return Number(cardSecond.price) - Number(cardOne.price)
    })
    setVisibleCards(newCards);
  }


  const handlerReset = () => {
    setVisibleCards(stateCards);
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

  useEffect(() => {
    sortType(1);
    sortDefault();
  }, [])

  return (
    <section className={s.section}>
      <div className={s.hash} id="catalog"></div>
      <h2 className={s.head}>{catalogData.name}</h2>
      <div className={s.content}>
        <div className={s.row_buttons}>
          <div className={s.dropdown_person}><DropdownPerson/></div>
          <div className={s.dropdown_amount}><Dropdown/></div>
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
        <div className={s.catalog_content}>
          <FilterCatalog types={catalogType}
                         setStart={setStart}
                         setEnd={setEnd}
                         sortAmount={sortAmount}
                         sortType={sortType}
                         handlerReset={handlerReset}
          />
          <BlockCards cards={visibleCards ? visibleCards : stateCards ? stateCards : cards}/>
        </div>
        {isOpened &&
          <ModalFilter sortType={sortType}
                       handlerReset={handlerReset}
                       catalogData={catalogData}
                       types={catalogType}
                       overlayClass={s.overlay}
                       isOpened={isOpened}
                       onClose={handleCloseFilter}
                       setStart={setStart}
                       setEnd={setEnd}
                       sortAmount={sortAmount}
          />}
        {isOpenedSort &&
          <ModalSort sortToUp={sortToUp} sortToDown={sortToDown} sortDefault={sortDefault} isOpened={isOpenedSort}
                     overlayClass={s.overlay}
                     onClose={handleCloseSort}
          />}
      </div>
    </section>
  )
}

export default CatalogBlock;