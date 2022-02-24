import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main>{children}</main>
      {router.pathname === "/404" ||
      router.pathname === "/favorites" ||
      router.pathname === "/search" ||
      router.pathname === "/cart" ||
      !router.pathname.indexOf("/news") ? (
        ""
      ) : (
        <Footer />
      )}
    </>
  );
}
