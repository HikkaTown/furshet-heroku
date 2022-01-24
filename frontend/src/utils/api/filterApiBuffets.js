import axios from "axios";

const filterApiBuffets = async (typeId, thematicID, start, end, visibility, peopleNumber) => {
  const res = await axios(
    `http://localhost:3000/api/filterBuffets?typeId=${typeId}&thematicID=${thematicID}&start=${start}&end=${end}&peopleNumber=${
      !!visibility ? peopleNumber : visibility
    }`);
  return res.data
}

export default filterApiBuffets;