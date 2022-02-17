import React from "react";
import { useRouter } from "next/router";
import translit from "../../utils/translit";
import TextBtnForFilter from "../uikit/TextBtnForFilter/TextBtnForFilter";

export default function CatalogNavigationText({
  types,
  setTypeId,
  setThematicId,
  setIsDop,
  setStartValue,
  setEndValue,
  typeId,
  isAdditionals,
  handlerAdditionals,
}) {
  const router = useRouter();
  return (
    <>
      {!!types &&
        types.map((item) => {
          const { id, name, count } = item;
          return (
            <TextBtnForFilter
              key={isAdditionals ? id + "ds" : id}
              onClick={() => {
                if (isAdditionals) {
                  router.push(`#${translit(name)}`);
                  handlerAdditionals(name);
                  setTypeId(name);
                } else {
                  setTypeId(id);
                  router.push(`#${translit(name)}`);
                  setThematicId(null);
                  setIsDop(false);
                  setStartValue(null);
                  setEndValue(null);
                }
              }}
              typeId={typeId}
              id={isAdditionals ? id + "ds" : id}
              name={name}
              count={count}
            />
          );
        })}
    </>
  );
}
