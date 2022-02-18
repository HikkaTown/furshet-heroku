import qs from "qs";

const pareseAdditionals = (list) => {
  let resultArray = [];
  list.map((item) => {
    // const { id } = item;
    // const { name, price, params, kategoriya_dopov, kategoriyas } =
    //   item.attributes;

    let kategoriya = [];
    item.attributes.kategoriyas.data.map((kat) => {
      kategoriya.push(kat.id);
    });
    let obj = {
      id: item.id,
      name: item.attributes.name,
      price: item.attributes.price,
      params: item.attributes?.params,
      category: {
        id: item.attributes.kategoriya_dopov.data.id,
        categoryName:
          item.attributes.kategoriya_dopov.data.attributes.name_category,
      },
      pages: kategoriya,
      slidersPc: item.attributes.slidersPc.data.attributes.url,
      slidersMob: item.attributes.slidersMob.data.attributes.url,
    };

    resultArray.push(obj);
  });
  return resultArray;
};

export default async function handler(req, res) {
  const { list } = req.query;
  const string = qs.stringify(
    {
      filters: {
        id: {
          $in: JSON.parse(list),
        },
      },
    },
    { encodeValuesOnly: true }
  );

  const querys = await fetch(
    `http://localhost:1337/api/dopolnitelnye-tovaries?${string}&populate=*`
  );
  try {
    const result = await querys.json();
    const data = await pareseAdditionals(result.data);
    res.send(data);
  } catch {
    res.status(400).send({ message: "Произошла ошибка" });
  }
}
