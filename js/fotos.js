/**
 * FLOR DE SAL HOTEL — LISTA DE FOTOS DA GALERIA COMPLETA (galeria.html)
 *
 * COMO ADICIONAR UMA FOTO:
 *   1. Coloque o arquivo em uma pasta dentro de "fotos/" (ex.: fotos/galeria/).
 *      Use nomes minúsculos, sem acentos e sem espaços: "restaurante-noite.jpg".
 *   2. Copie uma linha abaixo e troque os dados.
 *
 *   src       → caminho da imagem (relativo, SEM "/" no início)
 *   titulo    → nome que aparece na foto e no visualizador
 *   legenda   → texto que aparece ao ampliar
 *   categoria → usada nos filtros (uma categoria nova cria um botão novo sozinha)
 *
 * A ordem da lista é a ordem em que as fotos aparecem.
 */
const FOTOS_GALERIA = [
    // --- Áreas comuns e lazer ---
    { src: "fotos/carrossel/carrossel-1.jpg",          titulo: "Vista Panorâmica do Resort",   categoria: "Arquitetura", legenda: "Implantação do Flor de Sal integrada às dunas e à orla de Upanema." },
    { src: "fotos/carrossel/carrossel-2.jpg",          titulo: "Piscina sobre o Mar",          categoria: "Lazer",       legenda: "Piscina de borda infinita debruçada sobre o Atlântico." },
    { src: "fotos/carrossel/galeria-piscina.jpg",      titulo: "Piscina de Borda Infinita",    categoria: "Lazer",       legenda: "Espelho d'água de alvenaria e pedra clara debruçado sobre a orla do Atlântico." },
    { src: "fotos/carrossel/galeria-restaurante.jpeg", titulo: "Restaurante Cristal de Sal",   categoria: "Gastronomia", legenda: "Espaço gastronômico com pé-direito generoso, iluminação intimista e mobiliário em madeira maciça." },
    { src: "fotos/carrossel/galeria-praia.png",        titulo: "Praia & Dunas da Costa Branca", categoria: "Paisagem",   legenda: "Cenário costeiro com areia branca e mar tranquilo, berço da inspiração do resort." },
    { src: "fotos/carrossel/galeria-quarto.jpg",       titulo: "Acomodação com Vista Oceânica", categoria: "Quartos",    legenda: "Integração entre quarto e paisagem com ventilação cruzada e brises de proteção solar." },

    // --- Quarto Salina ---
    { src: "fotos/quarto-salina/salina-1.jpg", titulo: "Quarto Salina — Vista Mar",  categoria: "Quartos", legenda: "Suíte master com vista panorâmica para o oceano." },
    { src: "fotos/quarto-salina/salina-2.jpg", titulo: "Quarto Salina — Interior",   categoria: "Quartos", legenda: "Iluminação zenital e tons inspirados nos cristais de sal." },
    { src: "fotos/quarto-salina/salina-3.jpg", titulo: "Quarto Salina — Varanda",    categoria: "Quartos", legenda: "Varanda privativa debruçada sobre o mar." },

    // --- Quarto Maresia ---
    { src: "fotos/quarto-maresia/maresia-1.png", titulo: "Quarto Maresia — Fachada", categoria: "Quartos", legenda: "Bangalô tropical envolvido pela vegetação litorânea." },
    { src: "fotos/quarto-maresia/maresia-2.png", titulo: "Quarto Maresia — Interior", categoria: "Quartos", legenda: "Ambiente interno integrado com ventilação cruzada contínua." },
    { src: "fotos/quarto-maresia/maresia-3.png", titulo: "Quarto Maresia — Deck",    categoria: "Quartos", legenda: "Deck de madeira suspenso com redes artesanais." },

    // --- Quarto Duna ---
    { src: "fotos/quarto-duna/duna-1.jpeg", titulo: "Quarto Duna — Interior",     categoria: "Quartos", legenda: "Cama e acabamentos amadeirados em tons areia e linho." },
    { src: "fotos/quarto-duna/duna-2.jpeg", titulo: "Quarto Duna — Vista",        categoria: "Quartos", legenda: "Vista para o mar através de grandes panos de vidro." },
    { src: "fotos/quarto-duna/duna-3.jpeg", titulo: "Quarto Duna — Integração",   categoria: "Quartos", legenda: "Integração do refúgio com as dunas da Costa Branca." },
];
