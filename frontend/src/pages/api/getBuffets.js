import axios from "axios";
import { URL_SERVER } from "../../utils/const";

const parseObject = (data) => {
  var array = [];
  data.map((item) => {
    const { attributes } = item;
    const id = item.id;
    const nameCard = attributes.name;
    const paramsCard = attributes.params;
    const priceCard = attributes.price;
    const sliderMobData = attributes.slidersMob.data;
    const sliderPcData = attributes.slidersPc.data;
    const descriptionList = attributes.descriptionList.map((item) => item.Text);
    const sliderMob = Array.from(sliderMobData).map(
      (item) => item.attributes.url
    );
    const sliderPc = Array.from(sliderPcData).map(
      (item) => item.attributes.url
    );
    let object = {
      id: id,
      name: nameCard,
      params: paramsCard,
      price: priceCard,
      descriptionList: descriptionList,
      slidersMob: sliderMob,
      slidersPc: sliderPc,
    };
    array.push(object);
  });
  return JSON.stringify(array);
};

const getBuffets = async () => {
  try {
    const res = await axios.get(`${URL_SERVER}/buffets`, {
      params: {
        populate: "*",
      },
    });
    const data = res.data.data;
    const newData = parseObject(data);
    return newData;
  } catch (error) {
    return error;
  }
};

export { getBuffets };
