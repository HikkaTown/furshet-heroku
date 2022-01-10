// /api/master-classes

import axios from "axios";
import { URL_SERVER } from "../../utils/const";

const parseObj = (data) => {
  var array = [];
  data.map((item) => {
    const { attributes } = item;
    const id = item.id;
    const nameCard = attributes.name;
    const priceCard = attributes.price;
    const nextPersonPrice = attributes.nextPersonPrice;
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
  return JSON.stringify(array);
};

const getMasterClass = async () => {
  try {
    const res = await axios.get(`${URL_SERVER}/master-classes`, {
      params: {
        populate: "*",
      },
    });
    const data = res.data.data;
    const newData = parseObj(data);
    // return JSON.stringify(data);
    return newData;
  } catch (error) {
    return error;
  }
};

export { getMasterClass };
