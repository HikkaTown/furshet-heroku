import axios from "axios";

import Checkbox from "../../component/uikit/Checkbox/Checkbox";
import DropdownPerson from "../../component/uikit/DropdownPerson/DropdownPerson";
import FurshetCard from "../../component/uikit/FurshetCard/FurshetCard";
import GiftItem from "../../component/uikit/GitfItem/GiftItem";
import ItemCard from "../../component/uikit/ItemCard/ItemCard";
import NavigationButton from "../../component/uikit/NavigationButton/NavigationButton";
import {useEffect} from "react";
import {
  bg_bar,
  bg_home,
  URL_SERVER,
  dataStationsSlider,
  dataStationsText,
  bg_stations,
} from "../../utils/const";
import {getBuffets} from "../../utils/api/getBuffets";
import MasterClassCard from "../../component/uikit/MasterClassCard/MasterClassCard";
import {getMasterClass} from "../../utils/api/getMasterClass";
import GastroStationCard from "../../component/uikit/GastroStationCard/GastroStationCard";
import {getGastroStation} from "../../utils/api/getGastroStations";
import {getExitBars} from "../../utils/api/getExitBars";
import {getBarCounter} from "../../utils/api/getAnotherItems";
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
import {getStationsPage} from "../../utils/api/getPages";
import Head from "next/head";
import CatalogBlock from "../../component/CatalogBlock/CatalogBlock";

export default function Stations({allGastroStation, typeCatalog, index, preview, error}) {
  console.log(index)
  return (
    <>
      <Head>
        <title>{index.metaData.head}</title>
        <meta property="og:title" content={index.metaData.head}/>
        <meta itemProp="description" name="description" content={index.metaData.title}/>
        <meta property="og:description" content={index.metaData.title}/>
      </Head>
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
        <FirstSection data={index.textPage} startPos={1} bg={bg_stations}/>
        <SectionTwo data={index.sectionTwo}/>
        <StudyBlock data={index.studyBlock}/>
        {/* katalog */}
        <CatalogBlock catalogData={index.catalogBlock} types={typeCatalog}/>
        <BufetsInfoSection href={"/"}/>
        <MasterClassInfo/>
        <BarInfoSection/>
        <AskingBlock/>
        <FeedbackSection/>
        <SeoBlock data={index.seoBlock}/>
      </Layout>
    </>
  );
}

export async function getStaticProps({preview = null}) {
  // const allGastroStation = await getGastroStation();
  const stationPage = await getStationsPage();
  const stationType = await fetch('http://localhost:3000/api/getTypeStations').then((res) => {
    const data = res.json()
    return data
  });
  console.log(stationType)
  return {
    props: {
      index: stationPage,
      typeCatalog: stationType.data,
      // allGastroStation: JSON.parse(allGastroStation),
      preview,
    },
  };
}
