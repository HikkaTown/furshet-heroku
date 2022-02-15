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
  }, [router]);

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
        {!isDop && thematics && (
          <div className={cs(s.row, s.thematics)}>
            <SecondaryButton
              onClick={() => {
                setThematicId(null);
                setStartValue(null);
                setEndValue(null);
              }}
              className={cs(
                s.thematics_btn,
                thematicId === null && s.thematics_btn_active
              )}
              text={"Без тематики"}
            />
            {thematics &&
              thematics.map((item) => {
                return (
                  <SecondaryButton
                    key={item.id}
                    onClick={() => {
                      setThematicId(item.id);
                      setStartValue(null);
                      setEndValue(null);
                    }}
                    className={cs(
                      s.thematics_btn,
                      thematicId === item.id && s.thematics_btn_active
                    )}
                    text={item.name}
                  />
                );
              })}
          </div>
        )}
        <div className={s.row}>
          {!!types &&
            types.map((item, index) => {
              const { id, name, count } = item;
              if (
                router.asPath.slice(router.asPath.indexOf("#") + 1) ===
                translit(name)
              ) {
                document
                  .querySelector("#catalog")
                  .scrollIntoView({ block: "start", behavior: "smooth" });
              }
              if (catalogData.position === "Фуршетные наборы") {
                return (
                  <TextBtnForFilter
                    key={id}
                    onClick={(e) => {
                      setTypeId(id);
                      router.push(`#${translit(name)}`);
                      setThematicId(null);
                      setIsDop(false);
                      setStartValue(null);
                      setEndValue(null);
                    }}
                    typeId={typeId}
                    id={id}
                    name={name}
                    count={count}
                  />
                );
              } else {
              }
            })}
          {true && (
            <CatalogTabButton
              key={5585}
              text={"Всё"}
              typeId={typeId}
              id={null}
              onClick={(e) => {
                router.push(`#catalog`);
                setTypeId(null);
              }}
              className={s.btn_tab}
              classNameActive={s.btn_tab_active}
            />
          )}

          {catalogData.position !== "Фуршетные наборы" &&
            !!types &&
            types.map((item, index) => {
              const { id, name, count } = item;
              return (
                <CatalogTabButton
                  key={id}
                  className={s.btn_tab}
                  classNameActive={s.btn_tab_active}
                  typeId={typeId}
                  onClick={(e) => {
                    setTypeId(id);
                    router.push(`#${translit(name)}`);
                    setThematicId(null);
                    setIsDop(false);
                    setStartValue(null);
                    setEndValue(null);
                  }}
                  text={name}
                  id={id}
                />
              );
            })}
        </div>
        <div className={cs(s.row, s.additionals)}>
          {/* TODO: ЭТО ДОПЫ */}
          {additionals &&
            additionals.map((item) => {
              const { id, name, count } = item;
              if (
                router.asPath.slice(router.asPath.indexOf("#") + 1) ===
                translit(name)
              ) {
                document
                  .querySelector("#catalog")
                  .scrollIntoView({ block: "start", behavior: "smooth" });
              }
              return (
                <TextBtnForFilter
                  key={id}
                  onClick={(e) => {
                    router.push(`#${translit(name)}`);
                    handlerAdditionals(name);
                    setTypeId(name);
                  }}
                  id={id + "ds"}
                  typeId={typeId}
                  count={count}
                  name={name}
                />
              );
            })}
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
