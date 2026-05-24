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
- VitePress 2.x alpha APIs differ from stable 1.x — consult [vitepress.dev](https://vitepress.dev)

## Blog theme architecture

This project uses a custom theme (like [vuejs/blog](https://github.com/vuejs/blog)):

| File | Role |
|---|---|
| `.vitepress/theme/index.ts` | Theme entry — extends DefaultTheme, registers custom Layout |
| `.vitepress/theme/Layout.vue` | Root layout — selects Home/Article/DefaultTheme based on frontmatter + path |
| `.vitepress/theme/Home.vue` | Blog roll page — lists posts from `posts.data.ts` |
| `.vitepress/theme/Article.vue` | Individual post page — title, date, author, prev/next nav, git last edit time |
| `.vitepress/theme/Date.vue` | Date display component |
| `.vitepress/theme/Author.vue` | Author display with GitHub avatar/link (preferred), falls back to gravatar |
| `.vitepress/theme/posts.data.ts` | `createContentLoader` — reads `docs/posts/*.md`, sorts by date, extracts git last edit time |

## Adding a blog post

Create `docs/posts/<slug>.md` with frontmatter:

```md
---
title: Your Title
date: YYYY-MM-DD
author: Your Name
github: <username>        # optional — shows GitHub avatar + link
gravatar: <md5-hash>      # optional — fallback avatar (used if no github)
twitter: "@handle"        # optional — shows Twitter link
---
```

The post appears automatically on the home page, sorted by date descending. Article page shows prev/next navigation based on date order.

## Git last edit time

`posts.data.ts` runs `git log -1 --format="%ai"` per file at build time. The last edit time displays on the article page. Files without git history (new/uncommitted) skip this field.

## Structure

```
.vitepress/
├── config.mts
└── theme/
    ├── index.ts
    ├── Layout.vue
    ├── Home.vue
    ├── Article.vue
    ├── Date.vue
    ├── Author.vue
    └── posts.data.ts
docs/
├── index.md           # home page (frontmatter: index: true)
└── posts/             # blog posts
    └── *.md
```
