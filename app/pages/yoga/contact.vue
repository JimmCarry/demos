<script setup lang="ts">
definePageMeta({ layout: 'yoga' })
useSeoMeta({
  title: 'Contact & Visit · Still Water Yoga',
  description:
    'Find Still Water Yoga at 14 Alder Lane, Millbrook. Opening hours, what to bring to your first class and a form to ask us anything.',
  ogTitle: 'Contact & Visit · Still Water Yoga',
  ogDescription: 'Address, opening hours, what to bring and a message form.'
})

const bring = [
  'Comfortable clothes you can stretch in',
  'A water bottle (we have a refill tap)',
  'Grip socks for Reformer, or buy a pair for $12',
  'A small towel if you run warm',
  'Nothing else. We provide mats, props and blankets'
]
</script>

<template>
  <div>
    <section class="page-hero" aria-labelledby="page-title">
      <div class="container">
        <p class="eyebrow">Contact</p>
        <h1 id="page-title">Come and visit, or just say hello</h1>
        <p class="lead">Questions about classes, injuries, private sessions or the intro offer? Send us a note and a real person will reply.</p>
      </div>
    </section>

    <section class="section section--first" aria-labelledby="form-title">
      <div class="container layout">
        <div class="layout__form">
          <h2 id="form-title" class="h-section">Send us a message</h2>
          <YogaContactForm />
        </div>

        <aside class="layout__info" aria-label="Studio details">
          <YogaReveal class="card">
            <h2>Find us</h2>
            <address>
              {{ yogaStudio.address[0] }}<br />
              {{ yogaStudio.address[1] }}
            </address>
            <p>
              <a :href="yogaStudio.phoneHref">{{ yogaStudio.phone }}</a><br />
              <a :href="`mailto:${yogaStudio.email}`">{{ yogaStudio.email }}</a>
            </p>
            <p class="card__small">Street parking on Alder Lane, free after 6 pm. Bike racks by the door.</p>
          </YogaReveal>
          <YogaReveal class="card" :delay="100">
            <h2>Opening hours</h2>
            <dl class="hours">
              <div v-for="h in yogaHours" :key="h.days">
                <dt>{{ h.days }}</dt>
                <dd>{{ h.hours }}</dd>
              </div>
            </dl>
            <p class="card__small">The front desk is staffed 30 minutes before the first class and until the last class ends.</p>
          </YogaReveal>
        </aside>
      </div>
    </section>

    <section class="section section--paper" aria-labelledby="map-title">
      <div class="container visit">
        <YogaReveal class="visit__map">
          <h2 id="map-title" class="visually-hidden">Map</h2>
          <YogaMap />
        </YogaReveal>
        <YogaReveal class="visit__bring" :delay="100">
          <p class="eyebrow">First visit</p>
          <h2 class="h-section">What to bring</h2>
          <ul class="check-list">
            <li v-for="b in bring" :key="b">{{ b }}</li>
          </ul>
          <p class="visit__tip">Arrive 10 minutes early and tell the front desk it is your first class. We will show you the changing rooms and set you up with a mat.</p>
        </YogaReveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section--first {
  padding-top: clamp(40px, 6vw, 72px);
}
.layout {
  display: grid;
  gap: 40px;
  align-items: start;
}
.layout__form {
  display: grid;
  gap: 24px;
}
.layout__form .h-section {
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
}
.layout__info {
  display: grid;
  gap: 20px;
}
.card {
  display: grid;
  gap: 12px;
  padding: 28px;
  border-radius: var(--radius-lg);
  background: var(--paper);
  border: 1.5px solid var(--line);
}
.card h2 {
  font-size: 1.6rem;
}
.card address {
  font-style: normal;
  font-size: 1.1rem;
}
.card a {
  color: var(--sage-deep);
  text-underline-offset: 4px;
}
.card__small {
  color: var(--muted);
  font-size: 0.93rem;
}
.hours {
  display: grid;
  gap: 8px;
  margin: 0;
}
.hours div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--line);
}
.hours dd {
  margin: 0;
  font-weight: 500;
}
@media (min-width: 960px) {
  .layout {
    grid-template-columns: 1.3fr 0.7fr;
    gap: 56px;
  }
}

.visit {
  display: grid;
  gap: 40px;
  align-items: center;
}
.visit__bring {
  display: grid;
  gap: 18px;
  justify-items: start;
}
.visit__tip {
  color: var(--muted);
  max-width: 52ch;
}
@media (min-width: 900px) {
  .visit {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 72px;
  }
}
</style>
