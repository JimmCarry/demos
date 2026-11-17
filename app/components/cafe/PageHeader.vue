<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; intro: string }>()
</script>

<template>
  <section class="page-header">
    <div class="container">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="lead">{{ intro }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-header {
  padding-block: clamp(44px, 8vw, 88px) clamp(28px, 5vw, 48px);
  background: var(--c-oat);
  border-bottom: 1px solid var(--c-line);
  border-radius: 0 0 50% 50% / 0 0 28px 28px;
}
h1 { margin: 0 0 16px; font-size: clamp(2.4rem, 6vw, 3.8rem); }
.lead { margin-bottom: 0; }
</style>
