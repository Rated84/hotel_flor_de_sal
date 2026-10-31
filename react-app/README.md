# Flor de Sal Hotel — Versão React (Vite)

Esta pasta contém a implementação em **React 18 + Vite** do site institucional do **Flor de Sal Hotel** (projeto acadêmico de Arquitetura e Urbanismo — UFERSA), mantendo a versão original em HTML/CSS/JS puro intacta na raiz do repositório.

---

## 🧱 Arquitetura de Componentes

```
react-app/
├── public/
│   ├── favicon.svg                  # Favicon exclusivo geométrico
│   └── fotos/                       # Imagens de acomodações, carrossel e logos
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Navbar com glassmorphism, scroll spy e menu mobile
│   │   ├── Hero.jsx                 # Seção Hero com carrossel automático e swipe touch
│   │   ├── BookingBar.jsx           # Simulador de reserva com validação dinâmica de datas
│   │   ├── ConceptSection.jsx       # Seção "O Conceito Arquitetônico" e pilares
│   │   ├── RoomsSection.jsx         # Acomodações com abas acessíveis (WAI-ARIA) e sliders
│   │   ├── AmenitiesSection.jsx     # Seção de experiências e amenidades
│   │   ├── GallerySection.jsx       # Galeria de renders 3D interativa
│   │   ├── AcademicNote.jsx         # Aviso institucional UFERSA
│   │   ├── Footer.jsx               # Rodapé institucional e contatos
│   │   ├── BookingModal.jsx         # Modal de resumo da reserva (WhatsApp e E-mail)
│   │   └── LightboxModal.jsx        # Visualizador de imagens em tela cheia
│   ├── data/
│   │   └── hotelData.js             # Dados estruturados (quartos, galeria, experiências, menu)
│   ├── hooks/
│   │   └── useScrollReveal.js       # Hook customizado com IntersectionObserver
│   ├── styles/
│   │   └── style.css                # Design System e estilos responsivos
│   ├── App.jsx                      # Componente raiz e gerenciamento de estado
│   └── main.jsx                     # Ponto de entrada da aplicação React
├── index.html
├── package.json
└── vite.config.js
```

---

## ▶️ Como Executar

```bash
cd react-app

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

