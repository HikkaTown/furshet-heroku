import React, {useState} from 'react';
import cs from 'classnames';
import s from './FilterCatalog.module.scss'
import FilterAmount from "../uikit/FilterAmount/FilterAmount";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import CatalogTabButton from "../uikit/CatalogTabButton/CatalogTabButton";
import ConfirmFilter from "../uikit/ConfirmFilter/ConfirmFilter";

function FilterCatalog({types, catalogData}) {
  const [activeCategory, setActiveCategory] = useState(false);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const handleActiveCategory = (e) => {
    e.preventDefault();
    setActiveCategory(true);
  }

  const handleSearchCards = (id) => {

  }

  const handleResetForm = () => {
    setActiveCategory(false);

  }
  return (
    <div className={s.block}>
      <button className={s.close}>
        <span className={s.close__line}></span>
        <span className={s.close__line}></span>
      </button>
      <div className={s.content}>
        <div className={s.row}>
          <h3 className={s.head}>Филтр</h3>
          <button onClick={handleResetForm} className={s.clear}>Сбросить фильтр</button>
        </div>
        <div className={s.row}>
          <FilterAmount setStart={setStart} setEnd={setEnd}/>
        </div>
        <div className={s.row}>
          <button onClick={(e) => {
            handleActiveCategory(e)
          }} className={cs(s.button)}>
            <span className={s.button_name}>{catalogData.position}</span>
            <span className={s.button_number}>{48}</span>
          </button>
          <SecondaryButton className={s.btn} text={'Без тематикик'}/>
          {types && types.map((item, index) => {
            return (
              <SecondaryButton key={index} className={s.btn} text={item.attributes.name_type} onClick={(e) => {
                const itemId = item.id;
                handleActiveCategory(e)
              }}/>
            )
          })}
        </div>
        <div className={cs(s.row, s.category)}>
          {/*{types && types.map((item, index) => {*/}
          {/*  return (*/}
          {/*    <button key={index} onClick={(e) => {*/}
          {/*      const itemId = item.id;*/}
          {/*      handleActiveCategory(e)*/}
          {/*    }} className={cs(s.button)}>*/}
          {/*      <span className={s.button_name}>{item.attributes.name_type}</span>*/}
          {/*      <span className={s.button_number}>{item.attributes.count.length}</span>*/}
          {/*    </button>*/}
          {/*  )*/}
          {/*})}*/}
        </div>
        <div className={cs(s.row, s.additionals)}>
          <button onClick={handleActiveCategory} className={cs(s.button)}>
            <span className={s.button_name}>Гастрономические станции</span>
            <span className={s.button_number}>48</span>
          </button>
        </div>
        <ConfirmFilter/>
      </div>
    </div>
  );
}


export default FilterCatalog;