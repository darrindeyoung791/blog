<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { data as posts } from './posts.data.js'

const route = useRoute()
const { site } = useData()
const siteBaseClient = (typeof window !== 'undefined' && (window.__VP_SITE_DATA__ && window.__VP_SITE_DATA__.base)) || '/'
const siteBase = computed(() => (site && site.value && site.value.base) ? site.value.base : siteBaseClient)

function withBase(href: string) {
  if (!href || !href.startsWith('/')) return href
  const base = siteBase.value || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  return normalizedBase + href
}

const idx = computed(() => {
  const p = route.path
  let i = posts.findIndex((x) => x.url === p)
  if (i !== -1) return i
  const base = siteBase.value || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  if (normalizedBase !== '/' && p.startsWith(normalizedBase)) {
    const stripped = p.slice(normalizedBase.length) || '/'
    i = posts.findIndex((x) => x.url === stripped)
    if (i !== -1) return i
  }
  const htmlPath = p.endsWith('/') ? p + 'index.html' : p + '.html'
  i = posts.findIndex((x) => x.url === htmlPath)
  return i
})
const nextPost = computed(() => posts[idx.value - 1])
const prevPost = computed(() => posts[idx.value + 1])
</script>

<template>
  <div class="article-footer-area">
    <div v-if="nextPost" class="article-nav">
      <span class="nav-label">Next Article</span>
      <a :href="withBase(nextPost.url)" class="nav-link">{{ nextPost.title }}</a>
    </div>
    <div v-if="prevPost" class="article-nav">
      <span class="nav-label">Previous Article</span>
      <a :href="withBase(prevPost.url)" class="nav-link">{{ prevPost.title }}</a>
    </div>
    <a :href="withBase('/')" class="back-link">← Back to the blog</a>
  </div>
</template>

<style scoped>
.article-footer-area {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.875rem;
  font-weight: 500;
}
.article-nav {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.nav-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
  margin-bottom: 0.25rem;
}
.nav-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.nav-link:hover {
  color: var(--vp-c-brand-2);
}
.back-link {
  display: inline-block;
  margin-top: 1.25rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.back-link:hover {
  color: var(--vp-c-brand-2);
}
</style>
