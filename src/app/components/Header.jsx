"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Hamburger from "../icons/Hamburger";

const Header = () => {
  const [activeNav, setActiveNav] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const currentRoute = pathname.slice(1) || "home";
    setActiveNav(currentRoute);
  }, [pathname]);

  return (
    <header>
      {/* Mobile Nav */}
      <ul id="slide-out" className="sidenav">
        <li>const nav = [</li>
        <li>
          <Link
            href="/"
            className={`nav-item sidenav-close ${
              activeNav === "home" ? "active-nav" : ""
            }`}
            onClick={() => setActiveNav("home")}
          >
            home,
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={`nav-item sidenav-close ${
              activeNav === "skills" ? "active-nav" : ""
            }`}
            onClick={() => setActiveNav("skills")}
          >
            skills,
          </Link>
        </li>
        <li>
          <Link
            href="/code"
            className={`nav-item sidenav-close ${
              activeNav === "code" ? "active-nav" : ""
            }`}
            onClick={() => setActiveNav("code")}
          >
            code,
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`nav-item sidenav-close ${
              activeNav === "about" ? "active-nav" : ""
            }`}
            onClick={() => setActiveNav("about")}
          >
            about,
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`nav-item sidenav-close ${
              activeNav === "contact" ? "active-nav" : ""
            }`}
            onClick={() => setActiveNav("contact")}
          >
            contact
          </Link>
        </li>
        <li>]</li>
      </ul>

      {/* Desktop Nav */}
      <nav className="nav-center">
        <div className="nav-wrapper">
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <Hamburger />
          </a>
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li>const nav = [</li>
            <li>
              <Link
                href="/"
                className={`nav-item sidenav-close ${
                  activeNav === "home" ? "active-nav" : ""
                }`}
                onClick={() => setActiveNav("home")}
              >
                home,
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className={`nav-item sidenav-close ${
                  activeNav === "skills" ? "active-nav" : ""
                }`}
                onClick={() => setActiveNav("skills")}
              >
                skills,
              </Link>
            </li>
            <li>
              <Link
                href="/code"
                className={`nav-item sidenav-close ${
                  activeNav === "code" ? "active-nav" : ""
                }`}
                onClick={() => setActiveNav("code")}
              >
                code,
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav-item sidenav-close ${
                  activeNav === "about" ? "active-nav" : ""
                }`}
                onClick={() => setActiveNav("about")}
              >
                about,
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`nav-item sidenav-close ${
                  activeNav === "contact" ? "active-nav" : ""
                }`}
                onClick={() => setActiveNav("contact")}
              >
                contact
              </Link>
            </li>
            <li>]</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
