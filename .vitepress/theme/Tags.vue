<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from './posts.data.js'

interface TagEntry {
  name: string
  count: number
  postUrls: string[]
}

const tags = computed<TagEntry[]>(() => {
  const map = new Map<string, string[]>()
  for (const post of posts) {
    const t = post.frontmatter.tags
    if (!Array.isArray(t)) continue
    for (const tag of t) {
      const list = map.get(tag) || []
      list.push(post.url)
      map.set(tag, list)
    }
  }
  return [...map.entries()]
    .map(([name, postUrls]) => ({ name, count: postUrls.length, postUrls }))
    .sort((a, b) => b.count - a.count)
})
</script>

<template>
  <div class="tags-page">
    <h1 class="tags-title">Tags</h1>
    <p class="tags-subtext">共 {{ tags.length }} 个标签</p>

    <div class="tag-cloud">
      <a
        v-for="tag in tags"
        :key="tag.name"
        :href="'/'"
        class="tag-cloud-item"
        :style="{ fontSize: Math.max(0.85, Math.min(1.6, 0.7 + tag.count * 0.2)) + 'rem' }"
      >{{ tag.name }}<sup class="tag-count">{{ tag.count }}</sup></a>
    </div>
  </div>
</template>

<style scoped>
.tags-page {
  padding: 2rem 0;
}
.tags-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}
.tags-subtext {
  margin-top: 0.75rem;
  margin-bottom: 2rem;
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
}
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  line-height: 1;
}
.tag-cloud-item {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.3rem 0.7rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.tag-cloud-item:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 6%, transparent);
}
.tag-count {
  font-size: 0.65em;
  font-weight: 500;
  color: var(--vp-c-text-3);
  vertical-align: super;
}
</style>
