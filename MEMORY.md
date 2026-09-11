# Memória de longo prazo

## Portfólio

- Em 2026-09-09, Agatha preferiu a versão preenchida do monograma “AL.” para os ícones do portfólio: fundo marrom profundo (`#3b231e`), letras creme (`#f4efdc`) e ponto amarelo (`#dfd3a1`).
- A arte social deve permanecer clara, plana e editorial, reutilizando círculos e linhas orbitais finas do portfólio, sem gradientes ou sombras.
- Em 2026-09-09, o portfólio do ChatGPT Sites foi excluído permanentemente por solicitação da Agatha. O trabalho futuro seguirá via OpenClaw no site existente, já hospedado e com DNS configurado.
- Em 2026-09-09, Agatha decidiu retirar temporariamente os currículos em português e inglês do site e dos arquivos públicos; eles podem ser restaurados futuramente pelo histórico do Git.
- O portfólio oficial usa o repositório `https://github.com/agathalafaiety/alsv.git`, branch `main`, projeto `projects/portfolio`, e produção em `/srv/sites/agatha-lafaiety-portfolio`, sob implantação coordenada pelo Falcao via OpenClaw.
- Em 2026-09-09, a release `0c070ed9371d7428d4c4dfb6771f908f7e20fa6d` foi implantada no domínio oficial com Google Analytics (`G-9TYSDTPJQW`), dados estruturados `ProfilePage`/`Person`, `robots.txt`, `sitemap.xml` e verificação do Google Search Console.
- A propriedade de prefixo de URL `https://agathalafaiety.com.br/` foi verificada no Search Console por metatag, e `/sitemap.xml` foi enviado e processado com uma página encontrada.
- Em 2026-09-09, a propriedade de domínio `sc-domain:agathalafaiety.com.br` foi criada no Search Console e ficou pendente de verificação DNS. O TXT solicitado é `google-site-verification=EWPtGuzCmWvcBLyHjDbm2hmq7qwdfC5xecJq7h0o_So`; a inclusão deve ser coordenada pelo Falcao e preservar todos os registros DNS existentes.
- Em 2026-09-09, a release `73af1abdbde832897588e2668b89a64f787dd415` foi implantada em produção com o Analytics negado por padrão e opt-in no controle “Privacidade”. Em 2026-09-11, Agatha decidiu remover esse aceite e ativar automaticamente a coleta do Google Analytics somente em produção. A release `0c070ed9371d7428d4c4dfb6771f908f7e20fa6d` é o rollback comprovado da configuração anterior.

## Ambientes de trabalho

- Em 2026-09-11, ficou definido que o Codex trabalha localmente em `C:\Desenvolvimento\alsv`, faz alterações, testes, commit e push, mas não altera a VPS. O agente OpenClaw `alsv` trabalha em `/home/fpripas/.openclaw/workspace-alsv`, mantém seu clone sincronizado pelo Git e coordena qualquer promoção para produção com Falcao. SSH pelo Codex local é permitido somente para inspeção de leitura e comunicação com `alsv`; push não equivale a autorização de deploy.
- Em 2026-09-11, Agatha determinou que conteúdo de workspace criado pelo OpenClaw, incluindo `DREAMS.md`, `dreams.md`, `memory/.dreams/` e `memory/dreaming/`, deve ser preservado no Git e nunca incluído no `.gitignore`. Todo arquivo não ignorado deve passar por `git add -A`, commit e push; a integração entre os ambientes deve terminar sem perda e com ambos os worktrees limpos.
