<script setup lang="ts">
import { computed, watch, onMounted } from 'vue'
import { useRoute, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Home from './Home.vue'
import ArticleHeader from './Article.vue'
import ArticleFooter from './ArticleFooter.vue'
import Tags from './Tags.vue'

const route = useRoute()
const { Layout } = DefaultTheme

// detect site base (server+client) so homepage detection works when deployed under a subpath
const { site } = useData()
const siteBaseClient = (typeof window !== 'undefined' && (window.__VP_SITE_DATA__ && window.__VP_SITE_DATA__.base)) || '/'
const siteBase = computed(() => (site && site.value && site.value.base) ? site.value.base : siteBaseClient)

const isBlogPost = computed(() => route.path.startsWith('/posts/'))
const isTagsPage = computed(() => route.path === '/tags/')

const isHome = computed(() => {
  const p = route.path as string
  const base = siteBase.value || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  return p === '/' || p === base || p === normalizedBase
})

onMounted(() => {
  document.documentElement.classList.toggle('is-homepage', isHome.value)
  watch(() => route.path, (path) => {
    document.documentElement.classList.toggle('is-homepage', isHome.value)
  })
})
</script>

<template>
  <Layout>
    <template #doc-before>
      <Home v-if="isHome" />
      <Tags v-else-if="isTagsPage" />
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
