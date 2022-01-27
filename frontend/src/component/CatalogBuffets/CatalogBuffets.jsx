import React, {useEffect, useState} from "react";
import s from "./CatalogBuffets.module.scss";
import cs from 'classnames';
import DropdownPerson from "../uikit/DropdownPerson/DropdownPerson";
import Dropdown from "../uikit/Dropdown/Dropdown";
import {LazyImageWrapper} from "../LazyImage";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import BlockCards from "../BlockCards/BlockCards";
import ModalFilter from "../ModalFilter/ModalFilter";
import ModalSort from "../ModalSort/ModalSort";
import {
  sortToDownHelp,
  sortToUpHelp,
} from "./sort";
import DropdownTematic from "../uikit/DropdownTematic/DropdownTematic";
import {useRouter} from "next/router";
import checkTypeId from "./helpsAdditionals";
import filterApiBuffets from "../../utils/api/filterApiBuffets";
import sortAmount from "../../utils/sortAmount";
import translit from "../../utils/translit";
import Pagination from "rc-pagination";
import ArrowSectionButton from "../uikit/ArrowSectionButton/ArrowSectionButton";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";

function CatalogBuffets({
                          categoryName,
                          catalogData,
                          catalogType,
                          thematics,
                          cards,
                          additionals,
                        }) {
  const router = useRouter();
  const [isOpened, setOpen] = useState(false)
  const [isOpenedSort, setOpenSort] = useState(false);
  //миимальная и максимальная стоимость карточки
  const [min, setMin] = useState(null)
  const [max, setMax] = useState(null)
  //Значение из input
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  //------------------------
  const [filteredCards, setFilteredCards] = useState(0);
  //Тематика
  const [thematicID, setThematics] = useState(null);
  const [typeId, setTypeId] = useState(catalogType[0].id);
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
  }

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
    setTypeId(13);
    setThematics(0);
    setVisiblePeople(true);
    setStart(null);
    setEnd(null)
    data = await filterApiBuffets(13, null, null, null, true, 25);
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
    data.length > 0 && setVisualAmount(data);
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
    data.length > 0 && setVisualAmount(data);
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
    data.length > 0 && setVisualAmount(data);
  }

  const handlerAdditionals = async (id) => {
    setTypeId(translit(id));
    let data = await checkTypeId(id, null, null);
    setFilteredCards(data);
    data.length > 0 && setVisualAmount(data);
  }

  useEffect(async () => {
    await changeAmount(start, end);
  }, [start, end])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let data
    if (!!router.asPath.slice(2)) {
      // path = router.asPath.slice(2);
      catalogType &&
      catalogType.map((item) => {
        const text = translit(item.attributes.nameType);
        if (text === router.asPath.slice(2)) {
          data = item.id;
        }
      });
      catalogType &&
      additionals.map((item) => {
        const text = translit(item.name);
        if (text === router.asPath.slice(2)) {
          data = translit(item.name);
        }
      });
      if (typeof data === 'string') {
        await handlerAdditionals(data);
      } else {
        await handlerClickType(data);
      }
    } else {
      const data = await filterApiBuffets(catalogType[0].id, null, null, null, true, 25);
      setVisiblePeople(true)
      setFilteredCards(data);
      data.length > 0 && setVisualAmount(data);
    }
  }, [])


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
              setStart={setStart}
              setEnd={setEnd}
              min={min}
              max={max}
              typeId={typeId}
              setTypeId={setTypeId}
              handlerReset={handlerReset}
              additionals={additionals}
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
            <BlockCards cards={filteredCards || cards} pageSize={pageSize} currentPage={currentPage}
                        categoryName={categoryName}/>
            {/*  pagination*/}
            <Pagination
              current={currentPage}
              total={filteredCards.length}
              pageSize={6}
              jumpNextIcon={'...'}
              jumpPrevIcon={'...'}
              prevIcon={<ArrowSectionButton className={cs(s.pagination_arrow, s.pagination_arrow_left)}/>}
              nextIcon={<ArrowSectionButton className={cs(s.pagination_arrow, s.pagination_arrow_right)}/>}
              className={s.pagination}
              onChange={handleChangePage}
              hideOnSinglePage={true}
              showTitle={false}
              showLessItems={true}
            />
            {currentPage > MAX_PAGE - 1 ? '' : (
              <SecondaryButton text={'Показать ещё'} className={s.show_more} onClick={() => {
                handleChangePage(currentPage + 1)
              }}/>)}
          </div>
        </div>
        {isOpened &&
          <ModalFilter
            handlerReset={handlerReset}
            overlayClass={s.overlay}
            isOpened={isOpened}
            onClose={handleCloseFilter}
            types={catalogType}
            setStart={setStart}
            setEnd={setEnd}
            min={min}
            max={max}
            typeId={typeId}
            setTypeId={setTypeId}
            additionals={additionals}
            thematicID={thematicID}
            setThematics={changeThematics}
            // ---
            handlerAdditionals={handlerAdditionals}
            handlerClickType={handlerClickType}
            visiblePeople={visiblePeople}
            thematics={thematics}


          />}
        {isOpenedSort &&
          <ModalSort
            setSortTypeName={setSortTypeName}
            isOpened={isOpenedSort}
            overlayClass={s.overlay}
            onClose={handleCloseSort}
            sortTypeName={sortTypeName}
          />}
      </div>
    </section>
  );
}

export default CatalogBuffets;
