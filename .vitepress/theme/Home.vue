<script setup lang="ts">
import Date from './Date.vue'
import { data as posts } from './posts.data.js'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="blog-home">
    <div class="blog-header">
      <h1 class="blog-title">{{ frontmatter.title }}</h1>
      <p v-if="frontmatter.subtext" class="blog-subtext">{{ frontmatter.subtext }}</p>
    </div>
    <ul class="post-list">
      <li v-for="post of posts" :key="post.url" class="post-item">
        <article>
          <Date :date="post.date" />
          <h2 class="post-title">
            <a :href="post.url">{{ post.title }}</a>
            <span v-if="post.frontmatter.sticky" class="sticky-badge">置顶</span>
          </h2>
          <div v-if="post.frontmatter.excerpt" class="post-excerpt" v-html="post.frontmatter.excerpt"></div>
          <a :href="post.url" class="read-more">Read more →</a>
        </article>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.blog-home {
  padding: 2rem 0;
}
.blog-header {
  margin-bottom: 3rem;
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
</style>
