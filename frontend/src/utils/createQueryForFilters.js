import qs from "qs";

const createQueryForFilters = async (
  categoryId,
  // nameType,
  typeId,
  thematicID,
  start,
  end,
  peopleNumber
) => {
  let first = thematicID !== "null";
  let second = thematicID !== "undefined";
  let object = new Object();
  // let typeName = nameType;
  object.filters = new Object();
  object.populate = "*";
  if (categoryId) {
    object.filters.kategoriya = {
      id: {
        $eq: categoryId,
      },
    };
  }
  if (typeId) {
    object.filters.tipy_tovarovs = {
      id: {
        $eq: typeId,
      },
    };
  }
  if (thematicID !== null && thematicID !== undefined && thematicID === "") {
    object.filters.tematics = {
      id: {
        $eq: thematicID,
      },
    };
  }
  if (
    start !== "null" &&
    start !== undefined &&
    end !== undefined &&
    end !== "null"
  ) {
    object.filters.price = {
      $gte: start,
      $lte: end,
    };
  }
  if (peopleNumber !== "false" && peopleNumber !== undefined) {
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
