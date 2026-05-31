import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',                   href: '/' },
  { label: 'About Us',               href: '/about' },
  { label: 'Products & Solutions',   href: '/products' },
  { label: 'Circulars/Notification', href: '/circulars' },
  { label: 'Careers',                href: '/careers' },
  { label: 'Contact Us',             href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location                  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (href) => href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ' navbar--transparent'}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="Gaak Logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav">
          {NAV_LINKS.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                className={`navbar__link${isActive(link.href) ? ' navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="navbar__link"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <Link to="#" className="btn btn--primary">Get Demo</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                className={`navbar__mobile-link${isActive(link.href) ? ' navbar__mobile-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <div className="navbar__mobile-actions">
            <a href="#demo-section" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
