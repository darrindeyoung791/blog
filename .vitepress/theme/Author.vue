<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()

const avatarSrc = frontmatter.github
  ? `https://github.com/${frontmatter.github}.png`
  : frontmatter.gravatar
    ? `https://gravatar.com/avatar/${frontmatter.gravatar}`
    : undefined
</script>

<template>
  <div class="blog-author">
    <a
      v-if="avatarSrc"
      :href="frontmatter.github ? 'https://github.com/' + frontmatter.github : undefined"
      target="_blank"
      rel="noopener noreferrer"
      class="author-avatar"
    >
      <img :src="avatarSrc" alt="author avatar" />
    </a>
    <div class="author-info">
      <span class="author-name">{{ frontmatter.author || 'Unknown' }}</span>
      <a
        v-if="frontmatter.github"
        :href="'https://github.com/' + frontmatter.github"
        target="_blank"
        rel="noopener noreferrer"
        class="author-link"
      >@{{ frontmatter.github }}</a>
    </div>
  </div>
</template>

<style scoped>
.blog-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 0;
}
.author-avatar {
  flex-shrink: 0;
}
.author-avatar img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
}
.author-info {
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.author-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.author-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.author-link:hover {
  color: var(--vp-c-brand-2);
}
</style>
