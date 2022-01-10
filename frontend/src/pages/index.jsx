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

export default function Home({
  allBufets,
  allMasterClass,
  preview,
  data,
  error,
}) {
  console.log(allBufets);
  return (
    <>
      <ItemCard data={null} />
      {allBufets.map((item) => (
        <FurshetCard key={item.id} data={item} />
      ))}

      {allMasterClass.map((item) => (
        <MasterClassCard key={item.id} data={item} />
      ))}
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allBufets = (await getBuffets(preview)) || [];
  const allMasterClass = await getMasterClass();
  return {
    props: {
      allBufets: JSON.parse(allBufets),
      allMasterClass: JSON.parse(allMasterClass),
      preview,
    },
  };
}
