// /gastro-stations

import axios from "axios";
import {URL_SERVER} from "../../utils/const";

const parseObj = (data) => {
  var array = [];
  data.map((item) => {
    const {attributes} = item;
    const id = item.id;
    const nameCard = attributes.name;
    const priceCard = attributes.price;
    const dopPositionPrice = +attributes.dopPositionPrice;
    const minPosition = attributes.minPosition;
    const nameFood = attributes.foodName;
    const descriptionList = attributes.descriptionList.map((item) => item.Text);
    const sliderMobData = attributes.slidersMob.data;
    const sliderPcData = attributes.slidersPc.data;
    const typeCard = attributes.exit_bar_types.data.map((item) => ({
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
      threeValue: attributes.threeValue
        ? [
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
          },
        ]
        : false,
    };
    array.push(object);
  });
  return array;
};

export default async function handler(req, res) {
  const result = await axios.get(`${URL_SERVER}/exit-bars`, {
    params: {
      populate: "*",
    },
  });
  try {
    const data = await result.data.data;
    const newData = parseObj(data);
    res.send(newData);
  } catch (error) {
    console.log(error)
  }
};
