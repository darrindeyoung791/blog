<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { data as posts } from './posts.data.js'

const route = useRoute()

const idx = computed(() => posts.findIndex((p) => p.url === route.path))
const nextPost = computed(() => posts[idx.value - 1])
const prevPost = computed(() => posts[idx.value + 1])
</script>

<template>
  <div class="article-footer-area">
    <div v-if="nextPost" class="article-nav">
      <span class="nav-label">Next Article</span>
      <a :href="nextPost.url" class="nav-link">{{ nextPost.title }}</a>
    </div>
    <div v-if="prevPost" class="article-nav">
      <span class="nav-label">Previous Article</span>
      <a :href="prevPost.url" class="nav-link">{{ prevPost.title }}</a>
    </div>
    <a href="/" class="back-link">← Back to the blog</a>
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
