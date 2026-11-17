<script setup lang="ts">
definePageMeta({ layout: 'cafe' })
useSeoMeta({
  title: 'About · Bramble & Bean',
  description: 'The story of Bramble & Bean: a small, owner-run café on Alder Lane with local roasters and seasonal food.',
  ogTitle: 'About · Bramble & Bean',
  ogDescription: 'The story of a small, owner-run café with local roasters and seasonal food.'
})

const values = [
  { title: 'Local roasters', text: 'Foxglove Roasters, twelve miles up the valley, roast our beans every Monday. You get coffee that is rarely more than ten days old.' },
  { title: 'Seasonal food', text: 'The menu moves with the weather. Rhubarb in spring, tomatoes in August, squash and spice when it turns cold.' },
  { title: 'Made from scratch', text: 'Bread, cakes, granola, chutneys, soups. If we can make it ourselves in a reasonable morning, we do.' },
  { title: 'Easy to be here', text: 'Prams, dogs, laptops, grandparents. Nobody will hurry you, and tap water is always free.' }
]

const team = [
  { name: 'Mara Ellison', role: 'Owner & head barista', bio: 'Left an office job in 2016 to open the café. Will tell you about the beans if you ask. Even if you don’t.', color: '#2c4a3a' },
  { name: 'Priya Nair', role: 'Head baker', bio: 'Starts at 5 am, finishes the lemon cheesecake before the first customer. Secret weapon: browned butter.', color: '#b04f2c' },
  { name: 'Joel Brandt', role: 'Kitchen & brunch', bio: 'Trained in a hotel, prefers a small kitchen. Responsible for the shakshuka and the soup of the day.', color: '#7a6330' },
  { name: 'Ines Costa', role: 'Front of house', bio: 'Knows everyone’s order. Runs the Saturday queue with a smile and a tray of cardamom buns.', color: '#5b3d52' }
]

const gallery = [
  { src: '/cafe/wood-wall.jpg', alt: 'A marble café table and bentwood chair against a wooden wall with framed flower prints', w: 1200, h: 1790, cls: 'tall' },
  { src: '/cafe/espresso-machine.jpg', alt: 'Our espresso machine and grinder on the bar', w: 1200, h: 800, cls: '' },
  { src: '/cafe/cake-flatlay.jpg', alt: 'A slice of sponge cake with a cup of coffee and flowers', w: 1200, h: 800, cls: '' },
  { src: '/cafe/shelves.jpg', alt: 'Shelves of jars and bottles with a chalkboard and hanging lamps', w: 1000, h: 1778, cls: 'tall' },
  { src: '/cafe/wall-menu.jpg', alt: 'A quiet corner table by the window with the coffee list on the wall', w: 1200, h: 1600, cls: 'tall' },
  { src: '/cafe/cheesecake.jpg', alt: 'A slice of cheesecake on a plate by a sunny window', w: 1200, h: 1800, cls: 'tall' }
]

function initials(name: string) {
  return name.split(' ').map((n) => n[0]).join('')
}
</script>

<template>
  <div>
    <CafePageHeader
      eyebrow="About us"
      title="A small café with big opinions about toast."
      intro="Bramble & Bean has been on Alder Lane since 2016. Here is how it started and who you will meet."
    />

    <section class="section story">
      <div class="container story__grid">
        <img src="/cafe/counter.jpg" width="1200" height="800" loading="lazy" alt="The counter and bar where drinks are made, with hanging lights and cake display" class="story__img" />
        <div>
          <h2>How it started</h2>
          <p>
            Mara spent ten years in an office and the best part of each day was the walk to the coffee van outside. In 2016
            she rented an empty shop on Alder Lane, bought a second-hand espresso machine and put six tables in the window.
          </p>
          <p>
            The first week we sold forty coffees. The second week Priya turned up with a Victoria sponge and asked if we
            needed a baker. We did. Ten years later the six tables have become fourteen, the menu fills a page and the line
            on Saturday still reaches the lamppost.
          </p>
          <p>
            We are still owner-run, still small and still happiest when we know your name.
          </p>
        </div>
      </div>
    </section>

    <section class="section values" aria-labelledby="values-title">
      <div class="container">
        <h2 id="values-title">What we stand for</h2>
        <ul class="values__grid">
          <li v-for="(v, i) in values" :key="v.title">
            <span class="values__num" aria-hidden="true">0{{ i + 1 }}</span>
            <h3>{{ v.title }}</h3>
            <p>{{ v.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section" aria-labelledby="team-title">
      <div class="container">
        <p class="eyebrow">The team</p>
        <h2 id="team-title" class="team__title">The people behind the counter</h2>
        <ul class="team">
          <li v-for="p in team" :key="p.name" class="person">
            <svg class="person__avatar" viewBox="0 0 120 120" width="120" height="120" role="img" :aria-label="`Illustrated initials for ${p.name}`">
              <path d="M60 4c30 0 56 22 56 54 0 34-24 60-56 60S4 92 4 58C4 26 30 4 60 4z" :fill="p.color" />
              <text x="60" y="73" text-anchor="middle" font-size="40" fill="#fcf8ef" font-family="Fraunces, Georgia, serif" font-weight="600">{{ initials(p.name) }}</text>
            </svg>
            <h3>{{ p.name }}</h3>
            <p class="person__role">{{ p.role }}</p>
            <p>{{ p.bio }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section gallery-section" aria-labelledby="gallery-title">
      <div class="container">
        <h2 id="gallery-title">A look around</h2>
        <ul class="gallery">
          <li v-for="g in gallery" :key="g.src" :class="g.cls">
            <img :src="g.src" :alt="g.alt" :width="g.w" :height="g.h" loading="lazy" />
          </li>
        </ul>
      </div>
    </section>

    <section class="cta">
      <div class="container cta__inner">
        <div>
          <h2>Come and say hello.</h2>
          <p>We’re open every day, and there is usually a cake still warm.</p>
        </div>
        <NuxtLink to="/cafe/contact" class="btn btn--light">Plan your visit</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.story__grid { display: grid; gap: 40px; align-items: center; }
.story__img { width: 100%; aspect-ratio: 4 / 3.4; object-fit: cover; border-radius: var(--radius-organic); box-shadow: var(--shadow); }
.story h2 { margin: 0 0 20px; }
@media (min-width: 900px) { .story__grid { grid-template-columns: 1fr 1fr; gap: 72px; } }

.values { background: var(--c-green); color: #efe8d6; border-radius: 40px; margin-inline: clamp(0px, 2vw, 24px); }
.values h2 { color: #fff; margin: 0 0 40px; }
.values__grid { display: grid; gap: 32px; }
.values h3 { margin: 6px 0 8px; color: #fff; }
.values p { margin: 0; }
.values__num { font: italic 600 2rem var(--font-heading); color: #f1b894; }
@media (min-width: 700px) { .values__grid { grid-template-columns: repeat(2, 1fr); gap: 40px 56px; } }
@media (min-width: 1000px) { .values__grid { grid-template-columns: repeat(4, 1fr); } }

.team__title { margin: 0 0 40px; }
.team { display: grid; gap: 36px; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }
.person__avatar { display: block; margin-bottom: 14px; }
.person h3 { margin: 0; }
.person__role { margin: 2px 0 10px; color: var(--c-terracotta-dark); font-weight: 700; font-size: 0.95rem; }
.person p:last-child { margin: 0; color: var(--c-muted); font-size: 0.98rem; }

.gallery-section h2 { margin: 0 0 32px; }
.gallery { columns: 2; column-gap: 14px; }
.gallery li { break-inside: avoid; margin-bottom: 14px; }
.gallery img { width: 100%; height: auto; border-radius: var(--radius); box-shadow: var(--shadow); }
.gallery .tall img { aspect-ratio: 3 / 4; object-fit: cover; }
@media (min-width: 800px) { .gallery { columns: 3; column-gap: 20px; } .gallery li { margin-bottom: 20px; } }

.cta { background: var(--c-terracotta-dark); color: #fff; padding-block: 56px; border-radius: 40px 40px 0 0; margin-top: 24px; }
.cta__inner { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px; }
.cta h2 { margin: 0 0 8px; color: #fff; }
.cta p { margin: 0; }
</style>
