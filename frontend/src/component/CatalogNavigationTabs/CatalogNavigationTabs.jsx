import React from "react";
import CatalogTabButton from "../uikit/CatalogTabButton/CatalogTabButton";
import { useRouter } from "next/router";
import TextBtnForFilter from "../uikit/TextBtnForFilter/TextBtnForFilter";
import translit from "../../utils/translit";
import { useEffect } from "react";
import { useState } from "react";
import s from "./CatalogNavigationTabs.module.scss";
import { motion } from "framer-motion";

export default function CatalogNavigationTabs({
  types,
  setTypeId,
  setThematicId,
  setIsDop,
  setStartValue,
  setEndValue,
  typeId,
  positionName,
}) {
  const router = useRouter();
  const [allCount, setAllCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const varitantA = {
    hidden: {
      height: 0,
      marginTop: 0,
    },
    visible: {
      height: "auto",
      marginTop: "16px",
    },
  };

  useEffect(() => {
    types.map((item) => {
      setAllCount((prevcount) => prevcount + +item.count);
    });
  }, []);
  useEffect(() => {
    if (typeof typeId === "string") {
      setIsActive(false);
    }
    if (typeId === null) {
      setIsActive(true);
    }
  }, [typeId]);
  return (
    <>
      <TextBtnForFilter
        isActiveProp={isActive}
        onClick={() => {
          setIsActive((prevstate) => true);
          router.push(`#catalog`);
          setThematicId(null);
          setIsDop(false);
          setStartValue(null);
          setEndValue(null);
          setTypeId(null);
        }}
        name={positionName}
        count={allCount}
      />

      <motion.div
        variants={varitantA}
        initial="hidden"
        animate={isActive === true ? "visible" : "hidden"}
        transition={{ duration: 0.3, type: "tween" }}
        className={s.block}
      >
        <CatalogTabButton
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
        {!!types &&
          types.map((item) => {
            const { id, name } = item;
            return (
              <CatalogTabButton
                key={id}
                className={s.btn_tab}
                classNameActive={s.btn_tab_active}
                text={name}
                id={id}
                typeId={typeId}
                onClick={(e) => {
                  setTypeId(id);
                  router.push(`#${translit(name)}`);
                  setThematicId(null);
                  setIsDop(false);
                  setStartValue(null);
                  setEndValue(null);
                }}
              />
            );
          })}
      </motion.div>
    </>
  );
}
