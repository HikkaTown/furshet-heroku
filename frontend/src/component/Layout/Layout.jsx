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
      router.pathname === "/news" ||
      router.pathname === "/favorites" ||
      router.pathname === "/news" ||
      router.pathname === "/search" ||
      router.pathname === "/cart" ? (
        ""
      ) : (
        <Footer />
      )}
    </>
  );
}
