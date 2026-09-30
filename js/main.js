/**
 * FLOR DE SAL HOTEL — MAIN SCRIPT
 * Interatividades: Navbar, Carrossel Hero, Sliders de Quartos, 
 * Abas Acessíveis, Simulador de Reserva com WhatsApp, Lightbox e Scroll Reveal.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa Ícones Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // =========================================================================
    // 2. NAVBAR: SCROLL EFFECTS, SCROLL SPY & MENU MOBILE
    // =========================================================================
    const header = document.querySelector('.site-header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Menu Mobile
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', String(isOpen));
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
                if (window.lucide) lucide.createIcons();
            }
        });

        // Fecha ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    const icon = mobileToggle.querySelector('i');
                    if (icon) {
                        icon.setAttribute('data-lucide', 'menu');
                        if (window.lucide) lucide.createIcons();
                    }
                }
            });
        });

        // Fecha ao clicar fora
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target) && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    if (window.lucide) lucide.createIcons();
                }
            }
        });
    }

    // Scroll Spy: Destaca link ativo conforme rolagem
    const sections = document.querySelectorAll('section[id], main[id]');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));


    // =========================================================================
    // 3. CARROSSEL DA SEÇÃO HERO
    // =========================================================================
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    const heroPrev = document.querySelector('.hero-prev');
    const heroNext = document.querySelector('.hero-next');
    let heroCurrentIndex = 0;
    let heroTimer = null;

    const showHeroSlide = (index) => {
        if (!heroSlides.length) return;
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));

        heroCurrentIndex = (index + heroSlides.length) % heroSlides.length;

        heroSlides[heroCurrentIndex].classList.add('active');
        if (heroDots[heroCurrentIndex]) {
            heroDots[heroCurrentIndex].classList.add('active');
        }
    };

    const nextHeroSlide = () => showHeroSlide(heroCurrentIndex + 1);
    const prevHeroSlide = () => showHeroSlide(heroCurrentIndex - 1);

    const startHeroTimer = () => {
        clearInterval(heroTimer);
        heroTimer = setInterval(nextHeroSlide, 6000);
    };

    if (heroSlides.length > 0) {
        if (heroNext) {
            heroNext.addEventListener('click', () => {
                nextHeroSlide();
                startHeroTimer();
            });
        }
        if (heroPrev) {
            heroPrev.addEventListener('click', () => {
                prevHeroSlide();
                startHeroTimer();
            });
        }
        heroDots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                showHeroSlide(idx);
                startHeroTimer();
            });
        });

        // Pausa no hover para leitura agradável
        const heroCarousel = document.querySelector('.hero-carousel');
        if (heroCarousel) {
            heroCarousel.addEventListener('mouseenter', () => clearInterval(heroTimer));
            heroCarousel.addEventListener('mouseleave', startHeroTimer);
        }

        // Suporte a Swipe no Touch
        let touchStartX = 0;
        let touchEndX = 0;
        if (heroCarousel) {
            heroCarousel.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            heroCarousel.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                if (touchStartX - touchEndX > 50) {
                    nextHeroSlide();
                    startHeroTimer();
                } else if (touchEndX - touchStartX > 50) {
                    prevHeroSlide();
                    startHeroTimer();
                }
            }, { passive: true });
        }

        startHeroTimer();
    }


    // =========================================================================
    // 4. ABAS E SLIDERS DAS ACOMODAÇÕES (QUARTOS)
    // =========================================================================
    const roomTabButtons = document.querySelectorAll('.room-tab-btn');
    const roomPanels = document.querySelectorAll('.room-card-panel');

    roomTabButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Atualiza botões
            roomTabButtons.forEach(b => {
                b.setAttribute('aria-selected', 'false');
                b.setAttribute('tabindex', '-1');
            });
            btn.setAttribute('aria-selected', 'true');
            btn.setAttribute('tabindex', '0');

            // Atualiza painéis
            const targetId = btn.getAttribute('aria-controls');
            roomPanels.forEach(panel => {
                const isActive = panel.id === targetId;
                panel.classList.toggle('active', isActive);
                panel.hidden = !isActive;
            });
        });

        // Navegação por teclado acessível
        btn.addEventListener('keydown', (e) => {
            if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
            e.preventDefault();
            const direction = e.key === 'ArrowRight' ? 1 : -1;
            const nextIndex = (index + direction + roomTabButtons.length) % roomTabButtons.length;
            roomTabButtons[nextIndex].focus();
            roomTabButtons[nextIndex].click();
        });
    });

    // Inicializa sliders individuais de fotos de cada quarto
    document.querySelectorAll('.room-slider').forEach(slider => {
        const slides = slider.querySelectorAll('.room-slide-img');
        const counter = slider.querySelector('.room-photo-counter');
        const prevBtn = slider.querySelector('[data-room-step="-1"]');
        const nextBtn = slider.querySelector('[data-room-step="1"]');
        let activeIdx = 0;

        const updateRoomSlide = (index) => {
            if (!slides.length) return;
            activeIdx = (index + slides.length) % slides.length;
            slides.forEach((img, idx) => {
                img.classList.toggle('is-active', idx === activeIdx);
            });
            if (counter) {
                counter.textContent = `${activeIdx + 1} / ${slides.length}`;
            }
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => updateRoomSlide(activeIdx - 1));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => updateRoomSlide(activeIdx + 1));
        }

        updateRoomSlide(0);
    });


    // =========================================================================
    // 5. WIDGET DE RESERVA & MODAL INTERATIVO COM WHATSAPP
    // =========================================================================
    const checkinInput = document.getElementById('checkin-date');
    const checkoutInput = document.getElementById('checkout-date');
    const roomSelect = document.getElementById('booking-room-select');
    const guestsSelect = document.getElementById('booking-guests-select');
    const bookingForm = document.getElementById('booking-bar-form');

    const bookingModal = document.getElementById('booking-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const whatsappBtn = document.getElementById('whatsapp-booking-btn');
    const emailBtn = document.getElementById('email-booking-btn');

    // Valores fictícios por diária
    const roomPrices = {
        'salina': { name: 'Suíte Salina (Master)', price: 1450 },
        'maresia': { name: 'Bangalô Maresia', price: 1180 },
        'duna': { name: 'Refúgio Duna', price: 890 }
    };

    // Configura datas padrão: amanhã até 3 dias depois
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(tomorrow);
    dayAfter.setDate(dayAfter.getDate() + 3);

    const formatDateVal = (date) => date.toISOString().split('T')[0];

    if (checkinInput && checkoutInput) {
        checkinInput.min = formatDateVal(today);
        checkinInput.value = formatDateVal(tomorrow);
        checkoutInput.min = formatDateVal(tomorrow);
        checkoutInput.value = formatDateVal(dayAfter);

        checkinInput.addEventListener('change', () => {
            const newCheckin = new Date(checkinInput.value);
            const minCheckout = new Date(newCheckin);
            minCheckout.setDate(minCheckout.getDate() + 1);
            checkoutInput.min = formatDateVal(minCheckout);

            if (new Date(checkoutInput.value) <= newCheckin) {
                checkoutInput.value = formatDateVal(minCheckout);
            }
        });
    }

    const openBookingModal = (selectedRoomId) => {
        if (selectedRoomId && roomSelect) {
            roomSelect.value = selectedRoomId;
        }

        const roomKey = roomSelect ? roomSelect.value : 'salina';
        const roomData = roomPrices[roomKey] || roomPrices['salina'];
        const guestsText = guestsSelect ? guestsSelect.options[guestsSelect.selectedIndex].text : '2 Hóspedes';

        const dIn = checkinInput ? new Date(checkinInput.value) : tomorrow;
        const dOut = checkoutInput ? new Date(checkoutInput.value) : dayAfter;
        const diffTime = Math.max(1, Math.round((dOut - dIn) / (1000 * 60 * 60 * 24)));
        const totalEstimate = diffTime * roomData.price;

        const formatBrDate = (date) => {
            return date.toLocaleDateString('pt-BR', { timeZone: 'UTC', day: '2-digit', month: '2-digit', year: 'numeric' });
        };

        // Preenche resumo no modal
        document.getElementById('modal-summary-room').textContent = roomData.name;
        document.getElementById('modal-summary-dates').textContent = `${formatBrDate(dIn)} até ${formatBrDate(dOut)} (${diffTime} noites)`;
        document.getElementById('modal-summary-guests').textContent = guestsText;
        document.getElementById('modal-summary-price').textContent = `R$ ${totalEstimate.toLocaleString('pt-BR')},00 (est.)`;

        // Prepara mensagem personalizada para WhatsApp
        const waMsg = encodeURIComponent(
            `Olá! Gostaria de consultar disponibilidade no Flor de Sal Hotel:\n\n` +
            `• Acomodação: ${roomData.name}\n` +
            `• Check-in: ${formatBrDate(dIn)}\n` +
            `• Check-out: ${formatBrDate(dOut)} (${diffTime} noites)\n` +
            `• Hóspedes: ${guestsText}\n` +
            `• Valor estimado: R$ ${totalEstimate.toLocaleString('pt-BR')},00\n\n` +
            `(Projeto Acadêmico - UFERSA)`
        );
        if (whatsappBtn) {
            whatsappBtn.href = `https://wa.me/5584999999999?text=${waMsg}`;
        }

        // Prepara link de e-mail
        if (emailBtn) {
            emailBtn.href = `mailto:reservas@floradesal.com?subject=${encodeURIComponent('Consulta de Reserva — Flor de Sal Hotel')}&body=${waMsg}`;
        }

        if (bookingModal) {
            bookingModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeBookingModal = () => {
        if (bookingModal) {
            bookingModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            openBookingModal(roomSelect ? roomSelect.value : 'salina');
        });
    }

    // Botões "Reservar Esta Acomodação" nos cards dos quartos
    document.querySelectorAll('[data-reserve-room]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const roomType = btn.getAttribute('data-reserve-room');
            openBookingModal(roomType);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeBookingModal);
    }
    if (bookingModal) {
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) closeBookingModal();
        });
    }


    // =========================================================================
    // 6. GALERIA LIGHTBOX (VISUALIZAÇÃO DE RENDERS EM TELA CHEIA)
    // =========================================================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let currentLightboxIdx = 0;
    const galleryData = Array.from(galleryItems).map(item => ({
        src: item.getAttribute('data-img-src') || item.querySelector('img').src,
        title: item.getAttribute('data-img-title') || 'Flor de Sal Hotel',
        desc: item.getAttribute('data-img-desc') || 'Representação visual do projeto arquitetônico.'
    }));

    const showLightboxIndex = (index) => {
        if (!galleryData.length || !lightboxModal) return;
        currentLightboxIdx = (index + galleryData.length) % galleryData.length;
        const item = galleryData[currentLightboxIdx];

        lightboxImg.src = item.src;
        lightboxImg.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxDesc.textContent = item.desc;
    };

    const openLightbox = (index) => {
        showLightboxIndex(index);
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => showLightboxIndex(currentLightboxIdx - 1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => showLightboxIndex(currentLightboxIdx + 1));

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
                closeLightbox();
            }
        });
    }

    // Tecla ESC e setas do teclado para modais
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBookingModal();
            closeLightbox();
        }
        if (lightboxModal && lightboxModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') showLightboxIndex(currentLightboxIdx - 1);
            if (e.key === 'ArrowRight') showLightboxIndex(currentLightboxIdx + 1);
        }
    });


    // =========================================================================
    // 7. ANIMAÇÕES SCROLL REVEAL COM INTERSECTION OBSERVER
    // =========================================================================
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
});
