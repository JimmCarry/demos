<script setup lang="ts">
definePageMeta({ layout: 'builders' })
useSeoMeta({
  title: 'About · Ironbark Builders',
  description: 'Meet the family-run team behind Ironbark Builders: our story, values, safety record and 15-year workmanship warranty.',
  ogTitle: 'About · Ironbark Builders',
  ogDescription: 'Family-run builders since 2003. Our story, values, team, safety and warranty.'
})

const values = [
  { title: 'Fixed price', text: 'If we quote it, we build it for that number. Changes are agreed in writing before work starts.' },
  { title: 'Show up', text: 'We start when we said we would and tell you early if something slips. No ghosting mid-project.' },
  { title: 'Leave it clean', text: 'Dust sheets, daily tidy-ups and a deep clean at handover. Your home stays your home.' },
  { title: 'Own the work', text: 'Our own tradespeople, not a chain of unknown subcontractors. Our name stays on every job.' }
]

const team = [
  { name: 'Tom Brandt', role: 'Founder & Managing Director', bio: 'Carpenter by trade. Started Ironbark in 2003 with one van and a borrowed table saw.', initials: 'TB' },
  { name: 'Maria Ochoa', role: 'Head of Projects', bio: 'Runs every schedule and every site manager. Eighteen years in residential construction.', initials: 'MO' },
  { name: 'Jamal Okafor', role: 'Lead Estimator', bio: 'Writes the quotes. Visits every site himself and photographs everything.', initials: 'JO' },
  { name: 'Hannah Lindqvist', role: 'Health & Safety Manager', bio: 'Audits every site fortnightly and trains every apprentice before their first day.', initials: 'HL' }
]

const safety = [
  { label: '0', text: 'lost-time incidents in the last 3 years' },
  { label: '15 yr', text: 'written workmanship guarantee on every job' },
  { label: '$5M', text: 'public liability insurance' },
  { label: '12 mo', text: 'free defect fixes after handover, no questions asked' }
]
</script>

<template>
  <div>
    <BuildersPageHero
      eyebrow="About us"
      title="Family-run since 2003"
      text="Ironbark started with one van and a borrowed table saw. Twenty-two years later we are 28 people, still working in the same few towns, still answering our own phone."
    />

    <section class="section story" aria-labelledby="story-title">
      <div class="container story__grid">
        <img
          src="/builders/crew.jpg"
          alt="Black and white photo of builders in hard hats and hi-vis vests gathered on a site"
          width="1200"
          height="750"
          loading="lazy"
        />
        <div>
          <p class="eyebrow">Our story</p>
          <h2 id="story-title" class="h2">Small enough to care</h2>
          <p>
            Tom Brandt left a big contractor in 2003 after watching a kitchen job run eight weeks over because nobody
            owned it. His rule for the new company was simple: one person is responsible for every project, and
            their name and number go on your paperwork.
          </p>
          <p>
            Two decades on, we have finished over 900 projects across the valley, most of them for people who found us
            through a neighbour. We are big enough to run a full extension and small enough that Tom still visits
            sites on Friday afternoons.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--concrete" aria-labelledby="values-title">
      <div class="container">
        <p class="eyebrow">What we stand for</p>
        <h2 id="values-title" class="h2">Our rules on site</h2>
        <ul class="values">
          <li v-for="(v, i) in values" :key="v.title">
            <span class="values__n" aria-hidden="true">0{{ i + 1 }}</span>
            <h3>{{ v.title }}</h3>
            <p>{{ v.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section" aria-labelledby="team-title">
      <div class="container">
        <p class="eyebrow">The people</p>
        <h2 id="team-title" class="h2">Who you will deal with</h2>
        <ul class="team">
          <li v-for="m in team" :key="m.name">
            <div class="team__avatar" aria-hidden="true">{{ m.initials }}</div>
            <h3>{{ m.name }}</h3>
            <p class="team__role">{{ m.role }}</p>
            <p>{{ m.bio }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section--dark" aria-labelledby="safety-title">
      <div class="container safety">
        <div>
          <p class="eyebrow">Safety & warranty</p>
          <h2 id="safety-title" class="h2">Safe sites. Work that lasts.</h2>
          <p class="lead">
            Every site has a named safety lead, a daily briefing and a fortnightly audit. Every job comes with a
            written 15-year workmanship guarantee, backed by an insurer, so it stays valid even if we are not around.
          </p>
          <p>
            Found a defect in the first year? We fix it free. Found one in year ten? Call us, and we will look at it.
          </p>
        </div>
        <dl class="safety__stats">
          <div v-for="s in safety" :key="s.text">
            <dt>{{ s.label }}</dt>
            <dd>{{ s.text }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <BuildersCtaBand />
  </div>
</template>

<style scoped>
.story__grid {
  display: grid;
  gap: 40px;
  align-items: center;
}

.story__grid img {
  width: 100%;
  height: auto;
  border-bottom: 8px solid var(--b-accent);
}

@media (min-width: 900px) {
  .story__grid {
    grid-template-columns: 1.1fr 1fr;
    gap: 64px;
  }
}

.values {
  display: grid;
  gap: 24px;
  margin-top: 28px;
}

@media (min-width: 700px) {
  .values {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .values {
    grid-template-columns: repeat(4, 1fr);
  }
}

.values li {
  padding: 24px;
  background: var(--b-white);
  border-top: 6px solid var(--b-accent);
}

.values__n {
  font-family: var(--b-font-head);
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  color: var(--b-muted);
}

.values h3 {
  margin: 6px 0 10px;
  font-size: 1.9rem;
}

.values p {
  margin: 0;
}

.team {
  display: grid;
  gap: 32px;
  margin-top: 28px;
}

@media (min-width: 700px) {
  .team {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .team {
    grid-template-columns: repeat(4, 1fr);
  }
}

.team__avatar {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  margin-bottom: 16px;
  background: var(--b-ink);
  color: var(--b-accent);
  font-family: var(--b-font-head);
  font-size: clamp(4rem, 12vw, 6rem);
  font-weight: 800;
  border-bottom: 8px solid var(--b-accent);
}

.team h3 {
  font-size: 1.9rem;
}

.team__role {
  margin: 4px 0 10px;
  color: var(--b-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.95rem;
}

.safety {
  display: grid;
  gap: 40px;
  align-items: center;
}

.safety__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  margin: 0;
  background: var(--b-accent);
  border: 3px solid var(--b-accent);
}

.safety__stats div {
  padding: 24px 20px;
  background: var(--b-ink-2);
}

.safety__stats dt {
  font-family: var(--b-font-head);
  font-size: clamp(2.6rem, 6vw, 3.6rem);
  font-weight: 800;
  line-height: 1;
  color: var(--b-accent);
}

.safety__stats dd {
  margin: 6px 0 0;
  color: var(--b-concrete);
}

@media (min-width: 900px) {
  .safety {
    grid-template-columns: 1.1fr 1fr;
    gap: 64px;
  }
}
</style>
