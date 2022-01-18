import axios from "axios";
import {URL_SERVER} from "../const";
import {getQuery} from "../query";

const parsePage = (data) => {
  const attributes = data.attributes;
  const sectionTwoData = attributes.sectionTwo;
  const seoBlockData = attributes.seoBlock;
  const sectionTwoImagePc = attributes.sectionTwo.imagePc.data.attributes.url;
  const sectionTwoImageMobile =
    attributes.sectionTwo.imageMobile.data.attributes.url;
  let metaData = {
    head: "",
    title: "",
  };
  metaData.head = attributes.metaHead;
  metaData.title = attributes.metaTitle;

  let catalogBlock = {
    name: '',
    position: '',
  }

  catalogBlock.name = attributes.catalogName;
  catalogBlock.position = attributes.catalogMenu;

  let textPage = {
    head: "",
    title: "",
  };
  textPage.head = attributes.h1;
  textPage.title = attributes.titleP;

  let sectionTwo = {
    header: "",
    oneImageText: "",
    twoImageText: "",
    threeImageText: "",
    fourImageText: "",
    oneIconText: "",
    twoIconText: "",
    threeIconText: "",
    fourIconText: "",
    image: {}, // desctop mobile
  };
  sectionTwo.header = sectionTwoData.header;
  sectionTwo.oneImageText = sectionTwoData.firstImageText;
  sectionTwo.twoImageText = sectionTwoData.secondImageText;
  sectionTwo.threeImageText = sectionTwoData.threeImageText;
  sectionTwo.fourImageText = sectionTwoData.fourImageText;
  sectionTwo.oneIconText = sectionTwoData.firstIcon;
  sectionTwo.twoIconText = sectionTwoData.secondIcon;
  sectionTwo.threeIconText = sectionTwoData.threeIcon;
  sectionTwo.fourIconText = sectionTwoData.fourIcon;
  sectionTwo.image = {
    pc: sectionTwoImagePc,
    mob: sectionTwoImageMobile,
  };
  let seoBlock = {
    header: "",
    firstText: "",
    secondText: "",
    firstImageAlt: "",
    secondImageAlt: "",
    firstImages: "", //obj pc tabl mob
    secondImages: "",
  };
  seoBlock.header = seoBlockData.head;
  seoBlock.firstText = seoBlockData.description_first;
  seoBlock.secondText = seoBlockData.description_second;
  seoBlock.firstImageAlt = seoBlockData.firstImageAlt;
  seoBlock.secondImageAlt = seoBlockData.secondImageAlt;
  seoBlock.firstImages = {
    pc: seoBlockData.firstImagePc.data.attributes.url,
    tablet: seoBlockData.firstImageTablet.data.attributes.url,
    mobile: seoBlockData.firstImageMobile.data.attributes.url,
  };
  seoBlock.secondImages = {
    pc: seoBlockData.secondImagePc.data.attributes.url,
    tablet: seoBlockData.secondImageTablet.data.attributes.url,
    mobile: seoBlockData.secondImageMobile.data.attributes.url,
  };

  let totalData = {
    metaData,
    catalogBlock,
    textPage,
    sectionTwo,
    seoBlock,
  };

  return totalData;
};

const parsePageStudy = (data) => {
  const attributes = data.attributes;
  const sectionTwoData = attributes.sectionTwo;
  const seoBlockData = attributes.seoBlock;
  const sectionTwoImagePc = attributes.sectionTwo.imagePc.data.attributes.url;
  const studyBlockData = attributes.studyBlock;
  const sectionTwoImageMobile =
    attributes.sectionTwo.imageMobile.data.attributes.url;
  const firstImage = studyBlockData.firstImage.data.attributes.url;
  const secondImage = studyBlockData.secondImage.data.attributes.url;
  const threeImage = studyBlockData.threeImage.data.attributes.url;
  const fourImage = studyBlockData.fourImage.data.attributes.url;

  let metaData = {
    head: "",
    title: "",
  };
  metaData.head = attributes.metaHead;
  metaData.title = attributes.metaTitle;

  let textPage = {
    head: "",
    title: "",
  };
  textPage.head = attributes.h1;
  textPage.title = attributes.titleP;

  let catalogBlock = {
    name: '',
    position: '',
  }

  catalogBlock.name = attributes.catalogName;
  catalogBlock.position = attributes.catalogMenu;

  const studyBlock = {
    header: "",
    selectInHeader: "",
    title: "",
    firstImageText: "",
    secondImageText: "",
    threeImageText: "",
    fourImageText: "",
    promotion: "",
    firstImage: "",
    secondImage: "",
    threeImage: "",
    fourImage: "",
  };

  studyBlock.header = studyBlockData.header;
  studyBlock.title = studyBlockData.title;
  studyBlock.selectInHeader = studyBlockData.selectInHeader;
  studyBlock.firstImageText = studyBlockData.firsImageText;
  studyBlock.secondImageText = studyBlockData.secondImageText;
  studyBlock.threeImageText = studyBlockData.threeImageText;
  studyBlock.fourImageText = studyBlockData.fourImageText;
  studyBlock.promotion = studyBlockData.promotion;
  studyBlock.firstImage = firstImage;
  studyBlock.secondImage = secondImage;
  studyBlock.threeImage = threeImage;
  studyBlock.fourImage = fourImage;

  let sectionTwo = {
    header: "",
    oneImageText: "",
    twoImageText: "",
    threeImageText: "",
    fourImageText: "",
    oneIconText: "",
    twoIconText: "",
    threeIconText: "",
    fourIconText: "",
    image: {}, // desktop mobile
  };
  sectionTwo.header = sectionTwoData.header;
  sectionTwo.oneImageText = sectionTwoData.firstImageText;
  sectionTwo.twoImageText = sectionTwoData.secondImageText;
  sectionTwo.threeImageText = sectionTwoData.threeImageText;
  sectionTwo.fourImageText = sectionTwoData.fourImageText;
  sectionTwo.oneIconText = sectionTwoData.firstIcon;
  sectionTwo.twoIconText = sectionTwoData.secondIcon;
  sectionTwo.threeIconText = sectionTwoData.threeIcon;
  sectionTwo.fourIconText = sectionTwoData.fourIcon;
  sectionTwo.image = {
    pc: sectionTwoImagePc,
    mob: sectionTwoImageMobile,
  };
  let seoBlock = {
    header: "",
    firstText: "",
    secondText: "",
    firstImageAlt: "",
    secondImageAlt: "",
    firstImages: "", //obj pc tabl mob
    secondImages: "",
  };
  seoBlock.header = seoBlockData.head;
  seoBlock.firstText = seoBlockData.description_first;
  seoBlock.secondText = seoBlockData.description_second;
  seoBlock.firstImageAlt = seoBlockData.firstImageAlt;
  seoBlock.secondImageAlt = seoBlockData.secondImageAlt;
  seoBlock.firstImages = {
    pc: seoBlockData.firstImagePc.data.attributes.url,
    tablet: seoBlockData.firstImageTablet.data.attributes.url,
    mobile: seoBlockData.firstImageMobile.data.attributes.url,
  };
  seoBlock.secondImages = {
    pc: seoBlockData.secondImagePc.data.attributes.url,
    tablet: seoBlockData.secondImageTablet.data.attributes.url,
    mobile: seoBlockData.secondImageMobile.data.attributes.url,
  };

  let totalData = {
    metaData,
    textPage,
    catalogBlock,
    sectionTwo,
    seoBlock,
    studyBlock,
  };
  return totalData;
};

export const getIndexPage = async () => {
  const path = {
    seoBlock: null,
    sectionTwo: null,
  };
  try {
    const res = await axios.get(`${URL_SERVER}/index/?${getQuery(path)}`);
    const data = res.data.data;
    const newData = parsePage(data);
    return newData;
  } catch (error) {
    return error;
  }
};

export const getStationsPage = async () => {
  const path = {
    seoBlock: null,
    sectionTwo: null,
    studyBlock: null,
  };
  try {
    const res = await axios.get(`${URL_SERVER}/station/?${getQuery(path)}`);
    const data = res.data.data;
    const newData = parsePageStudy(data);
    return newData;
  } catch (error) {
    return error;
  }
};

export const getMasterClassPage = async () => {
  const path = {
    seoBlock: null,
    sectionTwo: null,
    studyBlock: null,
  };
  try {
    const res = await axios.get(`${URL_SERVER}/masterclass/?${getQuery(path)}`);
    const data = res.data.data;
    const newData = parsePageStudy(data);
    return newData;
  } catch (error) {
    return error;
  }
};
