import React, { useEffect, useState } from "react";
import s from "./CatalogBuffets.module.scss";
import DropdownPerson from "../uikit/DropdownPerson/DropdownPerson";
import Dropdown from "../uikit/Dropdown/Dropdown";
import { LazyImageWrapper } from "../LazyImage";
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
import { useRouter } from "next/router";
import qs from "qs";
import axios from "axios";
import checkTypeId from "./helpsAdditionals";

function CatalogBuffets({
  catalogData,
  catalogType,
  cards,
  thematics,
  additionals,
}) {
  const router = useRouter();
  // const [isOpened, setOpen] = useState(false)
  // const [isOpenedSort, setOpenSort] = useState(false);
  //amount input
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(30000);
  //cards
  const [stateCards, setStateCards] = useState(null);
  const [visibleCards, setVisibleCards] = useState(null);
  //type id
  const [typeId, setTypeId] = useState(13);
  //сортировка по умолчанию или другое
  const [sortTypeName, setSortTypeName] = useState(""); // 0 - default, 1 - toUp, 2 - toDown
  //Тематика
  const [thematicID, setThematics] = useState(null);
  //Люди
  const [visiblePeople, setVisiblePeople] = useState(false);
  const [peopleNumber, setPeopleNumber] = useState(25);

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
    setVisibleCards(visibleCards);
  };
  const sortToDown = () => {
    const data = sortToUpHelp(visibleCards);
    setVisibleCards(data);
  };
  const sortToUp = () => {
    const data = sortToDownHelp(visibleCards);
    setVisibleCards(data);
  };

  // const sortPeople = () => {
  //   const res = peopleSortHelp(visibleCards, peopleNumber);
  //   setVisibleCards(res);
  // };

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

  useEffect(() => {
    let visibility =
      router.asPath.slice(2) === "furshetnye-nabory" && typeId === 13
        ? true
        : false;
    if (router.asPath.slice(2) === "furshetnye-nabory" && typeId === 13) {
      setVisiblePeople(true);
    } else {
      setVisiblePeople(false);
    }
    if (typeof typeId === "number") {
      axios(
        `http://localhost:3000/api/filterBuffets?typeId=${typeId}&thematicID=${thematicID}&start=${start}&end=${end}&peopleNumber=${
          !!visibility ? peopleNumber : visibility
        }`
      ).then((res) => {
        setVisibleCards(res.data);
      });
    } else {
      let data = checkTypeId(typeId);
      console.log(data);
      setVisibleCards(data);
    }
  }, [typeId, thematicID, start, end, peopleNumber]);

  useEffect(() => {
    checkTypePrice();
  }, [sortTypeName]);

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
              types={catalogType}
              setStart={setStart}
              setEnd={setEnd}
              start={start}
              end={end}
              // sortAmount={sortAmount}
              typeId={typeId}
              setTypeId={setTypeId}
              // sortType={sortType}
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
                  list={thematics}
                />
              </div>
              {visiblePeople && (
                <div className={s.dropdown_person}>
                  <p className={s.text}>Кол-во, чел</p>
                  <DropdownPerson setPeopleNumber={setPeopleNumber} />
                </div>
              )}
              <div className={s.dropdown_amount}>
                <Dropdown
                  sortTypeName={sortTypeName}
                  setSortTypeName={setSortTypeName}
                />
              </div>
            </div>
            <BlockCards cards={visibleCards} />
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
