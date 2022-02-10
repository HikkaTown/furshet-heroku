import qs from "qs";

const createQueryForFilters = async (
  categoryId,
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
  let typeName = nameType;
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
    object.filters = {
      [`type`]: {
        id: {
          $eq: typeId,
        },
      },
    };
  }
  if (thematicID !== "null" && thematicID !== undefined && thematicID === "") {
    console.log("попал в тематику");
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
    console.log("попал в парайс");
    object.filters.price = {
      $gte: start,
      $lte: end,
    };
  }
  if (peopleNumber !== "false" && peopleNumber !== undefined) {
    console.log("попал в пипл");
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
