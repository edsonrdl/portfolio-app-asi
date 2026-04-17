# Portfolio Web - React + Vite

Um portfólio moderno e responsivo construído com React e Vite, apresentando um design dark/neon com elementos 3D interativos. Este projeto destaca habilidades em desenvolvimento web, projetos pessoais e experiência profissional.

## 🚀 Funcionalidades

- **Design Responsivo**: Layout adaptável para desktop, tablet e mobile.
- **Tema Dark/Neon**: Paleta de cores com tons escuros e acentos neon (rosa).
- **Seções Interativas**:
  - Hero com animações
  - Sobre mim
  - Experiência profissional
  - Portfólio de projetos (com vídeos e imagens)
  - Contato
- **Elementos 3D**: Cubo animado flutuante com tecnologias.
- **Modal de Mídia**: Visualização de demos de projetos.
- **Navegação Suave**: Scroll behavior otimizado.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18, Vite
- **Styling**: CSS3 com variáveis customizadas, Glassmorphism
- **Fontes**: Space Grotesk (corpo), Syncopate (títulos) via Google Fonts
- **Ícones e Assets**: SVGs e imagens otimizadas
- **Build Tool**: Vite para desenvolvimento rápido e build otimizado
- **Linting**: ESLint para qualidade de código

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para rodar localmente

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/portfolio-web.git
   cd portfolio-web
   ```
2. **Instale as dependências**:

   ```bash
   npm install
   ```
3. **Execute o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```
4. **Instale o pacote como dependência de desenvolvimento:**:

   ```bash
   npm install gh-pages --save-dev
   ```
5. **Abra no navegador**:
   Acesse `http://localhost:5173` (porta padrão do Vite).

### Deploy para GitHub Pages

```bash
npm run deploy
```

Isso irá buildar o projeto e publicar na branch `gh-pages` do seu repositório. Certifique-se de que o repositório está público e que o GitHub Pages está configurado para usar a branch `gh-pages`.

**Nota**: O projeto está configurado com `base: '/portfolio-app-asi/'` no `vite.config.js` para funcionar corretamente no subpath do GitHub Pages.

## 📁 Estrutura do Projeto

```
portfolio-app-asi/
├── public/
│   ├── assets/
│   │   ├── img/
│   │   └── projects/          # Imagens e vídeos dos projetos
│   └── ...
├── src/
│   ├── components/            # Componentes React
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Portfolio.jsx      # Galeria de projetos
│   │   └── ...
│   ├── data/
│   │   └── portfolioData.js   # Dados dos projetos
│   ├── styles/
│   │   ├── components.css     # Estilos dos componentes
│   │   └── TechCube.css       # Estilos do cubo 3D
│   ├── App.css
│   ├── App.jsx
│   ├── index.css              # Variáveis CSS globais
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

O projeto utiliza um sistema de design consistente com variáveis CSS:

- **Cores**: Tema dark com acentos neon (#f45f90)
- **Tipografia**: Escala responsiva com clamp() para fluidez
- **Espaçamentos**: Escala de 8px para consistência
- **Animações**: Transições suaves e efeitos de hover

## 📱 Responsividade

- **Desktop**: Layout completo com grid e elementos 3D
- **Tablet**: Ajustes em grids e paddings
- **Mobile**: Menu mobile, tamanhos reduzidos, cubo reposicionado

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: seu-email@exemplo.com
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)
- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)

---

Feito com ❤️ usando React e Vite.
