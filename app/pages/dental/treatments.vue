<script setup lang="ts">
definePageMeta({ layout: 'dental' })
useSeoMeta({
  title: 'Treatments & prices · Linden Dental Studio',
  description:
    'Clear prices for check-ups, hygiene, fillings, whitening, veneers, aligners, braces and emergency dental care at Linden Dental Studio.',
  ogTitle: 'Treatments & prices · Linden Dental Studio',
  ogDescription: 'Check-ups, cosmetic dentistry, orthodontics and emergency care, with clear prices.'
})
</script>

<template>
  <div>
    <DentalPageHero
      eyebrow="Treatments & prices"
      title="Clear care, clear prices"
      lead="Every price below is a starting point for a typical case. After your exam we give you an exact written quote, and nothing is done without your agreement."
    />

    <section class="section jump-section" aria-label="Treatment groups">
      <div class="container">
        <nav class="jump" aria-label="Jump to a treatment group">
          <a v-for="g in dentalTreatmentGroups" :key="g.id" :href="`#${g.id}`" class="jump__link">
            <DentalIcon :name="g.icon" /> {{ g.title }}
          </a>
        </nav>

        <article v-for="g in dentalTreatmentGroups" :id="g.id" :key="g.id" class="group" :aria-labelledby="`${g.id}-title`">
          <div class="group__intro">
            <span class="group__icon"><DentalIcon :name="g.icon" /></span>
            <h2 :id="`${g.id}-title`" class="h2">{{ g.title }}</h2>
            <p class="lead">{{ g.intro }}</p>
          </div>
          <ul class="prices">
            <li v-for="item in g.items" :key="item.name" class="price">
              <div class="price__text">
                <h3>{{ item.name }}</h3>
                <p>{{ item.detail }}</p>
              </div>
              <span class="price__amount">{{ item.price }}</span>
            </li>
          </ul>
        </article>

        <p class="fineprint">
          Prices are in US dollars and exclude any insurance contribution. Anaesthetic and standard X-rays are included
          in the treatment price. We will always tell you the total before we start.
        </p>
      </div>
    </section>

    <section class="section section--tint" aria-labelledby="faq-title">
      <div class="container faq-wrap">
        <div>
          <span class="eyebrow">Good to know</span>
          <h2 id="faq-title" class="h2">Frequently asked questions</h2>
          <p class="lead">Can’t see your question here? Call us on {{ dentalContact.phone }} and we will happily help.</p>
        </div>
        <DentalFaq :items="dentalFaqs" />
      </div>
    </section>

    <DentalCta />
  </div>
</template>

<style scoped>
.jump-section {
  padding-top: 40px;
}

.jump {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 56px;
}

.jump__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: 1.5px solid var(--line);
  border-radius: 999px;
  color: var(--teal-900);
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s, border-color 0.2s;
}

.jump__link:hover {
  border-color: var(--teal-500);
  background: var(--teal-50);
}

.group {
  display: grid;
  gap: 24px;
  padding-block: 40px;
  border-top: 1px solid var(--line);
  scroll-margin-top: 90px;
}

.group__icon {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  margin-bottom: 16px;
  border-radius: 16px;
  background: var(--teal-100);
  color: var(--teal-700);
}

.group__intro .lead {
  margin-top: 12px;
  font-size: 1rem;
}

.prices {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.price {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px dashed #c3d6d3;
}

.price:first-child {
  padding-top: 0;
}

.price:last-child {
  border-bottom: 0;
}

.price h3 {
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

.price p {
  margin-top: 2px;
  color: var(--muted);
  font-size: 0.95rem;
}

.price__amount {
  flex: none;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-ink);
  font-weight: 800;
  white-space: nowrap;
}

.fineprint {
  max-width: 70ch;
  padding: 18px 20px;
  border-radius: var(--radius-sm);
  background: var(--teal-50);
  color: var(--muted);
  font-size: 0.9rem;
}

.faq-wrap {
  display: grid;
  gap: 36px;
  align-items: start;
}

@media (min-width: 900px) {
  .group {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 64px;
    padding-block: 56px;
  }

  .faq-wrap {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 64px;
  }
}
</style>
