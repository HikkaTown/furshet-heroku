import axios from "axios";

import Checkbox from "../../component/uikit/Checkbox/Checkbox";
import DropdownPerson from "../../component/uikit/DropdownPerson/DropdownPerson";
import FurshetCard from "../../component/uikit/FurshetCard/FurshetCard";
import GiftItem from "../../component/uikit/GitfItem/GiftItem";
import ItemCard from "../../component/uikit/ItemCard/ItemCard";
import NavigationButton from "../../component/uikit/NavigationButton/NavigationButton";
import { useEffect } from "react";
import {
  bg_bar,
  bg_home,
  URL_SERVER,
  dataStationsSlider,
  dataStationsText,
  bg_stations,
} from "../../utils/const";

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
import { getStationsPage } from "../../utils/api/getPages";
import Head from "next/head";
import CatalogSection from "../../component/CatalogSection/CatalogSection";
import filterStations from "../../utils/api/filterStations";

export default function Stations({
  cards,
  typeCatalog,
  thematics,
  additionalsData,
  index,
  preview,
  error,
}) {
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
        <FirstSection data={index.textPage} startPos={1} bg={bg_stations} />
        <SectionTwo data={index.sectionTwo} />
        <StudyBlock data={index.studyBlock} />
        {/* katalog */}
        <CatalogSection
          catalogData={index.catalogBlock}
          additionals={additionalsData}
          thematics={thematics}
          cards={cards}
          catalogType={typeCatalog}
          filterFunction={filterStations}
        />
        <BufetsInfoSection href={"/"} />
        <MasterClassInfo />
        <BarInfoSection />
        <AskingBlock />
        <FeedbackSection />
        <SeoBlock data={index.seoBlock} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allGastroStation = await fetch(
    "http://localhost:3000/api/getStations"
  ).then((res) => {
    const data = res.json();
    return data;
  });
  const stationPage = await getStationsPage();
  const stationType = await fetch(
    "http://localhost:3000/api/getTypeStations/?populate=*"
  ).then((res) => {
    const data = res.json();
    return data;
  });
  const catalogThematics = await axios(
    "http://localhost:3000/api/getThematicsData"
  );
  const furniture = await axios("http://localhost:3000/api/getMebel");
  const decor = await axios("http://localhost:3000/api/getDecorData");
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
      name: "Декор",
      data: decor.data,
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
      index: stationPage,
      typeCatalog: stationType.data,
      thematics: catalogThematics.data.data,
      additionalsData: additionalsData,
      cards: allGastroStation,
    },
  };
}
