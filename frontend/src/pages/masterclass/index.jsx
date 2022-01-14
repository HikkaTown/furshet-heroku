import Head from "next/head";
import axios from "axios";

import Checkbox from "../../component/uikit/Checkbox/Checkbox";
import FurshetCard from "../../component/uikit/FurshetCard/FurshetCard";
import GiftItem from "../../component/uikit/GitfItem/GiftItem";
import ItemCard from "../../component/uikit/ItemCard/ItemCard";
import {
  dataStationsSlider,
  dataStationsText,
  bg_masterclass,
} from "../../utils/const";
import { getBuffets } from "../api/getBuffets";
import MasterClassCard from "../../component/uikit/MasterClassCard/MasterClassCard";
import { getMasterClass } from "../api/getMasterClass";
import GastroStationCard from "../../component/uikit/GastroStationCard/GastroStationCard";
import { getGastroStation } from "../api/getGastroStations";
import { getExitBars } from "../api/getExitBars";
import { getBarCounter } from "../api/getAnotherItems";
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
import { getMasterClassPage } from "../api/getPages";

export default function index({ index, preview, error }) {
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
        <FirstSection data={index.textPage} startPos={2} bg={bg_masterclass} />
        <SectionTwo data={index.sectionTwo} />
        <StudyBlock data={index.studyBlock} />
        {/* catalog */}
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
  // const allMasterClass = await getMasterClass();
  const indexPage = await getMasterClassPage();
  return {
    props: {
      index: indexPage,
      // allMasterClass: JSON.parse(allMasterClass),
      preview,
    },
  };
}
