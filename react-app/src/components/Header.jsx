import { useState, useEffect } from 'react';
import { Calendar, Menu } from 'lucide-react';
import { navItems } from '../data/hotelData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const syncSidebarSpace = () => document.body.classList.toggle('sidebar-open', menuOpen && window.innerWidth > 900);
    syncSidebarSpace();
    window.addEventListener('resize', syncSidebarSpace);
    return () => {
      window.removeEventListener('resize', syncSidebarSpace);
      document.body.classList.remove('sidebar-open');
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
    <div className="hotel-masthead" aria-label="Flor de Sal Hotel, Beach Resort e Spa">
      <button type="button" className="mobile-toggle" aria-label={menuOpen ? 'Fechar navegação' : 'Abrir navegação'} aria-expanded={menuOpen} aria-controls="nav-menu" onClick={() => setMenuOpen((prev) => !prev)}><Menu /></button>
      <img src="fotos/logos/HT-trim.png" alt="" />
      <div><span>FLOR DE SAL HOTEL</span><small>BEACH RESORT &amp; SPA · COSTA BRANCA</small></div>
    </div>
    <header
      className={`site-header${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}
      id="site-header"
    >
      <nav className="navbar" aria-label="Navegação Principal">
        <a href="#inicio" className="brand" aria-label="Flor de Sal Hotel - Início" onClick={() => setMenuOpen(false)}>
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
        </div>
      </nav>
    </header>
    </>
  );
}

