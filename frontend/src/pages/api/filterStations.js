import qs from "qs";
import createQueryForFilters from "../../utils/createQueryForFilters";

const parseObject = (data) => {
  var array = [];
  data.map((item) => {
    const { attributes } = item;
    const id = item.id;
    const nameCard = attributes.name;
    const priceCard = attributes.price;
    const dopPositionPrice = +attributes.dopPositionPrice;
    const minPosition = attributes.minPosition;
    const nameFood = attributes.nameFood;
    const descriptionList = attributes.descriptionList.map((item) => item.Text);
    const sliderMobData = attributes.slidersMob.data;
    const sliderPcData = attributes.slidersPc.data;
    const typeCard = attributes.gastro_station_types.data.map((item) => ({
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
      dopPositionPrice: dopPositionPrice,
      price: priceCard,
      descriptionList: descriptionList,
      slidersMob: sliderMob,
      slidersPc: sliderPc,
      minPosition: minPosition,
      nameFood: nameFood,
      tematics: tematicsCard,
      type: typeCard,
    };
    array.push(object);
  });
  return array;
};

export default async function handler(req, res) {
  const { typeId, thematicID, start, end } = req.query;
  const string = await createQueryForFilters(
    "gastro_station_types",
    typeId,
    thematicID,
    start,
    end
  );
  console.log(string);
  const response = await fetch(
    `http://localhost:1337/api/gastro-stations?${string}`
  );
  try {
    const data = await response.json();
    const newData = await parseObject(data.data);
    res.send(newData);
  } catch (error) {
    console.log(error);
  }
}
