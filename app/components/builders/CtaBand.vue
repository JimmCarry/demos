<template>
  <section class="cta" aria-labelledby="cta-title">
    <div class="container cta__inner">
      <div>
        <h2 id="cta-title">Got a project in mind?</h2>
        <p>Tell us what you want built. We visit, measure up and send a fixed-price quote within 5 working days.</p>
      </div>
      <div class="cta__actions">
        <NuxtLink to="/builders/contact#quote" class="btn btn--dark">Get a free quote</NuxtLink>
        <a :href="buildersContact.phoneHref" class="cta__phone">or call {{ buildersContact.phone }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding-block: clamp(40px, 7vw, 72px);
  background: var(--b-accent);
  color: var(--b-ink);
}

.cta__inner {
  display: grid;
  gap: 28px;
  align-items: center;
}

.cta h2 {
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  margin-bottom: 12px;
}

.cta p {
  max-width: 52ch;
  margin: 0;
  font-size: 1.15rem;
}

.cta__actions {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
}

.cta__phone {
  font-weight: 600;
}

@media (min-width: 900px) {
  .cta__inner {
    grid-template-columns: 1fr auto;
  }
}
</style>
