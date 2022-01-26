import Head from "next/head";
import {
  bg_bar,
  bg_home,
  URL_SERVER,
  dataStationsSlider,
  dataStationsText,
  bg_stations,
} from "../../utils/const";

import StationSliderSection from "../../component/StationSliderSection/StationSliderSection";
import SectionTwo from "../../component/SectionTwo/SectionTwo";
import SeoBlock from "../../component/SeoBlock/SeoBlock";
import FeedbackSection from "../../component/FeedbackSection/FeedbackSection";
import MasterClassInfo from "../../component/MasterClassInfo/MasterClassInfo";
import BarInfoSection from "../../component/BarInfoSection/BarInfoSection";
import Question from "../../component/uikit/Question/Question";
import AskingBlock from "../../component/AskingBlock/AskingBlock";
import BufetsInfoSection from "../../component/BufetsInfoSection/BufetsInfoSection";
import StudyBlock from "../../component/StudyBlock/StudyBlock";
import FirstSection from "../../component/FirstSection/FirstSection";
import CompleteFushetSection from "../../component/CompleteFushetSection/CompleteFushetSection";
import Layout from "../../component/Layout/Layout";
import filterMasterClass from "../../utils/api/filterMasterClass";
import CatalogSection from "../../component/CatalogSection/CatalogSection";
import axios from "axios";
import filterBarCards from "../../utils/api/filterBarCards";

export default function index({ index, cards, types, thematics, additionals }) {
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
        <FirstSection data={index.textPage} startPos={0} bg={bg_bar} />
        <SectionTwo data={index.sectionTwo} />
        <StudyBlock data={index.studyBlock} />
        <CatalogSection
          catalogData={index.catalogBlock}
          catalogType={types}
          thematics={thematics}
          cards={cards}
          additionals={additionals}
          filterFunction={filterBarCards}
        />
        <StationSliderSection
          secondBtn={false}
          dataImages={dataStationsSlider}
          dataText={dataStationsText}
        />
        {/* <CompleteFushetSection /> */}
        <MasterClassInfo />
        <BufetsInfoSection href={"/"} />
        <AskingBlock />
        <FeedbackSection />
        <SeoBlock data={index.seoBlock} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const index = await fetch("http://localhost:3000/api/getBarPage").then(
    (res) => {
      const data = res.json();
      return data;
    }
  );
  const cards = await fetch("http://localhost:3000/api/getBarCards").then(
    (res) => {
      const data = res.json();
      return data;
    }
  );
  const types = await fetch("http://localhost:3000/api/getBarTypes").then(
    (res) => {
      const data = res.json();
      return data;
    }
  );
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
      thematics: catalogThematics.data.data,
      types: types.data,
      cards: cards,
      index: index,
      additionals: additionalsData,
    },
  };
}
