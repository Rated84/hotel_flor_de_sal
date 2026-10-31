import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../data/hotelData';

export default function LightboxModal({
  isOpen,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  const item = galleryData[currentIndex] || galleryData[0];

  const handleBackdropClick = (e) => {
    if (
      e.target === e.currentTarget ||
      e.target.classList.contains('lightbox-content')
    ) {
      onClose();
    }
  };

  return (
    <div
      className={`lightbox-modal${isOpen ? ' active' : ''}`}
      id="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de Imagens"
      onClick={handleBackdropClick}
    >
      <div className="lightbox-content">
        <button
          type="button"
          className="lightbox-close"
          id="lightbox-close"
          aria-label="Fechar visualizador"
          onClick={onClose}
        >
          <X />
        </button>

        <button
          type="button"
          className="lightbox-nav-btn lightbox-prev"
          id="lightbox-prev"
          aria-label="Imagem anterior"
          onClick={onPrev}
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className="lightbox-nav-btn lightbox-next"
          id="lightbox-next"
          aria-label="Próxima imagem"
          onClick={onNext}
        >
          <ChevronRight />
        </button>

        <div className="lightbox-img-wrap">
          <img src={item.src} alt={item.title} id="lightbox-image" />
        </div>

        <div className="lightbox-info">
          <h3 className="lightbox-title" id="lightbox-title">
            {item.title}
          </h3>
          <p className="lightbox-desc" id="lightbox-desc">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

