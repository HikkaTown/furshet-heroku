import Head from "next/head";
import axios from "axios";
import { bg_home, dataFurshetText, dataFurshetSlider } from "../utils/const";
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
import { getIndexPage } from "../utils/api/getPages";
import CatalogBuffets from "../component/CatalogBuffets/CatalogBuffets";
import FullCatalog from "../component/FullCatalog/FullCatalog";

export default function Home({
  index,
  filteredCatalog,
  allBufets,
  catalogType,
  thematics,
  additionalsData,
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
        <FirstSection data={index.textPage} startPos={0} bg={bg_home} />
        <SectionTwo data={index.sectionTwo} />
        <StationSliderSection
          secondBtn={false}
          dataImages={dataFurshetSlider}
          dataText={dataFurshetText}
        />
        <CompleteFushetSection />
        <FullCatalog
          catalogData={index.catalogBlock}
          cards={filteredCatalog}
          catalogType={index.type}
          categoryId={index.kategoriya.id}
          thematics={thematics}
        />
        {/* <CatalogBuffets
          categoryName={index.kategoriya.categoryName}
          catalogData={index.catalogBlock}
          catalogType={catalogType}
          cards={fullCatalog}
          additionals={additionalsData}
          thematics={thematics}
        /> */}
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
  const indexPage = await getIndexPage();
  const catalogData = await axios(
    `http://localhost:3000/api/getAllProductsToCatalog?categoryId=${indexPage.kategoriya.id}`
  );
  let filteredCatalog = [];
  indexPage.type.map((typeItem, index) => {
    catalogData.data.find((itemCard) => {
      if (itemCard.type.includes(typeItem.id)) {
        // console.log(filteredCatalog, "[itemcard id]");
        const findRes = filteredCatalog.find(
          (filterCard) => filterCard.id === itemCard.id
        );
        if (!findRes) {
          filteredCatalog.push(itemCard);
          indexPage.type[index] = {
            ...typeItem,
            count: indexPage.type[index].count + 1,
          };
        }
      }
    });
  });

  const catalogThematics = await axios(
    "http://localhost:3000/api/getThematicsData"
  );
  // // const furniture = await axios("http://localhost:3000/api/getMebel");
  // const decor = await axios("http://localhost:3000/api/getDecorData");
  // const staf = await axios("http://localhost:3000/api/getStafData");
  // const disinfection = await axios(
  //   "http://localhost:3000/api/getDisinfectionData"
  // );
  // const additionalsData = [
  //   {
  //     name: "Мебель",
  //     data: furniture.data,
  //   },
  //   {
  //     name: "Декор",
  //     data: decor.data,
  //   },
  //   {
  //     name: "Персонал",
  //     data: staf.data,
  //   },
  //   {
  //     name: "Дезинфекция",
  //     data: disinfection.data,
  //   },
  // ];

  return {
    props: {
      index: indexPage,
      filteredCatalog: filteredCatalog,
      thematics: catalogThematics.data.data,
      // additionalsData: additionalsData,
    },
  };
}
