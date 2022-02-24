import React from "react";
import Link from "next/link";
import Layout from "../../component/Layout/Layout";
import translit from "../../utils/translit";
import s from "./post.module.scss";
import { LazyImageWrapper } from "../../component/LazyImage/LazyImage";
import { PATH_IMAGES } from "../../utils/const";
import ArrowSectionButton from "../../component/uikit/ArrowSectionButton/ArrowSectionButton";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function Index({ post, posts, postIndex }) {
  const router = useRouter();
  const [nextId, setNextId] = useState(null);
  const [prevId, setPrevId] = useState(null);

  useEffect(() => {
    if (postIndex === 0) {
      setNextId(postIndex + 1);
      setPrevId(0);
    }

    if (postIndex === posts.length) {
      setNextId(null);
      setPrevId(postIndex - 1);
    }

    if (postIndex !== 0 && postIndex !== posts.length) {
      setNextId(postIndex + 1);
      setPrevId(postIndex - 1);
    }
  }, [router]);
  return (
    <>
      <Head>
        <title itemProp="headline">{post.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={post.meta_title} />

        <meta
          itemProp="description"
          name="description"
          content={post.meta_description}
        />
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:site_name" content="Аренда фуршетов" />
        {/* <meta property="og:url" content={DOMEN + "/news"} /> */}
        {/*<link rel="canonical" href={DOMEN + "/news"} />*/}
        {/* <link
          rel="alternate"
          type="application/rss+xml"
          title={META_NEWS_TITLE}
          href={RSS}
        /> */}
      </Head>
      <Layout>
        <section className={s.section}>
          <div className={s.container}>
            <Link href="/news" prefetch={false}>
              <a className={s.btn_back}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3333 16H6.66663"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 25.3333L6.66663 16L16 6.66663"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Вернуться к новостям
              </a>
            </Link>
          </div>
          <div className={s.container_post}>
            <div className={s.image_container}>
              <LazyImageWrapper
                src={PATH_IMAGES + post.imagePc}
                srcTablet={PATH_IMAGES + post.imageTab}
                srcMobile={PATH_IMAGES + post.imageMob}
                className={[s.image]}
                wrapperClass={s.image_wrapper}
                ratio={0.55}
              />
            </div>
            <div className={s.content}>
              <h1 className={s.head}>{post.name}</h1>
              <p className={s.date}>{post.date}</p>
              <p className={s.description}>{post.description}</p>
            </div>
          </div>
          <div className={s.container}>
            <div className={s.arrows}>
              {postIndex !== 0 && (
                <ArrowSectionButton
                  className={s.arrow_left}
                  position={true}
                  onClick={() => {
                    console.log(prevId);
                    router.push(`/news/${translit(posts[prevId].name)}`);
                  }}
                />
              )}
              {nextId !== posts.length && (
                <ArrowSectionButton
                  className={s.arrow_right}
                  onClick={() => {
                    console.log(nextId);
                    router.push(`/news/${translit(posts[nextId].name)}`);
                  }}
                />
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const data = await fetch(`http://localhost:3000/api/getNews`);
  const posts = await data.json();
  const post = posts.find((item) => {
    return translit(item.name) == params.id;
  });
  const postIndex = posts.findIndex((item, index) => {
    return translit(item.name) == params.id;
  });

  return {
    props: {
      post,
      posts,
      postIndex,
      fallback: false,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await fetch(`http://localhost:3000/api/getNews`);
  const posts = await data.json();
  const paths = posts.map((item) => ({
    params: { id: translit(item.name) },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
