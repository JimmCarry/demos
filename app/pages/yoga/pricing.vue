<script setup lang="ts">
definePageMeta({ layout: 'yoga' })
useSeoMeta({
  title: 'Pricing & Memberships · Still Water Yoga',
  description:
    'Simple pricing at Still Water Yoga: two weeks unlimited for $35, drop-ins from $22, class packs and monthly memberships from $69.',
  ogTitle: 'Pricing & Memberships · Still Water Yoga',
  ogDescription: 'Two weeks unlimited for $35, drop-ins, class packs and monthly memberships.'
})
</script>

<template>
  <div>
    <section class="page-hero" aria-labelledby="page-title">
      <div class="container">
        <p class="eyebrow">Pricing</p>
        <h1 id="page-title">Simple prices, no joining fee</h1>
        <p class="lead">Start with the intro offer, then pick whatever suits how often you want to come. Switch or cancel any time.</p>
      </div>
    </section>

    <!-- Intro offer -->
    <section class="section section--first" aria-labelledby="intro-title">
      <div class="container">
        <YogaReveal class="intro">
          <div class="intro__price" aria-hidden="true">
            <span>$</span>35
          </div>
          <div class="intro__body">
            <p class="eyebrow">For first-time visitors</p>
            <h2 id="intro-title">Two weeks unlimited</h2>
            <p>
              For $35, you get fourteen days of unlimited yoga and Mat Pilates, starting from your first class. Add Reformer classes for $15
              each. It is the easiest way to find your favourite teacher and time slot.
            </p>
            <NuxtLink to="/yoga/contact" class="btn btn--clay">Claim the intro offer</NuxtLink>
          </div>
        </YogaReveal>
      </div>
    </section>

    <!-- Memberships -->
    <section class="section section--paper" aria-labelledby="members-title">
      <div class="container">
        <YogaReveal class="section-head section-head--center">
          <p class="eyebrow">Monthly memberships</p>
          <h2 id="members-title" class="h-section">Make it a habit</h2>
          <p class="lead">Memberships renew monthly and can be cancelled with 7 days notice.</p>
        </YogaReveal>
        <ul class="plans">
          <li v-for="(p, i) in yogaMemberships" :key="p.id">
            <YogaReveal tag="article" :delay="i * 100" class="plan" :class="{ 'plan--hi': p.highlight }">
              <p v-if="p.badge" class="plan__badge">{{ p.badge }}</p>
              <h3>{{ p.name }}</h3>
              <p class="plan__blurb">{{ p.blurb }}</p>
              <p class="plan__price">
                <span class="plan__amount"><small>$</small>{{ p.price }}</span>
                <span class="plan__unit">{{ p.unit }}</span>
              </p>
              <ul class="check-list">
                <li v-for="f in p.features" :key="f">{{ f }}</li>
              </ul>
              <NuxtLink to="/yoga/contact" class="btn" :class="{ 'btn--ghost': !p.highlight }">
                Choose {{ p.name }}
                <span class="visually-hidden">membership</span>
              </NuxtLink>
            </YogaReveal>
          </li>
        </ul>
      </div>
    </section>

    <!-- Drop-in and packs -->
    <section class="section" aria-labelledby="packs-title">
      <div class="container packs">
        <YogaReveal class="packs__intro">
          <p class="eyebrow">Pay as you go</p>
          <h2 id="packs-title" class="h-section">Drop-ins and class packs</h2>
          <p class="lead">Packs never expire on a weekend and can be shared with a friend or partner.</p>
        </YogaReveal>
        <YogaReveal tag="ul" class="packs__list">
          <li v-for="d in yogaDropIn" :key="d.name">
            <div>
              <p class="packs__name">{{ d.name }}</p>
              <p class="packs__note">{{ d.note }}</p>
            </div>
            <p class="packs__price">${{ d.price }}</p>
          </li>
        </YogaReveal>
      </div>
    </section>

    <!-- Included -->
    <section class="section section--tint" aria-labelledby="included-title">
      <div class="container included">
        <YogaReveal>
          <p class="eyebrow">Included with every class</p>
          <h2 id="included-title" class="h-section">Just bring yourself</h2>
        </YogaReveal>
        <YogaReveal tag="ul" class="check-list included__list" :delay="100">
          <li v-for="item in yogaIncluded" :key="item">{{ item }}</li>
        </YogaReveal>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section" aria-labelledby="faq-title">
      <div class="container">
        <YogaReveal class="section-head section-head--center">
          <p class="eyebrow">Questions</p>
          <h2 id="faq-title" class="h-section">Good to know</h2>
        </YogaReveal>
        <YogaFaq :items="yogaFaqs" />
      </div>
    </section>

    <YogaCtaBand title="Still deciding? Come and see." text="Drop in for a class or send us a question. We reply within one working day." />
  </div>
</template>

<style scoped>
.section--first {
  padding-top: clamp(40px, 6vw, 72px);
}

/* Intro */
.intro {
  display: grid;
  gap: 28px;
  align-items: center;
  padding: clamp(28px, 5vw, 56px);
  border-radius: var(--radius-lg);
  background: var(--sage-soft);
}
.intro__price {
  display: grid;
  place-items: center;
  width: clamp(150px, 22vw, 220px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--paper);
  color: var(--sage-deep);
  font-family: var(--font-display);
  font-size: clamp(4rem, 9vw, 6rem);
  line-height: 1;
  box-shadow: var(--shadow);
}
.intro__price span {
  align-self: start;
  margin: 0 0 -0.6em;
  font-size: 0.4em;
  line-height: 1;
}
.intro__price {
  grid-auto-flow: column;
  align-content: center;
  justify-content: center;
  gap: 4px;
}
.intro__body {
  display: grid;
  gap: 14px;
  justify-items: start;
}
.intro__body h2 {
  font-size: clamp(2rem, 4.2vw, 3rem);
}
.intro__body p:not(.eyebrow) {
  max-width: 56ch;
  color: var(--muted);
}
@media (min-width: 800px) {
  .intro {
    grid-template-columns: auto 1fr;
    gap: 56px;
  }
}

/* Plans */
.plans {
  display: grid;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.plan {
  position: relative;
  display: grid;
  gap: 16px;
  align-content: start;
  height: 100%;
  padding: 36px 30px 32px;
  border: 1.5px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--sand);
}
.plan--hi {
  border-color: var(--sage-deep);
  background: var(--paper);
  box-shadow: 0 30px 60px -30px rgb(70 99 74 / 0.5);
}
.plan__badge {
  position: absolute;
  top: -14px;
  left: 30px;
  padding: 4px 16px;
  border-radius: 999px;
  background: var(--clay-deep);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
}
.plan h3 {
  font-size: 1.8rem;
}
.plan__blurb {
  color: var(--muted);
}
.plan__price {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.plan__amount {
  font-family: var(--font-display);
  font-size: 3.4rem;
  line-height: 1;
}
.plan__amount small {
  font-size: 0.5em;
  vertical-align: top;
}
.plan__unit {
  color: var(--muted);
}
.plan .check-list {
  margin-block: 4px 10px;
  font-size: 0.98rem;
}
.plan .btn {
  justify-self: stretch;
}
@media (min-width: 900px) {
  .plans {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
  .plan--hi {
    transform: translateY(-14px);
  }
}

/* Packs */
.packs {
  display: grid;
  gap: 32px;
}
.packs__intro {
  display: grid;
  gap: 14px;
  align-content: start;
}
.packs__list {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}
.packs__list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
}
.packs__list li:first-child {
  border-top: 1px solid var(--line);
}
.packs__name {
  font-family: var(--font-display);
  font-size: 1.4rem;
  line-height: 1.2;
}
.packs__note {
  color: var(--muted);
  font-size: 0.93rem;
}
.packs__price {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--sage-deep);
}
@media (min-width: 900px) {
  .packs {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 72px;
  }
}

/* Included */
.included {
  display: grid;
  gap: 32px;
  align-items: center;
}
.included__list {
  gap: 16px;
  font-size: 1.05rem;
}
@media (min-width: 900px) {
  .included {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 72px;
  }
}
</style>
