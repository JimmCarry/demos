<script setup lang="ts">
defineProps<{ items: YogaFaq[] }>()
const openIndex = ref<number | null>(0)
const toggle = (i: number) => (openIndex.value = openIndex.value === i ? null : i)
</script>

<template>
  <div class="faq">
    <div v-for="(item, i) in items" :key="item.q" class="faq__item" :class="{ 'is-open': openIndex === i }">
      <h3 class="faq__q">
        <button
          :id="`faq-button-${i}`"
          type="button"
          :aria-expanded="openIndex === i"
          :aria-controls="`faq-panel-${i}`"
          @click="toggle(i)"
        >
          <span>{{ item.q }}</span>
          <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false">
            <path d="M4 7.5l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </h3>
      <div
        :id="`faq-panel-${i}`"
        class="faq__panel"
        role="region"
        :aria-labelledby="`faq-button-${i}`"
        :hidden="openIndex !== i ? true : undefined"
      >
        <p>{{ item.a }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq {
  display: grid;
  gap: 12px;
  max-width: 820px;
  margin-inline: auto;
}
.faq__item {
  border: 1.5px solid var(--line);
  border-radius: var(--radius);
  background: var(--paper);
  transition: border-color 0.25s, box-shadow 0.25s;
}
.faq__item.is-open {
  border-color: var(--sage);
  box-shadow: var(--shadow);
}
.faq__q {
  font-family: var(--font-body) !important;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.35;
}
button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 20px 24px;
  border: 0;
  border-radius: var(--radius);
  background: none;
  text-align: left;
  cursor: pointer;
}
button svg {
  flex: none;
  color: var(--sage-deep);
  transition: transform 0.3s;
}
.is-open button svg {
  transform: rotate(180deg);
}
.faq__panel {
  padding: 0 24px 22px;
  color: var(--muted);
}
.faq__panel[hidden] {
  display: none;
}
</style>
