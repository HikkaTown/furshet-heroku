import axios from "axios";
import { URL_SERVER } from "../../utils/const";
import createQueryForFilters from "../../utils/createQueryForFilters";

function checkType(item) {
  let result = [];

  item.map((typeItem) => {
    result.push(typeItem.id);
  });

  return result;
}

const parseObj = (data) => {
  var array = [];
  data.map((item) => {
    const { attributes } = item;
    const id = item.id;
    const nameCard = attributes.name;
    const priceCard = attributes.price;
    const descriptionList = attributes.descriptionList.map((item) => item.Text);
    const sliderMobData = attributes.slidersMob.data;
    const sliderPcData = attributes.slidersPc.data;
    const typeCard = checkType(attributes.tipy_tovarovs.data);
    const category = {
      id: attributes.kategoriya.data.id,
      categoryName: attributes.kategoriya.data.attributes.categoryName,
    };
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
      price: attributes.threeValue
        ? attributes.threeValue.first_count
        : priceCard,
      category: category,
      tematics: tematicsCard,
      type: typeCard,
      params: attributes?.params && {
        countNumber: attributes.params.CountNumber,
        countVesInGramm: attributes.params.countVesInGramm,
        peopleNumber: attributes.params.peopleNumber,
      },
      minPosition: attributes.countSetting?.minCount,
      minPrice: attributes.countSetting?.minPrice,
      descriptionList: descriptionList,
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
      slidersMob: sliderMob,
      slidersPc: sliderPc,
      nameFood: attributes?.nameFood,
      vegan: attributes.vegan,
    };
    array.push(object);
  });
  return array;
};

export default async function handler(req, res) {
  const { categoryId, typeId, thematicID, start, end, peopleNumber } =
    req.query;
  const string = await createQueryForFilters(
    categoryId,
    typeId,
    thematicID,
    start,
    end,
    peopleNumber
  );
  const result = await axios.get(`${URL_SERVER}/catalogs?${string}`);
  try {
    const data = await result.data.data;
    const newData = parseObj(data);
    res.send(newData);
  } catch (error) {
    console.log(error);
  }
}
