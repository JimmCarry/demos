<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; lead: string }>()
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <span class="eyebrow">{{ eyebrow }}</span>
      <h1>{{ title }}</h1>
      <p class="lead">{{ lead }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding-block: 56px 48px;
  background:
    radial-gradient(600px 240px at 90% 0%, var(--accent-soft), transparent 70%),
    linear-gradient(180deg, var(--teal-50), #fff);
}

h1 {
  max-width: 20ch;
  font-size: clamp(2.1rem, 1.4rem + 3vw, 3.4rem);
  font-weight: 800;
}

.lead {
  margin-top: 16px;
}

@media (min-width: 900px) {
  .page-hero {
    padding-block: 80px 64px;
  }
}
</style>
