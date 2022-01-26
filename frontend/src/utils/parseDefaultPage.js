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

export default parsePage;