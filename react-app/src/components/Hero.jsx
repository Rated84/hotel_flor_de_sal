import { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/hotelData';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, currentIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX.current > 50) {
      prevSlide();
    }
  };

  return (
    <main id="inicio" className="hero-section">
      <div className="container hero-wrapper">
        {/* Cartão Flutuante de Destaque */}
        <div className="hero-card reveal">
          <div className="badge">
            <Sparkles />
            <span>Costa Branca • Rio Grande do Norte</span>
          </div>

          <div className="hero-brand-wrap">
            <img
              src="fotos/logos/HT-trim.png"
              alt="Flor de Sal Emblem"
              className="hero-logo-img"
            />
            <div className="hero-title-wrap">
              <span className="hero-subtitle">Resort &amp; Spa à Beira-Mar</span>
              <h1>Flor de Sal</h1>
            </div>
          </div>

          <p className="hero-description">
            Onde o horizonte do Atlântico encontra a pureza das salinas e a
            serenidade das dunas. Um refúgio arquitetônico projetado para
            reconectar você ao ritmo do mar e à natureza.
          </p>

          <div className="hero-actions">
            <a href="#quartos" className="btn btn-primary">
              <span>Ver Acomodações</span>
              <ArrowRight />
            </a>
            <a href="#conceito" className="btn btn-secondary">
              <span>O Conceito</span>
            </a>
          </div>
        </div>

        {/* Carrossel de Imagens de Alta Resolução */}
        <div
          className="hero-carousel"
          aria-label="Imagens do Resort"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.src}
              className={`hero-slide${idx === currentIndex ? ' active' : ''}`}
            >
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}

          {/* Botões de Navegação */}
          <button
            type="button"
            className="hero-ctrl hero-prev"
            aria-label="Slide anterior"
            onClick={prevSlide}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="hero-ctrl hero-next"
            aria-label="Próximo slide"
            onClick={nextSlide}
          >
            <ChevronRight />
          </button>

          {/* Indicadores (Bolinhas) */}
          <div
            className="hero-indicators"
            role="tablist"
            aria-label="Seletores de slide"
          >
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.src}
                type="button"
                className={`hero-dot${idx === currentIndex ? ' active' : ''}`}
                role="tab"
                aria-selected={idx === currentIndex}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

