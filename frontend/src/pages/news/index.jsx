import React from "react";
import Layout from "../../component/Layout/Layout";
import Head from "next/head";
import s from "./index.module.scss";
import CardForNews from "../../component/uikit/CardForNews/CardForNews";
// TODO: Доделать страницу news
export default function Index({ posts }) {
  return (
    <>
      <Head itemscope itemtype="http://schema.org/WPHeader">
        {/* <title itemProp="headline">{META_NEWS_TITLE}</title> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <meta property="og:title" content={META_NEWS_TITLE} /> */}

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
      </Head>
      <Layout>
        <section className={s.section}>
          <div className={s.container}>
            <h1 className={s.head}>Наши кейсы</h1>
          </div>
          <div className={s.cards_container}>
            {posts.map((item) => {
              return (
                <CardForNews key={item.id} className={s.card} data={item} />
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(`http://localhost:3000/api/getNews`);
  const result = await data.json();
  return {
    props: {
      posts: result,
    },
  };
}
