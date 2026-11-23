/**
 * FLOR DE SAL HOTEL — GALERIA COMPLETA (galeria.html)
 * Monta o mosaico e os filtros a partir de js/fotos.js e controla o visualizador.
 * Não é preciso editar este arquivo para adicionar fotos — edite apenas js/fotos.js.
 */
document.addEventListener('DOMContentLoaded', () => {
    const fotos = (typeof FOTOS_GALERIA !== 'undefined' && Array.isArray(FOTOS_GALERIA)) ? FOTOS_GALERIA : [];

    const grid = document.getElementById('gp-masonry');
    const filtersBox = document.getElementById('gp-filters');
    const emptyMsg = document.getElementById('gp-empty');

    const lightbox = document.getElementById('gallery-lightbox');
    const lbImg = document.getElementById('lightbox-image');
    const lbTitle = document.getElementById('lightbox-title');
    const lbDesc = document.getElementById('lightbox-desc');
    const lbCounter = document.getElementById('lightbox-counter');
    const lbClose = document.getElementById('lightbox-close');
    const lbPrev = document.getElementById('lightbox-prev');
    const lbNext = document.getElementById('lightbox-next');

    let visiveis = [];      // fotos do filtro atual (o visualizador navega só por elas)
    let atual = 0;
    let ultimoFoco = null;

    const TODOS = 'Todos';

    // ---------------------------------------------------------------------
    // Filtros
    // ---------------------------------------------------------------------
    const categorias = [TODOS, ...new Set(fotos.map(f => f.categoria).filter(Boolean))];

    categorias.forEach((cat, i) => {
        const qtd = cat === TODOS ? fotos.length : fotos.filter(f => f.categoria === cat).length;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'gp-filter-btn' + (i === 0 ? ' is-active' : '');
        btn.setAttribute('aria-pressed', String(i === 0));
        btn.dataset.cat = cat;
        btn.innerHTML = '<span></span><small></small>';
        btn.querySelector('span').textContent = cat;
        btn.querySelector('small').textContent = qtd;
        btn.addEventListener('click', () => {
            filtersBox.querySelectorAll('.gp-filter-btn').forEach(b => {
                const on = b === btn;
                b.classList.toggle('is-active', on);
                b.setAttribute('aria-pressed', String(on));
            });
            render(cat);
        });
        filtersBox.appendChild(btn);
    });

    // ---------------------------------------------------------------------
    // Mosaico
    // ---------------------------------------------------------------------
    const criarItem = (foto, idx) => {
        const item = document.createElement('figure');
        item.className = 'gp-item';
        item.tabIndex = 0;
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `Ampliar foto: ${foto.titulo || 'Flor de Sal Hotel'}`);
        item.style.animationDelay = `${Math.min(idx, 12) * 40}ms`;

        const img = document.createElement('img');
        img.src = foto.src;
        img.alt = foto.titulo || 'Flor de Sal Hotel';
        img.loading = 'lazy';
        img.decoding = 'async';
        // Se a imagem não existir, esconde o card em vez de mostrar um ícone quebrado
        img.addEventListener('error', () => {
            item.hidden = true;
            console.warn(`[Galeria] Imagem não encontrada: ${foto.src}`);
        });

        const cap = document.createElement('figcaption');
        cap.className = 'gp-caption';
        const tag = document.createElement('span');
        tag.className = 'gallery-tag';
        tag.textContent = foto.categoria || '';
        const title = document.createElement('span');
        title.className = 'gp-caption-title';
        title.textContent = foto.titulo || '';
        cap.append(tag, title);

        const zoom = document.createElement('span');
        zoom.className = 'gallery-zoom-icon';
        zoom.innerHTML = '<i data-lucide="maximize-2"></i>';

        item.append(img, cap, zoom);

        const abrir = () => abrirLightbox(idx, item);
        item.addEventListener('click', abrir);
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                abrir();
            }
        });
        return item;
    };

    const render = (cat) => {
        visiveis = cat === TODOS ? fotos.slice() : fotos.filter(f => f.categoria === cat);
        const frag = document.createDocumentFragment();
        visiveis.forEach((foto, idx) => frag.appendChild(criarItem(foto, idx)));
        grid.replaceChildren(frag);
        emptyMsg.hidden = visiveis.length > 0;
        if (window.lucide) lucide.createIcons();
    };

    // ---------------------------------------------------------------------
    // Visualizador (lightbox)
    // ---------------------------------------------------------------------
    const precarregar = (i) => {
        const f = visiveis[(i + visiveis.length) % visiveis.length];
        if (f) { const im = new Image(); im.src = f.src; }
    };

    const mostrar = (i) => {
        if (!visiveis.length) return;
        atual = (i + visiveis.length) % visiveis.length;
        const f = visiveis[atual];
        lbImg.src = f.src;
        lbImg.alt = f.titulo || '';
        lbTitle.textContent = f.titulo || '';
        lbDesc.textContent = f.legenda || '';
        lbCounter.textContent = `${atual + 1} / ${visiveis.length}`;
        const unica = visiveis.length < 2;
        lbPrev.hidden = unica;
        lbNext.hidden = unica;
        precarregar(atual + 1);
        precarregar(atual - 1);
    };

    const abrirLightbox = (i, origem) => {
        ultimoFoco = origem || null;
        mostrar(i);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        lbClose.focus();
    };

    const fecharLightbox = () => {
        if (!lightbox.classList.contains('active')) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        if (ultimoFoco) ultimoFoco.focus();
    };

    lbClose.addEventListener('click', fecharLightbox);
    lbPrev.addEventListener('click', () => mostrar(atual - 1));
    lbNext.addEventListener('click', () => mostrar(atual + 1));

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) fecharLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') fecharLightbox();
        if (e.key === 'ArrowLeft') mostrar(atual - 1);
        if (e.key === 'ArrowRight') mostrar(atual + 1);
    });

    // Swipe no celular
    let toqueX = 0;
    lightbox.addEventListener('touchstart', (e) => { toqueX = e.changedTouches[0].screenX; }, { passive: true });
    lightbox.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].screenX - toqueX;
        if (Math.abs(dx) > 50) mostrar(atual + (dx < 0 ? 1 : -1));
    }, { passive: true });

    // Abre já filtrado se o link vier com ?categoria=Quartos
    const catUrl = new URLSearchParams(location.search).get('categoria');
    const btnInicial = catUrl && filtersBox.querySelector(`[data-cat="${CSS.escape(catUrl)}"]`);
    if (btnInicial) {
        btnInicial.click();
    } else {
        render(TODOS);
    }
});
