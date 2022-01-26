const parseObj = (data) => {
  var array = [];
  data.map((item) => {
    const {attributes} = item;
    const id = item.id;
    const nameCard = attributes.name;
    const priceCard = attributes.price;
    const nextPersonPrice = +attributes.NextPersonPrice;
    const minPerson = attributes.minPerson;
    const descriptionList = attributes.descriptionList.map((item) => item.Text);
    const sliderMobData = attributes.slidersMob.data;
    const sliderPcData = attributes.slidersPc.data;
    const typeCard = attributes.master_class_types.data.map((item) => ({
      id: item.id,
      text: item.attributes.nameType,
    }));
    const tematicsCard = attributes.tematics.data.map((item) => ({
      id: item.id,
      text: item.attributes.Name_Category,
    }));
    const sliderMob = Array.from(sliderMobData).map(
      (item) => item.attributes.url
    );
    const sliderPc = Array.from(sliderPcData).map(
      (item) => item.attributes.url
    );
    let object = {
      id: id,
      name: nameCard,
      nextPersonPrice: nextPersonPrice,
      price: priceCard,
      descriptionList: descriptionList,
      slidersMob: sliderMob,
      slidersPc: sliderPc,
      minPerson: minPerson,
      tematics: tematicsCard,
      type: typeCard,
    };
    array.push(object);
  });
  return array;
};


export default async function handler(req, res) {
  const response = await fetch(`http://localhost:1337/api/master-classes?populate=*`);
  try {
    const {data} = await response.json();
    const newData = parseObj(data);
    res.send(newData);
  } catch (error) {
    console.log(error)
  }
}