import axios from "axios";
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
import AskingBlock from "../../component/AskingBlock/AskingBlock";
import BufetsInfoSection from "../../component/BufetsInfoSection/BufetsInfoSection";
import StudyBlock from "../../component/StudyBlock/StudyBlock";
import FirstSection from "../../component/FirstSection/FirstSection";
import Layout from "../../component/Layout/Layout";
import { getStationsPage } from "../../utils/api/getPages";
import Head from "next/head";
import FullCatalog from "../../component/FullCatalog/FullCatalog";

export default function Stations({
  index,
  filteredCatalog,
  thematics,
  additionalsCards,
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
        <FullCatalog
          catalogData={index.catalogBlock}
          cards={filteredCatalog}
          catalogType={index.type}
          categoryId={index.kategoriya.id}
          thematics={thematics}
          additionals={index.additionals}
          additionalsCards={additionalsCards}
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
  const indexPage = await getStationsPage();
  const catalogData = await axios(
    `http://localhost:3000/api/getAllProductsToCatalog?categoryId=${indexPage.kategoriya.id}`
  );
  const catalogThematics = await axios(
    "http://localhost:3000/api/getThematicsData"
  );
  let aditList = ([] = indexPage.additionals.map((item, index) => {
    return item.id;
  }));
  const additionalList = await axios(
    `http://localhost:3000/api/additionals?list=${JSON.stringify(aditList)}`
  );

  let filterAdditionals = [];
  indexPage.additionals.map((typeAdditionals, index) => {
    additionalList.data.map((item) => {
      if (item.kategoriya_dopov.id === typeAdditionals.id) {
        filterAdditionals.push(item);
        indexPage.additionals[index] = {
          ...typeAdditionals,
          count: indexPage.additionals[index].count + 1,
        };
      }
    });
  });

  let filteredCatalog = [];
  indexPage.type.map((typeItem, index) => {
    catalogData.data.find((itemCard) => {
      if (itemCard.type.includes(typeItem.id)) {
        filteredCatalog.push(itemCard);
        indexPage.type[index] = {
          ...typeItem,
          count: indexPage.type[index].count + 1,
        };
      }
    });
  });
  return {
    props: {
      index: indexPage,
      filteredCatalog: catalogData.data,
      thematics: catalogThematics.data.data,
      additionalsCards: filterAdditionals,
    },
  };
}
