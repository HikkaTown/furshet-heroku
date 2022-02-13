import React, { useEffect, useState } from "react";
import s from "../CatalogBuffets/CatalogBuffets.module.scss";
import cs from "classnames";
import DropdownPerson from "../uikit/DropdownPerson/DropdownPerson";
import Dropdown from "../uikit/Dropdown/Dropdown";
import { LazyImageWrapper } from "../LazyImage";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import BlockCards from "../BlockCards/BlockCards";
// import ModalFilter from "../ModalFilter/ModalFilter";
// import ModalSort from "../ModalSort/ModalSort";
// import { sortToDownHelp, sortToUpHelp } from "./sort";
import DropdownTematic from "../uikit/DropdownTematic/DropdownTematic";
// import { useRouter } from "next/router";
// import checkTypeId from "./helpsAdditionals";
// import filterApiBuffets from "../../utils/api/filterApiBuffets";
// import sortAmount from "../../utils/sortAmount";
// import translit from "../../../../../arenda-kazino-4/utils/translit";
// import Pagination from "rc-pagination";
// import ArrowSectionButton from "../uikit/ArrowSectionButton/ArrowSectionButton";
// import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";

function FullCatalog({
  categoryId,
  cards,
  catalogData,
  catalogType,
  thematics,
  additionals,
}) {
  //-------------------
  const [requestCards, setRequestCards] = useState(null);
  const [thematicId, setThematicId] = useState(null);
  const [typeId, setTypeId] = useState(catalogType[0].id);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(30000);

  useEffect(async () => {
    let data = [];
    if (thematicId) {
      const res = await fetch(
        `http://localhost:3000/api/getAllProductsToCatalog?categoryId=${categoryId}&thematicID=${thematicId}`
      );
      try {
        const result = await res.json();
        data.push(result);
      } catch {}
      setTypeId(null);
      setRequestCards(data[0]);
    } else {
      setTypeId(catalogType[0].id);
    }
  }, [thematicId]);

  useEffect(async () => {
    let data = [];
    if (typeId) {
      const res = await fetch(
        `http://localhost:3000/api/getAllProductsToCatalog?categoryId=${categoryId}&typeId=${typeId}`
      );
      try {
        const result = await res.json();
        data.push(result);
      } catch {}
      setRequestCards(data[0]);
    }
  }, [typeId]);

  // проверка минимального и максимального значения
  useEffect(async () => {
    let maxNumber = (a, b) => {
        return +a.price > +b.price ? +a.price : +b.price;
      },
      minNumber = (a, b) => {
        return +a.price < +b.price ? +a.price : +b.price;
      };

    if (requestCards && requestCards.length > 0) {
      setMax(requestCards.reduce(maxNumber));
      setMin(requestCards.reduce(minNumber));
    } else if (!requestCards && cards.length > 0) {
      setMax(cards.reduce(maxNumber));
      setMin(cards.reduce(minNumber));
    }
    console.log(min, max);
  }, [cards, requestCards]);

  return (
    <section className={s.section}>
      <div className={s.hash} id="catalog"></div>
      <h2 className={s.head}>{catalogData.name}</h2>
      <div className={s.content}>
        <div className={s.row_buttons}>
          <button className={s.filter_btn}>
            <LazyImageWrapper
              src={"/uikit/catalog/icon_filter.svg"}
              className={[s.btn_icon]}
              wrapperClass={s.wrapper_icon}
              lazy={true}
            />{" "}
            Фильтр
          </button>
          <button className={s.sort_btn}>
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
              // --------
              // setStart={setStart}
              // setEnd={setEnd}
              min={min}
              max={max}
              // handlerReset={handlerReset}
              // handlerAdditionals={handlerAdditionals}
              // handlerClickType={handlerClickType}
            />
          </div>
          <div className={s.interactive_block}>
            <div className={s.row_buttons}>
              {requestCards &&
                requestCards?.length > 0 &&
                requestCards[0].params?.peopleNumber && (
                  <div className={s.dropdown_person}>
                    <p className={s.text}>Кол-во, чел</p>
                    <DropdownPerson
                    // setPeopleNumber={setPeopleNumber}
                    />
                  </div>
                )}
              <div className={s.dropdown_amount}>
                <Dropdown
                // sortTypeName={sortTypeName}
                // setSortTypeName={setSortTypeName}
                />
              </div>
            </div>
            <BlockCards
              cards={requestCards || cards}
              // pageSize={pageSize}
              // typeId={typeId}
              // currentPage={currentPage}
              // categoryName={categoryName}
            />
            {/*  pagination*/}
            {/* <Pagination
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
            /> */}
            {/* {currentPage > MAX_PAGE - 1 ? (
              ""
            ) : (
              <SecondaryButton
                text={"Показать ещё"}
                className={s.show_more}
                onClick={() => {
                  handleChangePage(currentPage + 1);
                }}
              />
            )} */}
          </div>
        </div>
      </div>
    </section>
    // <section className={s.section}>
    //
    //       <button onClick={handleOpenSort} className={s.sort_btn}>
    //         <LazyImageWrapper
    //           src={"/uikit/catalog/icon_sorting.svg"}
    //           className={[s.btn_icon]}
    //           wrapperClass={s.wrapper_icon}
    //           lazy={true}
    //         />{" "}
    //         Сортировка
    //       </button>
    //     </div>
    //     <div className={s.catalog_content}>
    //       <div className={s.filter_catalog}>
    //         <FilterCatalog
    //           types={catalogType}
    //           setStart={setStart}
    //           setEnd={setEnd}
    //           min={min}
    //           max={max}
    //           typeId={typeId}
    //           setTypeId={setTypeId}
    //           handlerReset={handlerReset}
    //           additionals={additionals}
    //           // ---
    //           handlerAdditionals={handlerAdditionals}
    //           handlerClickType={handlerClickType}
    //         />
    //       </div>
    //       <div className={s.interactive_block}>
    //         <div className={s.row_buttons}>
    //           {typeof typeId === "number" && (
    //             <div className={s.dropdown_thematic}>
    //               <DropdownTematic
    //                 thematicID={thematicID}
    //                 setThematics={changeThematics}
    //                 list={thematics}
    //               />
    //             </div>
    //           )}
    //           {visiblePeople && (
    //             <div className={s.dropdown_person}>
    //               <p className={s.text}>Кол-во, чел</p>
    //               <DropdownPerson setPeopleNumber={setPeopleNumber} />
    //             </div>
    //           )}
    //           <div className={s.dropdown_amount}>
    //             <Dropdown
    //               sortTypeName={sortTypeName}
    //               setSortTypeName={setSortTypeName}
    //             />
    //           </div>
    //         </div>
    //         <BlockCards
    //           cards={filteredCards || cards}
    //           pageSize={pageSize}
    //           typeId={typeId}
    //           currentPage={currentPage}
    //           categoryName={categoryName}
    //         />
    //         {/*  pagination*/}
    //         <Pagination
    //           current={currentPage}
    //           total={filteredCards.length}
    //           pageSize={6}
    //           jumpNextIcon={"..."}
    //           jumpPrevIcon={"..."}
    //           prevIcon={
    //             <ArrowSectionButton
    //               className={cs(s.pagination_arrow, s.pagination_arrow_left)}
    //             />
    //           }
    //           nextIcon={
    //             <ArrowSectionButton
    //               className={cs(s.pagination_arrow, s.pagination_arrow_right)}
    //             />
    //           }
    //           className={s.pagination}
    //           onChange={handleChangePage}
    //           hideOnSinglePage={true}
    //           showTitle={false}
    //           showLessItems={true}
    //         />
    //         {currentPage > MAX_PAGE - 1 ? (
    //           ""
    //         ) : (
    //           <SecondaryButton
    //             text={"Показать ещё"}
    //             className={s.show_more}
    //             onClick={() => {
    //               handleChangePage(currentPage + 1);
    //             }}
    //           />
    //         )}
    //       </div>
    //     </div>
    //     {isOpened && (
    //       <ModalFilter
    //         handlerReset={handlerReset}
    //         overlayClass={s.overlay}
    //         isOpened={isOpened}
    //         onClose={handleCloseFilter}
    //         types={catalogType}
    //         setStart={setStart}
    //         setEnd={setEnd}
    //         min={min}
    //         max={max}
    //         typeId={typeId}
    //         setTypeId={setTypeId}
    //         additionals={additionals}
    //         thematicID={thematicID}
    //         setThematics={changeThematics}
    //         // ---
    //         handlerAdditionals={handlerAdditionals}
    //         handlerClickType={handlerClickType}
    //         visiblePeople={visiblePeople}
    //         thematics={thematics}
    //       />
    //     )}
    //     {isOpenedSort && (
    //       <ModalSort
    //         setSortTypeName={setSortTypeName}
    //         isOpened={isOpenedSort}
    //         overlayClass={s.overlay}
    //         onClose={handleCloseSort}
    //         sortTypeName={sortTypeName}
    //       />
    //     )}
    //   </div>
    // </section>
  );
}

export default FullCatalog;
