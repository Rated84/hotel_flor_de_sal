export const navItems = [
  { id: 'inicio', label: 'Início', href: '#inicio' },
  { id: 'conceito', label: 'O Conceito', href: '#conceito' },
  { id: 'quartos', label: 'Acomodações', href: '#quartos' },
  { id: 'experiencias', label: 'Experiências', href: '#experiencias' },
  { id: 'galeria', label: 'Galeria', href: '#galeria' },
  { id: 'contato', label: 'Contato', href: '#contato' },
];

export const heroSlides = [
  {
    src: 'fotos/carrossel/carrossel-1.jpg',
    alt: 'Vista Panorâmica do Flor de Sal Hotel',
  },
  {
    src: 'fotos/carrossel/carrossel-2.jpg',
    alt: 'Piscina de Borda Infinita debruçada sobre o mar',
  },
  {
    src: 'fotos/carrossel/galeria-praia.jpg',
    alt: 'Praia Privativa e Dunas ao Entardecer',
  },
];

export const conceptPillars = [
  {
    icon: 'Wind',
    title: 'Bioclimatismo',
    description:
      'Aproveitamento integral da brisa oceânica para resfriamento passivo e bem-estar térmico.',
  },
  {
    icon: 'Feather',
    title: 'Materialidade Natural',
    description:
      'Texturas minerais, madeira de manejo sustentável e pedra esculpida inspirada nas salinas.',
  },
  {
    icon: 'Sun',
    title: 'Luz & Sombra',
    description:
      'Brises verticais e pérgolas que criam poesia visual com o movimento do sol ao longo do dia.',
  },
  {
    icon: 'Compass',
    title: 'Integração Espacial',
    description:
      'Transições fluídas entre áreas internas e externas, emoldurando as dunas e o oceano.',
  },
];

export const roomsData = [
  {
    id: 'salina',
    tabLabel: 'Suíte Salina',
    tabIcon: 'Sparkles',
    selectLabel: 'Suíte Salina (Master)',
    typeTag: 'Master Ocean Suite',
    name: 'Suíte Salina',
    logo: 'fotos/logos/SALINA-trim.png',
    logoAlt: 'Emblema Salina',
    galleryAriaLabel: 'Galeria da Suíte Salina',
    description:
      'Nossa acomodação master com ampla varanda privativa debruçada sobre o mar, banheira de imersão esculpida em pedra natural e iluminação zenital acolhedora que celebra os tons dos cristais de sal.',
    price: 1450,
    priceFormatted: 'R$ 1.450',
    ctaLabel: 'Reservar Esta Suíte',
    photos: [
      {
        src: 'fotos/quarto-salina/salina-1.jpg',
        alt: 'Suíte Salina - Vista panorâmica para o mar',
      },
      {
        src: 'fotos/quarto-salina/salina-2.jpg',
        alt: 'Suíte Salina - Detalhes do interior e iluminação',
      },
      {
        src: 'fotos/quarto-salina/salina-3.jpg',
        alt: 'Suíte Salina - Varanda privativa',
      },
    ],
    specs: [
      { label: 'Área Privativa', value: '68 m²', icon: 'Maximize2' },
      { label: 'Capacidade', value: 'Até 4 hóspedes', icon: 'Users' },
      { label: 'Orientação', value: 'Frente Mar 180°', icon: 'Compass' },
    ],
    amenities: [
      { icon: 'Wifi', label: 'Wi-Fi de Alta Velocidade' },
      { icon: 'Coffee', label: 'Café da Manhã Incluso' },
      { icon: 'Droplet', label: 'Banheira de Imersão' },
      { icon: 'Tv', label: 'Smart TV 55" 4K' },
      { icon: 'Wine', label: 'Frigobar Gourmet' },
      { icon: 'Wind', label: 'Ar-Condicionado Inverter' },
    ],
  },
  {
    id: 'maresia',
    tabLabel: 'Bangalô Maresia',
    tabIcon: 'Wind',
    selectLabel: 'Bangalô Maresia',
    typeTag: 'Bangalô Tropical com Deck',
    name: 'Bangalô Maresia',
    logo: 'fotos/logos/MARESIA-trim.png',
    logoAlt: 'Emblema Maresia',
    galleryAriaLabel: 'Galeria do Bangalô Maresia',
    description:
      'Envolvido pela vegetação litorânea preservada, o Bangalô Maresia oferece um deck de madeira suspenso com redes artesanais e ventilação cruzada contínua, unindo o frescor da brisa marítima ao conforto acolhedor.',
    price: 1180,
    priceFormatted: 'R$ 1.180',
    ctaLabel: 'Reservar Este Bangalô',
    photos: [
      {
        src: 'fotos/quarto-maresia/maresia-1.jpg',
        alt: 'Bangalô Maresia - Fachada tropical',
      },
      {
        src: 'fotos/quarto-maresia/maresia-2.jpg',
        alt: 'Bangalô Maresia - Ambiente interno integrado',
      },
      {
        src: 'fotos/quarto-maresia/maresia-3.jpg',
        alt: 'Bangalô Maresia - Deck e varanda',
      },
    ],
    specs: [
      { label: 'Área Privativa', value: '52 m²', icon: 'Maximize2' },
      { label: 'Capacidade', value: 'Até 3 hóspedes', icon: 'Users' },
      { label: 'Orientação', value: 'Jardim & Mar', icon: 'Compass' },
    ],
    amenities: [
      { icon: 'Wifi', label: 'Wi-Fi de Alta Velocidade' },
      { icon: 'Coffee', label: 'Café da Manhã Incluso' },
      { icon: 'Sun', label: 'Deck Panorâmico' },
      { icon: 'Tv', label: 'Smart TV 50"' },
      { icon: 'Wine', label: 'Frigobar Gourmet' },
      { icon: 'Wind', label: 'Ar-Condicionado Inverter' },
    ],
  },
  {
    id: 'duna',
    tabLabel: 'Refúgio Duna',
    tabIcon: 'Sun',
    selectLabel: 'Refúgio Duna',
    typeTag: 'Refúgio Contemporâneo',
    name: 'Refúgio Duna',
    logo: 'fotos/logos/DUNA-trim.png',
    logoAlt: 'Emblema Duna',
    galleryAriaLabel: 'Galeria do Refúgio Duna',
    description:
      'Inspirado na sinuosidade e calma das dunas brancas da Costa Branca. Uma experiência intimista e elegante, desenhada para casais com abertura envidraçada de piso ao teto e acabamentos em tons areia e linho natural.',
    price: 890,
    priceFormatted: 'R$ 890',
    ctaLabel: 'Reservar Este Quarto',
    photos: [
      {
        src: 'fotos/quarto-duna/duna-1.jpeg',
        alt: 'Refúgio Duna - Cama e acabamentos amadeirados',
      },
      {
        src: 'fotos/quarto-duna/duna-2.jpeg',
        alt: 'Refúgio Duna - Vista para o mar através de grandes panos de vidro',
      },
      {
        src: 'fotos/quarto-duna/duna-3.jpeg',
        alt: 'Refúgio Duna - Integração com as dunas',
      },
    ],
    specs: [
      { label: 'Área Privativa', value: '40 m²', icon: 'Maximize2' },
      { label: 'Capacidade', value: 'Até 2 hóspedes', icon: 'Users' },
      { label: 'Orientação', value: 'Vista Dunas & Mar', icon: 'Compass' },
    ],
    amenities: [
      { icon: 'Wifi', label: 'Wi-Fi de Alta Velocidade' },
      { icon: 'Coffee', label: 'Café da Manhã Incluso' },
      { icon: 'Eye', label: 'Janelas Panorâmicas' },
      { icon: 'Tv', label: 'Smart TV 43"' },
      { icon: 'Wine', label: 'Frigobar Gourmet' },
      { icon: 'Wind', label: 'Ar-Condicionado Inverter' },
    ],
  },
];

export const guestOptions = [
  { value: '2', label: '2 Adultos' },
  { value: '1', label: '1 Adulto' },
  { value: '3', label: '3 Hóspedes' },
  { value: '4', label: 'Família (4 Hóspedes)' },
];

export const experiencesData = [
  {
    icon: 'Waves',
    title: 'Praia Privativa & Beach Club',
    description:
      'Acesso exclusivo à faixa de areia dourada com espreguiçadeiras anatômicas de madeira, serviço atencioso de praia e bangalôs sombreados de frente para as piscinas naturais formadas pela maré baixa.',
    delay: '0s',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Gastronomia do Sal',
    description:
      'Restaurante com menu degustação autoral assinado por chefs locais, unindo frutos do mar frescos, temperos regionais e a genuína flor de sal colhida artesanalmente nas salinas do Rio Grande do Norte.',
    delay: '0.15s',
  },
  {
    icon: 'Sparkles',
    title: 'Spa Mineral & Bem-Estar',
    description:
      "Rituais terapêuticos holísticos que utilizam sais minerais marinhos, massagens relaxantes ao ar livre ao som das ondas e piscina aquecida de borda infinita integrada ao espelho d'água das salinas.",
    delay: '0.3s',
  },
];

export const galleryData = [
  {
    src: 'fotos/carrossel/galeria-piscina.jpg',
    alt: 'Piscina de Borda Infinita',
    ariaLabel: 'Ampliar foto da Piscina de Borda Infinita',
    tag: 'Área de Lazer',
    caption: 'Piscina de Borda Infinita',
    title: 'Piscina de Borda Infinita',
    desc: "Espelho d'água de alvenaria e pedra clara debruçado sobre a orla do Atlântico.",
  },
  {
    src: 'fotos/carrossel/galeria-quarto.jpg',
    alt: 'Acomodação com Vista Oceânica',
    ariaLabel: 'Ampliar foto da Acomodação Frente Mar',
    tag: 'Conforto Íntimo',
    caption: 'Suíte com Vista Mar',
    title: 'Acomodação com Vista Oceânica',
    desc: 'Integração entre quarto e paisagem com ventilação cruzada e brises de proteção solar.',
  },
  {
    src: 'fotos/carrossel/galeria-restaurante.jpg',
    alt: 'Restaurante Cristal de Sal',
    ariaLabel: 'Ampliar foto do Restaurante Cristal de Sal',
    tag: 'Gastronomia',
    caption: 'Restaurante Cristal de Sal',
    title: 'Restaurante Cristal de Sal',
    desc: 'Espaço gastronômico com pé-direito generoso, iluminação intimista e mobiliário em madeira maciça.',
  },
  {
    src: 'fotos/carrossel/galeria-praia.jpg',
    alt: 'Praia e Dunas da Costa Branca',
    ariaLabel: 'Ampliar foto da Praia e Dunas da Costa Branca',
    tag: 'Paisagem Litorânea',
    caption: 'Praia & Dunas',
    title: 'Praia & Dunas da Costa Branca',
    desc: 'Cenário costeiro com areia branca e mar tranquilo, berço da inspiração do resort.',
  },
];

