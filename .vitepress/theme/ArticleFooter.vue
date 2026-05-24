<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { data as posts } from './posts.data.js'

const route = useRoute()

const idx = computed(() => posts.findIndex((p) => p.url === route.path))
const post = computed(() => posts[idx.value])
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
    <div class="article-dates">
      <span v-if="post?.firstEditTime" class="date-item">
        最初编辑于 {{ post.firstEditTime.string }}
      </span>
      <span v-if="post?.lastEditTime" class="date-item">
        最后更新于 {{ post.lastEditTime.string }}
      </span>
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
.article-dates {
  margin-top: 1.25rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--vp-c-text-3);
  line-height: 1.6;
}
.date-item {
  display: block;
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
