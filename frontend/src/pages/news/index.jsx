import React from "react";
import Layout from "../../component/Layout/Layout";
import Head from 'next/head';
// TODO: Доделать страницу news
export default function Index() {
  return (
    <>
      {/*<Head itemscope itemtype="http://schema.org/WPHeader">*/}
        {/*<title itemProp="headline">{META_NEWS_TITLE}</title>*/}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/*<meta property="og:title" content={META_NEWS_TITLE} />*/}

        <meta
          itemProp="description"
          name="description"
          // content={META_NEWS_DESCRIPTION}
        />
        {/*<meta property="og:description" content={META_NEWS_DESCRIPTION} />*/}
        <meta property="og:site_name" content="Выездное казино" />
        {/*<meta property="og:url" content={DOMEN + "/news"} />*/}
        {/*<link rel="canonical" href={DOMEN + "/news"} />*/}
        <link
          rel="alternate"
          type="application/rss+xml"
          // title={META_NEWS_TITLE}
          // href={RSS}
        />
      <Layout>
        <div>ds</div>
      </Layout>
    </>
  );
}
