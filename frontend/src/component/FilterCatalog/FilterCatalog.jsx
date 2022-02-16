import React, { useEffect, useState } from "react";
import cs from "classnames";
import s from "./FilterCatalog.module.scss";
import FilterAmount from "../uikit/FilterAmount/FilterAmount";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import CatalogTabButton from "../uikit/CatalogTabButton/CatalogTabButton";
import ConfirmFilter from "../uikit/ConfirmFilter/ConfirmFilter";
import { useRouter } from "next/router";
import translit from "../../utils/translit";
import TextBtnForFilter from "../uikit/TextBtnForFilter/TextBtnForFilter";
import CatalogNavigationText from "../CatalogNavigationText/CatalogNavigationText";
import CatalogNavigationTabs from "../CatalogNavigationTabs/CatalogNavigationTabs";
import FilterThematicsBlock from "../FilterThematicsBlock/FilterThematicsBlock";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function FilterCatalog({
  types,
  typeId,
  setTypeId,
  thematics,
  thematicId,
  setThematicId,
  additionals,
  isDop,
  setIsDop,
  setName,
  handlerAdditionals,
  setStartValue,
  setEndValue,
  startValue,
  endValue,
  min,
  max,
  catalogData,
  // ---

  handlerReset,

  onClose,
  //-----
  visiblePeople,
  handlerClickType,
}) {
  const router = useRouter();
  const [path, setPath] = useState("");
  const handleActiveCategory = (e) => {
    e.preventDefault();
  };

  const handleResetForm = () => {
    handlerReset();
    onClose();
  };

  useEffect(() => {
    let path = null;
    if (!!router.asPath.slice(router.asPath.indexOf("#") + 1)) {
      setPath(router.asPath.slice(router.asPath.indexOf("#") + 1));
      let data;
      types &&
        types.map((item) => {
          const text = translit(item.name);
          if (text === router.asPath.slice(router.asPath.indexOf("#") + 1)) {
            data = item.id;
            setTypeId(data);
          }
        });
      additionals &&
        additionals.map((item) => {
          const text = translit(item.name);
          if (text === router.asPath.slice(router.asPath.indexOf("#") + 1)) {
            data = item.name;
            setTypeId(item.name);
            handlerAdditionals(item.name);
          }
        });
    }
  }, []);

  return (
    <div className={s.block}>
      <button onClick={onClose} className={s.close}>
        <span className={s.close__line} />
        <span className={s.close__line} />
      </button>
      <div className={s.content}>
        <div className={s.row}>
          <h3 className={s.head}>Филтр</h3>
          <button onClick={handleResetForm} className={s.clear}>
            Сбросить фильтр
          </button>
        </div>
        <div className={s.row}>
          <FilterAmount
            min={min}
            max={max}
            startValue={startValue}
            endValue={endValue}
            setStartValue={setStartValue}
            setEndValue={setEndValue}
          />
        </div>
        <AnimatePresence>
          {!isDop && thematics && (
            <div className={cs(s.row, s.thematics)}>
              <FilterThematicsBlock
                thematics={thematics}
                thematics={thematics}
                setThematicId={setThematicId}
                setStartValue={setStartValue}
                setEndValue={setEndValue}
                thematicId={thematicId}
              />
            </div>
          )}
        </AnimatePresence>
        <div className={s.row}>
          {catalogData.position === "Фуршетные наборы" && (
            <CatalogNavigationText
              types={types}
              typeId={typeId}
              setIsDop={setIsDop}
              setStartValue={setStartValue}
              setEndValue={setEndValue}
              setThematicId={setThematicId}
              setTypeId={setTypeId}
            />
          )}
          {catalogData.position !== "Фуршетные наборы" && (
            <CatalogNavigationTabs
              types={types}
              typeId={typeId}
              setIsDop={setIsDop}
              setStartValue={setStartValue}
              setEndValue={setEndValue}
              setThematicId={setThematicId}
              setTypeId={setTypeId}
              positionName={catalogData.position}
            />
          )}
        </div>
        <div className={cs(s.row, s.additionals)}>
          {/* TODO: ЭТО ДОПЫ */}
          {
            additionals && (
              <CatalogNavigationText
                types={additionals}
                typeId={typeId}
                setIsDop={setIsDop}
                setStartValue={setStartValue}
                setEndValue={setEndValue}
                setThematicId={setThematicId}
                setTypeId={setTypeId}
                isAdditionals={true}
                handlerAdditionals={handlerAdditionals}
              />
            )

            // additionals.map((item) => {
            //   const { id, name, count } = item;
            //   if (
            //     router.asPath.slice(router.asPath.indexOf("#") + 1) ===
            //     translit(name)
            //   ) {
            //     document
            //       .querySelector("#catalog")
            //       .scrollIntoView({ block: "start", behavior: "smooth" });
            //   }
            //   return (
            //     <TextBtnForFilter
            //       key={id}
            //       onClick={(e) => {
            //         router.push(`#${translit(name)}`);
            //         handlerAdditionals(name);
            //         setTypeId(name);
            //       }}
            //       id={id + "ds"}
            //       typeId={typeId}
            //       count={count}
            //       name={name}
            //     />
            //   );
            // })
          }
        </div>
        <ConfirmFilter
          onClick={() => {
            onClose();
          }}
        />
      </div>
    </div>
  );
}

export default FilterCatalog;
