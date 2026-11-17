<script setup lang="ts">
// Accessible accordion: each question is a real button controlling its answer panel.
defineProps<{ items: { q: string; a: string }[] }>()

const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="faq">
    <div v-for="(item, i) in items" :key="item.q" class="faq__item">
      <h3 class="faq__heading">
        <button
          :id="`faq-button-${i}`"
          type="button"
          class="faq__button"
          :aria-expanded="openIndex === i"
          :aria-controls="`faq-panel-${i}`"
          @click="toggle(i)"
        >
          <span>{{ item.q }}</span>
          <DentalIcon name="plus" class="faq__icon" :class="{ 'is-open': openIndex === i }" />
        </button>
      </h3>
      <div
        :id="`faq-panel-${i}`"
        role="region"
        :aria-labelledby="`faq-button-${i}`"
        class="faq__panel"
        :hidden="openIndex !== i"
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
}

.faq__item {
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: #fff;
}

.faq__heading {
  font-size: 1rem;
  letter-spacing: 0;
}

.faq__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 18px 20px;
  border: 0;
  border-radius: var(--radius-sm);
  background: none;
  color: var(--teal-900);
  font-weight: 700;
  font-size: 1.05rem;
  text-align: left;
  cursor: pointer;
}

.faq__button:hover {
  background: var(--teal-50);
}

.faq__icon {
  color: var(--teal-700);
  transition: transform 0.2s;
}

.faq__icon.is-open {
  transform: rotate(45deg);
}

.faq__panel {
  padding: 0 20px 20px;
  color: var(--muted);
  max-width: 70ch;
}
</style>
