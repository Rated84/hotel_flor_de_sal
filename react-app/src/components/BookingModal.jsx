import { X, MessageCircle, Mail } from 'lucide-react';
import { roomsData, guestOptions } from '../data/hotelData';

const formatBrDate = (dateStr) => {
  if (!dateStr) return '--';
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export default function BookingModal({
  isOpen,
  onClose,
  selectedRoom,
  checkinDate,
  checkoutDate,
  selectedGuests,
}) {
  const roomData =
    roomsData.find((r) => r.id === selectedRoom) || roomsData[0];
  const guestOption =
    guestOptions.find((g) => g.value === selectedGuests) || guestOptions[0];

  const dIn = new Date(checkinDate);
  const dOut = new Date(checkoutDate);
  const diffTime = Math.max(
    1,
    Math.round((dOut - dIn) / (1000 * 60 * 60 * 24))
  );
  const totalEstimate = diffTime * roomData.price;

  const waMsg = encodeURIComponent(
    `Olá! Gostaria de consultar disponibilidade no Flor de Sal Hotel:\n\n` +
      `• Acomodação: ${roomData.selectLabel}\n` +
      `• Check-in: ${formatBrDate(checkinDate)}\n` +
      `• Check-out: ${formatBrDate(checkoutDate)} (${diffTime} noites)\n` +
      `• Hóspedes: ${guestOption.label}\n` +
      `• Valor estimado: R$ ${totalEstimate.toLocaleString('pt-BR')},00\n\n` +
      `(Projeto Acadêmico - UFERSA)`
  );

  const whatsappHref = `https://wa.me/5584999999999?text=${waMsg}`;
  const emailHref = `mailto:reservas@floradesal.com?subject=${encodeURIComponent(
    'Consulta de Reserva — Flor de Sal Hotel'
  )}&body=${waMsg}`;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`booking-modal${isOpen ? ' active' : ''}`}
      id="booking-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog">
        <div className="modal-header">
          <h3 id="modal-title">Solicitação de Reserva</h3>
          <button
            type="button"
            className="modal-close-btn"
            id="modal-close-btn"
            aria-label="Fechar janela"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-summary-box">
            <div className="summary-row">
              <span>Acomodação:</span>
              <strong id="modal-summary-room">{roomData.selectLabel}</strong>
            </div>
            <div className="summary-row">
              <span>Período:</span>
              <strong id="modal-summary-dates">
                {formatBrDate(checkinDate)} até {formatBrDate(checkoutDate)} (
                {diffTime} noites)
              </strong>
            </div>
            <div className="summary-row">
              <span>Hóspedes:</span>
              <strong id="modal-summary-guests">{guestOption.label}</strong>
            </div>
            <div className="summary-row">
              <span>Valor Estimado:</span>
              <strong id="modal-summary-price">
                R$ {totalEstimate.toLocaleString('pt-BR')},00 (est.)
              </strong>
            </div>
          </div>

          <div className="modal-actions">
            <a
              href={whatsappHref}
              className="btn btn-whatsapp"
              id="whatsapp-booking-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              <span>Continuar pelo WhatsApp</span>
            </a>
            <a href={emailHref} className="btn btn-secondary" id="email-booking-btn">
              <Mail />
              <span>Enviar por E-mail</span>
            </a>
          </div>

          <p className="modal-disclaimer">
            *Esta é uma demonstração do projeto acadêmico Flor de Sal. O link
            acima gera uma mensagem pré-formatada para simulação de atendimento.
          </p>
        </div>
      </div>
    </div>
  );
}

