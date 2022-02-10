import React, { useEffect, useState } from "react";
import cs from "classnames";
import s from "./FilterCatalog.module.scss";
import FilterAmount from "../uikit/FilterAmount/FilterAmount";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import CatalogTabButton from "../uikit/CatalogTabButton/CatalogTabButton";
import ConfirmFilter from "../uikit/ConfirmFilter/ConfirmFilter";
import { useRouter } from "next/router";
import translit from "../../../../../arenda-kazino-4/utils/translit";

function FilterCatalog({
  types,
  visiblePeople,
  typeId,
  setTypeId,
  handlerReset,
  thematics,
  onClose,
  setStart,
  setEnd,
  additionals,
  min,
  max,
  //-----
  handlerAdditionals,
  handlerClickType,
  thematicID,
  setThematics,
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

  // useEffect(() => {
  //   let path = null;
  //   if (!!router.asPath.slice(2)) {
  //     setPath(router.asPath.slice(2));
  //     // path = router.asPath.slice(2);
  //     let data;
  //     types &&
  //       types.map((item) => {
  //         const text = translit(item.attributes.nameType);
  //         if (text === router.asPath.slice(2)) {
  //           data = item.id;
  //         }
  //       });
  //     types &&
  //       additionals.map((item) => {
  //         const text = translit(item.name);
  //         if (text === router.asPath.slice(2)) {
  //           data = translit(item.name);
  //         }
  //       });
  //     setTypeId(data);
  //   }
  // }, [router]);

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
        {typeof typeId === "number" && (
          <div className={cs(s.row, s.thematics)}>
            <SecondaryButton
              onClick={() => {
                setThematics(null);
              }}
              className={cs(
                s.thematics_btn,
                thematicID === null && s.thematics_btn_active
              )}
              text={"Без тематики"}
            />
            {thematics &&
              thematics.map((item) => {
                return (
                  <SecondaryButton
                    key={item.id}
                    onClick={() => {
                      setThematics(item.id);
                    }}
                    className={cs(
                      s.thematics_btn,
                      thematicID === item.id && s.thematics_btn_active
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
              const { attributes, id } = item;
              const { katalogs, nameType } = attributes;
              if (path && path === translit(nameType)) {
                const catalog = document.querySelector("#catalog");
                catalog.scrollIntoView({ block: "start", behavior: "smooth" });
                // setTypeId(id);
              }
              return (
                <button
                  key={id}
                  onClick={(e) => {
                    // handleActiveCategory(e);
                    // setTypeId(id);
                    router.push(`#${translit(nameType)}`);
                    // handlerClickType(id);
                  }}
                  className={cs(s.button, typeId === id && s.button_active)}
                >
                  <span className={s.button_name}>{nameType}</span>
                  <span className={s.button_number}>
                    {katalogs.data.length}
                  </span>
                </button>
              );
            })}
          {/*<SecondaryButton className={s.btn} text={'Без тематикик'}/>*/}
          {/*{types && types.map((item, index) => {*/}
          {/*  return (*/}
          {/*    <SecondaryButton key={index} className={s.btn} text={item.attributes.name_type} onClick={(e) => {*/}
          {/*      const itemId = item.id;*/}
          {/*      handleActiveCategory(e)*/}
          {/*    }}/>*/}
          {/*  )*/}
          {/*})}*/}
        </div>
        {/*<div className={cs(s.row, s.category)}>*/}
        {/*  {types && types.map((item, index) => {*/}
        {/*    return (*/}
        {/*      <button key={index} onClick={(e) => {*/}
        {/*        const itemId = item.id;*/}
        {/*        handleActiveCategory(e)*/}
        {/*      }} className={cs(s.button)}>*/}
        {/*        <span className={s.button_name}>{item.attributes.name_type}</span>*/}
        {/*        <span className={s.button_number}>{item.attributes.count.length}</span>*/}
        {/*      </button>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*</div>*/}
        <div className={cs(s.row, s.additionals)}>
          {additionals &&
            additionals.map((item) => {
              if (path && path === translit(item.name)) {
                const catalog = document.querySelector("#catalog");
                catalog.scrollIntoView({ block: "start", behavior: "smooth" });
                // setTypeId(item.name);
              }
              return (
                <button
                  key={item.name + "dsds"}
                  onClick={(e) => {
                    handleActiveCategory(e);
                    handlerAdditionals(item.name);
                    router.push(`#${translit(item.name)}`);
                  }}
                  className={cs(
                    s.button,
                    typeId === translit(item.name) && s.button_active
                  )}
                >
                  <span className={s.button_name}>{item.name}</span>
                  <span className={s.button_number}>{item.data.length}</span>
                </button>
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
