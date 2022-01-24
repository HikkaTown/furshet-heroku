import axios from "axios";

const checkTypeId = async (typeId, start, end) => {
  let res;
  if (typeId === "Мебель" || typeId === "mebel") {
    const data = await axios(`http://localhost:3000/api/getMebel?start=${start}&end=${end}`);
    const result = await data.data;
    res = result;
  } else if (typeId === "Персонал" || typeId === "personal") {
    const data = await axios(`http://localhost:3000/api/getStafData?start=${start}&end=${end}`)
    const result = await data.data;
    res = result;
  } else if (typeId === "Декор" || typeId === "decor") {
    const data = await axios(`http://localhost:3000/api/getDecorData?start=${start}&end=${end}`)
    const result = await data.data;
    res = result;
  } else if (typeId === "Дезинфекция" || typeId === 'dezinfekciya') {
    const data = await axios(`http://localhost:3000/api/getDisinfectionData?start=${start}&end=${end}`);
    const result = await data.data;
    res = result;
  }
  return res;
};

export default checkTypeId;
