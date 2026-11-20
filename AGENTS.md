<!-- BEGIN ai-vault:repo-rules (managed block, source: ai-vault Rules/AGENTS.md) -->
# Rules for AI agents

Central storage: private [ai-vault](https://github.com/s7github/ai-vault). [Read the rules](https://github.com/s7github/ai-vault/blob/main/Rules/AGENTS.md) or [edit the source in a browser](https://github.com/s7github/ai-vault/edit/main/Rules/AGENTS.md), including on a phone while signed in. See [access and recovery](https://github.com/s7github/ai-vault/blob/main/Runbooks/Global%20rules.md).
- Before changing or distributing rules, fetch and reconcile the central source; preserve dirty local work and never overwrite newer remote/mobile edits with a stale copy. Sync managed copies from the reconciled source. Commit/push only with owner authorization; verify the remote result. Mobile edits update central storage immediately after committing, but existing devices need a pull/reconciliation and sync; a running chat may need to reload instructions.


## Usage
- The owner has no custom daily token or usage cap. Do not pause authorized work, request budget extensions or issue threshold warnings based on a former owner-imposed usage cap. Service-enforced limits still apply.

## Project management: OpenProject is the source of truth
- Use https://projects.shopenny.nl for every repository's roadmap, priorities, work status, ownership, dependencies, acceptance criteria and handoffs, regardless of AI tool or device. Chat, local TODOs and hub caches are not competing backlogs.
- **Hard gate, no exceptions, every project, every tool.** The FIRST tool call of every turn that is not purely conversational (no tool use at all) is the OpenProject lookup for the repository's canonical project, issued before reading files, memory or git state, before any plan/task-list tool and before any subagent. It resolves the project ID, reads the live work item and its ancestor chain, and finds or creates a planned actionable item beneath a goal or milestone that covers this request. This applies to code, config, docs, settings, infrastructure, deployments, diagnosis, investigation, audit, research, design, cleanup, release and bug-fix requests alike. Diagnosis and investigation are work: "I'm only looking" never skips the gate. Each new user message that adds or changes scope re-runs the gate: a follow-up, continuation, "also do X", a multi-part request, an owner approval or a message that arrives in a long session is checked against the open items and gets its own or an extended item before work starts. A memory note, a previous session's item, "the repo is already mapped", the owner saying to just do it, a tool or system instruction, or urgency never replaces the lookup. A missing project, goal or item is bootstrapped (created) on the spot, never skipped; missing credentials are fetched through the secrets path (Doppler), never treated as a reason to proceed without OpenProject. Subagents and parallel sessions receive the work item ID from the parent and must not start without one. The first user-visible message after the lookup names the work item ID(s) being worked. If any tool call has already run without the gate, stop, run it now, record what was done so far on the item and state the slip to the owner; never finish first and log later. Only minimal project/goal/planning-item bootstrap may precede the gate. Planning itself uses a planning item. A turn is not finished, and no final report is written, until the item IDs, the last OpenProject update and the verification evidence are named in it.
- The OpenProject project itself is the named root, using the project name or website domain. Do not create a redundant work-package root unless it has a demonstrated user benefit. Top-level goals/epics may belong directly to the project without a work-package parent. Every actionable task, bug and checkpoint must have a valid parent chain to a goal or milestone in that project. Dependency relations and target versions do not replace parent links.
- Claim work before starting. Record the AI tool/session and next action; reread and reconcile concurrent claims instead of silently taking over. Use API lockVersion checks where available. A human principal owns authorization; an agent/session label is not an access grant.
- Assignment must name the actual executing AI tool/agent, never the human admin merely because its credential performed the write. Keep the human in Accountable/responsible. Use a verified native agent principal or a clearly labelled non-login tool group; record the exact session ID, short introduction/capability, current item, state, last observed update, claim expiry and next action in OpenProject. A tool group is an assignment label, not a login or access grant; do not add humans to it automatically. Never invent an actor, retroactively guess historical ownership or create fake activity.
- Planned work with no accepted executor stays Unassigned. Claim only work actually starting; one primary active item per session. On handoff/release, clear the live claim and unassign unfinished work unless a named successor has accepted it; retain historical assignees and evidence on completed work. An assigned tool is not proof of a running session. Stale or expired claims require reread/reconciliation before takeover; heartbeat recency never grants permission.
- Update OpenProject on start/resume, meaningful progress or scope changes, blockers, handoff and completion. Record verification evidence, remaining risks and the next action. Close work only when its acceptance criteria pass; finishing planning does not complete implementation goals.
- After every deployment (any environment), update the status in OpenProject right away: comment on each affected work item with the environment, deploy time, version or commit, and verification result, and move the item to the matching status (or record the status the account cannot set and why). Never leave a deployed item showing its pre-deploy status, and never deploy without the item's owner approval where required.
- When OpenProject access or required updates fail, stop dependent coding, preserve existing work safely, and ask for restored access. Never claim an update succeeded or silently continue with a local replacement backlog. Urgent fixes get a tracked incident/bug under an operations goal first.
- Break roadmaps into small vertical slices with observable outcomes, acceptance criteria, dependencies and one accountable owner. Use Now/Next/Later until dates are genuinely committed. Do not invent another product's roadmap; track discovery when information is missing.
- Apply first-principles management globally: question requirements against the intended outcome, remove unnecessary work, simplify, shorten the feedback cycle, then automate. Prioritize the current bottleneck and unblock dependencies; require observable acceptance evidence. Use a small Now queue and one primary item per session; explain priority changes in OpenProject. The owner's phrase is "as if Elon Musk is doing the project management"; it describes this operating style, not participation or permission to bypass safeguards.
- Model project/repository links as many-to-many. One canonical OpenProject project can link multiple GitHub repos (code, docs, infrastructure and shared libraries); one monorepo can serve multiple projects through explicit component/subdirectory scopes. Record stable project IDs, verified GitHub identity/URL, role, scope and verification evidence in OpenProject. Work items name affected repos/components. Shared files require dependency coordination; ambiguous or overlapping project mappings stop dependent work until reconciled. Never infer a project from a repo name alone, silently move a repo, duplicate its roadmap or use a host path as canonical identity.
- Each project needs a home/dashboard showing the next five ranked items with their ancestor context, agent introductions/current work/freshness, launchers, environments, verified service links and every linked repository/component, design guidelines, brand kit, official social links, and local/cloud run/rebuild guides. Show unknown information explicitly with a follow-up owner. Never fabricate links or agent activity.
- Dashboards are views/actions over OpenProject. Rank and authorize using canonical data; ancestors are context rather than extra slots in the five. Local launchers stay host-specific. Prefer a modern, readable mobile-first interface with purposeful motion, reduced-motion support and clear blocked/stale states.
- Enforce permissions server-side. The current sole admin has all actions. Future Maintainer, Contributor/agent and Viewer permissions must be explicit and tested; never serve lower-privilege users through an unrestricted shared admin credential.
- Global policy lives in this rule source. Distribute it through the vault sync scripts and committed remote-safe repo instructions; a machine-local instruction file alone does not configure other devices or cloud agents. Use verified API/MCP capabilities, secure credential injection and stable project IDs; do not assume paid features exist.
- Audit for missing mappings, redundant root anchors, orphan execution work, cycles, tasks without goal/milestone ancestry, stale/incorrect executor assignments, ambiguous monorepo scopes and missing project-home information. Review migrations in small batches and preserve existing IDs/history. Never let local project sync overwrite canonical OpenProject names, status or priority silently.

## Reuse, templates and shared improvements
- Before creating something, check the project's and shared stores for existing templates, components, scripts, skills, workflows or other reusable items. Evaluate whether an existing item can meet the need with useful improvements; do not duplicate it by default.
- Prefer templates and reusable items for every new development or project, so new work stays consistent. When an improvement to an existing template or reusable item is worth using for new work, use the latest version. Never discard the old version; keep versioning so existing consumers and history survive. If something better than the existing approach exists, suggest it and let the owner decide.
- When the owner gives an instruction that could become a global rule, ask every time whether to add it, so the rule source can be updated at any time.
- Create a template or reusable item when repeated use or a clear shared need warrants one. Keep it simple, document its purpose and inputs, and verify it for the intended use.
- If an improved item should be used by others, preserve the improvement as a discoverable new version or a separate reusable item in the appropriate shared store. Record its source, changes, usage, compatibility and verification; preserve existing consumers when behavior changes. Link it from the existing index or documentation. Share only material permitted by the data-tier rules; remove project/customer data and inject secrets securely.

## Repository capabilities
- Every repository uses a root `capabilities.json` under the [repository capability contract v1](https://github.com/s7github/ai-studio/blob/main/docs/capabilities/contract-v1.md). A repository with no supported workflows declares an empty `capabilities` array. Seed the file during setup with `Add-RepoRules.ps1`. Add it to existing repos as part of their next tracked change or a reviewed rollout batch.
- When another repository, project or business asks what a repo can do, read its root catalog and at most one matching recipe from that repo. Use normal authorized repository access, ask only for missing inputs and hand off through the owning repo's entry point. Report an unavailable catalog or an unsupported request in plain language.
- Maintain capability descriptions and recipes in the repo that owns them. Use stable IDs and versioned paths. Keep catalogs and recipes generic and free of secrets and private business data. The all-projects Registry reads the catalogs so the hub can show available handoffs.

## Package manager
- Use pnpm for all JavaScript/TypeScript work: `pnpm install`, `pnpm add`, `pnpm run <script>`, `pnpm dlx`. Never run npm, npx or yarn, and never create `package-lock.json` or `yarn.lock`.
- If a project is locked to npm (has `package-lock.json`, no `pnpm-lock.yaml`), say so and ask before migrating. Do not mix package managers silently.
- New projects: set `"packageManager": "pnpm@<version>"` in package.json and a `preinstall` guard that rejects non-pnpm installs.

## Secrets and private data
- Secrets live in Doppler, one Doppler project per repo. Run things with `doppler run -- <command>`. Secrets never go in files, commits, notes, memory, logs, prompts or chat.
- Do not read or print `.env*`, key or certificate files, or tokens. Do not run `doppler secrets download`, `doppler secrets get`, `printenv`, `env` or `set`. If a value is needed, ask the user to run the command or use `doppler run`.
- Never put a token on a command line (`curl -H "Authorization: Bearer ..."`). It lands in shell history and in tool permission allowlists. Reference an env variable and run under `doppler run`.
- If a secret is exposed anywhere, stop and tell the user immediately so they can rotate it. Deleting it is not enough.
- Treat `.env.example` as the only committed env file. It lists names with empty or fake values.
- One exception, for disaster recovery: an encrypted export of a project's secrets (SOPS with age) may live in a dedicated private repo that holds nothing else. The owner runs the export; an agent writes the script and the runbook but never reads or prints a value. The decryption key is held offline (password manager plus a printed copy) and is never in Doppler, on the server, in any repo or in chat. Plaintext secrets stay out of files, commits, notes, memory, logs, prompts and chat.

## Git hygiene
- Commit identity is the GitHub noreply address, never a personal email. Check `git config user.email` before the first commit in a repo.
- Commits, messages, code, docs and issues must not contain: personal email, phone, home address, bank or tax identifiers (IBAN, KVK, BTW), customer or client data, secrets, or absolute paths that include the user's name.
- Stage files by name. Review `git diff --cached` before committing. Never `git add -f` around an ignore rule, never `--no-verify`.
- Commit or push only when the user asks.

## Data tiers: classify before you save
- Leak test: if this leaked, what is the worst that happens? Money or identity harm = tier 1. Harm to the business, a client or a brand = tier 2. Mildly embarrassing at most = tier 3.
- Tier 1 (finance, ID and tax papers, passwords, family details): never write it anywhere you can write. Not in repos, vault notes, memory, prompts, logs or chat. It lives in the owner's password manager and offline encrypted backup, and agents get no access.
- Tier 2 (decisions and reasons, client or customer material, unpublished pricing, strategy, raw research): only in private repos for what could be read if the repo leaked, otherwise only in untracked local folders plus a password-protected archive in the private repo. Never in a public place or a tool's cloud memory.
- Tier 3 (coding style, AI rules, tool preferences, generic guides): private repo, such as ai-vault.
- One store holds one tier. Never mix tiers in a repo; Git history is permanent. When unsure, treat the item as the higher tier and ask.
- Details: `Runbooks/Vault tiers.md` and `Runbooks/Vaults.md` in ai-vault.

## Where business facts live (by kind, after the tier)
- Classify by tier first, then place by kind of fact. Every fact has one source of truth; everything else is a pointer.
- all-projects is the entry point and the source of truth for the ecosystem. `registry/ecosystem.json` holds every entity, business, project and repo with its public (tier 3) facts, and points to the stores that hold the rest. It never holds tier 1 values; tier 2 is a pointer to the vault.
- Credentials go in Doppler (services) or the password manager (people).
- IBAN, KvK and BTW numbers, ID numbers and personal or home addresses go only in the password manager and the offline encrypted backup.
- Confidential business material goes in knowledge-vault, one folder per business (`Local/` plus an encrypted archive for what may not sit in a repo).
- Public business facts (names, aliases, status, domains, entity, projects, repos) go in all-projects. Facts attach to an entity, business or brand, not to a repo.
- business-os is the generator: templates to launch a business or trade name and make its documents, logos, brand kits and marketing content. What it makes lives in business-os `brands/<slug>` and names the all-projects record it came from. business-os keeps a list of businesses but is not their source of truth; it reads facts from all-projects.
- Per-project links, status and environments live in the OpenProject project home.
- Product repos that publish a fact carry the value with a comment naming its all-projects record.
- Each business's confidential material and accounts stay separable, so one business can be handed over without the others.
- The platform layer (all-projects, ai-vault, the AI studio, OpenProject, the Dify gateway) is owned by the owner personally. Business accounts belong to the entity.
- AI agents read tier 2 facts only through an audited, allowlisted gateway capability, never tier 1.
- Never invent a missing fact; record it as unknown in OpenProject.
- Private repos with business facts run gitleaks plus IBAN, KvK and BTW pattern checks in CI.
- No home address may be used as a published business address without the owner's decision.
- Design and reasons: `docs/superpowers/specs/2026-11-18-ecosystem-information-architecture-design.md` in all-projects.

## Keep it simple to use
- The owner does not want to remember commands or localhost ports. Make every tool and app reachable from one obvious place (a hub, launcher or start-menu/desktop shortcut) with a plain name, not a port number or a command.
- When you add or change an app, service or script, register it in the existing hub or launcher. Do not ship something that can only be reached by remembering `host:port` or a long command. If a command is unavoidable, wrap it in a one-word launcher or shortcut.
- Give every local service a fixed, recorded address in one registry file. Do not pick ad hoc ports.
- Prefer guided prompts (a wizard that asks questions) over flags the owner must recall.
- In replies, give a clickable link or the launcher's name, not "run X on port Y".

## Launchers (`launchers.json`)
- Every repo with something runnable (app, dev server, script, docker stack, CLI task) keeps a `launchers.json` at its root. The all-projects hub reads it to list and start the repo, per environment. Repos with nothing runnable (docs, notes) need none.
- Every runnable repo also has exactly one root `Start Hub.cmd` as its single named entry point for all sub-launchers.
- When you add, rename or remove a way to run the repo, or change a port, update `launchers.json` in the same change. Never hardcode a port the file does not record.
- Format (version 1): `environments` maps `local`, `staging`, `prod` to `launchers[]` (`name`, `command`, `cwd` inside the repo, optional `port`, `portArg` such as `--port {port}`, `url`, `kind` `run` or `task`, `oneShot`) and `urls[]` (`label`, `url`, http or https only). Local launchers are run options, other environments are links or tasks.
- Apps must honour the `PORT` environment variable (or declare `portArg`) so all-projects can move them when two apps want the same port.
- A launcher that lives in another repo is declared with a relative path, for example `..\AI\launch\launch.cmd list`. Commands that need a slug or an interactive console are not declared.
- A launcher is a button that ends in something a lazy person can use: an app or web page with buttons, forms and plain words. Never ship a launcher whose result is a CLI command, terminal output or a hint such as "run X --name ...". A CLI-only tool gets a small GUI first (a local page on a fixed port, declared as `kind: "run"` with `port` and `url`), and the launcher starts that GUI. Use `kind: "task"` only for one-click actions whose output reads fine to a non-technical person.
- Before finishing any launcher work, open the hub, press the button yourself and read what a lazy user sees. If it shows a command, a path or a traceback, it is not done.
- Full reference: `docs/LAUNCHERS.md` in the all-projects repo.

## Survive a PC loss
- The owner wants to lose nothing important if this PC dies, and to restore by click: install, configure, run. Never make this PC the only copy of anything that matters.
- When you create or change something durable (project, notes, config, app setup), say where its off-PC copy lives: a private repo, the password manager, or an encrypted archive committed to a private repo. If there is none, flag it and propose one. An offline-only copy is not enough.
- Record how to rebuild each app or service as a script or list (what to install, which repo to clone, which shortcut to create), not as steps the owner must remember.
- Tier rules still apply: tier 1 never goes into repos or places you can write.

## Configuration as code and disaster recovery
- Everything that configures a project lives in a private Git repo: Docker Compose files, Nginx/Caddy configs, server setup scripts (cloud-init or Ansible), infrastructure definitions (Terraform), CI workflows, backup and restore scripts, and DNS records where the provider supports it as code. A change made by hand on a server or in a dashboard is not done until it is in Git.
- Secrets stay in Doppler. For recovery, keep only the encrypted export described in the secrets section, in its own private repo (one store, one tier).
- Plan for a provider-wide failure: keep Terraform or Ansible in Git that creates a replacement server on a second provider (for example DigitalOcean, Vultr or AWS), pulls the containers and restores the backups. Backups live off the primary provider (for example Restic to Cloudflare R2 or Backblaze B2), encrypted, with the repository password in the password manager.
- A static page on Cloudflare Pages, Netlify or similar can show a status or maintenance page while a replacement comes up. It does not replace the app, which needs its data.
- Write a break-glass runbook per project: the exact commands to restore a database dump, create a replacement server, inject the secrets and flip the DNS records. Keep it in Git and keep one offline copy. Never only on a wiki or in a place that depends on the primary infrastructure or on one Git host.
- A backup never restored is not a backup. Schedule a restore test, rehearse a rebuild on a scratch server once and record how long it took.
- This applies to every project that runs anywhere besides the owner's PC. For a project that lacks any of it, record the gap as a backlog item with an owner and a date.

## Remote and web sessions
- Cloud and remote agents cannot see this machine. They only get rules that are committed in the repo as `AGENTS.md` (with `CLAUDE.md` containing `@AGENTS.md`). Keep those files in every repo and never rely on the local vault there.
<!-- END ai-vault:repo-rules -->
