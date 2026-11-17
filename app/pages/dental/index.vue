<script setup lang="ts">
definePageMeta({ layout: 'dental' })
useSeoMeta({
  title: 'Gentle family dentistry · Linden Dental Studio',
  description:
    'Linden Dental Studio is a friendly family dental clinic in Alderbrook. Check-ups, hygiene, whitening, aligners and same-day emergency care. New patients welcome.',
  ogTitle: 'Gentle family dentistry · Linden Dental Studio',
  ogDescription: 'Calm, modern dental care for the whole family. New patients welcome.'
})

const trust = [
  { icon: 'calendar', value: '14 years', label: 'caring for Alderbrook smiles' },
  { icon: 'users', value: '12,000+', label: 'patients, from toddlers to grandparents' },
  { icon: 'star', value: '4.9 / 5', label: 'from 1,240 Google reviews' },
  { icon: 'heart', value: 'New patients', label: 'welcome, with no waiting list' }
]

const highlights = [
  { icon: 'shield', title: 'Check-ups & cleans', text: 'Thorough, unhurried exams and a gentle hygiene clean.', price: 'from $65', anchor: 'general' },
  { icon: 'sparkle', title: 'Whitening & cosmetic', text: 'Brighter, natural-looking results with a preview first.', price: 'from $349', anchor: 'cosmetic' },
  { icon: 'smile', title: 'Aligners & braces', text: 'Straighter teeth for teens and adults, with payment plans.', price: 'from $2,900', anchor: 'ortho' },
  { icon: 'bolt', title: 'Emergency care', text: 'Toothache or a broken tooth? Same-day slots, every day.', price: 'from $95', anchor: 'emergency' }
]

const steps = [
  {
    title: 'Say hello',
    text: 'Send a request online or call. We will find a time within a few days, and we will email you a short health form to fill in at home.'
  },
  {
    title: 'A calm first appointment',
    text: 'About 45 minutes: a chat about your worries, a full exam with digital X-rays and a polish. No treatment without your say-so.'
  },
  {
    title: 'A plan you understand',
    text: 'You leave with a written plan, clear prices and your insurance estimate. Nothing is booked until you are happy with it.'
  }
]
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__copy">
          <span class="eyebrow">Family dentistry in Alderbrook</span>
          <h1>Dental care that feels gentle from the first hello.</h1>
          <p class="lead">
            Unhurried appointments, honest advice and prices you see before we start. Whether it is a first check-up
            in years or a nervous child’s first visit, you are in good hands.
          </p>
          <div class="hero__actions">
            <NuxtLink to="/dental/contact#book" class="btn btn--primary">Book an appointment</NuxtLink>
            <NuxtLink to="/dental/treatments" class="btn btn--ghost">Our treatments</NuxtLink>
          </div>
          <p class="hero__note"><DentalIcon name="clock" /> Open today until 6:00 pm · Saturday mornings too</p>
        </div>
        <div class="hero__media">
          <img
            src="/dental/hero.jpg"
            width="1200"
            height="1500"
            alt="A young woman laughing, with a bright, healthy smile"
            fetchpriority="high"
          />
          <div class="hero__badge">
            <DentalIcon name="star" />
            <span><strong>4.9</strong> average rating<br />from 1,240 reviews</span>
          </div>
        </div>
      </div>
    </section>

    <section class="trust" aria-label="Why patients choose us">
      <div class="container">
        <ul class="trust__list">
          <li v-for="item in trust" :key="item.value" class="trust__item">
            <span class="trust__icon"><DentalIcon :name="item.icon" /></span>
            <span>
              <strong>{{ item.value }}</strong>
              {{ item.label }}
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section" aria-labelledby="highlights-title">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">What we do</span>
          <h2 id="highlights-title" class="h2">Everything your family needs, under one roof</h2>
          <p class="lead">From the first tooth to the last filling, with clear prices so there are no surprises.</p>
        </div>
        <ul class="cards">
          <li v-for="item in highlights" :key="item.title">
            <NuxtLink :to="`/dental/treatments#${item.anchor}`" class="card">
              <span class="card__icon"><DentalIcon :name="item.icon" /></span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
              <span class="card__price">{{ item.price }}</span>
            </NuxtLink>
          </li>
        </ul>
        <p class="more"><NuxtLink to="/dental/treatments" class="link">See the full price list <DentalIcon name="arrow" /></NuxtLink></p>
      </div>
    </section>

    <section class="section section--tint" aria-labelledby="visit-title">
      <div class="container visit">
        <div class="visit__media">
          <img
            src="/dental/clinic-room.jpg"
            width="1600"
            height="1067"
            loading="lazy"
            alt="A bright treatment room with an orange dental chair and a large window"
          />
        </div>
        <div>
          <span class="eyebrow">Your first visit</span>
          <h2 id="visit-title" class="h2">Three simple steps, no pressure</h2>
          <ol class="steps">
            <li v-for="(step, i) in steps" :key="step.title">
              <span class="steps__num" aria-hidden="true">{{ i + 1 }}</span>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.text }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="reviews-title">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Kind words</span>
          <h2 id="reviews-title" class="h2">What our patients say</h2>
        </div>
        <ul class="reviews">
          <li v-for="t in dentalTestimonials" :key="t.name">
            <figure class="review">
              <div class="review__stars" role="img" aria-label="5 out of 5 stars">
                <DentalIcon v-for="n in 5" :key="n" name="star" />
              </div>
              <blockquote>“{{ t.quote }}”</blockquote>
              <figcaption><strong>{{ t.name }}</strong> · {{ t.detail }}</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section--tint hours" aria-labelledby="hours-title">
      <div class="container hours__inner">
        <div>
          <span class="eyebrow">Opening hours</span>
          <h2 id="hours-title" class="h2">Find us on Linden Row</h2>
          <p class="lead">
            {{ dentalContact.street }}, {{ dentalContact.town }}. Step-free entrance, parking behind the building and two minutes from Alderbrook Station.
          </p>
          <p class="hours__emergency">
            <DentalIcon name="bolt" />
            <span>
              Dental emergency out of hours?
              <a :href="dentalContact.emergencyHref">{{ dentalContact.emergencyPhone }}</a>
            </span>
          </p>
        </div>
        <dl class="hours__table">
          <div v-for="h in dentalHours" :key="h.day" class="hours__row">
            <dt>{{ h.day }}</dt>
            <dd>{{ h.time }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <DentalCta />
  </div>
</template>

<style scoped>
/* Hero */
.hero {
  overflow: hidden;
  padding-block: 40px 56px;
  background:
    radial-gradient(520px 320px at 100% 0%, var(--accent-soft), transparent 70%),
    linear-gradient(180deg, var(--teal-50), #fff 85%);
}

.hero__inner {
  display: grid;
  gap: 40px;
  align-items: center;
}

h1 {
  font-size: clamp(2.3rem, 1.4rem + 3.8vw, 3.9rem);
  font-weight: 800;
}

.hero__copy .lead {
  margin-top: 20px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero__note {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: 500;
}

.hero__note svg {
  color: var(--teal-700);
}

.hero__media {
  position: relative;
  max-width: 440px;
}

.hero__media img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 200px 200px 28px 28px;
  box-shadow: var(--shadow);
}

.hero__badge {
  position: absolute;
  left: -12px;
  bottom: 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 12px 30px rgb(15 63 59 / 0.15);
  font-size: 0.85rem;
  line-height: 1.35;
  color: var(--muted);
}

.hero__badge svg {
  color: var(--accent);
  fill: var(--accent);
}

.hero__badge strong {
  color: var(--teal-900);
  font-size: 1.1rem;
}

@media (min-width: 900px) {
  .hero {
    padding-block: 72px 88px;
  }

  .hero__inner {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 64px;
  }

  .hero__media {
    justify-self: end;
    width: 100%;
  }

  .hero__badge {
    left: -40px;
  }
}

/* Trust bar */
.trust {
  position: relative;
  z-index: 1;
  margin-top: -28px;
}

.trust__list {
  display: grid;
  gap: 4px 16px;
  margin: 0;
  padding: 20px;
  list-style: none;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: #fff;
  box-shadow: var(--shadow);
}

.trust__item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 6px;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.4;
}

.trust__item strong {
  display: block;
  color: var(--teal-900);
  font-size: 1.2rem;
  font-weight: 800;
}

.trust__icon {
  display: grid;
  flex: none;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--teal-100);
  color: var(--teal-700);
}

@media (min-width: 640px) {
  .trust__list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1000px) {
  .trust__list {
    grid-template-columns: repeat(4, 1fr);
    padding: 24px 28px;
  }
}

/* Cards */
.cards {
  display: grid;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--teal-200);
  box-shadow: var(--shadow);
}

.card__icon {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  margin-bottom: 8px;
  border-radius: 16px;
  background: var(--teal-100);
  color: var(--teal-700);
}

.card h3 {
  font-size: 1.25rem;
}

.card p {
  color: var(--muted);
}

.card__price {
  margin-top: auto;
  padding-top: 8px;
  color: var(--accent-ink);
  font-weight: 700;
}

@media (min-width: 640px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1000px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}

.more {
  margin-top: 32px;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--teal-700);
  font-weight: 700;
}

.link:hover {
  text-decoration: underline !important;
}

/* First visit */
.visit {
  display: grid;
  gap: 40px;
  align-items: center;
}

.visit__media img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.steps {
  display: grid;
  gap: 24px;
  margin: 32px 0 0;
  padding: 0;
  list-style: none;
}

.steps li {
  display: flex;
  gap: 18px;
}

.steps__num {
  display: grid;
  flex: none;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent);
  color: #3a1608;
  font-weight: 800;
}

.steps h3 {
  margin-bottom: 4px;
  font-size: 1.2rem;
}

.steps p {
  color: var(--muted);
}

@media (min-width: 900px) {
  .visit {
    grid-template-columns: 1fr 1fr;
    gap: 72px;
  }
}

/* Reviews */
.reviews {
  display: grid;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.review {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  margin: 0;
  padding: 28px;
  border-radius: var(--radius);
  background: var(--teal-50);
}

.review__stars {
  display: flex;
  gap: 2px;
  color: var(--accent);
}

.review__stars svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

blockquote {
  margin: 0;
  font-size: 1.05rem;
}

figcaption {
  margin-top: auto;
  color: var(--muted);
  font-size: 0.9rem;
}

figcaption strong {
  color: var(--teal-900);
}

@media (min-width: 900px) {
  .reviews {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Hours */
.hours__inner {
  display: grid;
  gap: 36px;
  align-items: center;
}

.hours__emergency {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  padding: 14px 18px;
  border-radius: var(--radius-sm);
  background: var(--accent-soft);
  color: var(--accent-ink);
  font-weight: 600;
}

.hours__emergency a {
  font-weight: 800;
  text-decoration: underline !important;
}

.hours__table {
  display: grid;
  margin: 0;
  padding: 8px 28px;
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
}

.hours__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px 16px;
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
}

.hours__row:last-child {
  border-bottom: 0;
}

.hours__row dt {
  font-weight: 700;
  color: var(--teal-900);
}

.hours__row dd {
  margin: 0;
  color: var(--muted);
}

@media (min-width: 900px) {
  .hours__inner {
    grid-template-columns: 1fr 1fr;
    gap: 72px;
  }
}
</style>
