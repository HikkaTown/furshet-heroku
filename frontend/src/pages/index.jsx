import Head from "next/head";
import axios from "axios";
import { bg_home, dataFurshetText, dataFurshetSlider } from "../utils/const";
import { getBuffets } from "../pages/api/getBuffets";
import MasterClassCard from "../component/uikit/MasterClassCard/MasterClassCard";
import { getMasterClass } from "./api/getMasterClass";
import GastroStationCard from "../component/uikit/GastroStationCard/GastroStationCard";
import { getGastroStation } from "./api/getGastroStations";
import { getExitBars } from "./api/getExitBars";
import { getBarCounter } from "./api/getAnotherItems";
import StationSliderSection from "../component/StationSliderSection/StationSliderSection";
import SectionTwo from "../component/SectionTwo/SectionTwo";
import SeoBlock from "../component/SeoBlock/SeoBlock";
import FeedbackSection from "../component/FeedbackSection/FeedbackSection";
import MasterClassInfo from "../component/MasterClassInfo/MasterClassInfo";
import BarInfoSection from "../component/BarInfoSection/BarInfoSection";
import AskingBlock from "../component/AskingBlock/AskingBlock";
import StudyBlock from "../component/StudyBlock/StudyBlock";
import FirstSection from "../component/FirstSection/FirstSection";
import CompleteFushetSection from "../component/CompleteFushetSection/CompleteFushetSection";
import Header from "../component/Header/Header";
import Layout from "../component/Layout/Layout";
import { getIndexPage } from "./api/getPages";

export default function Home({
  allBufets,
  allMasterClass,
  allGastroStation,
  allExitBars,
  barCounter,
  preview,
  index,
  data,
  error,
}) {
  return (
    <>
      <Layout>
        {/* {barCounter.map((item) => (
        <ItemCard key={item.id} data={item} />
      ))}

      {allBufets.map((item) => (
        <FurshetCard key={item.id} data={item} />
      ))}

      {allMasterClass.map((item) => (
        <MasterClassCard key={item.id} data={item} />
      ))}

      {allGastroStation.map((item) => (
        <GastroStationCard key={item.id} data={item} />
      ))}
      {allExitBars.map((item) => (
        <GastroStationCard key={item.id} data={item} />
      ))} */}
        <FirstSection data={index.textPage} startPos={0} bg={bg_home} />
        <SectionTwo data={index.sectionTwo} />
        {/* <StudyBlock /> */}
        <StationSliderSection
          secondBtn={false}
          dataImages={dataFurshetSlider}
          dataText={dataFurshetText}
        />
        <CompleteFushetSection />
        <MasterClassInfo />
        {/* <BufetsInfoSection /> */}
        <BarInfoSection />
        <AskingBlock />
        <FeedbackSection />
        <SeoBlock data={index.seoBlock} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allBufets = (await getBuffets(preview)) || [];
  const allMasterClass = await getMasterClass();
  const allGastroStation = await getGastroStation();
  const allExitBars = await getExitBars();
  const barCounter = await getBarCounter();
  const indexPage = await getIndexPage();
  return {
    props: {
      index: indexPage,
      barCounter: JSON.parse(barCounter),
      allBufets: JSON.parse(allBufets),
      allExitBars: JSON.parse(allExitBars),
      allGastroStation: JSON.parse(allGastroStation),
      allMasterClass: JSON.parse(allMasterClass),
      preview,
    },
  };
}
