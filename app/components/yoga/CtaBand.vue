<script setup lang="ts">
defineProps<{ title?: string; text?: string }>()
</script>

<template>
  <section class="cta" aria-labelledby="cta-title">
    <YogaReveal class="cta__inner">
      <h2 id="cta-title">{{ title ?? 'Your first two weeks are $35' }}</h2>
      <p>{{ text ?? 'Unlimited yoga and Mat Pilates for 14 days. Mats, props and a cup of tea are on us.' }}</p>
      <div class="cta__actions">
        <NuxtLink to="/yoga/contact" class="btn btn--clay">Claim the intro offer</NuxtLink>
        <NuxtLink to="/yoga/classes" class="btn btn--ghost">See the schedule</NuxtLink>
      </div>
    </YogaReveal>
  </section>
</template>

<style scoped>
.cta {
  padding: 0 0 var(--space);
}
.cta__inner {
  display: grid;
  justify-items: center;
  gap: 18px;
  width: min(1160px, 100% - 32px);
  margin-inline: auto;
  padding: clamp(44px, 7vw, 88px) clamp(22px, 5vw, 64px);
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 15% 10%, #f7e4d8, transparent 55%), var(--blush);
  text-align: center;
}
h2 {
  max-width: 20ch;
  font-size: clamp(2rem, 4.6vw, 3.3rem);
}
p {
  max-width: 46ch;
  color: var(--muted);
  font-size: 1.1rem;
}
.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 8px;
}
</style>
