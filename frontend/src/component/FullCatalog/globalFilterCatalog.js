export const globalFilterCatalog = async (
  thematicId,
  typeId,
  setTypeId,
  catalogData,
  catalogType,
  peopleNumber,
  setPeopleNumber,
  startValue,
  endValue,
  categoryId,
  setRequestCards,
  setStandartCard
) => {
  let data = [];
  if (thematicId === null && typeId === null && typeof typeId !== "string") {
    if (catalogData.position === "Фуршетные наборы") {
      setTypeId(catalogType[0].id);
    }
  }
  if (
    catalogData.position === "Фуршетные наборы" &&
    catalogType[0].id !== typeId
  ) {
    setPeopleNumber(null);
  }

  if (typeof typeId !== "string") {
    if (
      typeof typeId === "number" ||
      typeId === null ||
      thematicId ||
      startValue ||
      endValue ||
      peopleNumber
    ) {
      const res = await fetch(
        `http://localhost:3000/api/getAllProductsToCatalog?categoryId=${categoryId}&typeId=${typeId}&thematicID=${thematicId}&start=${startValue}&end=${endValue}&peopleNumber=${peopleNumber}`
      );
      try {
        const result = await res.json();
        if (thematicId) {
          setTypeId(null);
        }
        data.push(result);
        setRequestCards(data[0]);
        setStandartCard(data[0]);
      } catch {
        console.log("error");
      }
    }
  }
};
