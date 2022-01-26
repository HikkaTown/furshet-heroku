import axios from "axios";
import {URL_SERVER} from "../../utils/const";
import {getQuery} from "../../utils/query";
import parsePageStudy from "../../utils/parseStudy";


export default async function handler(req, res) {
  const path = {
    seoBlock: null,
    sectionTwo: null,
    studyBlock: null,
  };
  const result = await axios.get(`${URL_SERVER}/bar/?${getQuery(path)}`);
  try {
    const data = result.data.data;
    const newData = parsePageStudy(data);
    res.send(newData)
  } catch (error) {
    console.log(error);
  }
}