import qs from "qs";

const pareseAdditionals = (list) => {
  let resultArray = [];
  list.map((item) => {
    // let kategoriya = [];
    // item.attributes.kategoriyas.data.map((kat) => {
    //   kategoriya.push(kat.id);
    // });
    let obj = {
      id: item.id,
      name: item.attributes.name,
      price: item.attributes.price,
      params: item.attributes?.params,
      // category: {
      //   id: item.attributes.kategoriya_dopov.data.id,
      //   categoryName:
      //     item.attributes.kategoriya_dopov.data.attributes.name_category,
      // },
      // pages: kategoriya,
      slidersPc: item.attributes.slidersPc.data.attributes.url,
      slidersMob: item.attributes.slidersMob.data.attributes.url,
      slidersModal: item.attributes.slidersModal.data.attributes.url,
    };

    resultArray.push(obj);
  });
  return resultArray;
};

export default async function handler(req, res) {
  const string = qs.stringify(
    {
      populate: {
        attributes: {
          populate: "*",
        },
        kategoriyas: {
          populate: "*",
        },
        // name: {
        //   populate: "*",
        // },
        // price: {
        //   populate: "*",
        // },
        // params: {
        //   populate: "*",
        // },
        // slidersPc: {
        //   populate: "*",
        // },
        // slidersMob: {
        //   populate: "*",
        // },
        // slidersModal: {
        //   populate: "*",
        // },
      },
    },
    { encodeValuesOnly: true }
  );
  console.log(string);

  const querys = await fetch(
    `http://localhost:1337/api/dopolnitelnye-tovaries?${string}`
  );
  try {
    const result = await querys.json();
    const data = await pareseAdditionals(result.data);
    res.send(data);
  } catch {
    res.status(400).send({ message: "Произошла ошибка" });
  }
}
