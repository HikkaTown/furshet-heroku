import Head from "next/head";
import axios from "axios";

import Checkbox from "../component/uikit/Checkbox/Checkbox";
import DropdownPerson from "../component/uikit/DropdownPerson/DropdownPerson";
import FurshetCard from "../component/uikit/FurshetCard/FurshetCard";
import GiftItem from "../component/uikit/GitfItem/GiftItem";
import ItemCard from "../component/uikit/ItemCard/ItemCard";
import NavigationButton from "../component/uikit/NavigationButton/NavigationButton";
import { useEffect } from "react";
import { URL_SERVER } from "../utils/const";
import { getBuffets } from "../pages/api/getBuffets";
import MasterClassCard from "../component/uikit/MasterClassCard/MasterClassCard";
import { getMasterClass } from "./api/getMasterClass";
import GastroStationCard from "../component/uikit/GastroStationCard/GastroStationCard";
import { getGastroStation } from "./api/getGastroStations";

export default function Home({
  allBufets,
  allMasterClass,
  allGastroStation,
  preview,
  data,
  error,
}) {
  console.log(allGastroStation);
  return (
    <>
      <ItemCard data={null} />
      {allBufets.map((item) => (
        <FurshetCard key={item.id} data={item} />
      ))}

      {allMasterClass.map((item) => (
        <MasterClassCard key={item.id} data={item} />
      ))}

      {allGastroStation.map((item) => (
        <GastroStationCard key={item.id} data={item} />
      ))}
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allBufets = (await getBuffets(preview)) || [];
  const allMasterClass = await getMasterClass();
  const allGastroStation = await getGastroStation();
  return {
    props: {
      allBufets: JSON.parse(allBufets),
      allGastroStation: JSON.parse(allGastroStation),
      allMasterClass: JSON.parse(allMasterClass),
      preview,
    },
  };
}
