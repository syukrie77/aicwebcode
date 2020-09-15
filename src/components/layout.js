import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Depan</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>Tentang AIC</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>Program Studi</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.facebook.com/aretacollege"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/areta.informatics.college"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/aretacollege"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <Link
                to={`https://forms.gle/i5AATeCDKUuFPiEN8`}
                title="Register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Daftar Online
              </Link>
              <Link
                to={`https://syukrie.aretacollege.com`}
                title="Blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Link>

	  </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Supported By{" "}
        <a
          href="https://onlineclassindonesia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          OnlineClassIndonesia.Com
        </a>
      </footer>
    </div>
  )
}

export default Layout
