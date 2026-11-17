<script setup lang="ts">
definePageMeta({ layout: 'law' })
useSeoMeta({
  title: 'About · Hartwell & Moss',
  description:
    'The history, values and attorneys of Hartwell & Moss, a three-attorney firm advising Fenmouth clients since 1998.',
  ogTitle: 'About · Hartwell & Moss',
  ogDescription: 'A small firm by design: partner-led work, fixed fees and plain English.'
})

const values = [
  {
    title: 'Candour',
    text: 'We tell you the likely outcome, including when it is not the one you hoped for. A weak claim is better dropped early than lost expensively.'
  },
  {
    title: 'Proportion',
    text: 'Not every dispute needs a courtroom. We look for the quickest route to a fair result and keep costs in step with what is at stake.'
  },
  {
    title: 'Continuity',
    text: 'One partner owns your matter from start to finish. Many of our clients have been with us for twenty years or more.'
  }
]

const timeline = [
  { year: '1998', text: 'Edmund Hartwell opens a one-room practice above a stationer’s on Calloway Street.' },
  { year: '2006', text: 'Clara Moss joins as an associate, building the family and estates team.' },
  { year: '2012', text: 'The firm becomes Hartwell & Moss and moves to its current offices.' },
  { year: '2021', text: 'Daniel Reyes joins and employment law becomes our fifth practice area.' }
]
</script>

<template>
  <div>
    <LawPageHero
      eyebrow="About the firm"
      title="A small firm, by design."
      lead="We have stayed at three attorneys for a reason: it lets us give every client a partner’s time and a straight answer."
      image="/law/justice.jpg"
      position="center 40%"
    />

    <section class="wrap history" aria-labelledby="history-h">
      <div>
        <p class="eyebrow">Our history</p>
        <h2 id="history-h" class="h2">Twenty-seven years on the same street.</h2>
        <p>
          Edmund Hartwell left a city firm in 1998 to practise the way he thought clients deserved: without a billing
          target on every phone call. The first office had one desk, one telephone and a shelf of second-hand statute
          books.
        </p>
        <p>
          The practice grew by recommendation. Neighbours became clients, and later their children did. Today we act
          for local families, owner-managed businesses and a handful of larger companies, from the same street where
          we began.
        </p>
      </div>
      <ol class="timeline">
        <li v-for="t in timeline" :key="t.year">
          <span class="timeline__year">{{ t.year }}</span>
          <span>{{ t.text }}</span>
        </li>
      </ol>
    </section>

    <section class="values" aria-labelledby="values-h">
      <div class="wrap">
        <p class="eyebrow eyebrow--light">Our approach</p>
        <h2 id="values-h" class="h2 h2--light">Three commitments we hold ourselves to.</h2>
        <ul class="values__grid">
          <li v-for="v in values" :key="v.title">
            <h3 class="values__t">{{ v.title }}</h3>
            <p>{{ v.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="wrap team" aria-labelledby="team-h">
      <p class="eyebrow">The attorneys</p>
      <h2 id="team-h" class="h2">The people who will handle your matter.</h2>
      <ul class="team__grid">
        <li v-for="a in lawAttorneys" :key="a.name" class="person">
          <img
            class="person__img"
            :src="a.photo"
            :alt="`Portrait of ${a.name}`"
            width="800"
            height="600"
            loading="lazy"
            :style="{ objectPosition: a.position }"
          />
          <h3 class="person__name">{{ a.name }}</h3>
          <p class="person__role">{{ a.role }}</p>
          <p>{{ a.bio }}</p>
          <dl class="person__facts">
            <dt>Bar admissions</dt>
            <dd>
              <span v-for="b in a.admissions" :key="b">{{ b }}</span>
            </dd>
            <dt>Education</dt>
            <dd>
              <span v-for="e in a.education" :key="e">{{ e }}</span>
            </dd>
          </dl>
        </li>
      </ul>
    </section>

    <section class="wrap disclaimer" aria-labelledby="disc-h">
      <h2 id="disc-h" class="disclaimer__h">Important notice</h2>
      <p>
        The content of this website is provided for general information only and is not legal advice. Reading it, or
        contacting us through it, does not create an attorney-client relationship. Please do not send confidential
        information until we have confirmed in writing that we act for you. Prior results do not guarantee a similar
        outcome.
      </p>
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
  color: var(--brass);
}
.eyebrow--light {
  color: var(--brass-bright);
}
.h2 {
  margin-bottom: 20px;
  font-family: var(--font-head);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  line-height: 1.1;
  color: var(--navy);
}
.h2--light {
  color: #fff;
}

.history {
  display: grid;
  gap: 48px;
  padding-top: clamp(56px, 8vw, 100px);
  padding-bottom: clamp(56px, 8vw, 100px);
}
.history p + p {
  margin-top: 16px;
}
@media (min-width: 860px) {
  .history {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 80px;
  }
}
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 1px solid var(--brass);
}
.timeline li {
  position: relative;
  display: grid;
  gap: 2px;
  padding: 0 0 28px 28px;
}
.timeline li::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 10px;
  width: 9px;
  height: 9px;
  background: var(--brass);
  transform: rotate(45deg);
}
.timeline__year {
  font-family: var(--font-head);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--navy);
}

.values {
  padding: clamp(56px, 8vw, 96px) 0;
  background: var(--navy);
  color: #dfe3ea;
}
.values__grid {
  list-style: none;
  margin: 40px 0 0;
  padding: 0;
  display: grid;
  gap: 32px;
}
.values__grid li {
  padding-top: 20px;
  border-top: 1px solid rgb(201 169 97 / 0.6);
}
.values__t {
  margin-bottom: 10px;
  font-family: var(--font-head);
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
}
@media (min-width: 860px) {
  .values__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
  }
}

.team {
  padding-top: clamp(56px, 8vw, 100px);
  padding-bottom: clamp(40px, 6vw, 72px);
}
.team__grid {
  list-style: none;
  margin: 40px 0 0;
  padding: 0;
  display: grid;
  gap: 48px 32px;
}
@media (min-width: 720px) {
  .team__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.person__img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  margin-bottom: 20px;
  border-bottom: 3px solid var(--brass-bright);
  filter: saturate(0.85);
}
.person__name {
  font-family: var(--font-head);
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 1.1;
  color: var(--navy);
}
.person__role {
  margin: 4px 0 12px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brass);
}
.person__facts {
  margin: 16px 0 0;
  padding-top: 14px;
  border-top: 1px solid var(--rule);
  font-size: 0.95rem;
}
.person__facts dt {
  margin-top: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}
.person__facts dd {
  margin: 2px 0 0;
  display: grid;
}

.disclaimer {
  margin-bottom: clamp(40px, 6vw, 72px);
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  font-size: 0.95rem;
  color: var(--muted);
}
.disclaimer__h {
  margin-bottom: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--navy);
}
</style>
