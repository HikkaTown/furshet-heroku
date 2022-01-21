import React, {useEffect, useState} from "react";
import s from './CatalogBuffets.module.scss'
import DropdownPerson from "../uikit/DropdownPerson/DropdownPerson";
import Dropdown from "../uikit/Dropdown/Dropdown";
import {LazyImageWrapper} from "../LazyImage";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import BlockCards from "../BlockCards/BlockCards";
import ModalFilter from "../ModalFilter/ModalFilter";
import ModalSort from "../ModalSort/ModalSort";
import {peopleSortHelp, sortAmountHelp, sortToDownHelp, sortToUpHelp, sortTypeHelp, thematicsHelp} from "./sort";
import DropdownTematic from "../uikit/DropdownTematic/DropdownTematic";
import {useRouter} from "next/router";
import qs from "qs";

function CatalogBuffets({catalogData, catalogType, cards, thematics, additionals}) {
  const router = useRouter();
  // const [isOpened, setOpen] = useState(false)
  // const [isOpenedSort, setOpenSort] = useState(false);
  //amount input
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  //cards 
  const [stateCards, setStateCards] = useState(null);
  const [visibleCards, setVisibleCards] = useState(null);
  //type id 
  const [typeId, setTypeId] = useState(13);
  //сортировка по умолчанию или другое
  const [sortTypeName, setSortTypeName] = useState(''); // 0 - default, 1 - toUp, 2 - toDown
  //Тематика
  const [thematicID, setThematics] = useState(null)
  //Люди
  const [peopleNumber, setPeopleNumber] = useState(25);


  // const newCards = cards.filter(cardFilter);
  //
  const cardFilter = (card) => {
    // const isCurrentCategory = card.type.includes() typeId
  }

  console.log(qs.stringify({
    filters: {
      buffets_types: {
        id: {
          $eq: 13,
        }
      },
      tematics: {
        id: {
          $eq: 2
        }
      },
      price: {
        $gte: '4000',
        $lte: '40000',
      },
      paramsBlock: {
        peopleNumber: {
          $lte: 10
        }
      },
    },
    // sort: ['price'],
    populate: '*',
  }, {
    encodeValuesOnly: true,
  }))
  const checkTypePrice = () => {
    if (sortTypeName === 'По умолчанию') {
      sortDefault()
    } else if (sortTypeName === 'По возрастанию') {
      sortToUp()
    } else if (sortTypeName === 'По убыванию') {
      sortToDown()
    }
  }


  const startSorting = () => {
    let result = []
    if (checkCategory) {
      let data = sortType(typeId);
      setVisibleCards(data);
    }
    if (checkThematick) {
      let data = sortThematics(thematicID);
      setVisibleCards(data);
    }
    if (checkPrice) {
      let data = sortAmountHelp(+start, +end, visibleCards);
      setVisibleCards(data);
    }
    if (checkSelectAmount) {
      checkTypePrice();
    }
    if (checkPeople) {
      peopleSortHelp();
    }
  }

  const changeTypeReset = () => {
    setStart('');
    setEnd('');
    if (stateCards) {
      setThematics(null);
      sortThematics(thematicID)
    }
    setSortTypeName(sortTypeName)
    checkTypePrice();

  }

  const sortType = (id) => {
    const data = sortTypeHelp(id, cards, additionals, setStateCards);
    setStateCards(data)
    setVisibleCards(data)
  }

  const sortThematics = (id) => {
    const data = visibleCards.length === 0 ? stateCards : visibleCards;
    const res = thematicsHelp(data, id);
    setVisibleCards(res);
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
    const data = sortToUpHelp(visibleCards);
    setVisibleCards(data);
  }
  const sortToUp = () => {
    const data = sortToDownHelp(visibleCards);
    setVisibleCards(data);
  }

  const sortPeople = () => {
    const res = peopleSortHelp(visibleCards, peopleNumber);
    setVisibleCards(res);
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
    sortType(typeId);
    changeTypeReset();
  }, [typeId])

  useEffect(() => {
    sortAmount();
  }, [start, end])

  useEffect(() => {
    checkTypePrice();
  }, [sortTypeName]);

  useEffect(() => {
    stateCards && sortThematics(thematicID);
  }, [thematicID])

  useEffect(() => {
    stateCards && sortPeople();
  }, [peopleNumber])


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
        <div className={s.catalog_content}>
          <div className={s.filter_catalog}>
            <FilterCatalog types={catalogType}
                           setStart={setStart}
                           setEnd={setEnd}
                           start={start}
                           end={end}
                           sortAmount={sortAmount}
                           typeId={typeId}
                           setTypeId={setTypeId}
                           sortType={sortType}
                           handlerReset={handlerReset}
                           additionals={additionals}
            />
          </div>
          <div className={s.interactive_block}>
            <div className={s.row_buttons}>
              <div className={s.dropdown_thematic}>
                <DropdownTematic
                  thematicID={thematicID}
                  setThematics={setThematics}
                  list={thematics}/>
              </div>
              {(router.asPath.slice(2) === 'furshetnye-nabory' || typeId === 13) && (<div className={s.dropdown_person}>
                <p className={s.text}>
                  Кол-во, чел
                </p>
                <DropdownPerson setPeopleNumber={setPeopleNumber}/></div>)}
              <div className={s.dropdown_amount}>
                <Dropdown
                  sortTypeName={sortTypeName}
                  setSortTypeName={setSortTypeName}
                />
              </div>
            </div>
            <BlockCards cards={visibleCards}/>
            {/*  pagination*/}
          </div>
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