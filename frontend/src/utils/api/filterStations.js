import axios from "axios";

const filterStations = async (typeId, thematicID, start, end, visibility) => {
  console.log(typeId, thematicID, start, end, visibility);
  const res = await axios(
    `http://localhost:3000/api/filterStations?typeId=${typeId}&thematicID=${thematicID}&start=${start}&end=${end}&peopleNumber=${
      !!visibility ? peopleNumber : visibility
    }`
  );
  return res.data;
};

export default filterStations;
