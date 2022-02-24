/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
// import Script from "next/script";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import "normalize.css";
import "../styles/globals.scss";
import "keen-slider/keen-slider.min.css";
import { loadFont } from "../utils/loadFont";
import { PREVIEW_L, PREVIEW_S } from "../utils/const";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    //   store.dispatch({ type: "INITIAL_FAVORITE_STORE" });

    //   window.addEventListener("beforeunload", function () {
    //     localStorage.setItem("cartStore", JSON.stringify(store.getState()));
    //   });
    setTimeout(() => {
      loadFont("/fonts/fonts.css");
    }, 0);
  }, []);

  return (
    <>
      <Provider store={store}>
        {/* <Script src="/ymetrica.js" strategy="lazyOnload" /> */}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
