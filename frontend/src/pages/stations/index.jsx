import Head from "next/head";
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
import MasterClassInfo from "../../component/MasterClassInfo/MasterClassInfo";
import BarInfoSection from "../../component/BarInfoSection/BarInfoSection";
import Question from "../../component/uikit/Question/Question";
import AskingBlock from "../../component/AskingBlock/AskingBlock";
import BufetsInfoSection from "../../component/BufetsInfoSection/BufetsInfoSection";
import StudyBlock from "../../component/StudyBlock/StudyBlock";
import FirstSection from "../../component/FirstSection/FirstSection";
import CompleteFushetSection from "../../component/CompleteFushetSection/CompleteFushetSection";
import Layout from "../../component/Layout/Layout";
import { getStationsPage } from "../api/getPages";

export default function Home({ allGastroStation, index, preview, error }) {
  console.log(index);
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
        <FirstSection data={index.textPage} startPos={1} bg={bg_stations} />
        <SectionTwo data={index.sectionTwo} />
        <StudyBlock data={index.studyBlock} />
        {/* katalog */}
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
  // const allGastroStation = await getGastroStation();
  const stationPage = await getStationsPage();

  return {
    props: {
      index: stationPage,
      // allGastroStation: JSON.parse(allGastroStation),
      preview,
    },
  };
}
