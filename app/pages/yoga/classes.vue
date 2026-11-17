<script setup lang="ts">
definePageMeta({ layout: 'yoga' })
useSeoMeta({
  title: 'Classes & Weekly Schedule · Still Water Yoga',
  description:
    'The full weekly timetable at Still Water Yoga: Vinyasa, Hatha, Yin, Restorative, Mat Pilates and Reformer Pilates. Filter by class type and level.',
  ogTitle: 'Classes & Weekly Schedule · Still Water Yoga',
  ogDescription: 'Twenty-five classes a week, from beginner Hatha to intermediate Reformer.'
})

const intensityLabel = ['', 'Gentle', 'Moderate', 'Energising']
</script>

<template>
  <div>
    <section class="page-hero" aria-labelledby="page-title">
      <div class="container">
        <p class="eyebrow">Classes</p>
        <h1 id="page-title">Find the class that fits your week</h1>
        <p class="lead">
          Twenty-five classes a week, seven days a week. Use the filters to narrow it down, then book online or at the
          front desk.
        </p>
      </div>
    </section>

    <section class="section" aria-labelledby="schedule-title">
      <div class="container container--wide">
        <h2 id="schedule-title" class="visually-hidden">Weekly timetable</h2>
        <YogaTimetable />
        <p class="note">
          Booking is recommended for evening and Reformer classes. Arrive 10 minutes early for your first visit. Doors
          close 5 minutes after the class starts.
        </p>
      </div>
    </section>

    <section class="section section--paper" aria-labelledby="types-title">
      <div class="container">
        <YogaReveal class="section-head">
          <p class="eyebrow">Class guide</p>
          <h2 id="types-title" class="h-section">What each class is like</h2>
        </YogaReveal>
        <ul class="guide">
          <li v-for="t in yogaClassTypes" :id="t.id" :key="t.id">
            <YogaReveal tag="article" class="guide__item">
              <img
                :src="t.image"
                width="800"
                height="600"
                loading="lazy"
                :alt="t.imageAlt"
                :style="{ objectPosition: t.imagePosition }"
              />
              <div class="guide__body">
                <h3>{{ t.name }}</h3>
                <p>{{ t.description }}</p>
                <dl class="guide__facts">
                  <div>
                    <dt>Feels</dt>
                    <dd>{{ intensityLabel[t.intensity] }}</dd>
                  </div>
                  <div>
                    <dt>Props</dt>
                    <dd>{{ t.props }}</dd>
                  </div>
                </dl>
              </div>
            </YogaReveal>
          </li>
        </ul>
      </div>
    </section>

    <div class="spacer" />
    <YogaCtaBand title="Not sure where to begin?" text="Send us a message and we will suggest two or three classes that suit you. Or try them all with the intro offer." />
  </div>
</template>

<style scoped>
.note {
  max-width: 70ch;
  margin: 28px 4px 0;
  color: var(--muted);
  font-size: 0.95rem;
}
.guide {
  display: grid;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
  scroll-margin-top: 90px;
}
.guide li {
  scroll-margin-top: 96px;
}
.guide__item {
  display: grid;
  overflow: hidden;
  height: 100%;
  border-radius: var(--radius-lg);
  background: var(--sand);
}
.guide__item img {
  width: 100%;
  height: 100%;
  min-height: 220px;
  max-height: 300px;
  object-fit: cover;
}
.guide__body {
  display: grid;
  gap: 12px;
  align-content: start;
  padding: 24px 26px 28px;
}
.guide__body h3 {
  font-size: 1.7rem;
}
.guide__body p {
  color: var(--muted);
}
.guide__facts {
  display: grid;
  gap: 6px;
  margin: 6px 0 0;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-size: 0.92rem;
}
.guide__facts div {
  display: flex;
  gap: 12px;
}
.guide__facts dt {
  min-width: 52px;
  color: var(--clay-deep);
  font-weight: 500;
}
.guide__facts dd {
  margin: 0;
}
@media (min-width: 900px) {
  .guide {
    grid-template-columns: repeat(2, 1fr);
  }
}
.spacer {
  height: var(--space);
}
</style>
