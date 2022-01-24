import React, {useEffect, useState} from "react";
import s from "./CatalogBuffets.module.scss";
import DropdownPerson from "../uikit/DropdownPerson/DropdownPerson";
import Dropdown from "../uikit/Dropdown/Dropdown";
import {LazyImageWrapper} from "../LazyImage";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import BlockCards from "../BlockCards/BlockCards";
import ModalFilter from "../ModalFilter/ModalFilter";
import ModalSort from "../ModalSort/ModalSort";
import {
  peopleSortHelp,
  sortAmountHelp,
  sortToDownHelp,
  sortToUpHelp,
  sortTypeHelp,
  thematicsHelp,
} from "./sort";
import DropdownTematic from "../uikit/DropdownTematic/DropdownTematic";
import {useRouter} from "next/router";
import qs from "qs";
import axios from "axios";
import checkTypeId from "./helpsAdditionals";
import debounce from "../../utils/debounce";
import filterApiBuffets from "../../utils/api/filterApiBuffets";
import sortAmount from "../../utils/sortAmount";
import translit from "../../utils/translit";

function CatalogBuffets({
                          catalogData,
                          catalogType,
                          thematics,
                          cards,
                          additionals,
                        }) {
  const router = useRouter();
  // const [isOpened, setOpen] = useState(false)
  // const [isOpenedSort, setOpenSort] = useState(false);
  //миимальная и максимальная стоимость карточки
  const [min, setMin] = useState(null)
  const [max, setMax] = useState(null)
  //Значение из input
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);


  //------------------------
  const [filteredCards, setFilteredCards] = useState(null);
  //Тематика
  const [thematicID, setThematics] = useState(null);
  const [typeId, setTypeId] = useState(catalogType[0].id);
  //Люди
  const [visiblePeople, setVisiblePeople] = useState(false);
  const [peopleNumber, setPeopleNumber] = useState(25);
  //сортировка по умолчанию или другое
  const [sortTypeName, setSortTypeName] = useState("");

  //Сортировка вверх вниз
  const checkTypePrice = () => {
    if (sortTypeName === "По умолчанию") {
      sortDefault();
    } else if (sortTypeName === "По возрастанию") {
      sortToUp();
    } else if (sortTypeName === "По убыванию") {
      sortToDown();
    }
  };
  const sortDefault = () => {
    setFilteredCards(filteredCards);
  };
  const sortToDown = () => {
    const data = sortToUpHelp(filteredCards);
    setFilteredCards(data);
  };
  const sortToUp = () => {
    const data = sortToDownHelp(filteredCards);
    setFilteredCards(data);
  };
  //работа с модальным окном
  const handlerReset = (id) => {
    sortType(typeId);
  };
  const handleOpenFilter = () => {
    setOpen(true);
  };
  const handleCloseFilter = () => {
    setOpen(false);
  };
  const handleOpenSort = () => {
    setOpenSort(true);
  };
  const handleCloseSort = () => {
    setOpenSort(false);
  };

  const setVisualAmount = (data) => {
    const minMax = data && sortAmount(data);
    data && setMin(minMax[0]);
    data && setMax(minMax[1]);
  }

  useEffect(() => {
    checkTypePrice();
  }, [sortTypeName]);

  // -------------------

  const handlerClickType = async (id) => {
    setTypeId(id);
    let data = null;
    if (id === 13) {
      data = await filterApiBuffets(id, thematicID, null, null, true, 25);
      setVisiblePeople(true);
    } else {
      data = await filterApiBuffets(id, thematicID, null, null, false, 25);
      setVisiblePeople(false)
    }
    setFilteredCards(data);
  }

  const changeThematics = async (id) => {
    setThematics(id)
    let data = null;
    if (id === 13) {
      data = await filterApiBuffets(typeId, id, null, null, true, 25);
      setVisiblePeople(true)
    } else {
      data = await filterApiBuffets(typeId, id, null, null, false, 25);
      setVisiblePeople(false)
    }
    setFilteredCards(data)
    setVisualAmount(data);
  }

  const changeAmount = async (startAmount, endAmount) => {
    console.log(startAmount, endAmount)
    let data = null;
    if (typeId === 13) {
      data = await filterApiBuffets(typeId, thematicID, +startAmount, +endAmount, true, 25);
      setVisiblePeople(true)
    } else {
      data = await filterApiBuffets(typeId, thematicID, +startAmount, +endAmount, false, 25);
      setVisiblePeople(false)
    }
    setFilteredCards(data)
    setVisualAmount(data);
  }

  const handlerAdditionals = async (id) => {
    setTypeId(translit(id));
    let data = await checkTypeId(id, null, null);
    setFilteredCards(data);
    // setVisualAmount(data);
  }

  useEffect(async () => {
    await changeAmount(start, end);
  }, [start, end])

  useEffect(async () => {
    console.log(typeId)


    const data = await filterApiBuffets(catalogType[0].id, null, null, null, true, 25);
    setVisiblePeople(true)
    setFilteredCards(data);
    setVisualAmount(data);
  }, [])


  //-------------------

  return (
    <section className={s.section}>
      <div className={s.hash} id="catalog"></div>
      <h2 className={s.head}>{catalogData.name}</h2>
      <div className={s.content}>
        <div className={s.row_buttons}>
          <button onClick={handleOpenFilter} className={s.filter_btn}>
            <LazyImageWrapper
              src={"/uikit/catalog/icon_filter.svg"}
              className={[s.btn_icon]}
              wrapperClass={s.wrapper_icon}
              lazy={true}
            />{" "}
            Фильтр
          </button>
          <button onClick={handleOpenSort} className={s.sort_btn}>
            <LazyImageWrapper
              src={"/uikit/catalog/icon_sorting.svg"}
              className={[s.btn_icon]}
              wrapperClass={s.wrapper_icon}
              lazy={true}
            />{" "}
            Сортировка
          </button>
        </div>
        <div className={s.catalog_content}>
          <div className={s.filter_catalog}>
            <FilterCatalog
              setCards={setFilteredCards}
              types={catalogType}
              setStart={setStart}
              setEnd={setEnd}
              min={min}
              max={max}
              start={start}
              end={end}
              typeId={typeId}
              setTypeId={setTypeId}
              handlerReset={handlerReset}
              additionals={additionals}
              changeAmount={changeAmount}
              // ---
              handlerAdditionals={handlerAdditionals}
              handlerClickType={handlerClickType}
            />
          </div>
          <div className={s.interactive_block}>
            <div className={s.row_buttons}>
              {typeof typeId === 'number' && (
                <div className={s.dropdown_thematic}>
                  <DropdownTematic
                    thematicID={thematicID}
                    setThematics={changeThematics}
                    list={thematics}
                  />
                </div>
              )}
              {visiblePeople && (
                <div className={s.dropdown_person}>
                  <p className={s.text}>Кол-во, чел</p>
                  <DropdownPerson setPeopleNumber={setPeopleNumber}/>
                </div>
              )}
              <div className={s.dropdown_amount}>
                <Dropdown
                  sortTypeName={sortTypeName}
                  setSortTypeName={setSortTypeName}
                />
              </div>
            </div>
            <BlockCards cards={filteredCards || cards}/>
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
  );
}

export default CatalogBuffets;
