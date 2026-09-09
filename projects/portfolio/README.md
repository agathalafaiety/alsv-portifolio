# Agatha Lafaiety — Site Profissional

Site profissional de Agatha Lafaiety, Engenheira de Software e IA focada na intersecção entre Backend, Cloud e Inteligência Artificial.

## Prévia local

O projeto roda em `http://localhost:4317`. Essa URL é privada e acessível somente no computador em que o servidor está sendo executado. A versão pública está disponível em `https://agathalafaiety.com.br`.

## Identidade visual

- Paleta extraída da foto de referência: creme champanhe, marrom café, taupe, grafite e rosé
- Tipografia principal Montserrat
- Composição sem fotografias, com formas abstratas e elementos tipográficos
- Temas claro e escuro

## Conteúdo e funcionalidades

- Apresentação profissional com foco em Backend, Cloud e Inteligência Artificial
- Sobre, ferramentas do dia a dia e trajetória profissional
- Formação, certificações e comunidade
- Artigos publicados no Medium
- Área de palestras preparada para crescer
- Material em PDF da palestra “Inteligência Artificial: dos fundamentos à prática”
- Links para LinkedIn, GitHub, Medium, Instagram e YouTube
- Alternância entre português e inglês
- Navegação responsiva, animações suaves e suporte a redução de movimento

## Tecnologias

- React 19
- TypeScript
- Vinext
- Vite
- CSS responsivo
- Lucide Icons
- OpenAI Sites para a estrutura do projeto
- OpenClaw para coordenação da implantação no servidor oficial

## Estrutura principal

```text
app/
  globals.css        # identidade visual e responsividade
  layout.tsx         # fontes e metadados
  page.tsx           # entrada enxuta da rota
components/
  portfolio/
    portfolio-page.tsx   # composição visual completa da página
    site-header.tsx      # navegação desktop e móvel
    hero-section.tsx     # apresentação e chamadas principais
    profile-sections.tsx # sobre e ferramentas
    career-sections.tsx  # experiências, formação e comunidade
    content-sections.tsx # artigos, palestra e redes sociais
    contact-footer.tsx   # contato e rodapé
    social-icon.tsx      # ícones sociais reutilizáveis
content/
  portfolio.ts       # textos e dados editoriais do portfólio
features/
  portfolio/
    application/     # estado, efeitos e coordenação da experiência
    domain/          # tipos e regras puras do portfólio
    config.ts        # rotas, links e caminhos de arquivos públicos
public/
  company-logos/     # marcas usadas na trajetória profissional
  favicon.svg        # favicon vetorial
  apple-touch-icon.png
  icon-192.png
  icon-512.png
  og.png             # card de compartilhamento social
  site.webmanifest
  talks/             # materiais de palestras
```

## Arquitetura

O projeto segue uma organização por responsabilidades:

- `app` cuida apenas da entrada da rota e dos metadados.
- `components/portfolio` contém somente apresentação e composição visual.
- `features/portfolio/application` concentra estado e integrações com o navegador.
- `features/portfolio/domain` mantém tipos e regras puras, sem dependência de React.
- `content` mantém textos e dados editoriais separados da interface.
- `features/portfolio/config.ts` centraliza URLs e caminhos, evitando valores espalhados pelo código.

Essa separação permite alterar conteúdo, comportamento ou apresentação de maneira independente, sem mudar o resultado visual por acidente.

## Como executar

Requisitos: Node.js 22.13 ou superior e npm.

```bash
npm install
npm run dev -- --port 4317
```

Depois, acesse `http://localhost:4317`.

Para validar a versão de produção:

```bash
npm run build
```

## Como atualizar o conteúdo

Os textos, experiências, ferramentas, artigos e redes sociais ficam centralizados em `content/portfolio.ts`. Os materiais públicos de palestras podem ser substituídos em `public/talks`, mantendo os nomes ou atualizando os caminhos em `features/portfolio/config.ts`.

## Palestras

O primeiro material disponível é `public/talks/inteligencia-artificial-dos-fundamentos-a-pratica.pdf`. A seção foi estruturada para receber novas palestras, vídeos e apresentações futuramente.

## Acessibilidade e SEO

O projeto usa HTML semântico, link para pular ao conteúdo, foco visível, contraste adequado, menu móvel acessível por teclado e respeita a preferência do sistema por movimento reduzido. A versão pública possui endereço canônico, metadados Open Graph e X/Twitter, card social e indexação habilitada.

## Publicação e domínio

O código está no repositório `https://github.com/agathalafaiety/alsv.git`, branch `main`, dentro de `projects/portfolio`. A produção é mantida em `/srv/sites/agatha-lafaiety-portfolio`, com releases imutáveis e troca atômica do apontamento `current` coordenadas pelo Falcao, responsável pela infraestrutura compartilhada.

O domínio oficial é `https://agathalafaiety.com.br`. Alterações públicas devem ser validadas localmente, versionadas no Git e implantadas pelo fluxo do OpenClaw, sem mudanças diretas em DNS, TLS, Nginx ou serviços compartilhados.

## Autora

Agatha Lafaiety  
São Paulo, SP  
[LinkedIn](https://www.linkedin.com/in/agathalafaiety/)

## Direitos

© 2026 Agatha Lafaiety. Todos os direitos reservados. O código e a identidade visual não possuem licença aberta para cópia ou redistribuição.
