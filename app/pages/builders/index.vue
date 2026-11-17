<script setup lang="ts">
definePageMeta({ layout: 'builders' })
useSeoMeta({
  title: 'Home renovations, extensions & roofing · Ironbark Builders',
  description: 'Ironbark Builders: fixed-price home renovations, extensions, kitchens, bathrooms, roofing and small commercial fit-outs in Harlow Falls.',
  ogTitle: 'Ironbark Builders',
  ogDescription: 'Fixed-price renovations, extensions, kitchens, bathrooms, roofing and fit-outs. 15-year workmanship guarantee.'
})

const stats = [
  { value: '22', label: 'Years building' },
  { value: '900+', label: 'Projects finished' },
  { value: '15 yr', label: 'Workmanship guarantee' },
  { value: '4.9/5', label: 'Average client rating' }
]

const steps = [
  { title: 'Site visit', text: 'We come out, measure up and listen. Free, no obligation, usually within a week.' },
  { title: 'Fixed quote', text: 'An itemised, fixed-price quote in 5 working days. No vague allowances.' },
  { title: 'Build', text: 'One site manager, a written schedule and a weekly update. Clean site every evening.' },
  { title: 'Handover', text: 'Snagging walk-through, certificates, and your 15-year guarantee in writing.' }
]

const featured = buildersProjects.filter((p) => ['terrace', 'marble-kitchen', 'timber-frame'].includes(p.id))

const badges = [
  { label: 'Licensed & bonded', sub: 'State licence CCB #000000' },
  { label: '$5M public liability', sub: 'Insured on every site' },
  { label: 'Master Builders member', sub: 'Code of conduct signed' },
  { label: 'Safety audited', sub: 'Zero lost-time incidents in 3 years' }
]
</script>

<template>
  <div>
    <section class="hero" aria-labelledby="hero-title">
      <img
        class="hero__img"
        src="/builders/frame.jpg"
        alt="Timber frame and roof trusses of a house extension against the sky"
        width="1920"
        height="1280"
        fetchpriority="high"
      />
      <div class="container hero__inner">
        <p class="eyebrow">Harlow Falls · Since 2003</p>
        <h1 id="hero-title">We build it right. <span>The first time.</span></h1>
        <p class="hero__text">
          Home renovations, extensions, kitchens, bathrooms, roofing and small commercial fit-outs. Fixed prices,
          fixed schedules, one site manager from start to finish.
        </p>
        <div class="hero__cta">
          <NuxtLink to="/builders/contact#quote" class="btn">Get a free quote</NuxtLink>
          <NuxtLink to="/builders/projects" class="btn btn--ghost">See our projects</NuxtLink>
        </div>
      </div>
    </section>

    <section class="stats" aria-label="Ironbark in numbers">
      <ul class="container stats__grid">
        <li v-for="s in stats" :key="s.label">
          <strong>{{ s.value }}</strong>
          <span>{{ s.label }}</span>
        </li>
      </ul>
    </section>

    <section class="section" aria-labelledby="services-title">
      <div class="container">
        <p class="eyebrow">What we do</p>
        <h2 id="services-title" class="h2">Five trades. One crew.</h2>
        <ul class="svc">
          <li v-for="(s, i) in buildersServices" :key="s.id">
            <NuxtLink :to="`/builders/services#${s.id}`" class="svc__link">
              <span class="svc__num" aria-hidden="true">0{{ i + 1 }}</span>
              <span class="svc__body">
                <span class="svc__title">{{ s.title }}</span>
                <span class="svc__sum">{{ s.summary }}</span>
              </span>
              <span class="svc__from">from {{ s.from }}</span>
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                <path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" fill="none" />
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section--concrete" aria-labelledby="featured-title">
      <div class="container">
        <div class="head">
          <div>
            <p class="eyebrow">Recent work</p>
            <h2 id="featured-title" class="h2">Featured projects</h2>
          </div>
          <NuxtLink to="/builders/projects" class="btn btn--dark btn--small">All projects</NuxtLink>
        </div>
        <ul class="feat">
          <li v-for="p in featured" :key="p.id">
            <NuxtLink to="/builders/projects" class="feat__card">
              <img :src="p.image" :alt="p.alt" width="800" height="600" loading="lazy" />
              <span class="feat__meta">{{ p.category }} · {{ p.location }}</span>
              <span class="feat__title">{{ p.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section--dark" aria-labelledby="process-title">
      <div class="container">
        <p class="eyebrow">How it works</p>
        <h2 id="process-title" class="h2">From first call to handover</h2>
        <ol class="steps">
          <li v-for="(s, i) in steps" :key="s.title">
            <span class="steps__n" aria-hidden="true">{{ i + 1 }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section" aria-labelledby="reviews-title">
      <div class="container">
        <p class="eyebrow">Straight from clients</p>
        <h2 id="reviews-title" class="h2">What people say</h2>
        <ul class="reviews">
          <li v-for="t in buildersTestimonials" :key="t.name">
            <figure>
              <blockquote>“{{ t.quote }}”</blockquote>
              <figcaption><strong>{{ t.name }}</strong> · {{ t.project }}</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>

    <section class="badges" aria-labelledby="badges-title">
      <div class="container">
        <h2 id="badges-title" class="visually-hidden">Accreditation and insurance</h2>
        <ul class="badges__grid">
          <li v-for="b in badges" :key="b.label">
            <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true" focusable="false">
              <path d="M24 3l18 6v14c0 11-8 18-18 22C14 41 6 34 6 23V9z" fill="none" stroke="#ffc20e" stroke-width="3" />
              <path d="M15 24l7 7 12-14" fill="none" stroke="#ffc20e" stroke-width="3.5" />
            </svg>
            <span><strong>{{ b.label }}</strong><small>{{ b.sub }}</small></span>
          </li>
        </ul>
      </div>
    </section>

    <BuildersCtaBand />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: min(86vh, 760px);
  background: var(--b-ink);
  color: var(--b-white);
  isolation: isolate;
}

.hero__img {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(90deg, rgb(22 24 26 / 0.92) 0%, rgb(22 24 26 / 0.7) 55%, rgb(22 24 26 / 0.35) 100%);
}

.hero__inner {
  padding-block: 72px;
}

.hero h1 {
  max-width: 11ch;
  font-size: clamp(3.4rem, 11vw, 8rem);
  line-height: 0.92;
}

.hero h1 span {
  color: var(--b-accent);
}

.hero__text {
  max-width: 52ch;
  margin: 26px 0 32px;
  font-size: 1.25rem;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.stats {
  background: var(--b-accent);
  color: var(--b-ink);
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}

.stats__grid li {
  display: flex;
  flex-direction: column;
  padding: 26px 12px;
}

.stats__grid strong {
  font-family: var(--b-font-head);
  font-size: clamp(2.6rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1;
}

.stats__grid span {
  font-weight: 600;
}

@media (min-width: 800px) {
  .stats__grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .stats__grid li {
    padding-inline: 24px;
    border-left: 3px solid var(--b-ink);
  }

  .stats__grid li:first-child {
    border-left: 0;
    padding-left: 0;
  }
}

.svc {
  border-top: 3px solid var(--b-ink);
}

.svc__link {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px 20px;
  padding: 24px 8px;
  border-bottom: 1px solid var(--b-concrete-2);
  text-decoration: none;
  transition: background 0.15s, padding 0.15s;
}

.svc__link:hover {
  background: var(--b-concrete);
  padding-left: 20px;
}

.svc__num {
  font-family: var(--b-font-head);
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--b-muted);
}

.svc__body {
  display: flex;
  flex-direction: column;
}

.svc__title {
  font-family: var(--b-font-head);
  font-size: clamp(1.7rem, 4vw, 2.6rem);
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1.05;
}

.svc__sum {
  max-width: 60ch;
  color: var(--b-muted);
}

.svc__from {
  display: none;
  font-family: var(--b-font-head);
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
}

.svc__link svg {
  grid-column: 3;
  grid-row: 1;
}

@media (min-width: 800px) {
  .svc__link {
    grid-template-columns: auto 1fr auto auto;
  }

  .svc__from {
    display: block;
  }

  .svc__link svg {
    grid-column: auto;
    grid-row: auto;
  }
}

.head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 8px;
}

.feat {
  display: grid;
  gap: 24px;
  margin-top: 16px;
}

@media (min-width: 800px) {
  .feat {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feat__card {
  display: block;
  height: 100%;
  background: var(--b-white);
  text-decoration: none;
  border-bottom: 6px solid var(--b-ink);
  transition: border-color 0.15s, transform 0.15s;
}

.feat__card:hover {
  border-bottom-color: var(--b-accent);
  transform: translateY(-4px);
}

.feat__card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.feat__meta {
  display: block;
  padding: 18px 20px 0;
  color: var(--b-muted);
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.feat__title {
  display: block;
  padding: 6px 20px 22px;
  font-family: var(--b-font-head);
  font-size: 1.9rem;
  font-weight: 800;
  line-height: 1.05;
  text-transform: uppercase;
}

.steps {
  display: grid;
  gap: 32px;
  margin-top: 36px;
  counter-reset: none;
}

@media (min-width: 800px) {
  .steps {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .steps li {
    padding-right: 28px;
  }
}

.steps li {
  position: relative;
  padding-top: 20px;
  border-top: 4px solid var(--b-accent);
}

.steps__n {
  display: block;
  font-family: var(--b-font-head);
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  color: var(--b-accent);
}

.steps h3 {
  margin: 8px 0 10px;
  font-size: 1.9rem;
}

.steps p {
  color: var(--b-concrete);
}

.reviews {
  display: grid;
  gap: 24px;
  margin-top: 24px;
}

@media (min-width: 900px) {
  .reviews {
    grid-template-columns: repeat(3, 1fr);
  }
}

.reviews figure {
  height: 100%;
  margin: 0;
  padding: 28px;
  border: 3px solid var(--b-ink);
  border-left-width: 10px;
  border-left-color: var(--b-accent);
}

.reviews blockquote {
  margin: 0 0 18px;
  font-size: 1.2rem;
  font-weight: 500;
}

.reviews figcaption {
  color: var(--b-muted);
}

.badges {
  padding-block: 48px;
  background: var(--b-ink-2);
  color: var(--b-white);
}

.badges__grid {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .badges__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .badges__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.badges__grid li {
  display: flex;
  align-items: center;
  gap: 14px;
}

.badges__grid strong {
  display: block;
  font-family: var(--b-font-head);
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.badges__grid small {
  display: block;
  color: var(--b-muted-on-dark);
  font-size: 0.9rem;
  line-height: 1.3;
}
</style>
