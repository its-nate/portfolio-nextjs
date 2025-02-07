"use client";

import { useState } from "react";
import Link from "next/link";
import Hamburger from "../icons/Hamburger";

const Header = () => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <header>
      {/* Mobile Nav */}
      <ul id="slide-out" className="sidenav">
        <li>const nav = [</li>
        <li>
          {activeNav === "home" ? (
            <Link
              href="/"
              className="nav-item sidenav-close active-nav"
              onClick={() => setActiveNav("home")}
            >
              home,
            </Link>
          ) : (
            <Link
              href="/"
              className="nav-item sidenav-close"
              onClick={() => setActiveNav("home")}
            >
              home,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "skills" ? (
            <Link
              href="/skills"
              className="nav-item sidenav-close active-nav"
              onClick={() => setActiveNav("skills")}
            >
              skills,
            </Link>
          ) : (
            <Link
              href="/skills"
              className="nav-item sidenav-close"
              onClick={() => setActiveNav("skills")}
            >
              skills,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "code" ? (
            <Link
              href="/code"
              className="nav-item sidenav-close active-nav"
              onClick={() => setActiveNav("code")}
            >
              code,
            </Link>
          ) : (
            <Link
              href="/code"
              className="nav-item sidenav-close"
              onClick={() => setActiveNav("code")}
            >
              code,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "about" ? (
            <Link
              href="/about"
              className="nav-item sidenav-close active-nav"
              onClick={() => setActiveNav("about")}
            >
              about,
            </Link>
          ) : (
            <Link
              href="/about"
              className="nav-item sidenav-close"
              onClick={() => setActiveNav("about")}
            >
              about,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "contact" ? (
            <Link
              href="/contact"
              className="nav-item sidenav-close active-nav"
              onClick={() => setActiveNav("contact")}
            >
              contact
            </Link>
          ) : (
            <Link
              href="/contact"
              className="nav-item sidenav-close"
              onClick={() => setActiveNav("contact")}
            >
              contact
            </Link>
          )}
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
              {activeNav === "home" ? (
                <Link
                  href="/"
                  className="nav-item active-nav"
                  onClick={() => setActiveNav("home")}
                >
                  home,
                </Link>
              ) : (
                <Link
                  href="/"
                  className="nav-item"
                  onClick={() => setActiveNav("home")}
                >
                  home,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "skills" ? (
                <Link
                  href="/skills"
                  className="nav-item active-nav"
                  onClick={() => setActiveNav("skills")}
                >
                  skills,
                </Link>
              ) : (
                <Link
                  href="/skills"
                  className="nav-item"
                  onClick={() => setActiveNav("skills")}
                >
                  skills,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "code" ? (
                <Link
                  href="/code"
                  className="nav-item active-nav"
                  onClick={() => setActiveNav("code")}
                >
                  code,
                </Link>
              ) : (
                <Link
                  href="/code"
                  className="nav-item"
                  onClick={() => setActiveNav("code")}
                >
                  code,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "about" ? (
                <Link
                  href="/about"
                  className="nav-item active-nav"
                  onClick={() => setActiveNav("about")}
                >
                  about,
                </Link>
              ) : (
                <Link
                  href="/about"
                  className="nav-item"
                  onClick={() => setActiveNav("about")}
                >
                  about,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "contact" ? (
                <Link
                  href="/contact"
                  className="nav-item active-nav"
                  onClick={() => setActiveNav("contact")}
                >
                  contact
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="nav-item"
                  onClick={() => setActiveNav("contact")}
                >
                  contact
                </Link>
              )}
            </li>
            <li>]</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
