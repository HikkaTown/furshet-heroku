import React, {useEffect, useState} from "react";
import s from "./CatalogSection.module.scss";
import cs from "classnames";
import DropdownPerson from "../uikit/DropdownPerson/DropdownPerson";
import Dropdown from "../uikit/Dropdown/Dropdown";
import {LazyImageWrapper} from "../LazyImage";
import FilterCatalog from "./FilterCatalog";
import BlockCards from "../BlockCards/BlockCards";
import ModalFilter from "./ModalFilter";
import ModalSort from "../ModalSort/ModalSort";
import {sortToDownHelp, sortToUpHelp} from "../CatalogBuffets/sort";
import DropdownTematic from "../uikit/DropdownTematic/DropdownTematic";
import {useRouter} from "next/router";
import checkTypeId from "../CatalogBuffets/helpsAdditionals";
import sortAmount from "../../utils/sortAmount";
import translit from "../../utils/translit";
import Pagination from "rc-pagination";
import ArrowSectionButton from "../uikit/ArrowSectionButton/ArrowSectionButton";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";

function CatalogSection({
                          catalogData,
                          catalogType,
                          thematics,
                          cards,
                          additionals,
                          filterFunction,
                        }) {
  const router = useRouter();
  const [isOpened, setOpen] = useState(false);
  const [isOpenedSort, setOpenSort] = useState(false);
  //миимальная и максимальная стоимость карточки
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  //Значение из input
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  //------------------------
  const [filteredCards, setFilteredCards] = useState(0);
  //Тематика
  const [thematicID, setThematics] = useState(null);
  const [typeId, setTypeId] = useState(null);
  //Люди
  const [visiblePeople, setVisiblePeople] = useState(false);
  const [peopleNumber, setPeopleNumber] = useState(25);
  //сортировка по умолчанию или другое
  const [sortTypeName, setSortTypeName] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const MAX_PAGE = filteredCards && Math.ceil(filteredCards.length / pageSize);

  const handleChangePage = (index) => {
    setCurrentPage(index);
  };

  //Сортировка вверх вниз
  const checkTypePrice = () => {
    if (sortTypeName === "По умолчанию") {
      setFilteredCards(filteredCards);
    } else if (sortTypeName === "По возрастанию") {
      const data = sortToDownHelp(filteredCards);
      setFilteredCards(data);
    } else if (sortTypeName === "По убыванию") {
      const data = sortToUpHelp(filteredCards);
      setFilteredCards(data);
    }
  };
  //работа с модальным окном
  const handlerReset = async () => {
    let data = null;
    setTypeId(catalogType[0].id);
    setThematics(0);
    setVisiblePeople(false);
    setStart(null);
    setEnd(null);
    data = await filterFunction(null, null, null, null, false);
    setFilteredCards(data);
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
    setMin(minMax[0]);
    setMax(minMax[1]);
  };

  useEffect(() => {
    checkTypePrice();
  }, [sortTypeName]);

  // -------------------

  const handlerClickType = async (id) => {
    if (id === null) {
      setTypeId(id);
      let data = null;
      data = await filterFunction(id, thematicID, null, null, false);
      setVisiblePeople(false);
      setFilteredCards(data);
      data.length > 0 && setVisualAmount(data);
    } else {
      setTypeId(id);
      let data = null;
      data = await filterFunction(id, thematicID, null, null, false);
      setVisiblePeople(false);
      setFilteredCards(data);
      data.length > 0 && setVisualAmount(data);
    }
  };

  const changeThematics = async (id) => {
    setThematics(id);
    let data = null;
    data = await filterFunction(typeId, id, null, null, false);
    setVisiblePeople(false);
    setFilteredCards(data);
    data.length > 0 && setVisualAmount(data);
  };

  const changeAmount = async (startAmount, endAmount) => {
    let data = null;
    data = await filterFunction(
      typeId,
      thematicID,
      +startAmount,
      +endAmount,
      false
    );
    setVisiblePeople(false);
    setFilteredCards(data);
    data.length > 0 && setVisualAmount(data);
  };

  const handlerAdditionals = async (id) => {
    setTypeId(translit(id));
    let data = await checkTypeId(id, null, null);
    setFilteredCards(data);
    data.length > 0 && setVisualAmount(data);
  };

  useEffect(async () => {
    await changeAmount(start, end);
  }, [start, end]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let data;
    if (!!router.asPath.slice(router.asPath.indexOf("#") + 1)) {
      // path = router.asPath.slice(2);
      catalogType &&
      catalogType.map((item) => {
        const text = translit(item.attributes.name_type);
        if (text === router.asPath.slice(2)) {
          data = item.id;
        }
      });
      catalogType &&
      additionals.map((item) => {
        const text = translit(item.name);
        if (text === router.asPath.slice(router.asPath.indexOf("#") + 1)) {
          data = translit(item.name);
        }
      });
      if (typeof data === "string") {
        await handlerAdditionals(data);
      } else {
        await handlerClickType(data);
      }
    } else {
      const data = await filterFunction(
        typeId,
        null,
        null,
        null,
        false
      );
      setVisiblePeople(false);
      setFilteredCards(data);
      data.length > 0 && setVisualAmount(data);
    }
  }, []);

  //-------------------

  return (
    <section className={s.section}>
      <div className={s.hash} id="catalog"/>
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
              length={cards && cards.length}
              catalogData={catalogData}
              setStart={setStart}
              setEnd={setEnd}
              min={min}
              max={max}
              typeId={typeId}
              setTypeId={setTypeId}
              handlerReset={handlerReset}
              additionals={additionals}
              handlerAdditionals={handlerAdditionals}
              handlerClickType={handlerClickType}
            />
          </div>
          <div className={s.interactive_block}>
            <div className={s.row_buttons}>
              {typeof typeId === "number" && (
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
            <BlockCards
              cards={filteredCards || cards}
              pageSize={pageSize}
              currentPage={currentPage}
            />
            {/*  pagination*/}
            <Pagination
              current={currentPage}
              total={filteredCards.length}
              pageSize={6}
              jumpNextIcon={"..."}
              jumpPrevIcon={"..."}
              prevIcon={
                <ArrowSectionButton
                  className={cs(s.pagination_arrow, s.pagination_arrow_left)}
                />
              }
              nextIcon={
                <ArrowSectionButton
                  className={cs(s.pagination_arrow, s.pagination_arrow_right)}
                />
              }
              className={s.pagination}
              onChange={handleChangePage}
              hideOnSinglePage={true}
              showTitle={false}
              showLessItems={true}
            />
            {currentPage > MAX_PAGE - 1 ? (
              ""
            ) : (
              <SecondaryButton
                text={"Показать ещё"}
                className={s.show_more}
                onClick={() => {
                  handleChangePage(currentPage + 1);
                }}
              />
            )}
          </div>
        </div>
        {isOpened && (
          <ModalFilter
            ovelayClass={s.overlay}
            types={catalogType}
            length={cards && cards.length}
            catalogData={catalogData}
            setStart={setStart}
            setEnd={setEnd}
            min={min}
            max={max}
            typeId={typeId}
            setTypeId={setTypeId}
            handlerReset={handlerReset}
            additionals={additionals}
            handlerAdditionals={handlerAdditionals}
            handlerClickType={handlerClickType}
            isOpened={isOpened}
            onClose={handleCloseFilter}
          />
        )}
        {isOpenedSort && (
          <ModalSort
            setSortTypeName={setSortTypeName}
            isOpened={isOpenedSort}
            overlayClass={s.overlay}
            onClose={handleCloseSort}
            sortTypeName={sortTypeName}
          />
        )}
      </div>
    </section>
  );
}

export default CatalogSection;
