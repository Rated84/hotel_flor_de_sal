import { Maximize2 } from 'lucide-react';
import { galleryData } from '../data/hotelData';

export default function GallerySection({ onOpenLightbox }) {
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenLightbox(index);
    }
  };

  return (
    <section className="gallery-section" id="galeria">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Perspectivas do Projeto</span>
          <h2 className="section-title">Conheça o Paraíso</h2>
          <p className="section-subtitle">
            Renders e registros visuais do empreendimento arquitetônico Flor de
            Sal. Clique em qualquer imagem para ampliar em alta definição.
          </p>
        </div>

        <div className="gallery-grid reveal">
          {galleryData.map((item, idx) => (
            <div
              key={item.src}
              className="gallery-item"
              tabIndex={0}
              role="button"
              aria-label={item.ariaLabel}
              onClick={() => onOpenLightbox(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-tag">{item.tag}</span>
                <h4 className="gallery-caption">{item.caption}</h4>
              </div>
              <div className="gallery-zoom-icon">
                <Maximize2 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

