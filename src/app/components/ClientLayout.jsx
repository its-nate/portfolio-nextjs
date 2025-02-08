"use client";

import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  useEffect(() => {
    const initializeMaterialize = async () => {
      const M = (await import("materialize-css")).default;
      const sideNavElems = document.querySelectorAll(".sidenav");
      if (sideNavElems.length > 0) {
        M.Sidenav.init(sideNavElems, {
          preventScrolling: true,
          draggable: false,
        });
      }
    };

    setTimeout(initializeMaterialize, 500);
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
