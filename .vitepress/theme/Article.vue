<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { data as posts } from './posts.data.js'
import Date from './Date.vue'

const { site } = useData()
const siteBaseClient = (typeof window !== 'undefined' && (window.__VP_SITE_DATA__ && window.__VP_SITE_DATA__.base)) || '/'
const siteBase = computed(() => (site && site.value && site.value.base) ? site.value.base : siteBaseClient)

function withBase(href: string) {
  if (!href || !href.startsWith('/')) return href
  const base = siteBase.value || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  return normalizedBase + href
}

const route = useRoute()

const idx = computed(() => {
  const p = route.path
  // try exact match
  let i = posts.findIndex((x) => x.url === p)
  if (i !== -1) return i
  // try removing site base if present
  const base = siteBase.value || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  if (normalizedBase !== '/' && p.startsWith(normalizedBase)) {
    const stripped = p.slice(normalizedBase.length) || '/'
    i = posts.findIndex((x) => x.url === stripped)
    if (i !== -1) return i
  }
  // try matching with .html variant (static build)
  const htmlPath = p.endsWith('/') ? p + 'index.html' : p + '.html'
  i = posts.findIndex((x) => x.url === htmlPath)
  return i
})
const post = computed(() => posts[idx.value])
const date = computed(() => post.value?.date)
const tags = computed(() => {
  const t = post.value?.frontmatter.tags
  return Array.isArray(t) ? t : []
})
</script>

<template>
  <div class="article-header-area">
    <Date v-if="date" :date="date" />
    <div v-if="tags.length" class="article-tags">
      <a
        v-for="tag in tags"
        :key="tag"
        :href="withBase('/')"
        class="article-tag"
      >{{ tag }}</a>
    </div>
  </div>
</template>

<style scoped>
.article-header-area {
  margin-bottom: 2rem;
}
.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
}
.article-tag {
  display: inline-block;
  padding: 0.15rem 0.6rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 10%, transparent);
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.2s;
}
.article-tag:hover {
  background: color-mix(in srgb, var(--vp-c-brand-1) 20%, transparent);
}
</style>
