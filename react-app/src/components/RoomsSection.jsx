import { useState, useRef } from 'react';
import {
  Sparkles,
  Wind,
  Sun,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Users,
  Compass,
  Wifi,
  Coffee,
  Droplet,
  Tv,
  Wine,
  Eye,
  ArrowRight,
} from 'lucide-react';
import { roomsData } from '../data/hotelData';

const iconMap = {
  Sparkles,
  Wind,
  Sun,
  Maximize2,
  Users,
  Compass,
  Wifi,
  Coffee,
  Droplet,
  Tv,
  Wine,
  Eye,
};

function RoomSlider({ photos, ariaLabel }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const stepPhoto = (step) => {
    setActivePhotoIdx((prev) => (prev + step + photos.length) % photos.length);
  };

  return (
    <div className="room-slider" aria-label={ariaLabel}>
      {photos.map((photo, idx) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className={`room-slide-img${idx === activePhotoIdx ? ' is-active' : ''}`}
        />
      ))}

      <div className="room-slider-ctrls">
        <button
          type="button"
          className="room-slider-btn"
          aria-label="Foto anterior"
          onClick={() => stepPhoto(-1)}
        >
          <ChevronLeft />
        </button>
        <span className="room-photo-counter" aria-live="polite">
          {activePhotoIdx + 1} / {photos.length}
        </span>
        <button
          type="button"
          className="room-slider-btn"
          aria-label="Próxima foto"
          onClick={() => stepPhoto(1)}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default function RoomsSection({ onReserveRoom }) {
  const [activeTabId, setActiveTabId] = useState(roomsData[0].id);
  const tabRefs = useRef([]);

  const handleTabKeyDown = (e, index) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault();
    const direction = e.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + direction + roomsData.length) % roomsData.length;
    const nextRoom = roomsData[nextIndex];
    setActiveTabId(nextRoom.id);
    if (tabRefs.current[nextIndex]) {
      tabRefs.current[nextIndex].focus();
    }
  };

  return (
    <section className="container rooms-section" id="quartos">
      <div className="section-header reveal">
        <span className="section-tag">Exclusividade &amp; Conforto</span>
        <h2 className="section-title">Nossas Acomodações</h2>
        <p className="section-subtitle">
          Projetadas para proporcionar privacidade absoluta, integração com a
          paisagem e o mais alto padrão de relaxamento.
        </p>
      </div>

      {/* Abas de Navegação dos Quartos */}
      <div
        className="rooms-tabs reveal"
        role="tablist"
        aria-label="Escolha uma acomodação"
      >
        {roomsData.map((room, index) => {
          const TabIcon = iconMap[room.tabIcon] || Sparkles;
          const isSelected = activeTabId === room.id;
          return (
            <button
              key={room.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              className="room-tab-btn"
              type="button"
              role="tab"
              id={`tab-${room.id}`}
              aria-controls={`panel-${room.id}`}
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTabId(room.id)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
            >
              <TabIcon />
              <span>{room.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Painéis de cada acomodação */}
      {roomsData.map((room) => {
        const isActive = activeTabId === room.id;
        return (
          <article
            key={room.id}
            className={`room-card-panel${isActive ? ' active' : ''}`}
            id={`panel-${room.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${room.id}`}
            hidden={!isActive}
          >
            <div className="room-layout">
              <RoomSlider
                photos={room.photos}
                ariaLabel={room.galleryAriaLabel}
              />

              <div className="room-details">
                <div>
                  <div className="room-header-wrap">
                    <img
                      src={room.logo}
                      alt={room.logoAlt}
                      className="room-logo-thumb"
                    />
                    <div className="room-title-box">
                      <span className="room-type-tag">{room.typeTag}</span>
                      <h3>{room.name}</h3>
                    </div>
                  </div>

                  <p className="room-description">{room.description}</p>

                  {/* Ficha Técnica */}
                  <div className="room-specs-grid">
                    {room.specs.map((spec) => {
                      const SpecIcon = iconMap[spec.icon] || Maximize2;
                      return (
                        <div key={spec.label} className="spec-item">
                          <span className="spec-label">{spec.label}</span>
                          <span className="spec-val">
                            <SpecIcon /> {spec.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Comodidades com Ícones */}
                  <div className="room-amenities-list">
                    {room.amenities.map((amenity) => {
                      const AmenityIcon = iconMap[amenity.icon] || Wifi;
                      return (
                        <div key={amenity.label} className="amenity-chip">
                          <AmenityIcon /> {amenity.label}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="room-cta-row">
                  <div className="room-price-box">
                    <span className="price-sub">Diárias a partir de</span>
                    <span className="price-main">
                      {room.priceFormatted}{' '}
                      <span className="price-period">/ noite</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => onReserveRoom(room.id)}
                  >
                    <span>{room.ctaLabel}</span>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

