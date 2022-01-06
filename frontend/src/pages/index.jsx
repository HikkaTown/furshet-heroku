import Head from "next/head";
import axios from "axios";

import Checkbox from "../component/uikit/Checkbox/Checkbox";
import DropdownPerson from "../component/uikit/DropdownPerson/DropdownPerson";
import FurshetCard from "../component/uikit/FurshetCard/FurshetCard";
import GiftItem from "../component/uikit/GitfItem/GiftItem";
import ItemCard from "../component/uikit/ItemCard/ItemCard";
import NavigationButton from "../component/uikit/NavigationButton/NavigationButton";
import { useEffect } from "react";

function Home({ data, error }) {
  return (
    <>
      <ItemCard data={null} />
      <FurshetCard data={null} />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(
      "http://localhost:1337/api/exit-bars/?populate=*"
    );
    const data = res.data;
    return data;
  } catch (error) {
    return error;
  }
};

export default Home;
