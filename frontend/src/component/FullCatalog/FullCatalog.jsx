import React, { useEffect, useState } from "react";
import s from "./FullCatalog.module.scss";
import cs from "classnames";
import DropdownPerson from "../uikit/DropdownPerson/DropdownPerson";
import Dropdown from "../uikit/Dropdown/Dropdown";
import { LazyImageWrapper } from "../LazyImage";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import BlockCards from "../BlockCards/BlockCards";
import { minMax } from "./findMinMax";
import { useRouter } from "next/router";
import Pagination from "rc-pagination";
import ArrowSectionButton from "../uikit/ArrowSectionButton/ArrowSectionButton";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import checkPrice from "./checkPrice";
import { scrollToCatalog } from "./scrollToCatalog";
import { checkTypeId } from "./checkTypeId";
import { filterWithAmount } from "./filterWithAmount";
import { selectDop } from "./selectDop";
import { globalFilterCatalog } from "./globalFilterCatalog";
import dynamic from "next/dynamic";

const DynamicModalSort = dynamic(() => import("../ModalSort/ModalSort"), {
  ssr: false,
});

const DynamicModalFilter = dynamic(() => import("../ModalFilter/ModalFilter"), {
  ssr: false,
});

function FullCatalog({
  categoryId,
  cards,
  catalogData,
  catalogType,
  thematics,
  additionals,
  additionalsCards,
}) {
  const router = useRouter();
  const [requestCards, setRequestCards] = useState(null);
  const [standartCard, setStandartCard] = useState(null);
  const [thematicId, setThematicId] = useState(null);
  const [typeId, setTypeId] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(30000);
  const [isDop, setIsDop] = useState(false);
  const [name, setName] = useState(null);
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [peopleNumber, setPeopleNumber] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [sortTypeName, setSortTypeName] = useState("");
  const [pageSizeIncrement, setPageSizeIncrement] = useState(0);
  const [isOpenedSort, setIsOpenedSort] = useState(false);
  const [isOpenedFilter, setIsOpenedFilter] = useState(false);

  const MAX_PAGE = requestCards && Math.ceil(requestCards.length / 6);
  const MAX_CARDS_FOR_PAGINATION = 6;

  const handleOpenSort = () => {
    setIsOpenedSort((prev) => !prev);
  };

  const handleOpenFilter = () => {
    setIsOpenedFilter((prev) => !prev);
  };

  const handleChangePage = (index) => {
    setCurrentPage(index);
    setPageSizeIncrement((prevState) => MAX_CARDS_FOR_PAGINATION * (index - 1));
    setPageSize(MAX_CARDS_FOR_PAGINATION * index);
    scrollToCatalog();
  };

  const handlerAdditionals = (name) => {
    setThematicId(null);
    setName(name);
    setIsDop(true);
  };
  useEffect(() => {
    globalFilterCatalog(
      thematicId,
      typeId,
      setTypeId,
      catalogData,
      catalogType,
      peopleNumber,
      setPeopleNumber,
      startValue,
      endValue,
      categoryId,
      setRequestCards,
      setStandartCard
    );
  }, [typeId, thematicId, peopleNumber, startValue, endValue]);

  // проверка минимального и максимального значения
  useEffect(async () => {
    const { min, max } = minMax(cards, requestCards);
    setMax(max);
    setMin(min);
  }, [cards, requestCards]);

  useEffect(() => {
    selectDop(isDop, additionalsCards, name, setRequestCards);
  }, [name, isDop]);

  useEffect(() => {
    filterWithAmount(
      typeId,
      additionalsCards,
      startValue,
      endValue,
      setRequestCards,
      name
    );
  }, [startValue, endValue]);

  useEffect(() => {
    checkPrice(sortTypeName, setRequestCards, requestCards, standartCard);
  }, [sortTypeName]);

  useEffect(() => {
    checkTypeId(router, setTypeId, catalogType, catalogData);
  }, []);

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
              thematics={thematics}
              setThematicId={setThematicId}
              thematicId={thematicId}
              typeId={typeId}
              setTypeId={setTypeId}
              additionals={additionals}
              min={min}
              max={max}
              isDop={isDop}
              setIsDop={setIsDop}
              setName={setName}
              handlerAdditionals={handlerAdditionals}
              catalogData={catalogData}
              // --------
              setStartValue={setStartValue}
              setEndValue={setEndValue}
              // handlerReset={handlerReset}
              // handlerClickType={handlerClickType}
            />
          </div>
          <div className={s.interactive_block}>
            <div className={s.row_buttons}>
              {requestCards &&
                catalogData.position === "Фуршетные наборы" &&
                catalogType[0].id === typeId && (
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
            <BlockCards
              cards={requestCards || cards}
              pageSize={pageSize}
              currentPage={currentPage}
              pageSizeIncrement={pageSizeIncrement}
            />
            {/*  pagination*/}
            <Pagination
              current={currentPage}
              total={requestCards ? requestCards.length : 0}
              pageSize={MAX_CARDS_FOR_PAGINATION}
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
            {currentPage > MAX_PAGE - 1 ||
            pageSize * pageSizeIncrement > requestCards.length ? (
              ""
            ) : (
              <SecondaryButton
                text={"Показать ещё"}
                className={s.show_more}
                onClick={() => {
                  setPageSize((prev) => pageSize * (currentPage + 1));
                  setCurrentPage((prev) => prev + 1);
                }}
              />
            )}
          </div>
        </div>
      </div>
      {isOpenedSort && (
        <DynamicModalSort
          setSortTypeName={setSortTypeName}
          isOpened={isOpenedSort}
          overlayClass={s.overlay}
          onClose={handleOpenSort}
          sortTypeName={sortTypeName}
        />
      )}
      {isOpenedFilter && (
        <DynamicModalFilter
          types={catalogType}
          thematics={thematics}
          setThematicId={setThematicId}
          thematicId={thematicId}
          typeId={typeId}
          setTypeId={setTypeId}
          additionals={additionals}
          min={min}
          max={max}
          isDop={isDop}
          setIsDop={setIsDop}
          setName={setName}
          handlerAdditionals={handlerAdditionals}
          catalogData={catalogData}
          setStartValue={setStartValue}
          setEndValue={setEndValue}
          // -----
          isOpened={isOpenedFilter}
          overlayClass={s.overlay}
          onClose={handleOpenFilter}
        />
      )}
    </section>
  );
}

export default FullCatalog;
