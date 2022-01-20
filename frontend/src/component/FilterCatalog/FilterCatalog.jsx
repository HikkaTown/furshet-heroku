import React, {useEffect, useState} from 'react';
import cs from 'classnames';
import s from './FilterCatalog.module.scss'
import FilterAmount from "../uikit/FilterAmount/FilterAmount";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import CatalogTabButton from "../uikit/CatalogTabButton/CatalogTabButton";
import ConfirmFilter from "../uikit/ConfirmFilter/ConfirmFilter";
import {useRouter} from "next/router";
import translit from "../../utils/translit";

function FilterCatalog({
                         types,
                         sortType,
                         catalogData,
                         start,
                         end,
                         typeId,
                         setTypeId,
                         handlerReset,
                         sortAmount,
                         onClose,
                         setStart,
                         setEnd,
                         additionals
                       }) {
  const router = useRouter();
  const [path, setPath] = useState('');
  const handleActiveCategory = (e) => {
    e.preventDefault();
  }

  const handleResetForm = () => {
    handlerReset();
    onClose();

  }

  useEffect(() => {
    if (!!router.asPath.slice(2)) {
      setPath(router.asPath.slice(2));
      let data;
      types && types.map((item) => {
        const text = translit(item.attributes.nameType)
        if (text === router.asPath.slice(2)) {
          data = item.id
        }
      });
      types && additionals.map((item) => {
        const text = translit(item.name)
        if (text === router.asPath.slice(2)) {
          data = translit(item.name);
        }
      })
      setTypeId(data);
    }
  }, [router])

  return (
    <div className={s.block}>
      <button onClick={onClose} className={s.close}>
        <span className={s.close__line}></span>
        <span className={s.close__line}></span>
      </button>
      <div className={s.content}>
        <div className={s.row}>
          <h3 className={s.head}>Филтр</h3>
          <button onClick={handleResetForm} className={s.clear}>Сбросить фильтр</button>
        </div>
        <div className={s.row}>
          <FilterAmount start={start} end={end} sortAmount={sortAmount} setStart={setStart} setEnd={setEnd}/>
        </div>
        <div className={s.row}>
          {!!types && types.map((item, index) => {
            const {attributes, id} = item;
            const {buffets, nameType} = attributes;
            if (path && path === translit(nameType)) {
              const catalog = document.querySelector('#catalog');
              catalog.scrollIntoView({block: "start", behavior: "smooth"});
              // setTypeId(id);
            }
            return (
              <button key={id} onClick={(e) => {
                handleActiveCategory(e)
                setTypeId(id)
                sortType(item.id)
                router.push(`#${translit(nameType)}`);
              }} className={cs(s.button, typeId === id && s.button_active)}>
                <span className={s.button_name}>{nameType}</span>
                <span className={s.button_number}>{buffets.data.length}</span>
              </button>
            )
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
          {additionals && additionals.map((item) => {
            if (path && path === translit(item.name)) {
              const catalog = document.querySelector('#catalog');
              catalog.scrollIntoView({block: "start", behavior: "smooth"});
              // setTypeId(item.name);
            }
            return (
              <button key={item.name + 'dsds'} onClick={(e) => {
                handleActiveCategory(e)
                setTypeId(item.name)
                sortType(item.name)
                router.push(`#${translit(item.name)}`);
              }} className={cs(s.button, typeId === translit(item.name) && s.button_active)}>
                <span className={s.button_name}>{item.name}</span>
                <span className={s.button_number}>{item.data.length}</span>
              </button>
            )
          })}
        </div>
        <ConfirmFilter onClick={() => {
          sortAmount();
          onClose();
        }}/>
      </div>
    </div>
  );
}


export default FilterCatalog;