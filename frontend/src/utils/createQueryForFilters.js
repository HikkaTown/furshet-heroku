import qs from "qs";

const createQueryForFilters = async (
  categoryId,
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
  if (categoryId) {
    object.filters.kategoriya = {
      id: {
        $eq: categoryId,
      },
    };
  }
  if (typeId !== "null") {
    object.filters.tipy_tovarovs = {
      id: {
        $eq: typeId,
      },
    };
  }
  if (thematicID !== "null" && thematicID !== undefined && thematicID !== "") {
    object.filters.tematics = {
      id: {
        $eq: thematicID,
      },
    };
  }
  if (start !== "null" && start !== undefined) {
    object.filters.price = { ["$gte"]: start };
  }
  if (end !== "null" && end !== undefined) {
    object.filters.price = { ...object.filters.price, ["$lte"]: end };
  }
  if (
    peopleNumber !== "false" &&
    peopleNumber !== undefined &&
    peopleNumber !== "null"
  ) {
    object.filters.params = {
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
