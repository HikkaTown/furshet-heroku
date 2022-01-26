import Head from "next/head";
import {
  dataStationsSlider,
  dataStationsText,
  bg_masterclass,
} from "../../utils/const";
import StationSliderSection from "../../component/StationSliderSection/StationSliderSection";
import SectionTwo from "../../component/SectionTwo/SectionTwo";
import SeoBlock from "../../component/SeoBlock/SeoBlock";
import FeedbackSection from "../../component/FeedbackSection/FeedbackSection";
import BarInfoSection from "../../component/BarInfoSection/BarInfoSection";
import AskingBlock from "../../component/AskingBlock/AskingBlock";
import BufetsInfoSection from "../../component/BufetsInfoSection/BufetsInfoSection";
import StudyBlock from "../../component/StudyBlock/StudyBlock";
import FirstSection from "../../component/FirstSection/FirstSection";
import Layout from "../../component/Layout/Layout";
import { getMasterClassPage } from "../../utils/api/getPages";
import CatalogSection from "../../component/CatalogSection/CatalogSection";
import axios from "axios";
import filterMasterClass from "../../utils/api/filterMasterClass";

export default function index({ index, cards, additionals, types, thematics }) {
  return (
    <>
      <Head>
        <title>{index.metaData.head}</title>
        <meta property="og:title" content={index.metaData.head} />
        <meta
          itemProp="description"
          name="description"
          content={index.metaData.title}
        />
        <meta property="og:description" content={index.metaData.title} />
      </Head>
      <Layout>
        <FirstSection data={index.textPage} startPos={2} bg={bg_masterclass} />
        <SectionTwo data={index.sectionTwo} />
        <StudyBlock data={index.studyBlock} />
        <CatalogSection
          catalogData={index.catalogBlock}
          catalogType={types}
          thematics={thematics}
          cards={cards}
          additionals={additionals}
          filterFunction={filterMasterClass}
        />
        <StationSliderSection
          secondBtn={false}
          dataImages={dataStationsSlider}
          dataText={dataStationsText}
        />
        <BufetsInfoSection href={"/"} />
        <BarInfoSection />
        <AskingBlock />
        <FeedbackSection />
        <SeoBlock data={index.seoBlock} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const indexPage = await getMasterClassPage();
  const cards = await fetch("http://localhost:3000/api/getMasterClass").then(
    (res) => {
      const data = res.json();
      return data;
    }
  );
  const types = await fetch(
    "http://localhost:3000/api/getTypeMasterClass"
  ).then((res) => {
    const data = res.json();
    return data;
  });
  const catalogThematics = await axios(
    "http://localhost:3000/api/getThematicsData"
  );
  const furniture = await axios("http://localhost:3000/api/getMebel");
  const staf = await axios("http://localhost:3000/api/getStafData");
  const disinfection = await axios(
    "http://localhost:3000/api/getDisinfectionData"
  );

  const additionalsData = [
    {
      name: "Мебель",
      data: furniture.data,
    },
    {
      name: "Персонал",
      data: staf.data,
    },
    {
      name: "Дезинфекция",
      data: disinfection.data,
    },
  ];
  return {
    props: {
      index: indexPage,
      types: types.data,
      cards: cards,
      additionals: additionalsData,
      thematics: catalogThematics.data.data,
      preview,
    },
  };
}
