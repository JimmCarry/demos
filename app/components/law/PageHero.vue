<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; lead: string; image: string; position?: string }>()
</script>

<template>
  <section class="phero">
    <img class="phero__img" :src="image" alt="" width="1200" height="800" :style="{ objectPosition: position || 'center' }" />
    <div class="phero__inner">
      <p class="phero__eyebrow">{{ eyebrow }}</p>
      <h1 class="phero__title">{{ title }}</h1>
      <p class="phero__lead">{{ lead }}</p>
    </div>
  </section>
</template>

<style scoped>
.phero {
  position: relative;
  isolation: isolate;
  background: var(--navy);
  color: #fff;
  overflow: hidden;
}
.phero__img {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
}
.phero::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(90deg, rgb(15 27 45 / 0.92), rgb(15 27 45 / 0.55));
}
.phero__inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: clamp(56px, 9vw, 110px) var(--gutter);
}
.phero__eyebrow {
  margin-bottom: 16px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--brass-bright);
}
.phero__title {
  font-family: var(--font-head);
  font-size: clamp(2.5rem, 6vw, 4.2rem);
  font-weight: 500;
  line-height: 1.05;
}
.phero__lead {
  margin-top: 20px;
  max-width: 58ch;
  font-size: 1.15rem;
  color: #dfe3ea;
}
</style>
