export const checkTypeId = (router, setTypeId, catalogType, catalogData) => {
  if (router.asPath.indexOf("#") < 1) {
    setTypeId(catalogType[0].id);
  }
  if (catalogData.position !== "Фуршетные наборы") {
    setTypeId(null);
  }
};
