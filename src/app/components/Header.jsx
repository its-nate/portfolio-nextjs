import Link from "next/link";

const Header = (props) => {
  let activeNav = props.activePage;
  return (
    <header>
      {/* Mobile Nav */}
      <ul id="slide-out" className="sidenav">
        <li>const nav = [</li>
        <li>
          {activeNav === "home" ? (
            <Link href="/" className="nav-item sidenav-close active-nav">
              home,
            </Link>
          ) : (
            <Link href="/" className="nav-item sidenav-close">
              home,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "skills" ? (
            <Link href="/skills" className="nav-item sidenav-close active-nav">
              skills,
            </Link>
          ) : (
            <Link href="/skills" className="nav-item sidenav-close">
              skills,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "code" ? (
            <Link href="/code" className="nav-item sidenav-close active-nav">
              code,
            </Link>
          ) : (
            <Link href="/code" className="nav-item sidenav-close">
              code,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "about" ? (
            <Link href="/about" className="nav-item sidenav-close active-nav">
              about,
            </Link>
          ) : (
            <Link href="/about" className="nav-item sidenav-close">
              about,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "contact" ? (
            <Link href="/contact" className="nav-item sidenav-close active-nav">
              contact
            </Link>
          ) : (
            <Link href="/contact" className="nav-item sidenav-close">
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
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li>const nav = [</li>
            <li>
              {activeNav === "home" ? (
                <Link href="/" className="nav-item active-nav">
                  home,
                </Link>
              ) : (
                <Link href="/" className="nav-item">
                  home,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "skills" ? (
                <Link href="/skills" className="nav-item active-nav">
                  skills,
                </Link>
              ) : (
                <Link href="/skills" className="nav-item">
                  skills,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "code" ? (
                <Link href="/code" className="nav-item active-nav">
                  code,
                </Link>
              ) : (
                <Link href="/code" className="nav-item">
                  code,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "about" ? (
                <Link href="/about" className="nav-item active-nav">
                  about,
                </Link>
              ) : (
                <Link href="/about" className="nav-item">
                  about,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "contact" ? (
                <Link href="/contact" className="nav-item active-nav">
                  contact
                </Link>
              ) : (
                <Link href="/contact" className="nav-item">
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
