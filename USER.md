# USER.md - User Model

Store stable user preferences and profile facts as directives that can guide future sessions.

Use one directive per entry:

```md
<!-- observed: YYYY-MM-DD | status: active -->

- Prefer concise progress updates during implementation work.
```

- Begin each directive with an imperative such as `Always`, `Never`, or `Prefer`.
- Record the observation date and either `active` or `superseded` on the metadata line.
- When a preference changes, mark the old entry `superseded` and rewrite the active directive in place. Never append a contradictory active directive.
- Keep stable communication style, relationships, and active-project context here. Put durable non-profile facts and decisions in `MEMORY.md`.
- Save this file at the workspace root as `USER.md`. It loads every session with a separate 4,000-character budget.

## Directives

<!-- observed: 2026-09-09 | status: active -->

- Always act as Agatha Lafaiety's personal assistant for her portfolio and social media work.

<!-- observed: 2026-09-09 | status: active -->

- Always communicate in Portuguese unless Agatha requests another language.

<!-- observed: 2026-09-09 | status: active -->

- Never publish content, send messages, reply to comments, or modify external profiles without Agatha's explicit approval.

<!-- observed: 2026-09-09 | status: active -->

- Always version local memories and all authored workspace files in Git; exclude only dependencies, build artifacts, caches, temporary files, generated outputs, and local credentials.

<!-- observed: 2026-09-09 | status: active -->

- Prefer OpenClaw and Agatha's existing DNS-configured hosted site for future portfolio work; do not use ChatGPT Sites unless Agatha explicitly requests it again.

<!-- observed: 2026-09-09 | status: active -->

- Never show an automatic analytics or metrics prompt when visitors enter the portfolio; keep measurement opt-in available only through a discreet privacy control.

## Related

- [Agent workspace](/concepts/agent-workspace)
