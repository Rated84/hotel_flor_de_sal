import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar';
import ConceptSection from './components/ConceptSection';
import RoomsSection from './components/RoomsSection';
import AmenitiesSection from './components/AmenitiesSection';
import GallerySection from './components/GallerySection';
import AcademicNote from './components/AcademicNote';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LightboxModal from './components/LightboxModal';
import { galleryData } from './data/hotelData';
import { useScrollReveal } from './hooks/useScrollReveal';

const formatDateVal = (date) => date.toISOString().split('T')[0];

const getInitialDates = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(dayAfter.getDate() + 3);
  return {
    minCheckin: formatDateVal(today),
    checkin: formatDateVal(tomorrow),
    minCheckout: formatDateVal(tomorrow),
    checkout: formatDateVal(dayAfter),
  };
};

export default function App() {
  useScrollReveal();

  const initialDates = getInitialDates();
  const [minCheckin] = useState(initialDates.minCheckin);
  const [checkinDate, setCheckinDate] = useState(initialDates.checkin);
  const [minCheckout, setMinCheckout] = useState(initialDates.minCheckout);
  const [checkoutDate, setCheckoutDate] = useState(initialDates.checkout);
  const [selectedRoom, setSelectedRoom] = useState('salina');
  const [selectedGuests, setSelectedGuests] = useState('2');

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleCheckinChange = (newVal) => {
    setCheckinDate(newVal);
    const newCheckin = new Date(newVal);
    const nextMinCheckout = new Date(newCheckin);
    nextMinCheckout.setDate(nextMinCheckout.getDate() + 1);
    const nextMinCheckoutStr = formatDateVal(nextMinCheckout);
    setMinCheckout(nextMinCheckoutStr);

    if (new Date(checkoutDate) <= newCheckin) {
      setCheckoutDate(nextMinCheckoutStr);
    }
  };

  const openBookingModal = useCallback((roomId) => {
    if (roomId) {
      setSelectedRoom(roomId);
    }
    setBookingModalOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setBookingModalOpen(false);
  }, []);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const prevLightbox = useCallback(() => {
    setLightboxIndex(
      (prev) => (prev - 1 + galleryData.length) % galleryData.length
    );
  }, []);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryData.length);
  }, []);

  // Controla overflow do body quando modal ou lightbox estão abertos
  useEffect(() => {
    if (bookingModalOpen || lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [bookingModalOpen, lightboxOpen]);

  // Navegação por teclado para modais (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeBookingModal();
        closeLightbox();
      }
      if (lightboxOpen) {
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeBookingModal, closeLightbox, prevLightbox, nextLightbox]);

  return (
    <>
      <Header />
      <Hero />
      <BookingBar
        checkinDate={checkinDate}
        minCheckin={minCheckin}
        checkoutDate={checkoutDate}
        minCheckout={minCheckout}
        selectedRoom={selectedRoom}
        selectedGuests={selectedGuests}
        onCheckinChange={handleCheckinChange}
        onCheckoutChange={setCheckoutDate}
        onRoomChange={setSelectedRoom}
        onGuestsChange={setSelectedGuests}
        onSubmitBooking={openBookingModal}
      />
      <ConceptSection />
      <RoomsSection onReserveRoom={openBookingModal} />
      <AmenitiesSection />
      <GallerySection onOpenLightbox={openLightbox} />
      <AcademicNote />
      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={closeBookingModal}
        selectedRoom={selectedRoom}
        checkinDate={checkinDate}
        checkoutDate={checkoutDate}
        selectedGuests={selectedGuests}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />
    </>
  );
}

