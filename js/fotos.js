/**
 * FLOR DE SAL HOTEL — LISTA DE FOTOS DA GALERIA COMPLETA (galeria.html)
 *
 * COMO ADICIONAR UMA FOTO:
 *   1. Coloque o arquivo em fotos/galeria/.
 *      Use nomes minúsculos, sem acentos e sem espaços: "restaurante-noite.webp".
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
    // --- Arquitetura e acesso ---
    { src: "fotos/galeria/fachada.webp",                    titulo: "Fachada & Acesso",              categoria: "Arquitetura", legenda: "Pórtico de acesso em pedra natural com marquise em madeira e o emblema do Flor de Sal." },
    { src: "fotos/galeria/fachada-noite.webp",              titulo: "Fachada à Noite",               categoria: "Arquitetura", legenda: "Iluminação noturna valorizando a textura da pedra e o letreiro do hotel." },
    { src: "fotos/galeria/lobby.webp",                      titulo: "Lobby Aberto",                  categoria: "Arquitetura", legenda: "Estar coberto com mobiliário em madeira ripada e vista para jardins e piscinas." },
    { src: "fotos/galeria/recepcao-dormitorio.webp",        titulo: "Recepção do Bloco de Hospedagem", categoria: "Arquitetura", legenda: "Balcão em pedra e pilares-árvore em madeira com iluminação acolhedora." },
    { src: "fotos/galeria/corredor-dormitorio.webp",        titulo: "Corredor dos Quartos",          categoria: "Arquitetura", legenda: "Circulação com jardim interno de cactos e iluminação zenital natural." },
    { src: "fotos/galeria/corredor-dormitorio-noite.webp",  titulo: "Corredor dos Quartos à Noite",  categoria: "Arquitetura", legenda: "O jardim interno do bloco de hospedagem sob iluminação noturna." },

    // --- Piscinas e áreas externas ---
    { src: "fotos/galeria/area-de-lazer.webp",              titulo: "Área de Lazer",                 categoria: "Lazer", legenda: "Piscina de formas orgânicas cercada por coqueiros e pelos blocos de hospedagem." },
    { src: "fotos/galeria/area-de-lazer-dia.webp",          titulo: "Área de Lazer de Dia",          categoria: "Lazer", legenda: "Piscinas e paisagismo tropical sob o sol da Costa Branca." },
    { src: "fotos/galeria/area-de-lazer-noite.webp",        titulo: "Área de Lazer à Noite",         categoria: "Lazer", legenda: "Piscinas iluminadas e coqueiros destacados pela luz noturna." },
    { src: "fotos/galeria/area-externa.webp",               titulo: "Piscina com Espreguiçadeiras",  categoria: "Lazer", legenda: "Espreguiçadeiras dentro d'água e o bar molhado ao fundo." },
    { src: "fotos/galeria/area-externa-dia.webp",           titulo: "Jardim de Descanso",            categoria: "Lazer", legenda: "Espreguiçadeiras-ninho em fibra natural à sombra dos coqueiros." },
    { src: "fotos/galeria/area-externa-noite.webp",         titulo: "Área Externa à Noite",          categoria: "Lazer", legenda: "Caminhos e jardins iluminados entre as piscinas." },
    { src: "fotos/galeria/area-externa-noite-01.webp",      titulo: "Área Externa à Noite II",       categoria: "Lazer", legenda: "Paisagismo noturno com iluminação cênica nas árvores." },
    { src: "fotos/galeria/area-externa-noite-02.webp",      titulo: "Área Externa à Noite III",      categoria: "Lazer", legenda: "Vista noturna das áreas de convivência ao ar livre." },

    // --- Bar molhado ---
    { src: "fotos/galeria/bar-molhado.webp",                titulo: "Bar Molhado",                   categoria: "Bar Molhado", legenda: "Bar no centro da piscina com cobertura de luminárias em fibra natural." },
    { src: "fotos/galeria/bar-molhado-02.webp",             titulo: "Bar Molhado — Outro Ângulo",    categoria: "Bar Molhado", legenda: "Banquetas submersas e serviço de drinks sem sair da água." },
    { src: "fotos/galeria/bar-molhado-noite.webp",          titulo: "Bar Molhado à Noite",           categoria: "Bar Molhado", legenda: "As luminárias acesas transformam o bar em ponto de encontro ao anoitecer." },

    // --- Gastronomia ---
    { src: "fotos/galeria/restaurante.webp",                titulo: "Restaurante",                   categoria: "Gastronomia", legenda: "Salão com pergolado, toldos tensionados e grandes aberturas para o jardim." },
    { src: "fotos/galeria/restaurante-noite.webp",          titulo: "Restaurante à Noite",           categoria: "Gastronomia", legenda: "Iluminação intimista e mobiliário em madeira e palhinha." },
    { src: "fotos/galeria/vista-restaurante.webp",          titulo: "Vista do Restaurante",          categoria: "Gastronomia", legenda: "Do restaurante, a vista noturna para as piscinas iluminadas." },

    // --- Esportes e espaço kids ---
    { src: "fotos/galeria/quadra-poliesportiva.webp",       titulo: "Quadra Poliesportiva",          categoria: "Esportes & Kids", legenda: "Quadra para basquete e futsal ao lado da quadra de areia." },
    { src: "fotos/galeria/quadra-de-volei.webp",            titulo: "Quadra de Vôlei de Areia",      categoria: "Esportes & Kids", legenda: "Vôlei de areia integrado à área de lazer." },
    { src: "fotos/galeria/espaco-kids.webp",                titulo: "Espaço Kids",                   categoria: "Esportes & Kids", legenda: "Playground ao ar livre com brinquedos coloridos e sombra das árvores." },

    // --- Quartos ---
    { src: "fotos/galeria/varanda-quarto-salina.webp",      titulo: "Varanda do Quarto Salina",      categoria: "Quartos", legenda: "Varanda privativa da suíte master." },
    { src: "fotos/galeria/vista-varanda-maresia.webp",      titulo: "Vista da Varanda do Maresia",   categoria: "Quartos", legenda: "A paisagem vista da varanda do Quarto Maresia." },
    { src: "fotos/quarto-salina/salina-1.jpg",              titulo: "Quarto Salina — Vista",         categoria: "Quartos", legenda: "Suíte master com ampla abertura para a paisagem." },
    { src: "fotos/quarto-salina/salina-2.jpg",              titulo: "Quarto Salina — Interior",      categoria: "Quartos", legenda: "Iluminação acolhedora e tons inspirados nos cristais de sal." },
    { src: "fotos/quarto-salina/salina-3.jpg",              titulo: "Quarto Salina — Detalhes",      categoria: "Quartos", legenda: "Acabamentos e mobiliário da suíte master." },
    { src: "fotos/quarto-maresia/maresia-1.png",            titulo: "Quarto Maresia — Ambiente",     categoria: "Quartos", legenda: "Bangalô tropical envolvido pela vegetação." },
    { src: "fotos/quarto-maresia/maresia-2.png",            titulo: "Quarto Maresia — Interior",     categoria: "Quartos", legenda: "Ambiente interno integrado com ventilação cruzada." },
    { src: "fotos/quarto-maresia/maresia-3.png",            titulo: "Quarto Maresia — Detalhes",     categoria: "Quartos", legenda: "Detalhes de acabamento do Quarto Maresia." },
    { src: "fotos/quarto-duna/duna-1.jpeg",                 titulo: "Quarto Duna — Interior",        categoria: "Quartos", legenda: "Cama e acabamentos amadeirados em tons areia e linho." },
    { src: "fotos/quarto-duna/duna-2.jpeg",                 titulo: "Quarto Duna — Vista",           categoria: "Quartos", legenda: "Grandes panos de vidro voltados para a paisagem." },
    { src: "fotos/quarto-duna/duna-3.jpeg",                 titulo: "Quarto Duna — Detalhes",        categoria: "Quartos", legenda: "Refúgio intimista pensado para casais." },
];
