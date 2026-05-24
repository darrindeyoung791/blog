<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { data as posts } from './posts.data.js'
import Date from './Date.vue'

const route = useRoute()

const idx = computed(() => posts.findIndex((p) => p.url === route.path))
const post = computed(() => posts[idx.value])
const date = computed(() => post.value?.date)
const lastEditTime = computed(() => post.value?.lastEditTime)
</script>

<template>
  <div class="article-header-area">
    <Date v-if="date" :date="date" />
    <h1 class="article-title">{{ post?.title }}</h1>
    <div v-if="lastEditTime" class="article-edit-time">
      Last edited on {{ lastEditTime.string }}
    </div>
  </div>
</template>

<style scoped>
.article-header-area {
  margin-bottom: 2rem;
}
.article-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.02em;
  margin: 0.5rem 0 0;
  color: var(--vp-c-text-1);
}
.article-edit-time {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}
</style>
