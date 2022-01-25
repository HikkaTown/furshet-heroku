import qs from "qs";

const createQueryForFilters = async (
  nameType,
  typeId,
  thematicID,
  start,
  end,
  peopleNumber
) => {
  let first = thematicID !== "null";
  let second = thematicID !== "undefined";
  let object = new Object();
  object.filters = new Object();
  object.populate = "*";
  if (typeId) {
    object.filters = {
      nameType: {
        id: {
          $eq: typeId,
        },
      },
    };
  }
  if (thematicID !== "null" && thematicID !== "undefined") {
    object.filters.tematics = {
      id: {
        $eq: thematicID,
      },
    };
  }
  if (start !== "null" && end !== "null") {
    object.filters.price = {
      $gte: start,
      $lte: end,
    };
  }
  if (peopleNumber !== "false") {
    object.filters.paramsBlock = {
      peopleNumber: {
        $lte: peopleNumber,
      },
    };
  }
  return qs.stringify(object, {
    encodeValuesOnly: true,
  });
};

export default createQueryForFilters;
