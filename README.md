# Flor de Sal Hotel — Site Institucional & Conceito Arquitetônico

> **Aviso importante:** este repositório contém o site institucional do projeto. Trata-se de um trabalho **acadêmico** desenvolvido para o curso de **Arquitetura e Urbanismo** da **Universidade Federal Rural do Semi-Árido (UFERSA)**, sem fins comerciais. O site foi concebido e programado pelo responsável por este repositório, integrando o conceito arquitetônico, as pesquisas e as representações visuais elaboradas pelo grupo discente.

---

## 📌 Sobre o Projeto

O **Flor de Sal Hotel** é uma proposta de resort boutique e spa litorâneo inspirada na paisagem singular da **Costa Branca** do Rio Grande do Norte — região célebre por suas salinas marinhas, dunas alvas e ventos constantes.

A proposta une arquitetura bioclimática, materiais vernaculares contemporâneos e design biofílico. O site institucional foi projetado para elevar a apresentação acadêmica ao padrão de excelência de mercado, simulando a experiência imersiva e espacial que um hóspede vivenciaria no empreendimento real.

---

## 🖥️ Funcionalidades & Destaques

- **Barra de Navegação Superior (Header Glassmorphism):**
  - Fixa com efeito translúcido (*blur*) na rolagem;
  - *Scroll spy* que destaca a seção ativa em tempo real;
  - Menu hambúrguer adaptável para smartphones e tablets.

- **Hero & Carrossel Interativo:**
  - Carrossel suave em transição com suporte a *touch swipe*, pausa ao passar o mouse e controles por botões e indicadores;
  - Cartão de destaque em *glassmorphism* com tipografia elegante e badges temáticas.

- **Simulador de Reserva (Booking Bar & Modal):**
  - Seletor de datas (*Check-in* e *Check-out*) com validação dinâmica;
  - Escolha de acomodação e número de hóspedes;
  - Modal interativo com resumo de noites, estimativa de investimento e botão com **mensagem pré-formatada para WhatsApp** e e-mail.

- **Seção "O Conceito Arquitetônico":**
  - Storytelling sobre os pilares projetuais: *Bioclimatismo*, *Materialidade Tátil*, *Luz & Sombra* e *Integração com a Paisagem*.

- **Acomodações com Abas Acessíveis (WAI-ARIA) e Sliders Próprios:**
  - **Suíte Salina (Master):** vista 180° para o mar, banheira de imersão e galeria de 3 fotos;
  - **Bangalô Maresia:** deck privativo de madeira com jardim tropical e galeria de 3 fotos;
  - **Refúgio Duna:** refúgio intimista integrado às dunas e galeria de 3 fotos;
  - Navegação entre abas por clique ou setas do teclado (`ArrowLeft` / `ArrowRight`).

- **Galeria de Renders 3D com Lightbox (Tela Cheia):**
  - Modal visualizador em tela cheia com legendas dos ambientes e navegação por teclado (`Esc` para fechar, setas para navegar).

- **Equipe & Créditos Acadêmicos:**
  - Destaque das autoras do conceito arquitetônico e do desenvolvedor front-end com links de contato.

---

## 🛠️ Tecnologias & Padrões

- **HTML5 Semântico:** estruturação limpa (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3 Moderno:** variáveis CSS (*Custom Properties*), *Glassmorphism* (`backdrop-filter`), *CSS Grid*, *Flexbox* e responsividade completa.
- **JavaScript Puro (Vanilla ES6+):** sem dependências de frameworks pesados, com uso de `IntersectionObserver` para animações fluidas e *scroll spy*.
- **Ícones:** [Lucide Icons](https://lucide.dev/).
- **Tipografia:** Google Fonts (*Playfair Display* e *Inter*).
- **Acessibilidade (a11y):** contraste de cores adequado, foco visível (`:focus-visible`), atributos ARIA e suporte a `prefers-reduced-motion`.

---

## 📁 Estrutura de Arquivos

```
hotel_flor_de_sal/
├── index.html              # Estrutura semântica principal
├── favicon.svg             # Favicon exclusivo geométrico (cristal de sal)
├── css/
│   └── style.css           # Design System, variáveis, layout e responsividade
├── js/
│   └── main.js             # Lógica de navbar, carrossel, tabs, reserva e lightbox
├── fotos/
│   ├── logos/              # Logotipos do hotel e de cada acomodação
│   ├── carrossel/          # Imagens do carrossel principal e galeria
│   ├── quarto-salina/      # Registros visuais da Suíte Salina
│   ├── quarto-maresia/     # Registros visuais do Bangalô Maresia
│   └── quarto-duna/        # Registros visuais do Refúgio Duna
└── README.md               # Documentação do projeto
```

---

## ▶️ Como Executar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador moderno:

```bash
# No Linux
xdg-open index.html

# No macOS
open index.html

# No Windows
start index.html
```

Ou iniciar um servidor local leve:

```bash
python3 -m http.server 8080
```

E acessar no seu navegador: `http://localhost:8080`.

---

## 👥 Créditos & Concepção

- **Concepção & Desenvolvimento Front-End:**  
  Thiago Geovane — [thiagogeovane12@gmail.com](mailto:thiagogeovane12@gmail.com)

- **Conceito & Projeto Arquitetônico:**  
  Jordana Fernandes — [jordana.jesus@alunos.ufersa.edu.br](mailto:jordana.jesus@alunos.ufersa.edu.br)  
  Maíra Hemelly — [maira.rodrigues@alunos.ufersa.edu.br](mailto:maira.rodrigues@alunos.ufersa.edu.br)  
  Thifany Lima — [thifany.silva@alunos.ufersa.edu.br](mailto:thifany.silva@alunos.ufersa.edu.br)

---

Desenvolvido para fins **educacionais** por alunos de **Arquitetura e Urbanismo** da **UFERSA**.