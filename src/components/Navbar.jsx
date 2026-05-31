import { useEffect, useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', active: true, href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Products & Solutions', href: '#' },
  { label: 'Industries', href: '#' },
  { label: 'Careers', href: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ' navbar--transparent'}`}>
      <div className="navbar__inner container">
        {/* Logo — white when transparent, original when scrolled */}
        <a href="#" className="navbar__logo">
          <img
            src="/logo.png"
            alt="Provigil Logo"
            className={scrolled ? '' : 'navbar__logo--invert'}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href || '#'}
              className={`navbar__link${link.active ? ' navbar__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <a href="#demo-section" className="btn btn--primary">Contact Us</a>
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
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href || '#'}
              className={`navbar__mobile-link${link.active ? ' navbar__mobile-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
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
