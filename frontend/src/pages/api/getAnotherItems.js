import axios from "axios";

import {
  URL_BAR_COUNTER,
  URL_DECOR,
  URL_DESINFECTIONS,
  URL_FAIRY_HOUS,
  URL_FOOD_TRUCK,
  URL_FURNITURES,
  URL_SERVER,
  URL_STAFS,
} from "../../utils/const";

const parseAnswer = (data) => {
  var array = [];
  data.map((item) => {
    const id = item.id;
    const { attributes } = item;
    const price = attributes.price;
    const imagePc = attributes.slidersPc.data.attributes.url;
    const imageMob = attributes.slidersMob.data.attributes.url;
    const params = attributes.params;

    let newObject = {
      id: id,
      price: price,
      imagePc: imagePc,
      imageMob: imageMob,
      params: params,
    };
    array.push(newObject);
  });
  return JSON.stringify(array);
};

export const getBarCounter = async () => {
  try {
    const res = await axios.get(`${URL_SERVER}${URL_BAR_COUNTER}`, {
      params: {
        populate: "*",
      },
    });
    const data = res.data.data;
    const newData = parseAnswer(data);
    return newData;
  } catch (error) {
    return error;
  }
};

export const getDecor = async () => {
  try {
    const res = await axios.get(`${URL_SERVER}${URL_DECOR}`, {
      params: {
        populate: "*",
      },
    });
    const data = res.data.data;
    const newData = parseAnswer(data);
    return newData;
  } catch (error) {
    return error;
  }
};

export const getDesinfection = async () => {
  try {
    const res = await axios.get(`${URL_SERVER}${URL_DESINFECTIONS}`, {
      params: {
        populate: "*",
      },
    });
    const data = res.data.data;
    const newData = parseAnswer(data);
    return newData;
  } catch (error) {
    return error;
  }
};

export const getFairyHous = async () => {
  try {
    const res = await axios.get(`${URL_SERVER}${URL_FAIRY_HOUS}`, {
      params: {
        populate: "*",
      },
    });
    const data = res.data.data;
    const newData = parseAnswer(data);
    return newData;
  } catch (error) {
    return error;
  }
};

export const getFoodTruck = async () => {
  try {
    const res = await axios.get(`${URL_SERVER}${URL_FOOD_TRUCK}`, {
      params: {
        populate: "*",
      },
    });
    const data = res.data.data;
    const newData = parseAnswer(data);
    return newData;
  } catch (error) {
    return error;
  }
};

export const getFurnitures = async () => {
  try {
    const res = await axios.get(`${URL_SERVER}${URL_FURNITURES}`, {
      params: {
        populate: "*",
      },
    });
    const data = res.data.data;
    const newData = parseAnswer(data);
    return newData;
  } catch (error) {
    return error;
  }
};

export const getStaff = async () => {
  try {
    const res = await axios.get(`${URL_SERVER}${URL_STAFS}`, {
      params: {
        populate: "*",
      },
    });
    const data = res.data.data;
    const newData = parseAnswer(data);
    return newData;
  } catch (error) {
    return error;
  }
};

// TODO: Объеденить все допы в одну позицию ?
