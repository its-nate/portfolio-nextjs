"use client";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import M from "materialize-css";

// const M = typeof window !== `undefined` ? require("materialize-css") : null;

export default function ClientLayout({ children }) {
  useEffect(() => {
    setTimeout(function () {
      console.log("Initializing Materialize");
      const sideNavElems = document.querySelectorAll(".sidenav");
      const sideNavInstances = M.Sidenav.init(sideNavElems, {
        preventScrolling: true,
        draggable: false,
      });
    }, 500);
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
