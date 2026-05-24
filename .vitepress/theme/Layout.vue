<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Home from './Home.vue'
import ArticleHeader from './Article.vue'
import ArticleFooter from './ArticleFooter.vue'

const route = useRoute()
const { Layout } = DefaultTheme

const isBlogPost = computed(() => route.path.startsWith('/posts/'))
</script>

<template>
  <Layout>
    <template #doc-before>
      <Home v-if="route.path === '/'" />
      <ArticleHeader v-else-if="isBlogPost" />
    </template>
    <template #doc-after>
      <ArticleFooter v-if="isBlogPost" />
    </template>
  </Layout>
</template>
