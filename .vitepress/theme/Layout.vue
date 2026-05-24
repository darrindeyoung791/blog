<script setup lang="ts">
import { computed, watch, onMounted } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Home from './Home.vue'
import ArticleHeader from './Article.vue'
import ArticleFooter from './ArticleFooter.vue'

const route = useRoute()
const { Layout } = DefaultTheme

const isBlogPost = computed(() => route.path.startsWith('/posts/'))

onMounted(() => {
  document.documentElement.classList.toggle('is-homepage', route.path === '/')
  watch(() => route.path, (path) => {
    document.documentElement.classList.toggle('is-homepage', path === '/')
  })
})
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

<style>
.is-homepage .VPNavBarTitle .title > span {
  display: none;
}
.VPNavBar {
  height: 80px;
}
.VPNavBar:not(.home) {
  background-color: var(--vp-nav-bg-color);
}
.VPNavBar .VPNavBarTitle .title {
  height: 80px;
  font-size: 1.25rem;
}
.VPNavBar .VPNavBarTitle .title .logo {
  height: 42px;
}
.VPNavBar .divider {
  display: none;
}
.VPNavBar .content-body {
  height: 80px;
}
</style>
