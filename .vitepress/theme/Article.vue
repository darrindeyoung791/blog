<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { data as posts } from './posts.data.js'
import Date from './Date.vue'

const route = useRoute()

const idx = computed(() => posts.findIndex((p) => p.url === route.path))
const post = computed(() => posts[idx.value])
const date = computed(() => post.value?.date)
</script>

<template>
  <div class="article-header-area">
    <Date v-if="date" :date="date" />
  </div>
</template>

<style scoped>
.article-header-area {
  margin-bottom: 2rem;
}
</style>
