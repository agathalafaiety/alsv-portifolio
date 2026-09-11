# AGENTS_LOCAL_DEV.md - Codex Local Development

Estas regras complementam o `AGENTS.md` compartilhado. Elas se aplicam somente ao Codex executado no workspace local `C:\Desenvolvimento\alsv`.

## Identificação e responsabilidades

- Confirme o ambiente pelo caminho real do workspace e pelo sistema operacional; não presuma que está local apenas pelo nome do repositório.
- No Windows, em `C:\Desenvolvimento\alsv`, atue como o ambiente de desenvolvimento local: leia e edite arquivos locais, execute testes locais e publique mudanças somente no repositório Git remoto.
- Na VPS, o workspace `/home/fpripas/.openclaw/workspace-alsv` pertence ao agente OpenClaw `alsv`. O Codex local não administra esse workspace.
- O agente `alsv` é responsável por sincronizar o clone da VPS a partir do Git e por coordenar qualquer promoção para produção com o agente SysOps Falcao (`agentId: main`).
- Push no Git e deploy em produção são operações distintas. Um push nunca autoriza publicação, reinício de serviço ou alteração de infraestrutura.

## Início de cada trabalho local

1. Execute `git status --short --branch` e preserve qualquer mudança existente, inclusive mudanças que não pareçam relacionadas à tarefa atual.
2. Confirme o branch e o upstream configurados.
3. Quando o worktree estiver limpo, execute `git pull --ff-only` antes de editar. Se houver mudanças locais, divergência, conflito ou avanço remoto inesperado, não sobrescreva nem esconda o estado: inspecione e interrompa para relatar quando não houver integração segura e inequívoca.
4. Leia as instruções e os arquivos relevantes antes de alterar o projeto.

## Trabalho e validação

- Faça todas as alterações e validações no ambiente local.
- Use a menor mudança que resolva a tarefa e preserve trabalho existente do usuário ou de outros agentes.
- Execute os testes, linters, builds ou verificações mais próximos da área alterada. Para mudanças apenas de documentação, execute pelo menos `git diff --check` e revise o diff completo.
- Não coloque credenciais, tokens, arquivos `.env`, segredos reais ou artefatos locais alheios ao workspace no Git. Use `.gitignore` para exclusões legítimas; não omita manualmente arquivos que deveriam ser rastreados.
- Não adicione ao `.gitignore` conteúdo de workspace criado pelo OpenClaw, incluindo arquivos de memória e dreaming. Esses arquivos devem ser preservados e versionados; se algum deles contiver uma credencial ou segredo real, interrompa o push e trate o segredo com segurança sem descartar o restante do arquivo.
- Não use force-push, não reescreva histórico compartilhado e não descarte mudanças desconhecidas.

## Limite da VPS

- Nunca execute via SSH comandos que alterem arquivos, o clone Git, configurações, pacotes, processos, serviços, agendadores, rede, DNS, TLS, proxy, firewall, bancos de dados ou produção na VPS.
- `ssh gfi-vm` pode ser usado apenas para inspeção somente leitura e para conversar com o agente `alsv` por meio da CLI do OpenClaw.
- Para comunicação, prefira `ssh gfi-vm "openclaw agent --agent alsv --message '<mensagem>' --json"`. Diga explicitamente quando a consulta deve ser somente resposta, sem ferramentas ou mudanças.
- Não use `openclaw agent --local` na VPS: a comunicação deve passar pelo Gateway ativo e pelo agente `alsv` configurado.
- Nunca envie segredos na mensagem, na linha de comando ou na saída registrada.
- Quando uma tarefa exigir qualquer mudança remota, informe o resultado local, o branch e o commit ao `alsv`; deixe que ele escolha e coordene a sincronização ou a promoção conforme as regras da VPS. O Codex local não executa a mudança em nome dele.

## Encerramento obrigatório de cada turno

1. Revise `git status --short`, `git diff` e os resultados das validações.
2. Execute `git add -A` conforme a disciplina do workspace e revise `git diff --cached` antes de commitar.
3. Crie um commit descritivo que contenha todas as mudanças rastreáveis do workspace.
4. Faça `git push` para o upstream do branch atual. Nunca use `--force` ou `--force-with-lease`.
5. Verifique que o branch local está sincronizado com o upstream e que `git status --short` está vazio.
6. Quando o `alsv` precisar conhecer ou incorporar o resultado, envie branch, hash do commit, resumo, testes executados e qualquer impacto esperado. Não solicite deploy sem autorização explícita da Agatha.

Se o push for rejeitado, aparecer um conflito ou o remoto tiver mudanças inesperadas, pare e relate o estado. Não resolva apagando, sobrescrevendo ou reescrevendo trabalho.
