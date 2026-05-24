<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import Date from './Date.vue'
import { data as posts } from './posts.data.js'

const route = useRoute()
const { frontmatter } = useData()

const allTags = computed(() => {
  const set = new Set<string>()
  for (const post of posts) {
    const tags = post.frontmatter.tags
    if (Array.isArray(tags)) tags.forEach((t: string) => set.add(t))
  }
  return [...set].sort()
})

const activeTag = computed(() => {
  const tag = route.query.tag
  return typeof tag === 'string' ? tag : null
})

const filteredPosts = computed(() => {
  if (!activeTag.value) return posts
  return posts.filter(p => {
    const tags = p.frontmatter.tags
    return Array.isArray(tags) && tags.includes(activeTag.value)
  })
})

function tagHref(tag: string) {
  return activeTag.value === tag ? '/' : '/?tag=' + encodeURIComponent(tag)
}
</script>

<template>
  <div class="blog-home">
    <div class="blog-header">
      <h1 class="blog-title">{{ frontmatter.title }}</h1>
      <p v-if="frontmatter.subtext" class="blog-subtext">{{ frontmatter.subtext }}</p>
    </div>

    <div v-if="allTags.length" class="tag-filter">
      <span class="tag-filter-label">筛选：</span>
      <a
        :href="'/'"
        class="tag-filter-item"
      >取消筛选</a>
      <a
        v-for="tag in allTags"
        :key="tag"
        :href="tagHref(tag)"
        class="tag-filter-item"
        :class="{ active: activeTag === tag }"
      >{{ tag }}</a>
      <a v-if="activeTag" href="/" class="tag-filter-clear">× 清除</a>
    </div>

    <ul class="post-list">
      <li v-for="post of filteredPosts" :key="post.url" class="post-item">
        <article>
          <Date :date="post.date" />
          <div v-if="post.frontmatter.tags?.length" class="post-tags">
            <a
              v-for="tag in post.frontmatter.tags"
              :key="tag"
              :href="'/?tag=' + encodeURIComponent(tag)"
              class="post-tag"
            >{{ tag }}</a>
          </div>
          <h2 class="post-title">
            <a :href="post.url">{{ post.title }}</a>
            <span v-if="post.frontmatter.sticky" class="sticky-badge">置顶</span>
          </h2>
          <div v-if="post.frontmatter.excerpt" class="post-excerpt" v-html="post.frontmatter.excerpt"></div>
          <a :href="post.url" class="read-more">Read more →</a>
        </article>
      </li>
    </ul>

    <p v-if="!filteredPosts.length" class="no-results">
      没有找到包含「{{ activeTag }}」标签的文章。
      <a href="/">查看全部文章</a>
    </p>
  </div>
</template>

<style scoped>
.blog-home {
  padding: 2rem 0;
}
.blog-header {
  margin-bottom: 2rem;
}
.blog-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}
.blog-subtext {
  margin-top: 0.75rem;
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
}

.tag-filter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}
.tag-filter-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}
.tag-filter-item {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.tag-filter-item:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}
.tag-filter-item.active {
  color: #fff;
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}
.tag-filter-clear {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  text-decoration: none;
  margin-left: auto;
}
.tag-filter-clear:hover {
  color: var(--vp-c-brand-1);
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.post-item {
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.post-item:first-child {
  padding-top: 0;
}
.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 0.5rem 0 0.25rem;
}
.post-tag {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 10%, transparent);
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.2s;
}
.post-tag:hover {
  background: color-mix(in srgb, var(--vp-c-brand-1) 20%, transparent);
}
.post-title {
  margin: 0.25rem 0 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}
.post-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
}
.post-title a:hover {
  color: var(--vp-c-brand-1);
}
.sticky-badge {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.1rem 0.45rem;
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1.4;
  color: #fff;
  background: var(--vp-c-brand-1);
  border-radius: 3px;
  vertical-align: middle;
}
.post-excerpt {
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.post-excerpt :deep(p) {
  margin: 0;
}
.read-more {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.read-more:hover {
  color: var(--vp-c-brand-2);
}
.no-results {
  margin-top: 3rem;
  text-align: center;
  color: var(--vp-c-text-2);
}
.no-results a {
  color: var(--vp-c-brand-1);
}
</style>
