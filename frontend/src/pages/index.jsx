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
import { getExitBars } from "./api/getExitBars";

export default function Home({
  allBufets,
  allMasterClass,
  allGastroStation,
  allExitBars,
  preview,
  data,
  error,
}) {
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
      {allExitBars.map((item) => (
        <GastroStationCard key={item.id} data={item} />
      ))}
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allBufets = (await getBuffets(preview)) || [];
  const allMasterClass = await getMasterClass();
  const allGastroStation = await getGastroStation();
  const allExitBars = await getExitBars();
  return {
    props: {
      allBufets: JSON.parse(allBufets),
      allExitBars: JSON.parse(allExitBars),
      allGastroStation: JSON.parse(allGastroStation),
      allMasterClass: JSON.parse(allMasterClass),
      preview,
    },
  };
}
