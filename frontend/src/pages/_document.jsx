import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { PREVIEW_L, PREVIEW_S } from "../utils/const";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head itemScope itemType="http://schema.org/WPHeader">
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ru_RU" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image" content={PREVIEW_L} />
          <meta property="og:image:width" content="1080" />
          <meta property="og:image:height" content="1080" />
          <meta property="og:image" content={PREVIEW_S} />
          <meta property="og:image:width" content="1080" />
          <meta property="og:image:height" content="565" />
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
          <link
            rel="icon"
            href="favicons/favicon.png"
            sizes="16x16"
            type="image/png"
          />
          <link
            rel="icon"
            href="favicons/favicon.ico"
            sizes="16x16 32x32"
            type="image/vnd.microsoft.icon"
          />
          <link
            rel="icon"
            href="favicons/favicon.svg"
            sizes="any"
            type="image/svg+xml"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
