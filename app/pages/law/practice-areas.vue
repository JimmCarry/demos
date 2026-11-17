<script setup lang="ts">
definePageMeta({ layout: 'law' })
useSeoMeta({
  title: 'Practice areas · Hartwell & Moss',
  description:
    'Business law, real estate, family law, wills & estates and employment law, with typical matters and how our fees work.',
  ogTitle: 'Practice areas · Hartwell & Moss',
  ogDescription: 'What we handle, and what it costs: fixed fees wherever possible.'
})
</script>

<template>
  <div>
    <LawPageHero
      eyebrow="Practice areas"
      title="What we do, and what it costs."
      lead="Five areas of law, each led by a partner. For every one we set out the typical matters we handle and how we charge."
      image="/law/pillars.jpg"
      position="center 30%"
    />

    <div class="wrap layout">
      <nav class="toc" aria-label="Practice areas">
        <p class="toc__title">On this page</p>
        <ul>
          <li v-for="area in lawAreas" :key="area.id">
            <a :href="`#${area.id}`">{{ area.name }}</a>
          </li>
        </ul>
      </nav>

      <div class="areas">
        <section v-for="(area, i) in lawAreas" :id="area.id" :key="area.id" class="area" :aria-labelledby="`${area.id}-h`">
          <p class="area__no" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</p>
          <h2 :id="`${area.id}-h`" class="area__title">{{ area.name }}</h2>
          <p class="area__desc">{{ area.description }}</p>

          <div class="area__cols">
            <div>
              <h3 class="area__h">Typical matters</h3>
              <ul class="area__list">
                <li v-for="m in area.matters" :key="m">{{ m }}</li>
              </ul>
            </div>
            <div class="area__fees">
              <h3 class="area__h">How fees work</h3>
              <p class="area__model">{{ area.fees.model }}</p>
              <p>{{ area.fees.detail }}</p>
            </div>
          </div>
        </section>

        <p class="note">
          Figures are indicative starting points and exclude disbursements such as court, registry and search fees.
          We confirm a written quote after your first consultation.
        </p>
        <NuxtLink to="/law/contact#consultation" class="btn">Book a consultation</NuxtLink>
      </div>
    </div>

    <LawCtaBand />
  </div>
</template>

<style scoped>
.wrap {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 var(--gutter);
}
.layout {
  display: grid;
  gap: 32px;
  padding-top: 40px;
  padding-bottom: clamp(56px, 8vw, 100px);
}
@media (min-width: 960px) {
  .layout {
    grid-template-columns: 240px 1fr;
    gap: 72px;
    padding-top: 72px;
  }
}

.toc {
  align-self: start;
  padding: 20px 0;
  border-top: 2px solid var(--navy);
  border-bottom: 1px solid var(--rule);
  background: var(--ivory);
}
@media (min-width: 960px) {
  .toc {
    position: sticky;
    top: 96px;
  }
}
.toc__title {
  margin-bottom: 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--brass);
}
.toc ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 20px;
}
@media (min-width: 960px) {
  .toc ul {
    flex-direction: column;
    gap: 2px;
  }
}
.toc a {
  display: inline-block;
  padding: 5px 0;
  color: var(--navy);
  text-decoration: none;
  font-weight: 600;
}
.toc a:hover {
  color: var(--brass);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.area {
  scroll-margin-top: 96px;
  padding: 48px 0;
  border-bottom: 1px solid var(--rule);
}
.area:first-child {
  padding-top: 0;
}
.area__no {
  font-family: var(--font-head);
  font-size: 1.3rem;
  color: var(--brass);
}
.area__title {
  margin: 4px 0 16px;
  font-family: var(--font-head);
  font-size: clamp(2.2rem, 4.5vw, 3.2rem);
  font-weight: 500;
  line-height: 1.05;
  color: var(--navy);
}
.area__desc {
  max-width: 62ch;
  font-size: 1.15rem;
}
.area__cols {
  margin-top: 32px;
  display: grid;
  gap: 28px;
}
@media (min-width: 720px) {
  .area__cols {
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }
}
.area__h {
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--rule);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--brass);
}
.area__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}
.area__list li {
  position: relative;
  padding-left: 20px;
}
.area__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.8em;
  width: 10px;
  height: 1px;
  background: var(--brass);
}
.area__fees {
  padding: 20px 22px;
  background: var(--paper);
  border: 1px solid var(--rule);
  border-left: 3px solid var(--brass-bright);
}
.area__fees .area__h {
  padding-bottom: 0;
  border: 0;
}
.area__model {
  margin-bottom: 8px;
  font-family: var(--font-head);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--navy);
}

.note {
  margin: 32px 0 24px;
  max-width: 62ch;
  font-size: 0.95rem;
  color: var(--muted);
}
.btn {
  display: inline-block;
  padding: 14px 28px;
  background: var(--navy);
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
  border: 1px solid var(--navy);
}
.btn:hover {
  background: var(--navy-2);
}
</style>
