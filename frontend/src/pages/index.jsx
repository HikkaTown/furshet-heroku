import Head from "next/head";
import axios from "axios";
import {bg_home, dataFurshetText, dataFurshetSlider} from "../utils/const";
import StationSliderSection from "../component/StationSliderSection/StationSliderSection";
import SectionTwo from "../component/SectionTwo/SectionTwo";
import SeoBlock from "../component/SeoBlock/SeoBlock";
import FeedbackSection from "../component/FeedbackSection/FeedbackSection";
import MasterClassInfo from "../component/MasterClassInfo/MasterClassInfo";
import BarInfoSection from "../component/BarInfoSection/BarInfoSection";
import AskingBlock from "../component/AskingBlock/AskingBlock";
import FirstSection from "../component/FirstSection/FirstSection";
import CompleteFushetSection from "../component/CompleteFushetSection/CompleteFushetSection";
import Layout from "../component/Layout/Layout";
import {getIndexPage} from "../utils/api/getPages";
import CatalogBuffets from "../component/CatalogBuffets/CatalogBuffets";

export default function Home({
                               allBufets,
                               index,
                               catalogType,
                               thematics,
                               additionalsData,
                             }) {
  return (
    <>
      <Head>
        <title>{index.metaData.head}</title>
        <meta property="og:title" content={index.metaData.head}/>
        <meta
          itemProp="description"
          name="description"
          content={index.metaData.title}
        />
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
        <FirstSection data={index.textPage} startPos={0} bg={bg_home}/>
        <SectionTwo data={index.sectionTwo}/>
        {/* <StudyBlock /> */}
        <StationSliderSection
          secondBtn={false}
          dataImages={dataFurshetSlider}
          dataText={dataFurshetText}
        />
        <CompleteFushetSection/>
        <CatalogBuffets
          categoryName={'Фуршет'}
          catalogData={index.catalogBlock}
          catalogType={catalogType}
          cards={allBufets}
          additionals={additionalsData}
          thematics={thematics}
        />
        <MasterClassInfo/>
        {/* <BufetsInfoSection /> */}
        <BarInfoSection/>
        <AskingBlock/>
        <FeedbackSection/>
        <SeoBlock data={index.seoBlock}/>
      </Layout>
    </>
  );
}

export async function getStaticProps({preview = null}) {
  const allBufets = await axios("http://localhost:3000/api/getBufets");
  const indexPage = await getIndexPage();
  const catalogType = await axios("http://localhost:3000/api/getTypeBufets");
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
      index: indexPage,
      catalogType: catalogType.data.data,
      thematics: catalogThematics.data.data,
      allBufets: allBufets.data,
      additionalsData: additionalsData,
    },
  };
}
