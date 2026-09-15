# Flor de Sal Hotel — Site Institucional

> **Aviso importante:** este repositório contém **apenas o site** do projeto. Trata-se de um trabalho **estudantil** desenvolvido por um **grupo de alunos de Arquitetura**, e o site aqui publicado foi criado **exclusivamente pelo responsável por este GitHub**. Os demais integrantes do grupo contribuíram com outras partes do trabalho (conceito arquitetônico, projetos e especificações), que **não** estão neste repositório.

## 📌 Sobre o projeto

Este é um projeto **acadêmico, sem fins comerciais**, de uma página institucional para o **Flor de Sal Hotel** (apresentado no rodapé também como *Casablanca Beach Resort & Spa*). O objetivo é demonstrar o conceito de um resort de luxo à beira-mar, servindo como material de apoio visual para o trabalho do grupo de arquitetura.

O site é **estatico** (HTML, CSS e JavaScript puros, sem dependências de build), criado por **uma única pessoa do grupo** — o administrador deste repositório — responsável apenas pela parte **web/site** do projeto.

## 🖥️ Funcionalidades

- Seção **hero** com carrossel de imagens (auto-play + navegação manual e indicadores)
- Cards de **amenidades** (praia privativa, gastronomia e spa)
- Seção de **acomodações** (quartos Salina, Maresia e Duna)
- **Galeria de fotos** do resort
- Rodapé com informações de **contato** (fictícias)
- Animações de scroll (`reveal`) e layout **responsivo**

## 🛠️ Tecnologias

- HTML5
- CSS3 (variáveis, grid, media queries)
- JavaScript (carrossel e animações de scroll)
- Ícones via [Lucide](https://lucide.dev/)
- Fontes via Google Fonts (Playfair Display e Inter)

## 📁 Estrutura

```
jordana/
├── index.html          # Página principal (única)
├── carrossel-1.jpg
├── carrossel-2.jpg
├── salina.jpg
├── bangalo-tropical.jpg
├── quarto-luxo.jpg
├── galeria-piscina.jpg
├── galeria-restaurante.jpg
├── galeria-praia.jpg
└── ...
```

## ▶️ Como executar

Basta abrir o arquivo `index.html` em qualquer navegador moderno:

```bash
xdg-open index.html   # Linux
open index.html       # macOS
start index.html      # Windows
```

Ou use um servidor local simples:

```bash
python3 -m http.server 8080
```

E acesse `http://localhost:8080`.

## ⚠️ Considerações

- **Conteúdo fictício:** nomes de contato, telefone, e-mail e descrições são **imaginários**, criados apenas para fins de demonstração acadêmica.
- **Imagens:** são materiais ilustrativos de uso no trabalho do grupo.
- **Abandono/uso educacional:** este repositório **não** deve ser usado para fins comerciais. Aceitamos indicações de melhorias no site, mas o projeto é exclusivamente estudantil.

## 👥 Créditos

- **Site (front-end/HTML/CSS/JS):** responsável por este GitHub
- **Conceito e trabalho arquitetônico:** demais integrantes do grupo (não presentes neste repositório)

---

Desenvolvido para fins **educacionais** por alunos de **Arquitetura**.