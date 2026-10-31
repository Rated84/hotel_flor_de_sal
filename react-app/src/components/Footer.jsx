import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-top">
        {/* Coluna 1: Marca */}
        <div className="footer-brand-wrap">
          <div className="footer-logo-row">
            <img
              src="fotos/logos/HT-trim.png"
              alt="Flor de Sal Hotel"
              className="footer-logo-img"
            />
            <div>
              <span className="footer-brand-title">Flor de Sal</span>
              <span className="footer-brand-sub" style={{ display: 'block' }}>
                Beach Resort &amp; Spa
              </span>
            </div>
          </div>
          <p className="footer-desc">
            O silêncio das dunas, a pureza das salinas e a sofisticação da
            arquitetura costeira contemporânea.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-col">
          <h5>Navegação</h5>
          <ul className="footer-links">
            <li>
              <a href="#inicio" className="footer-link">
                Início
              </a>
            </li>
            <li>
              <a href="#conceito" className="footer-link">
                O Conceito
              </a>
            </li>
            <li>
              <a href="#quartos" className="footer-link">
                Acomodações
              </a>
            </li>
            <li>
              <a href="#experiencias" className="footer-link">
                Experiências
              </a>
            </li>
            <li>
              <a href="#galeria" className="footer-link">
                Galeria
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Acomodações */}
        <div className="footer-col">
          <h5>Acomodações</h5>
          <ul className="footer-links">
            <li>
              <a href="#quartos" className="footer-link">
                Suíte Salina (Master)
              </a>
            </li>
            <li>
              <a href="#quartos" className="footer-link">
                Bangalô Maresia
              </a>
            </li>
            <li>
              <a href="#quartos" className="footer-link">
                Refúgio Duna
              </a>
            </li>
            <li>
              <a href="#reserva" className="footer-link">
                Simular Estadia
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Localização & Contatos */}
        <div className="footer-col">
          <h5>Localização &amp; Contato</h5>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin />
              <span>Costa Branca • Rio Grande do Norte, Brasil</span>
            </div>
            <a href="tel:+5584999999999" className="footer-contact-item">
              <Phone />
              <span>+55 (84) 99999-9999</span>
            </a>
            <a href="mailto:reservas@floradesal.com" className="footer-contact-item">
              <Mail />
              <span>reservas@floradesal.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-copyright">
          Flor de Sal Hotel © 2026 — Projeto Acadêmico de Arquitetura &amp;
          Urbanismo • <strong>UFERSA</strong>.
        </div>
        <div style={{ fontSize: '0.8rem', color: 'rgba(247, 244, 237, 0.45)' }}>
          Trabalho Estudantil Sem Fins Comerciais
        </div>
      </div>
    </footer>
  );
}

