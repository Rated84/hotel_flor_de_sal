import { Wind, Feather, Sun, Compass } from 'lucide-react';
import { conceptPillars } from '../data/hotelData';

const pillarIcons = {
  Wind,
  Feather,
  Sun,
  Compass,
};

export default function ConceptSection() {
  return (
    <section className="container" id="conceito">
      <div className="concept-grid">
        <div className="concept-text reveal">
          <span className="section-tag">Identidade &amp; Paisagem</span>
          <h2 className="section-title">Arquitetura que dialoga com o sal e o mar</h2>
          <p>
            O <strong>Flor de Sal Hotel</strong> nasce da simbiose entre o
            ecossistema singular da Costa Branca e uma visão arquitetônica
            contemporânea e sensível. A luz filtrada pelas pérgolas, os brises de
            madeira e as formas orgânicas prestam homenagem à geometria dos
            cristais de sal marinho.
          </p>
          <p>
            Cada elemento foi desenhado para respeitar a topografia litorânea,
            privilegiando ventilação cruzada natural, sombreamento inteligente e
            matérias-primas táteis que conectam os hóspedes à essência do
            semiárido litorâneo potiguar.
          </p>

          {/* Pilares do Projeto */}
          <div className="concept-pillars">
            {conceptPillars.map((pillar) => {
              const IconComponent = pillarIcons[pillar.icon] || Wind;
              return (
                <div key={pillar.title} className="pillar-item">
                  <div className="pillar-icon">
                    <IconComponent />
                  </div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="concept-visual reveal">
          <div className="concept-img-wrapper">
            <img
              src="fotos/carrossel/carrossel-1.jpg"
              alt="Conceito arquitetônico do resort Flor de Sal"
            />
          </div>
          <div className="concept-quote-card">
            <blockquote>
              &ldquo;A arquitetura não compete com a imensidão da costa; ela se
              dissolve na luz, no vento e na brancura do sal.&rdquo;
            </blockquote>
            <cite>Equipe de Concepção Arquitetônica • UFERSA</cite>
          </div>
        </div>
      </div>
    </section>
  );
}

