<script setup lang="ts">
defineProps<{ title?: string; text?: string }>()
</script>

<template>
  <section class="cta" aria-labelledby="cta-title">
    <div class="container">
      <div class="cta__box">
        <div>
          <h2 id="cta-title">{{ title ?? 'Ready for a calmer dental visit?' }}</h2>
          <p>{{ text ?? 'New patients are always welcome. Send a request online or call us, and we will find a time that suits you, usually within the week.' }}</p>
        </div>
        <div class="cta__actions">
          <NuxtLink to="/dental/contact#book" class="btn btn--warm">Book an appointment</NuxtLink>
          <a :href="dentalContact.phoneHref" class="btn cta__call">
            <DentalIcon name="phone" /> {{ dentalContact.phone }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding-block: 0 72px;
}

.cta__box {
  display: grid;
  gap: 28px;
  padding: 36px 28px;
  border-radius: 28px;
  background: var(--teal-700);
  color: #e6f3f1;
}

.cta__box h2 {
  color: #fff;
  font-size: clamp(1.6rem, 1.2rem + 1.6vw, 2.3rem);
  font-weight: 800;
}

p {
  margin-top: 10px;
  max-width: 52ch;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.cta__call {
  border-color: rgb(255 255 255 / 0.5);
  color: #fff;
}

.cta__call:hover {
  background: rgb(255 255 255 / 0.12);
}

@media (min-width: 900px) {
  .cta__box {
    grid-template-columns: 1.4fr 1fr;
    align-items: center;
    padding: 56px;
  }

  .cta__actions {
    justify-content: flex-end;
  }
}
</style>
