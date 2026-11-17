<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; text: string }>()
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="page-hero__text">{{ text }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding-block: clamp(48px, 8vw, 96px);
  background:
    repeating-linear-gradient(135deg, transparent 0 22px, rgb(255 194 14 / 0.06) 22px 44px),
    var(--b-ink);
  color: var(--b-white);
}

.page-hero h1 {
  font-size: clamp(3rem, 9vw, 6.5rem);
  max-width: 14ch;
}

.page-hero__text {
  margin: 22px 0 0;
  max-width: 56ch;
  font-size: 1.25rem;
  color: var(--b-concrete);
}
</style>
