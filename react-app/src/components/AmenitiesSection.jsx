import { Waves, UtensilsCrossed, Sparkles } from 'lucide-react';
import { experiencesData } from '../data/hotelData';

const expIcons = {
  Waves,
  UtensilsCrossed,
  Sparkles,
};

export default function AmenitiesSection() {
  return (
    <section className="amenities-section" id="experiencias">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">A Experiência Completa</span>
          <h2 className="section-title">Sensações que marcam a alma</h2>
          <p className="section-subtitle">
            Momentos desenhados para desconectar você da rotina e conectar ao
            ritmo calmo da maré.
          </p>
        </div>

        <div className="cards-grid">
          {experiencesData.map((exp) => {
            const IconComponent = expIcons[exp.icon] || Waves;
            return (
              <div
                key={exp.title}
                className="amenity-card reveal"
                style={exp.delay !== '0s' ? { transitionDelay: exp.delay } : undefined}
              >
                <div className="amenity-icon-box">
                  <IconComponent />
                </div>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

