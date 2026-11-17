<script setup lang="ts">
definePageMeta({ layout: 'yoga' })
useSeoMeta({
  title: 'About the Studio & Teachers · Still Water Yoga',
  description:
    'The story of Still Water Yoga, our approach to teaching and the four teachers who run the classes at our Millbrook studio.',
  ogTitle: 'About Still Water Yoga',
  ogDescription: 'A small studio, four teachers and a simple idea: practise without pressure.'
})

const values = [
  { title: 'Practise without pressure', text: 'There is no perfect pose here. Every shape has options, and rest is always allowed.' },
  { title: 'Small on purpose', text: 'We cap classes so teachers can see you, adjust you and remember what hurt last week.' },
  { title: 'Rooted in the neighbourhood', text: 'Two community classes a month are pay-what-you-can, and we buy tea from the shop next door.' }
]

const facts = [
  { n: '2016', label: 'Opened in Millbrook' },
  { n: '4', label: 'Teachers on the team' },
  { n: '14', label: 'Mats in the main room' },
  { n: '8', label: 'Reformers' }
]
</script>

<template>
  <div>
    <section class="page-hero" aria-labelledby="page-title">
      <div class="container">
        <p class="eyebrow">About</p>
        <h1 id="page-title">A quiet room in the middle of town</h1>
        <p class="lead">Still Water began with fourteen mats, one teacher and a spare key under a flowerpot.</p>
      </div>
    </section>

    <!-- Story -->
    <section class="section section--first" aria-labelledby="story-title">
      <div class="container story">
        <YogaReveal class="story__text">
          <p class="eyebrow">Our story</p>
          <h2 id="story-title" class="h-section">From a rented room to a home studio</h2>
          <p>
            Maya Laurent started teaching in 2016 in a rented room above the old hardware shop on Alder Lane. After
            ten years of hospital administration she knew exactly how tired people were, and she wanted a place that
            asked nothing of them.
          </p>
          <p>
            Within a year the room was full. In 2019 we moved to the ground floor of the old print works next door,
            kept the tall windows, and added the reformers two years later when students kept asking for Pilates.
          </p>
          <p>
            Today we are four teachers, about 25 classes a week and a lot of regulars who now bring their parents,
            partners and neighbours. We have still not bought a single motivational poster.
          </p>
        </YogaReveal>
        <YogaReveal class="story__media" :delay="120">
          <img
            src="/yoga/pilates-arches.jpg"
            width="1200"
            height="1697"
            loading="lazy"
            alt="A woman in a Pilates pose on a reformer in front of arched mirrors in the studio"
          />
        </YogaReveal>
      </div>
    </section>

    <!-- Facts -->
    <section class="facts-wrap" aria-label="The studio in numbers">
      <div class="container">
        <dl class="facts">
          <div v-for="f in facts" :key="f.label">
            <dt>{{ f.label }}</dt>
            <dd>{{ f.n }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="section" aria-labelledby="values-title">
      <div class="container">
        <YogaReveal class="section-head section-head--center">
          <p class="eyebrow">Our philosophy</p>
          <h2 id="values-title" class="h-section">Three things we care about</h2>
        </YogaReveal>
        <ul class="values">
          <li v-for="(v, i) in values" :key="v.title">
            <YogaReveal tag="div" :delay="i * 100" class="value">
              <span class="value__num" aria-hidden="true">{{ i + 1 }}</span>
              <h3>{{ v.title }}</h3>
              <p>{{ v.text }}</p>
            </YogaReveal>
          </li>
        </ul>
      </div>
    </section>

    <!-- Studio photos -->
    <section class="section section--paper" aria-labelledby="space-title">
      <div class="container">
        <YogaReveal class="section-head">
          <p class="eyebrow">The space</p>
          <h2 id="space-title" class="h-section">Light, warm and uncluttered</h2>
          <p class="lead">Sprung wood floors, tall south-facing windows, plants in every corner and a quiet tea corner by the door.</p>
        </YogaReveal>
        <div class="space">
          <YogaReveal class="space__a">
            <img src="/yoga/hero.jpg" width="1920" height="1280" loading="lazy" alt="The main studio with a cork mat, plants and soft neutral walls" />
          </YogaReveal>
          <YogaReveal class="space__b" :delay="100">
            <img src="/yoga/reformer.jpg" width="1200" height="1697" loading="lazy" alt="Reformer beds lined up under warm light in the Pilates room" />
          </YogaReveal>
          <YogaReveal class="space__c" :delay="200">
            <img src="/yoga/teacher-tomas.jpg" width="1200" height="640" loading="lazy" alt="Bolsters and cushions by the windows in the restorative corner" />
          </YogaReveal>
        </div>
      </div>
    </section>

    <!-- Teachers -->
    <section class="section" aria-labelledby="team-title">
      <div class="container">
        <YogaReveal class="section-head">
          <p class="eyebrow">The team</p>
          <h2 id="team-title" class="h-section">Our teachers</h2>
          <p class="lead">All four are certified, keep learning every year and are happy to answer questions after class.</p>
        </YogaReveal>
        <ul class="team">
          <li v-for="(t, i) in yogaTeachers" :key="t.id">
            <YogaReveal tag="article" :delay="(i % 2) * 100" class="member">
              <img :src="t.photo" width="800" height="900" loading="lazy" :alt="t.alt" :style="{ objectPosition: t.position }" />
              <div class="member__body">
                <h3>{{ t.name }}</h3>
                <p class="member__role">{{ t.role }}</p>
                <p>{{ t.bio }}</p>
                <ul class="member__tags" aria-label="Specialties">
                  <li v-for="s in t.specialties" :key="s" class="pill">{{ s }}</li>
                </ul>
              </div>
            </YogaReveal>
          </li>
        </ul>
      </div>
    </section>

    <YogaCtaBand title="Come and say hello" text="The kettle is always on. Drop in for a class or stop by the front desk for a look around." />
  </div>
</template>

<style scoped>
.section--first {
  padding-top: clamp(40px, 6vw, 72px);
}
.story {
  display: grid;
  gap: 40px;
  align-items: center;
}
.story__text {
  display: grid;
  gap: 18px;
  justify-items: start;
}
.story__text p:not(.eyebrow) {
  color: var(--muted);
  max-width: 56ch;
}
.story__media img {
  width: 100%;
  max-height: 640px;
  border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
  object-fit: cover;
  object-position: 50% 40%;
  box-shadow: var(--shadow);
}
@media (min-width: 900px) {
  .story {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 80px;
  }
}

/* Facts */
.facts-wrap {
  padding-block: clamp(32px, 5vw, 56px);
  background: var(--sage-deep);
  color: #fff;
}
.facts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px 16px;
  margin: 0;
  text-align: center;
}
.facts div {
  display: flex;
  flex-direction: column-reverse;
}
.facts dd {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  line-height: 1.1;
}
.facts dt {
  color: #dbe6d6;
  font-size: 0.95rem;
}
@media (min-width: 800px) {
  .facts {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Values */
.values {
  display: grid;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.value {
  height: 100%;
  padding: 32px 28px;
  border-radius: var(--radius-lg);
  background: var(--paper);
  border: 1.5px solid var(--line);
}
.value__num {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-bottom: 18px;
  border-radius: 50%;
  background: var(--blush);
  color: var(--clay-deep);
  font-family: var(--font-display);
  font-size: 1.3rem;
}
.value h3 {
  margin-bottom: 8px;
  font-size: 1.5rem;
}
.value p {
  color: var(--muted);
}
@media (min-width: 800px) {
  .values {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Space */
.space {
  display: grid;
  gap: 16px;
}
.space img {
  width: 100%;
  height: 100%;
  min-height: 220px;
  border-radius: var(--radius);
  object-fit: cover;
}
.space__a img {
  object-position: 45% 55%;
}
.space__b img {
  object-position: 50% 35%;
}
.space__c img {
  object-position: 20% 60%;
}
.space > * {
  min-height: 240px;
}
@media (min-width: 800px) {
  .space {
    grid-template-columns: 1.4fr 1fr;
    grid-template-rows: 260px 260px;
  }
  .space__a {
    grid-row: span 2;
  }
  .space > * {
    min-height: 0;
  }
}

/* Team */
.team {
  display: grid;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.member {
  display: grid;
  overflow: hidden;
  height: 100%;
  border-radius: var(--radius-lg);
  background: var(--paper);
  box-shadow: var(--shadow);
}
.member img {
  width: 100%;
  height: 100%;
  min-height: 260px;
  max-height: 340px;
  object-fit: cover;
}
.member__body {
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 24px 26px 28px;
  color: var(--muted);
}
.member__body h3 {
  color: var(--ink);
  font-size: 1.7rem;
}
.member__role {
  color: var(--clay-deep);
  font-weight: 500;
}
.member__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
}
@media (min-width: 900px) {
  .team {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
