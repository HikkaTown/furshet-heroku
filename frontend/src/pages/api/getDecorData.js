import qs from "qs";

const parse = (data) => {
  let arr = [];
  data.map((item) => {
    const {attributes, id} = item;
    let res = {
      id: id,
      name: attributes.name,
      price: attributes.price,
      slidersPc: attributes.slidersPc.data.attributes.url,
      slidersMob: attributes.slidersPc.data.attributes.url,
      params: attributes.params,
    };
    arr.push(res);
  });
  return arr;
};

export default async function handler(req, res) {
  const {start, end} = req.query;
  console.log(typeof start, typeof end)
  let queryString;
  if (start !== 'null' && end !== 'null') {
    queryString = qs.stringify({
      filters: {
        price: {
          $gte: start,
          $lte: end,
        }
      },
      populate: '*'
    }, {
      encodeValuesOnly: true,
    });
  } else {
    queryString = 'populate=*'
  }
  const response = await fetch(`http://localhost:1337/api/decors/?${queryString}`);
  try {
    const data = await response.json();
    const newData = parse(data.data);
    res.send(newData);
  } catch (error) {
    console.log(error);
  }
}
