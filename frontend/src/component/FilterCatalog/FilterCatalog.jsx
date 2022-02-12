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
  // ---

  handlerReset,

  onClose,
  setStart,
  setEnd,
  additionals,
  min,
  max,
  //-----
  visiblePeople,
  handlerAdditionals,
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
    if (!!router.asPath.slice(2)) {
      setPath(router.asPath.slice(2));
      // path = router.asPath.slice(2);
      let data;
      types &&
        types.map((item) => {
          const text = translit(item.name);
          if (text === router.asPath.slice(2)) {
            data = item.id;
          }
        });
      additionals &&
        additionals.map((item) => {
          const text = translit(item.name);
          if (text === router.asPath.slice(2)) {
            data = translit(item.name);
          }
        });
      setTypeId(data);
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
            setStart={setStart}
            setEnd={setEnd}
          />
        </div>
        {thematics && (
          <div className={cs(s.row, s.thematics)}>
            <SecondaryButton
              onClick={() => {
                setThematicId(null);
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
              return (
                <TextBtnForFilter
                  key={id}
                  onClick={(e) => {
                    // handleActiveCategory(e);
                    setTypeId(id);
                    router.push(`#${translit(name)}`);
                    // handlerClickType(id);
                  }}
                  typeId={typeId}
                  id={id}
                  name={name}
                  count={count}
                />
              );
            })}
        </div>
        <div className={cs(s.row, s.additionals)}>
          {/* TODO: ЭТО ДОПЫ */}
          {types &&
            types.slice(0, 3).map((item) => {
              const { id, name, count } = item;
              return (
                <TextBtnForFilter
                  key={id}
                  onClick={(e) => {
                    // handleActiveCategory(e);
                    // handlerAdditionals(item.name);
                    router.push(`#${translit(name)}`);
                  }}
                  id={id}
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
