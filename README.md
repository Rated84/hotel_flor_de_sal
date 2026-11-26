# Flor de Sal Hotel — Site Institucional & Conceito Arquitetônico

> **Aviso importante:** este repositório contém o site institucional do projeto. Trata-se de um trabalho **acadêmico** desenvolvido para o curso de **Arquitetura e Urbanismo** da **Universidade Federal Rural do Semi-Árido (UFERSA)**, sem fins comerciais. O site foi concebido e programado pelo responsável por este repositório, integrando o conceito arquitetônico, as pesquisas e as representações visuais elaboradas pelo grupo discente.

---

## 📌 Sobre o Projeto

O **Flor de Sal Hotel** é uma proposta de resort boutique e spa litorâneo inspirada na paisagem singular da **Costa Branca** do Rio Grande do Norte — região célebre por suas salinas marinhas, dunas alvas e ventos constantes.

A proposta une arquitetura bioclimática, materiais vernaculares contemporâneos e design biofílico. O site institucional foi projetado para elevar a apresentação acadêmica ao padrão de excelência de mercado, simulando a experiência imersiva e espacial que um hóspede vivenciaria no empreendimento real.

---

## 🖥️ Funcionalidades & Destaques

- **Navegação (Liquid Glass):**
  - Faixa superior translúcida (*blur*) com a marca do hotel e botão de menu;
  - Menu lateral no computador e menu suspenso no celular;
  - *Scroll spy* que destaca a seção ativa em tempo real.

- **Hero & Carrossel Interativo:**
  - Carrossel suave em transição com suporte a *touch swipe*, pausa ao passar o mouse e controles por botões e indicadores;
  - Cartão de destaque em *glassmorphism* com tipografia elegante e badges temáticas.

- **Simulador de Reserva (Booking Bar & Modal):**
  - Seletor de datas (*Check-in* e *Check-out*) com validação dinâmica;
  - Escolha de acomodação e número de hóspedes;
  - Modal interativo com resumo de noites, estimativa de investimento e botão com **mensagem pré-formatada para WhatsApp** e e-mail.

- **Seção "O Conceito Arquitetônico":**
  - Storytelling sobre os pilares projetuais: *Bioclimatismo*, *Materialidade Natural*, *Luz & Sombra* e *Integração Espacial*.

- **Acomodações com Abas Acessíveis (WAI-ARIA) e Sliders Próprios:**
  - **Quarto Salina (Master):** vista 180° para o mar, banheira de imersão e galeria de 3 fotos;
  - **Quarto Maresia:** deck privativo de madeira com jardim tropical e galeria de 3 fotos;
  - **Quarto Duna:** refúgio intimista integrado às dunas e galeria de 3 fotos;
  - Navegação entre abas por clique ou setas do teclado (`ArrowLeft` / `ArrowRight`).

- **Galeria de Destaques (página inicial):**
  - Seleção de renders com visualizador em tela cheia (*lightbox*), contador de fotos, navegação por teclado (`Esc` fecha, setas navegam) e *swipe* no celular;
  - Botão **"Ver galeria completa"** que leva à página `galeria.html`.

- **Galeria Completa (`galeria.html`):**
  - Mosaico (*masonry*) que respeita a proporção original de cada imagem, sem cortes;
  - **Filtros por categoria** gerados automaticamente (Todos, Quartos, Lazer, Gastronomia…), com contagem de fotos;
  - Lightbox que navega apenas pelas fotos do filtro ativo;
  - Link direto para uma categoria: `galeria.html?categoria=Quartos`;
  - Fotos carregadas a partir de uma lista em `js/fotos.js` — adicionar uma imagem é acrescentar uma linha.

- **Tipografia Refinada:**
  - Textos corridos justificados com hifenização automática em português (também no celular);
  - Títulos com quebra de linha equilibrada e largura de linha confortável para leitura.

- **Nota Institucional:**
  - Aviso destacando o caráter acadêmico e sem fins comerciais do projeto.

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
├── index.html              # Página principal (one-page)
├── galeria.html            # Galeria completa com filtros e mosaico
├── favicon.svg             # Favicon exclusivo geométrico (cristal de sal)
├── css/
│   └── style.css           # Design System, variáveis, layout e responsividade (as duas páginas)
├── js/
│   ├── main.js             # Navbar, carrossel, abas, reserva e lightbox da página inicial
│   ├── fotos.js            # ⭐ Lista de fotos da galeria completa (edite aqui para adicionar)
│   └── galeria.js          # Monta o mosaico, os filtros e o lightbox da galeria.html
├── fotos/
│   ├── logos/              # Logotipos do hotel e de cada acomodação
│   ├── galeria/            # Renders das áreas comuns (WebP otimizado) — carrossel e galeria
│   ├── quarto-salina/      # Registros visuais do Quarto Salina
│   ├── quarto-maresia/     # Registros visuais do Quarto Maresia
│   └── quarto-duna/        # Registros visuais do Quarto Duna
├── .github/workflows/
│   └── pages.yml           # Publicação automática no GitHub Pages
└── README.md               # Documentação do projeto
```

---

## 🖼️ Como Adicionar Fotos à Galeria

1. Coloque a imagem em uma pasta dentro de `fotos/` (por exemplo, `fotos/galeria/`).
2. Abra `js/fotos.js` e acrescente uma linha na lista:

```js
{ src: "fotos/galeria/restaurante-noite.webp", titulo: "Restaurante à Noite", categoria: "Gastronomia", legenda: "Iluminação cênica no salão principal." },
```

- Uma **categoria nova** cria automaticamente um novo botão de filtro.
- A **ordem da lista** é a ordem de exibição.
- Se o caminho estiver errado, a foto é ocultada (e um aviso aparece no console do navegador).

> [!IMPORTANT]
> - **Nomes de arquivo:** use letras minúsculas, sem acentos e sem espaços (`quarto-duna-4.jpg`). No GitHub Pages, `Foto.JPG` e `foto.jpg` são arquivos **diferentes**.
> - **Caminhos relativos:** escreva `fotos/...`, nunca `/fotos/...` (com barra no início o site quebra dentro do GitHub Pages).
> - **Tamanho das imagens:** prefira ~1600–2000 px de largura e 300–600 KB (JPG ou WebP). Ferramenta gratuita: [squoosh.app](https://squoosh.app/). No Linux: `cwebp -q 82 foto.png -o foto.webp`.
> - **Originais pesados:** guarde os PNG/PSD originais na pasta `originais/`, que é ignorada pelo Git e não vai para o site.

Para trocar as fotos em destaque da **página inicial**, edite os blocos `gallery-item` da seção `#galeria` em `index.html`.

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

E acessar no seu navegador: `http://localhost:8080` (galeria completa em `http://localhost:8080/galeria.html`).

## 🚀 Publicação no GitHub Pages

O site publicado é a versão estática da raiz: todas as páginas `*.html` (`index.html`, `galeria.html`…), `favicon.svg`, `css/`, `js/` e `fotos/`. O workflow `.github/workflows/pages.yml` prepara esses arquivos e publica automaticamente a cada atualização da branch `main`; `react-app/` fica fora do artefato.

Na configuração do repositório, selecione **Settings → Pages → Build and deployment → Source → GitHub Actions**. Depois, acompanhe a execução em **Actions → Publish static site to GitHub Pages**. O endereço publicado aparece no ambiente `github-pages` da execução.

> [!TIP]
> Após o *push*, a atualização leva de 1 a 2 minutos. Se a mudança não aparecer, recarregue com **Ctrl + Shift + R** para limpar o cache.

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
