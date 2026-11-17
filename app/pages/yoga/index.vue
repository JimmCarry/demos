<script setup lang="ts">
definePageMeta({ layout: 'yoga' })
useSeoMeta({
  title: 'Yoga & Pilates in Millbrook · Still Water Yoga',
  description:
    'A small, friendly yoga and Pilates studio in Millbrook. Vinyasa, Hatha, Yin, Mat and Reformer Pilates. New here? Try two weeks unlimited for $35.',
  ogTitle: 'Still Water Yoga · Yoga & Pilates in Millbrook',
  ogDescription: 'Small classes, kind teachers and two weeks unlimited for $35.'
})

// Same on server and client, corrected to the visitor's real day once mounted.
const todayIndex = useState('yoga-today', () => yogaTodayIndex())
onMounted(() => (todayIndex.value = yogaTodayIndex()))

const todaysClasses = computed(() =>
  yogaSchedule.filter((c) => c.day === todayIndex.value).sort((a, b) => a.start.localeCompare(b.start))
)

const highlights = [
  { title: 'Small groups', text: 'Never more than 14 on a mat, 8 on a reformer. Your teacher knows your name.' },
  { title: 'All bodies welcome', text: 'Props for everything and options for every pose. Nobody is too stiff or too new.' },
  { title: 'Easy to start', text: 'Book online or just turn up. Mats, props and tea are included.' }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="eyebrow">Yoga &amp; Pilates · Millbrook, OR</p>
          <h1 id="hero-title">Slow down. Breathe. <em>Feel at home</em> in your body.</h1>
          <p class="lead">
            Still Water is a small, light-filled studio with daily yoga and Pilates classes, taught by four teachers who
            will remember your name.
          </p>
          <div class="hero__actions">
            <NuxtLink to="/yoga/pricing" class="btn">Try your first class</NuxtLink>
            <NuxtLink to="/yoga/classes" class="btn btn--ghost">See the schedule</NuxtLink>
          </div>
          <p class="hero__note">New students: <strong>2 weeks unlimited for $35</strong></p>
        </div>
        <div class="hero__media">
          <div class="hero__arch">
            <img
              src="/yoga/hero.jpg"
              width="1920"
              height="1280"
              fetchpriority="high"
              alt="A woman in a graceful backbend on a yoga mat beside a leafy plant in a bright, neutral studio"
            />
          </div>
          <div class="hero__badge" aria-hidden="true">
            <strong>6</strong>
            <span>class styles<br />7 days a week</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="section section--tight" aria-label="Why Still Water">
      <div class="container highlights">
        <YogaReveal v-for="(h, i) in highlights" :key="h.title" tag="div" :delay="i * 100" class="highlight">
          <h2>{{ h.title }}</h2>
          <p>{{ h.text }}</p>
        </YogaReveal>
      </div>
    </section>

    <!-- Intro offer -->
    <section class="container offer-wrap" aria-labelledby="offer-title">
      <YogaReveal class="offer">
        <div>
          <p class="eyebrow">New student offer</p>
          <h2 id="offer-title">Two weeks unlimited, <em>$35</em></h2>
          <p class="offer__text">
            Fourteen days of any yoga or Mat Pilates class on the timetable. Try a morning flow, a slow Yin evening and
            everything in between, then decide what suits you.
          </p>
        </div>
        <NuxtLink to="/yoga/contact" class="btn btn--clay">Claim the offer</NuxtLink>
      </YogaReveal>
    </section>

    <!-- Class types -->
    <section class="section" aria-labelledby="types-title">
      <div class="container">
        <YogaReveal class="section-head">
          <p class="eyebrow">Our classes</p>
          <h2 id="types-title" class="h-section">Six ways to move and rest</h2>
          <p class="lead">From a sweaty morning flow to an hour of lying on bolsters. Not sure what to pick? Start with Gentle Hatha.</p>
        </YogaReveal>
        <ul class="types">
          <li v-for="(t, i) in yogaClassTypes" :key="t.id">
            <YogaReveal tag="article" :delay="(i % 3) * 90" class="type">
              <img
                :src="t.image"
                width="800"
                height="600"
                loading="lazy"
                :alt="t.imageAlt"
                :style="{ objectPosition: t.imagePosition }"
              />
              <div class="type__body">
                <h3>{{ t.name }}</h3>
                <p class="type__short">{{ t.short }}</p>
              </div>
            </YogaReveal>
          </li>
        </ul>
        <p class="center-link"><NuxtLink to="/yoga/classes" class="link-arrow">Read about every class and see the full timetable</NuxtLink></p>
      </div>
    </section>

    <!-- Today -->
    <section class="section section--tint" aria-labelledby="today-title">
      <div class="container today">
        <YogaReveal class="today__intro">
          <p class="eyebrow">On today</p>
          <h2 id="today-title" class="h-section">Today's classes</h2>
          <p class="lead">{{ yogaDays[todayIndex] }} at the studio. Book online, or just turn up ten minutes early.</p>
          <NuxtLink to="/yoga/classes" class="btn btn--ghost today__btn">Full weekly schedule</NuxtLink>
        </YogaReveal>
        <ul class="today__list">
          <li v-for="c in todaysClasses" :key="c.id" class="today__item">
            <time class="today__time">{{ yogaFormatTime(c.start) }}</time>
            <div>
              <p class="today__name">{{ yogaTypeById(c.type).name }}</p>
              <p class="today__meta">{{ yogaTeacherById(c.teacher).name }} · {{ c.minutes }} min</p>
            </div>
            <span class="pill">{{ c.level }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Teachers -->
    <section class="section" aria-labelledby="teachers-title">
      <div class="container">
        <YogaReveal class="section-head section-head--center">
          <p class="eyebrow">Your teachers</p>
          <h2 id="teachers-title" class="h-section">Meet the people behind the mats</h2>
        </YogaReveal>
        <ul class="teachers">
          <li v-for="(t, i) in yogaTeachers" :key="t.id">
            <YogaReveal tag="article" :delay="i * 80" class="teacher">
              <img :src="t.photo" width="800" height="900" loading="lazy" :alt="t.alt" :style="{ objectPosition: t.position }" />
              <h3>{{ t.name }}</h3>
              <p>{{ t.role }}</p>
            </YogaReveal>
          </li>
        </ul>
        <p class="center-link"><NuxtLink to="/yoga/about" class="link-arrow">More about the studio and the team</NuxtLink></p>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section section--paper" aria-labelledby="love-title">
      <div class="container">
        <YogaReveal class="section-head section-head--center">
          <p class="eyebrow">Kind words</p>
          <h2 id="love-title" class="h-section">What our students say</h2>
        </YogaReveal>
        <ul class="quotes">
          <li v-for="(q, i) in yogaTestimonials" :key="q.name">
            <YogaReveal tag="figure" :delay="i * 100" class="quote">
              <blockquote>{{ q.quote }}</blockquote>
              <figcaption>
                <strong>{{ q.name }}</strong>
                <span>{{ q.detail }}</span>
              </figcaption>
            </YogaReveal>
          </li>
        </ul>
      </div>
    </section>

    <div class="spacer" />
    <YogaCtaBand />
  </div>
</template>

<style scoped>
/* Hero */
.hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(36px, 6vw, 80px) clamp(48px, 7vw, 96px);
  background:
    radial-gradient(ellipse at 90% 0%, rgb(240 217 205 / 0.9), transparent 55%),
    radial-gradient(ellipse at 0% 100%, rgb(226 233 221 / 0.9), transparent 50%);
}
.hero__grid {
  display: grid;
  gap: 40px;
  align-items: center;
}
.hero__copy {
  display: grid;
  gap: 20px;
  justify-items: start;
  animation: rise 1s ease both;
}
h1 {
  font-size: clamp(2.6rem, 6.5vw, 4.9rem);
}
h1 em,
.offer h2 em {
  color: var(--clay-deep);
  font-style: italic;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.hero__note {
  color: var(--muted);
  font-size: 0.95rem;
}
.hero__note strong {
  color: var(--sage-deep);
  font-weight: 600;
}
.hero__media {
  position: relative;
  animation: rise 1.2s 0.15s ease both;
}
.hero__arch {
  overflow: hidden;
  max-width: 560px;
  margin-inline: auto;
  border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
  box-shadow: var(--shadow);
  aspect-ratio: 4 / 5;
}
.hero__arch img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 55% 55%;
}
.hero__badge {
  position: absolute;
  left: 0;
  bottom: 8%;
  display: grid;
  place-items: center;
  gap: 0;
  width: 120px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--paper);
  box-shadow: var(--shadow);
  text-align: center;
  line-height: 1.2;
}
.hero__badge strong {
  margin-bottom: -22px;
  color: var(--clay-deep);
  font-family: var(--font-display);
  font-size: 2.6rem;
  font-weight: 400;
}
.hero__badge span {
  margin-top: -10px;
  color: var(--muted);
  font-size: 0.78rem;
}
@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 64px;
  }
  .hero__badge {
    left: -20px;
  }
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* Highlights */
.section--tight {
  padding-block: clamp(40px, 6vw, 72px) 0;
}
.highlights {
  display: grid;
  gap: 28px;
}
.highlight {
  padding-left: 20px;
  border-left: 2px solid var(--sage);
}
.highlight h2 {
  margin-bottom: 6px;
  font-size: 1.5rem;
}
.highlight p {
  color: var(--muted);
}
@media (min-width: 800px) {
  .highlights {
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
  }
}

/* Offer */
.offer-wrap {
  margin-top: var(--space);
}
.offer {
  display: grid;
  gap: 24px;
  align-items: center;
  padding: clamp(28px, 5vw, 56px);
  border-radius: var(--radius-lg);
  background: var(--sage-deep);
  color: #f2f6ef;
}
.offer .eyebrow {
  color: #f0d9cd;
}
.offer h2 {
  margin-bottom: 12px;
  color: #fff;
  font-size: clamp(2rem, 4.5vw, 3.2rem);
}
.offer h2 em {
  color: #f0d9cd;
}
.offer__text {
  max-width: 54ch;
  color: #e3ebe0;
}
@media (min-width: 800px) {
  .offer {
    grid-template-columns: 1fr auto;
    gap: 48px;
  }
}

/* Class types */
.types {
  display: grid;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.type {
  overflow: hidden;
  height: 100%;
  border-radius: var(--radius-lg) var(--radius-lg) var(--radius) var(--radius);
  background: var(--paper);
  box-shadow: var(--shadow);
  transition: transform 0.4s;
}
.type:hover {
  transform: translateY(-4px);
}
.type img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
.type__body {
  padding: 20px 24px 26px;
}
.type h3 {
  font-size: 1.6rem;
}
.type__short {
  color: var(--muted);
}
@media (min-width: 640px) {
  .types {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 980px) {
  .types {
    grid-template-columns: repeat(3, 1fr);
  }
}
.center-link {
  margin-top: 40px;
  text-align: center;
}

/* Today */
.today {
  display: grid;
  gap: 36px;
}
.today__intro {
  display: grid;
  gap: 14px;
  justify-items: start;
  align-content: start;
}
.today__btn {
  margin-top: 8px;
}
.today__list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.today__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 20px;
  align-items: center;
  padding: 18px 22px;
  border-radius: var(--radius);
  background: var(--paper);
}
.today__item .pill {
  grid-column: 2;
  justify-self: start;
}
.today__time {
  min-width: 88px;
  color: var(--sage-deep);
  font-weight: 600;
}
.today__name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  line-height: 1.2;
}
.today__meta {
  color: var(--muted);
  font-size: 0.93rem;
}
@media (min-width: 900px) {
  .today {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 64px;
  }
  .today__item {
    grid-template-columns: 96px 1fr auto;
  }
  .today__item .pill {
    grid-column: auto;
  }
}

/* Teachers */
.teachers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px 18px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.teacher img {
  width: 100%;
  aspect-ratio: 4 / 5;
  margin-bottom: 16px;
  border-radius: 999px 999px var(--radius) var(--radius);
  object-fit: cover;
}
.teacher h3 {
  font-size: 1.4rem;
}
.teacher p {
  color: var(--muted);
  font-size: 0.95rem;
}
@media (min-width: 900px) {
  .teachers {
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
  }
}

/* Testimonials */
.quotes {
  display: grid;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.quote {
  display: grid;
  gap: 20px;
  height: 100%;
  padding: 32px;
  border-radius: var(--radius-lg);
  background: var(--sand);
}
.quote blockquote {
  font-family: var(--font-display);
  font-size: 1.3rem;
  line-height: 1.4;
}
.quote blockquote::before {
  content: '\201C';
  display: block;
  height: 36px;
  color: var(--clay);
  font-size: 4rem;
  line-height: 1;
}
.quote figcaption {
  display: grid;
  align-content: end;
  color: var(--muted);
  font-size: 0.92rem;
}
.quote figcaption strong {
  color: var(--ink);
  font-weight: 500;
}
@media (min-width: 900px) {
  .quotes {
    grid-template-columns: repeat(3, 1fr);
  }
}
.spacer {
  height: var(--space);
}
</style>
