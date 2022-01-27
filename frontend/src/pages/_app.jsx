/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
// import Script from "next/script";
import {useEffect} from "react";
import {Provider} from "react-redux";
import {useStore} from '../redux/store'
import "normalize.css";
import "../styles/globals.scss";
import "keen-slider/keen-slider.min.css";
import {loadFont} from "../utils/loadFont";
import {PREVIEW_L, PREVIEW_S} from "../utils/const";

function MyApp({Component, pageProps}) {
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
        <Head>
          <meta property="og:type" content="website"/>
          <meta property="og:locale" content="ru_RU"/>
          <meta property="og:image:type" content="image/jpeg"/>
          <meta property="og:image" content={PREVIEW_L}/>
          <meta property="og:image:width" content="1080"/>
          <meta property="og:image:height" content="1080"/>
          <meta property="og:image" content={PREVIEW_S}/>
          <meta property="og:image:width" content="1080"/>
          <meta property="og:image:height" content="565"/>
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="favicons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="favicons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="favicons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="favicons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="favicons/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicons/apple-touch-icon-180x180.png"
          />
          <link rel="icon" href="/favicon.png" sizes="16x16" type="image/png"/>
          <link
            rel="icon"
            href="favicons/favicon.ico"
            sizes="16x16 32x32"
            type="image/vnd.microsoft.icon"
          />
          <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        {/* <Script src="/ymetrica.js" strategy="lazyOnload" /> */}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
