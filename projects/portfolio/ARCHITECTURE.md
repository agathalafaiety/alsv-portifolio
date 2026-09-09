# Arquitetura do portfólio

## Objetivo

Manter conteúdo, regras, comportamento e interface separados para facilitar manutenção, testes e futuras expansões sem acoplamento desnecessário.

## Camadas

### Entrada (`app`)

Define rota, metadados e estilos globais. A rota não contém estado ou regras da experiência.

### Apresentação (`components/portfolio`)

Renderiza a interface a partir de propriedades e dados prontos. Os componentes preservam a semântica, a acessibilidade e as classes responsáveis pelo visual.

### Aplicação (`features/portfolio/application`)

Coordena idioma, tema, menu, seção ativa e animações de entrada. É a única camada que concentra os efeitos relacionados ao navegador.

### Domínio (`features/portfolio/domain`)

Contém os tipos e as funções puras do portfólio. Essa camada não depende de React, CSS ou APIs do navegador.

### Conteúdo (`content`)

Armazena textos, experiências, ferramentas, artigos e demais informações editoriais. Alterações de conteúdo não exigem mudanças nos componentes.

### Configuração (`features/portfolio/config.ts`)

Centraliza URLs externas, caminhos de currículos e materiais, e a definição das seções navegáveis.

## Direção das dependências

```text
app
  └─ presentation
       ├─ application
       ├─ content
       ├─ config
       └─ domain

application ──> content + config + domain
content ──────> domain
config ───────> domain
domain ───────> nenhuma camada interna
```

## Regras de manutenção

1. Textos e dados profissionais devem permanecer em `content/portfolio.ts`.
2. URLs e caminhos de arquivos públicos devem permanecer em `features/portfolio/config.ts`.
3. Estado e efeitos do navegador não devem ser adicionados aos componentes de seção.
4. Funções que não dependem da interface devem ficar no domínio.
5. Mudanças de arquitetura devem preservar o HTML, as classes CSS e o comportamento público quando não houver pedido de redesign.
