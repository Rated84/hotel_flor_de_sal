import { Calendar, CalendarCheck, Bed, Users, ArrowRight } from 'lucide-react';
import { roomsData, guestOptions } from '../data/hotelData';

export default function BookingBar({
  checkinDate,
  minCheckin,
  checkoutDate,
  minCheckout,
  selectedRoom,
  selectedGuests,
  onCheckinChange,
  onCheckoutChange,
  onRoomChange,
  onGuestsChange,
  onSubmitBooking,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitBooking(selectedRoom);
  };

  return (
    <div className="booking-bar-wrapper" id="reserva">
      <form className="booking-bar reveal" id="booking-bar-form" onSubmit={handleSubmit}>
        <div className="booking-field">
          <label htmlFor="checkin-date" className="booking-label">
            <Calendar />
            <span>Check-in</span>
          </label>
          <input
            type="date"
            id="checkin-date"
            className="booking-input"
            min={minCheckin}
            value={checkinDate}
            onChange={(e) => onCheckinChange(e.target.value)}
            required
          />
        </div>

        <div className="booking-field">
          <label htmlFor="checkout-date" className="booking-label">
            <CalendarCheck />
            <span>Check-out</span>
          </label>
          <input
            type="date"
            id="checkout-date"
            className="booking-input"
            min={minCheckout}
            value={checkoutDate}
            onChange={(e) => onCheckoutChange(e.target.value)}
            required
          />
        </div>

        <div className="booking-field">
          <label htmlFor="booking-room-select" className="booking-label">
            <Bed />
            <span>Acomodação</span>
          </label>
          <select
            id="booking-room-select"
            className="booking-select"
            value={selectedRoom}
            onChange={(e) => onRoomChange(e.target.value)}
          >
            {roomsData.map((room) => (
              <option key={room.id} value={room.id}>
                {room.selectLabel}
              </option>
            ))}
          </select>
        </div>

        <div className="booking-field">
          <label htmlFor="booking-guests-select" className="booking-label">
            <Users />
            <span>Hóspedes</span>
          </label>
          <select
            id="booking-guests-select"
            className="booking-select"
            value={selectedGuests}
            onChange={(e) => onGuestsChange(e.target.value)}
          >
            {guestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary booking-submit-btn">
          <span>Disponibilidade</span>
          <ArrowRight />
        </button>
      </form>
    </div>
  );
}

