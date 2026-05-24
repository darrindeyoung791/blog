# AGENTS.md — darrindeyoung791 blog

## Project

VitePress 2.x alpha blog. No tests, no linting, no typechecking, no CI/CD, no git history.

## Commands

| Command | Action |
|---|---|
| `npm run docs:dev` | Start dev server (hot-reload) |
| `npm run docs:build` | Build static site |
| `npm run docs:preview` | Preview production build locally |

## Key config

- `.vitepress/config.mts` — site config (TypeScript, ESM)
- `srcDir: "docs"` — all markdown content lives under `docs/`
- `cleanUrls: true` — links omit `.html` extension
- No custom components, theme overrides, Vite plugins, or markdown extensions
- VitePress 2.x alpha APIs differ from stable 1.x — consult [vitepress.dev](https://vitepress.dev)

## Structure

```
.vitepress/config.mts    # site configuration
docs/                    # markdown content (srcDir)
├── index.md             # home page (layout: home)
├── markdown-examples.md
└── api-examples.md
```
