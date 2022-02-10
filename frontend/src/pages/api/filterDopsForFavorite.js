import qs from "qs";

const parse = (data, categoryName) => {
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
  const responseDecor = await fetch("http://localhost:3000/api/getDecorData");
  const responseDisinfection = await fetch(
    "http://localhost:3000/api/getDisinfectionData"
  );
  const responseMebel = await fetch("http://localhost:3000/api/getMebel");
  const responseStaf = await fetch("http://localhost:3000/api/getStafData");
  const responseDecor = await fetch("http://localhost:3000/api/getDecorData");
  let dataDecor = await responseDecor.json();
  let dataDecor = await responseDecor.json();
  let dataDecor = await responseDecor.json();
  let dataDecor = await responseDecor.json();
  let dataDecor = await responseDecor.json();
  console.log(data);
}
