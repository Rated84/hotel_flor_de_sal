import { useState, useEffect, useRef } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { navItems } from '../data/hotelData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], main[id], footer[id]');
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) setActiveSection(id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => sectionObserver.observe(sec));
    return () => sectionObserver.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? ' scrolled' : ''}`}
      id="site-header"
    >
      <nav className="navbar" aria-label="Navegação Principal">
        <a href="#inicio" className="brand" aria-label="Flor de Sal Hotel - Início">
          <img
            src="fotos/logos/HT-trim.png"
            alt="Logotipo Flor de Sal Hotel"
            className="brand-logo"
          />
          <div className="brand-text">
            <span className="brand-title">Flor de Sal</span>
            <span className="brand-subtitle">Beach Resort &amp; Spa</span>
          </div>
        </a>

        <ul
          className={`nav-menu${menuOpen ? ' open' : ''}`}
          id="nav-menu"
          role="menubar"
        >
          {navItems.map((item) => (
            <li key={item.id} role="none">
              <a
                href={item.href}
                className={`nav-link${activeSection === item.id ? ' active' : ''}`}
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#reserva" className="btn-nav">
            <Calendar />
            <span>Reservar</span>
          </a>
          <button
            type="button"
            className="mobile-toggle"
            aria-label="Abrir Menu"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

