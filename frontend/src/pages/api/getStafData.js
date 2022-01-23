const parse = (data) => {
  let arr = [];
  data.map((item) => {
    const { attributes, id } = item;
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
  const response = await fetch(`http://localhost:1337/api/stafs/?populate=*`);
  try {
    const data = await response.json();
    const newData = await parse(data.data);
    res.send(newData);
  } catch (error) {
    console.log(error);
  }
}
