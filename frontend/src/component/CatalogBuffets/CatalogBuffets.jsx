import React, {useEffect, useState} from "react";
import s from './CatalogBuffets.module.scss'
import DropdownPerson from "../uikit/DropdownPerson/DropdownPerson";
import Dropdown from "../uikit/Dropdown/Dropdown";
import {LazyImageWrapper} from "../LazyImage";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import BlockCards from "../BlockCards/BlockCards";
import ModalFilter from "../ModalFilter/ModalFilter";
import ModalSort from "../ModalSort/ModalSort";
import {sortAmountHelp, sortToDownHelp, sortToUpHelp, sortTypeHelp, thematicsHelp} from "./sort";
import DropdownTematic from "../uikit/DropdownTematic/DropdownTematic";

function CatalogBuffets({catalogData, catalogType, cards, thematics}) {
  // const [isOpened, setOpen] = useState(false)
  // const [isOpenedSort, setOpenSort] = useState(false);
  //amount input
  const [start, setStart] = useState(130);
  const [end, setEnd] = useState(30000);
  //cards 
  const [stateCards, setStateCards] = useState(null);
  const [visibleCards, setVisibleCards] = useState(null);
  //type id 
  const [typeId, setTypeId] = useState(1);
  //сортировка по умолчанию или другое
  const [sortTypeName, setSortTypeName] = useState(''); // 0 - default, 1 - toUp, 2 - toDown
  //Тематика
  const [thematicID, setThematics] = useState(null)

  const sortThematics = (id) => {
    const res = thematicsHelp(stateCards, id);
    setVisibleCards(res);
  }

  const sortType = (id) => {
    const data = sortTypeHelp(id, cards, setStateCards);
    setStateCards(data)
    setVisibleCards(data)
    setStart(30000);
    setEnd(30000);
  }
  const sortAmount = () => {
    if (+start > 0 && +end > 0) {
      const data = sortAmountHelp(start, end, stateCards);
      setVisibleCards(data)
    }
  }
  const sortDefault = () => {
    setVisibleCards(stateCards);
  }
  const sortToDown = () => {
    const data = sortToDownHelp(visibleCards);
    setVisibleCards(data);
  }
  const sortToUp = () => {
    const data = sortToUpHelp(visibleCards);
    setVisibleCards(data);
  }
  const handlerReset = (id) => {
    sortType(typeId);
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
    sortType(10);
    if (thematicID === null) {
      setVisibleCards(stateCards)
    }
  }, [])

  useEffect(() => {
    if (sortTypeName === 'По умолчанию') {
      sortDefault()
    } else if (sortTypeName === 'По возрастанию') {
      sortToUp()
    } else if (sortTypeName === 'По убыванию') {
      sortToDown()
    }
  }, [sortTypeName]);

  useEffect(() => {

    if (thematicID !== null) {
      console.log('!= null')
      stateCards && sortThematics(thematicID);
    } else {
      console.log("= null")
      setVisibleCards(stateCards);
    }
  }, [thematicID])


  return (
    <section className={s.section}>
      <div className={s.hash} id="catalog"></div>
      <h2 className={s.head}>{catalogData.name}</h2>
      <div className={s.content}>
        <div className={s.row_buttons}>
          <div className={s.dropdown_thematic}>< DropdownTematic setThematics={setThematics} list={thematics}/></div>
          <div className={s.dropdown_person}><DropdownPerson/></div>
          <div className={s.dropdown_amount}><Dropdown setSortTypeName={setSortTypeName}/></div>
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
          <div className={s.filter_catalog}>
            <FilterCatalog types={catalogType}
                           setStart={setStart}
                           setEnd={setEnd}
                           sortAmount={sortAmount}
                           typeId={typeId}
                           setTypeId={setTypeId}
                           sortType={sortType}
                           handlerReset={handlerReset}
            />
          </div>
          <BlockCards cards={visibleCards}/>
        </div>
        {/*{isOpened &&*/}
        {/*  <ModalFilter sortType={sortType}*/}
        {/*               handlerReset={handlerReset}*/}
        {/*               catalogData={catalogData}*/}
        {/*               types={catalogType}*/}
        {/*               overlayClass={s.overlay}*/}
        {/*               isOpened={isOpened}*/}
        {/*               onClose={handleCloseFilter}*/}
        {/*               setStart={setStart}*/}
        {/*               setEnd={setEnd}*/}
        {/*               sortAmount={sortAmount}*/}
        {/*  />}*/}
        {/*{isOpenedSort &&*/}
        {/*  <ModalSort sortToUp={sortToUp} sortToDown={sortToDown} sortDefault={sortDefault} isOpened={isOpenedSort}*/}
        {/*             overlayClass={s.overlay}*/}
        {/*             onClose={handleCloseSort}*/}
        {/*  />}*/}
      </div>
    </section>
  )
}

export default CatalogBuffets;