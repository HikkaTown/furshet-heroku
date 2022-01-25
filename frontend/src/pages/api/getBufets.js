const parseObject = (data) => {
  var array = [];
  data.map((item) => {
    const {attributes} = item;
    const id = item.id;
    const nameCard = attributes.name;
    const paramsCard = attributes.paramsBlock[0];
    const priceCard = attributes.price;
    const sliderMobData = attributes.slidersMob.data;
    const sliderPcData = attributes.slidersPc.data;
    const descriptionList = attributes.descriptionList.map((item) => item.Text);
    const threeValueData = attributes.threeValue ? attributes.threeValue : false;

    const vegan = attributes.vegan;

    const sliderMob = Array.from(sliderMobData).map(
      (item) => item.attributes.url
    );


    const sliderPc = Array.from(sliderPcData).map(
      (item) => item.attributes.url
    );
    const typeCard = attributes.buffets_types.data.map((item) => ({
      id: item.id,
      text: item.attributes.nameType,
    }));
    const tematicsCard = attributes.tematics.data.map((item) => ({
      id: item.id,
      text: item.attributes.Name_Category,
    }));
    let object = {
      id: id,
      name: nameCard,
      params: paramsCard,
      price: priceCard,
      descriptionList: descriptionList,
      slidersMob: sliderMob,
      slidersPc: sliderPc,
      tematic: tematicsCard,
      type: typeCard,
      vegan: vegan,
      threeValue: attributes.threeValue ? [
        {
          count: attributes.threeValue.firstPeople,
          amount: attributes.threeValue.first_count,
        },
        {
          count: attributes.threeValue.secondPeople,
          amount: attributes.threeValue.second_count,
        },
        {
          count: attributes.threeValue.threePeople,
          amount: attributes.threeValue.three_count,
        }
      ] : false,
    };
    array.push(object);
  });
  return array;
};

export default async function handler(req, res) {
  const response = await fetch(`http://localhost:1337/api/buffets?populate=*`);
  try {
    const data = await response.json();
    const newData = parseObject(data.data)
    res.send(newData);
  } catch (error) {
    console.log(error)
  }
}

