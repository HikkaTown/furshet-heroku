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

export default function Home({ allBufets, preview, data, error }) {
  console.log(allBufets);
  return (
    <>
      <ItemCard data={null} />
      {allBufets.map((item) => (
        <FurshetCard key={item.id} data={item} />
      ))}
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allBufets = (await getBuffets(preview)) || [];
  return {
    props: { allBufets: JSON.parse(allBufets), preview },
  };
}

// Home.getInitialProps = async (ctx) => {
//   try {
//     const res = await axios.get(`${URL_SERVER}/buffets`, {
//       params: {
//         populate: "*",
//       },
//     });
//     const data = res.data;
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

// Home.getInitialProps = async () => {
//   try {
//     const res = await fetch("http://localhos:3000/api/getBuffers");
//     return res;
//   } catch (error) {
//     return error;
//   }
// };
