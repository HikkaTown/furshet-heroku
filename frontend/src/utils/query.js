import qs from "qs";

function queryParse(obj) {
  const result = {};
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    if (obj[key]) {
      result.populate = { [key]: queryParse(obj[key]) };
    } else {
      const { populate } = result;
      if (populate) {
        populate[key] = {
          populate: "*",
        };
      } else {
        result.populate = {
          [key]: {
            populate: "*",
          },
        };
      }
    }
  });

  return result;
}

export function getQuery(includes) {
  const parseIncludes = queryParse(includes);

  return qs.stringify(parseIncludes, {
    encodeValuesOnly: true,
  });
}
