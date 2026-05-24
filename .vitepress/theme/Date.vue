<script setup lang="ts">
defineProps<{ date: { time: number; string: string } }>()
</script>

<template>
  <time
    class="blog-date"
    :datetime="new Date(date.time).toISOString()"
  >{{ date.string }}</time>
</template>

<style scoped>
.blog-date {
  display: block;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}
</style>
