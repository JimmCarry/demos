<script setup lang="ts">
// Small floating label on every demo site, so nobody mistakes it for a real business.
// Its look is deliberately neutral, so it fits on top of any site design.
import { author } from '~/data/demos'

const open = ref(true)
</script>

<template>
  <aside v-if="open" class="demo-badge" aria-label="About this demo">
    <span class="demo-badge__text">Demo website · fictional business</span>
    <NuxtLink to="/" class="demo-badge__link">All demos</NuxtLink>
    <a :href="author.site" class="demo-badge__link" target="_blank" rel="noopener">Built by {{ author.name }} ↗</a>
    <button type="button" class="demo-badge__close" aria-label="Hide demo label" @click="open = false">×</button>
  </aside>
</template>

<style scoped>
.demo-badge {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 14px;
  max-width: calc(100vw - 32px);
  padding: 8px 10px 8px 14px;
  border-radius: 10px;
  background: rgb(18 17 16 / 0.92);
  box-shadow: 0 6px 24px rgb(0 0 0 / 0.25);
  color: #ecebe6;
  font: 500 13px/1.4 system-ui, -apple-system, 'Segoe UI', sans-serif;
  backdrop-filter: blur(6px);
}

.demo-badge__text {
  color: #a39f95;
}

.demo-badge__link {
  color: #ffb547;
  text-decoration: none;
}

.demo-badge__link:hover,
.demo-badge__link:focus-visible {
  text-decoration: underline;
}

.demo-badge__close {
  padding: 0 4px;
  border: 0;
  background: none;
  color: #a39f95;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}

.demo-badge__close:hover {
  color: #ecebe6;
}
</style>
