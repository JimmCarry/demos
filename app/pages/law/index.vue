<script setup lang="ts">
definePageMeta({ layout: 'law' })
useSeoMeta({
  title: 'Hartwell & Moss · Attorneys at Law',
  description:
    'Hartwell & Moss is a small law firm in Fenmouth advising on business law, real estate, family law, wills & estates and employment.',
  ogTitle: 'Hartwell & Moss · Attorneys at Law',
  ogDescription: 'Clear, careful legal advice on business, property, family, estates and employment matters.'
})

const stats = [
  { value: '27', label: 'Years in practice' },
  { value: '4,200+', label: 'Matters completed' },
  { value: '3', label: 'Attorneys, no junior hand-offs' },
  { value: '48 h', label: 'Typical reply to a new enquiry' }
]
</script>

<template>
  <div>
    <section class="hero">
      <img
        class="hero__img"
        src="/law/hero-library.jpg"
        alt="Long reading room lined with dark oak shelves of leather-bound law books"
        width="1920"
        height="1280"
        fetchpriority="high"
      />
      <div class="hero__inner">
        <p class="eyebrow">Attorneys at law · Est. 1998</p>
        <h1 class="hero__title">Sound counsel for the decisions that matter.</h1>
        <p class="hero__lead">
          A small firm in Fenmouth advising individuals, families and owner-managed businesses. You will deal with
          the same partner from first call to final signature.
        </p>
        <div class="hero__actions">
          <NuxtLink to="/law/contact#consultation" class="btn btn--brass">Book a consultation</NuxtLink>
          <NuxtLink to="/law/practice-areas" class="btn btn--ghost">Our practice areas</NuxtLink>
        </div>
      </div>
    </section>

    <section class="intro wrap" aria-labelledby="intro-title">
      <div class="intro__text">
        <p class="eyebrow eyebrow--dark">The firm</p>
        <h2 id="intro-title" class="h2">Independent, unhurried and accountable.</h2>
        <p>
          Hartwell &amp; Moss was founded by Edmund Hartwell in 1998, with Clara Moss joining as partner in 2012. We
          kept the firm small on purpose. Every file is handled by a partner, every client has a direct line, and
          every fee is explained in writing before work begins.
        </p>
        <p>
          We do not try to be everything to everyone. Five areas of law, practised well, cover most of what our
          clients bring us.
        </p>
        <NuxtLink to="/law/about" class="link">Meet the attorneys</NuxtLink>
      </div>
      <figure class="intro__fig">
        <img
          src="/law/justice.jpg"
          alt="Fluted stone columns in the hall of a neoclassical courthouse"
          width="1200"
          height="1800"
          loading="lazy"
        />
      </figure>
    </section>

    <section class="areas" aria-labelledby="areas-title">
      <div class="wrap">
        <p class="eyebrow eyebrow--dark">Practice areas</p>
        <h2 id="areas-title" class="h2">Five areas of law, practised in depth.</h2>
        <ul class="areas__grid">
          <li v-for="(area, i) in lawAreas" :key="area.id" class="area">
            <span class="area__no" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="area__name">
              <NuxtLink :to="`/law/practice-areas#${area.id}`">{{ area.name }}</NuxtLink>
            </h3>
            <p>{{ area.summary }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="why" aria-labelledby="why-title">
      <div class="wrap">
        <p class="eyebrow">Why clients choose us</p>
        <h2 id="why-title" class="h2 h2--light">Experience you can count on, in numbers.</h2>
        <dl class="why__stats">
          <div v-for="s in stats" :key="s.label" class="stat">
            <dt class="stat__label">{{ s.label }}</dt>
            <dd class="stat__value">{{ s.value }}</dd>
          </div>
        </dl>
        <ul class="why__points">
          <li><strong>Fixed fees wherever possible.</strong> You know the cost before we begin.</li>
          <li><strong>Plain English.</strong> No jargon, and a written summary after every meeting.</li>
          <li><strong>Partner-led.</strong> Your matter is never passed down to a trainee you have not met.</li>
        </ul>
      </div>
    </section>

    <section class="quote wrap" aria-label="Client testimonial">
      <figure>
        <blockquote class="quote__text">
          “Clara explained our options on the first morning and never once made us feel rushed. The agreement we
          reached with my ex-husband was fair, and we reached it without going to court.”
        </blockquote>
        <figcaption class="quote__by">Helen R. <span>· Family law client, 2024</span></figcaption>
      </figure>
    </section>

    <LawCtaBand />
  </div>
</template>

<style scoped>
.wrap {
  max-width: var(--maxw);
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
}

.eyebrow {
  margin-bottom: 16px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--brass-bright);
}
.eyebrow--dark {
  color: var(--brass);
}
.h2 {
  font-family: var(--font-head);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  line-height: 1.1;
  color: var(--navy);
}
.h2--light {
  color: #fff;
}

.btn {
  display: inline-block;
  padding: 14px 28px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
  border: 1px solid var(--brass-bright);
}
.btn--brass {
  background: var(--brass-bright);
  color: var(--navy);
}
.btn--brass:hover {
  background: #dcc17f;
}
.btn--ghost {
  color: #fff;
}
.btn--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

.link {
  display: inline-block;
  margin-top: 8px;
  color: var(--brass);
  font-weight: 600;
  text-underline-offset: 4px;
}

/* Hero */
.hero {
  position: relative;
  isolation: isolate;
  background: var(--navy);
  color: #fff;
  overflow: hidden;
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
  background: linear-gradient(95deg, rgb(15 27 45 / 0.94) 20%, rgb(15 27 45 / 0.55));
}
.hero__inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: clamp(72px, 12vw, 160px) var(--gutter);
}
.hero__title {
  max-width: 15ch;
  font-family: var(--font-head);
  font-size: clamp(2.8rem, 7vw, 5.2rem);
  font-weight: 500;
  line-height: 1;
}
.hero__lead {
  margin-top: 24px;
  max-width: 52ch;
  font-size: 1.2rem;
  color: #e1e5ec;
}
.hero__actions {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

/* Intro */
.intro {
  display: grid;
  gap: 40px;
  padding-top: clamp(56px, 8vw, 110px);
  padding-bottom: clamp(56px, 8vw, 110px);
}
.intro__text {
  display: grid;
  gap: 18px;
  align-content: start;
}
.intro__fig img {
  width: 100%;
  height: 100%;
  max-height: 520px;
  object-fit: cover;
  border: 1px solid var(--rule);
  outline: 1px solid var(--brass);
  outline-offset: -10px;
}
@media (min-width: 860px) {
  .intro {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 72px;
    align-items: center;
  }
}

/* Areas */
.areas {
  padding: clamp(56px, 8vw, 100px) 0;
  background: var(--paper);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.areas__grid {
  list-style: none;
  margin: 44px 0 0;
  padding: 0;
  display: grid;
  gap: 0;
  border-top: 1px solid var(--rule);
}
.area {
  padding: 28px 0;
  border-bottom: 1px solid var(--rule);
  display: grid;
  gap: 8px;
}
.area__no {
  font-family: var(--font-head);
  font-size: 1.3rem;
  color: var(--brass);
}
.area__name {
  font-family: var(--font-head);
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 1.1;
}
.area__name a {
  color: var(--navy);
  text-decoration: none;
}
.area__name a:hover {
  text-decoration: underline;
  text-decoration-color: var(--brass-bright);
  text-underline-offset: 6px;
}
.area p {
  color: var(--muted);
}
@media (min-width: 720px) {
  .areas__grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 56px;
  }
}
@media (min-width: 1040px) {
  .areas__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Why */
.why {
  padding: clamp(56px, 8vw, 100px) 0;
  background: var(--navy);
  color: #dfe3ea;
}
.why__stats {
  margin: 44px 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid rgb(201 169 97 / 0.5);
}
.stat {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 6px;
  padding: 28px 12px 28px 0;
  border-bottom: 1px solid rgb(255 255 255 / 0.12);
}
.stat__value {
  margin: 0;
  font-family: var(--font-head);
  font-size: clamp(2.6rem, 6vw, 4rem);
  line-height: 1;
  color: var(--brass-bright);
}
.stat__label {
  font-size: 0.95rem;
  color: #dfe3ea;
}
@media (min-width: 860px) {
  .why__stats {
    grid-template-columns: repeat(4, 1fr);
  }
  .stat {
    border-bottom: 0;
    padding-right: 24px;
  }
  .stat + .stat {
    padding-left: 24px;
    border-left: 1px solid rgb(255 255 255 / 0.12);
  }
}
.why__points {
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
  display: grid;
  gap: 18px;
}
.why__points li {
  padding-left: 22px;
  border-left: 2px solid var(--brass-bright);
}
.why__points strong {
  color: #fff;
}
@media (min-width: 860px) {
  .why__points {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}

/* Quote */
.quote {
  padding-top: clamp(56px, 8vw, 100px);
  padding-bottom: clamp(56px, 8vw, 100px);
  text-align: center;
}
.quote figure {
  max-width: 820px;
  margin: 0 auto;
}
.quote__text {
  font-family: var(--font-head);
  font-size: clamp(1.6rem, 3.4vw, 2.3rem);
  font-style: italic;
  line-height: 1.3;
  color: var(--navy);
}
.quote__text::before {
  content: '';
  display: block;
  width: 56px;
  height: 1px;
  margin: 0 auto 28px;
  background: var(--brass);
}
.quote__by {
  margin-top: 24px;
  font-weight: 600;
  color: var(--navy);
}
.quote__by span {
  font-weight: 400;
  color: var(--muted);
}
</style>
