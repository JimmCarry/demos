<script setup lang="ts">
// Hub layout: same terminal look as the main portfolio site.
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap'
    }
  ],
  meta: [{ name: 'theme-color', content: '#121110' }]
})
</script>

<template>
  <div class="hub">
    <slot />
  </div>
</template>

<style>
body:has(.hub) {
  background: #121110;
}
</style>

<style scoped>
.hub {
  --bg: #121110;
  --surface: #1b1a18;
  --text: #ecebe6;
  --muted: #c2beb5;
  --label: #a39f95;
  --border: #2a2826;
  --border-strong: #3a3734;
  --accent: #ffb547;
  --font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color-scheme: dark;
}
</style>
