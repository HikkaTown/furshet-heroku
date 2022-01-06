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

function Home({ data, error }) {
  console.log(data);
  return (
    <>
      <ItemCard data={null} />
      <FurshetCard data={null} />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(`${URL_SERVER}/exit-bars`, {
      params: {
        populate: "*",
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    return error;
  }
};

export default Home;
