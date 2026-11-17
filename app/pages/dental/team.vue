<script setup lang="ts">
definePageMeta({ layout: 'dental' })
useSeoMeta({
  title: 'Our team · Linden Dental Studio',
  description:
    'Meet the dentists and hygienist at Linden Dental Studio: friendly, experienced and multilingual. Care for the whole family in Alderbrook.',
  ogTitle: 'Our team · Linden Dental Studio',
  ogDescription: 'Meet the dentists and hygienist who will look after your smile.'
})

const strip = [
  { src: '/dental/clinic-room.jpg', w: 1600, h: 1067, alt: 'Treatment room with an orange dental chair and natural light' },
  { src: '/dental/instruments.jpg', w: 1200, h: 1600, alt: 'Sterile dental instruments laid out on a white tray by a window' },
  { src: '/dental/hygiene.jpg', w: 1200, h: 800, alt: 'Toothbrushes in a white holder on a clean bathroom counter' }
]
</script>

<template>
  <div>
    <DentalPageHero
      eyebrow="Our team"
      title="Friendly faces, serious training"
      lead="Five people, one idea: dentistry should be calm, clear and kind. Between us we speak eight languages and have looked after more than 12,000 patients."
    />

    <section class="section team-section" aria-labelledby="team-title">
      <div class="container">
        <h2 id="team-title" class="visually-hidden">The Linden team</h2>
        <ul class="team">
          <li v-for="member in dentalTeam" :key="member.name" class="member">
            <img
              :src="member.photo"
              width="800"
              height="1000"
              loading="lazy"
              :alt="member.alt"
              :style="{ objectPosition: member.position }"
            />
            <div class="member__body">
              <h3>{{ member.name }}</h3>
              <p class="member__role">{{ member.role }}</p>
              <p class="member__bio">{{ member.bio }}</p>
              <p class="member__lang"><span>Speaks</span> {{ member.languages }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section--tint" aria-labelledby="clinic-title">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">The clinic</span>
          <h2 id="clinic-title" class="h2">A space designed to be calm</h2>
          <p class="lead">
            Natural light, quiet equipment and a treatment room you can actually relax in. Everything is sterilised on
            site, and we keep the schedule loose enough that nobody is rushed.
          </p>
        </div>
        <ul class="strip">
          <li v-for="p in strip" :key="p.src">
            <img :src="p.src" :width="p.w" :height="p.h" loading="lazy" :alt="p.alt" />
          </li>
        </ul>
      </div>
    </section>

    <DentalCta title="Come and say hello" text="Not sure who to see? Tell us what you need on the form, and we will match you with the right person." />
  </div>
</template>

<style scoped>
.team-section {
  padding-top: 24px;
}

.team {
  display: grid;
  gap: 28px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.member {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  transition: box-shadow 0.2s;
}

.member:hover {
  box-shadow: var(--shadow);
}

.member img {
  width: 100%;
  aspect-ratio: 4 / 4.2;
  object-fit: cover;
  background: var(--teal-100);
}

.member__body {
  padding: 24px;
}

.member h3 {
  font-size: 1.35rem;
}

.member__role {
  margin-top: 2px;
  color: var(--teal-700);
  font-weight: 700;
}

.member__bio {
  margin-top: 12px;
  color: var(--muted);
}

.member__lang {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-size: 0.9rem;
  font-weight: 600;
}

.member__lang span {
  margin-right: 6px;
  color: var(--accent-ink);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (min-width: 700px) {
  .team {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1000px) {
  .team {
    grid-template-columns: repeat(3, 1fr);
  }
}

.strip {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.strip li:first-child {
  grid-column: 1 / -1;
}

.strip img {
  width: 100%;
  height: 100%;
  min-height: 180px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: var(--radius-sm);
}

@media (min-width: 800px) {
  .strip {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .strip li:first-child {
    grid-column: auto;
  }

  .strip img {
    aspect-ratio: 4 / 3;
    border-radius: var(--radius);
  }
}
</style>
