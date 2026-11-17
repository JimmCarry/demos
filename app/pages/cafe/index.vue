<script setup lang="ts">
definePageMeta({ layout: 'cafe' })
useSeoMeta({
  title: 'Bramble & Bean · Neighbourhood café & bistro',
  description: 'Specialty coffee, all-day brunch, homemade cakes and simple lunches on Alder Lane. Book a table or just drop in.',
  ogTitle: 'Bramble & Bean · Neighbourhood café & bistro',
  ogDescription: 'Specialty coffee, all-day brunch, homemade cakes and simple lunches on Alder Lane.'
})

const highlights = [
  {
    title: 'Coffee we can name the farm for',
    text: 'Our beans are roasted weekly by Foxglove Roasters, and the bag on the counter tells you where they grew.',
    icon: 'M5 9h11v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V9zm11 1h2a2.5 2.5 0 0 1 0 5h-2M8 3c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3'
  },
  {
    title: 'Brunch until 2 pm',
    text: 'Eggs from Hollis Farm, sourdough from the bakery on Mill Street, and a kitchen that likes to cook things properly.',
    icon: 'M4 12h16a8 8 0 0 1-16 0zM8 8c0-2 2-2 2-4M13 8c0-2 2-2 2-4'
  },
  {
    title: 'Cakes baked this morning',
    text: 'Four or five cakes every day, made by Priya in the back kitchen. Whole cakes to order with 48 hours notice.',
    icon: 'M4 19h16M5 19v-6h14v6M8 13V9m4 4V8m4 5V9M8 7c0-1 1-1 0-2m4 1c0-1 1-1 0-2m4 3c0-1 1-1 0-2'
  }
]

const featured = [
  { name: 'Smashed avocado on sourdough', text: 'Two poached eggs, lemon, chilli and pumpkin seeds.', price: '$10.50', img: '/cafe/brunch.jpg', alt: 'Poached eggs on avocado toast with a runny yolk', tag: 'Brunch' },
  { name: 'Baked lemon cheesecake', text: 'Caramelised top, buttery biscuit base, a few rose petals.', price: '$5.20', img: '/cafe/cheesecake.jpg', alt: 'A slice of baked cheesecake on a dark plate by a sunny window', tag: 'Cake' },
  { name: 'Flat white', text: 'Double ristretto, silky milk, a small leaf on top.', price: '$3.60', img: '/cafe/latte.jpg', alt: 'A flat white with leaf latte art in a white cup', tag: 'Coffee' }
]

const reviews = [
  { quote: 'The flat white is the best within ten miles and the lemon cheesecake should be illegal. We come every Saturday.', name: 'Hannah R.', detail: 'Regular since 2019' },
  { quote: 'Friendly, unhurried and the staff remembered my dog’s name by the second visit. Great place to work from with a laptop on weekday mornings.', name: 'Tom W.', detail: 'Neighbour on Alder Lane' }
]
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="eyebrow">Café &amp; bistro · Millbrook</p>
          <h1>Good coffee, slow mornings, cake on the counter.</h1>
          <p class="lead">
            Bramble &amp; Bean is a small neighbourhood café on Alder Lane. Come for a flat white, stay for brunch, take a
            slice of something home.
          </p>
          <div class="hero__actions">
            <NuxtLink to="/cafe/menu" class="btn btn--primary">View menu</NuxtLink>
            <NuxtLink to="/cafe/contact#booking" class="btn btn--outline">Book a table</NuxtLink>
          </div>
          <p class="hero__note">Open today from 7:30 am · Dogs and prams welcome</p>
        </div>
        <div class="hero__photo">
          <img
            src="/cafe/hero.jpg"
            width="1920"
            height="1280"
            fetchpriority="high"
            alt="Guests sitting at tables on the sunny terrace and in the dining room of the café"
          />
          <svg class="hero__stamp" viewBox="0 0 120 120" width="112" height="112" aria-hidden="true">
            <circle cx="60" cy="60" r="58" fill="#b04f2c" />
            <path id="stamp-path" d="M60 60m-40 0a40 40 0 1 1 80 0a40 40 0 1 1-80 0" fill="none" />
            <text font-size="11.5" font-weight="700" fill="#fcf8ef" letter-spacing="2.2" font-family="DM Sans, sans-serif">
              <textPath href="#stamp-path">BAKED DAILY · BREWED SLOWLY ·</textPath>
            </text>
            <text x="60" y="68" text-anchor="middle" font-size="26" fill="#fcf8ef" font-family="Fraunces, serif" font-style="italic">B&amp;B</text>
          </svg>
        </div>
      </div>
    </section>

    <section class="section intro">
      <div class="container intro__grid">
        <h2>A corner of the neighbourhood that smells of coffee and butter.</h2>
        <div>
          <p>
            We opened in 2016 with one espresso machine, six tables and a borrowed oven. Today we’re still a short menu,
            still owner-run, and still a bit proud that people know each other’s orders.
          </p>
          <p>
            Everything we serve is made in the building, from the granola to the chutney. When we can, we buy from people
            within twenty miles. When we can’t, we choose the ones who treat their farmers well.
          </p>
          <NuxtLink to="/cafe/about" class="text-link">Read our story →</NuxtLink>
        </div>
      </div>
    </section>

    <section class="highlights" aria-labelledby="highlights-title">
      <div class="container">
        <h2 id="highlights-title" class="visually-hidden">What we care about</h2>
        <ul class="highlights__grid">
          <li v-for="h in highlights" :key="h.title" class="highlight">
            <span class="highlight__icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="h.icon" /></svg>
            </span>
            <h3>{{ h.title }}</h3>
            <p>{{ h.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section" aria-labelledby="featured-title">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Customer favourites</p>
            <h2 id="featured-title">What people keep ordering</h2>
          </div>
          <NuxtLink to="/cafe/menu" class="text-link">See the full menu →</NuxtLink>
        </div>
        <ul class="featured">
          <li v-for="f in featured" :key="f.name" class="dish">
            <div class="dish__img">
              <img :src="f.img" :alt="f.alt" width="600" height="440" loading="lazy" />
              <span class="dish__tag">{{ f.tag }}</span>
            </div>
            <div class="dish__body">
              <h3>{{ f.name }}</h3>
              <p>{{ f.text }}</p>
              <p class="dish__price">{{ f.price }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="section visit" aria-labelledby="visit-title">
      <div class="container visit__grid">
        <div class="visit__photo">
          <img src="/cafe/counter.jpg" width="1200" height="800" loading="lazy" alt="The coffee counter with pendant lights, shelves of coffee bags and a barista at work" />
        </div>
        <div>
          <p class="eyebrow">Visit us</p>
          <h2 id="visit-title">Opening hours</h2>
          <CafeHoursList />
          <p class="visit__address">
            {{ cafeContact.street }}, {{ cafeContact.town }}<br />
            Two minutes from Millbrook station. Free bike racks outside.
          </p>
          <NuxtLink to="/cafe/contact" class="btn btn--outline">Directions &amp; contact</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section reviews" aria-labelledby="reviews-title">
      <div class="container">
        <h2 id="reviews-title" class="reviews__title">Kind words from regulars</h2>
        <div class="reviews__grid">
          <figure v-for="r in reviews" :key="r.name" class="review">
            <blockquote>“{{ r.quote }}”</blockquote>
            <figcaption><strong>{{ r.name }}</strong> · {{ r.detail }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container cta__inner">
        <div>
          <h2>Saving you a seat?</h2>
          <p>Tables for two to eight, any day we’re open. Walk-ins are always welcome too.</p>
        </div>
        <NuxtLink to="/cafe/contact#booking" class="btn btn--light">Book a table</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero { padding-block: clamp(32px, 6vw, 72px) clamp(40px, 7vw, 88px); }
.hero__grid { display: grid; gap: 40px; align-items: center; }
.hero__copy h1 { margin: 0 0 20px; }
.hero__actions { display: flex; flex-wrap: wrap; gap: 14px; margin: 28px 0 18px; }
.hero__note { margin: 0; color: var(--c-muted); font-size: 0.95rem; }
.hero__photo { position: relative; }
.hero__photo img {
  width: 100%;
  aspect-ratio: 4 / 3.4;
  object-fit: cover;
  border-radius: var(--radius-organic);
  box-shadow: var(--shadow);
}
.hero__stamp { position: absolute; left: -10px; bottom: -18px; transform: rotate(-12deg); }
@media (min-width: 900px) {
  .hero__grid { grid-template-columns: 1.05fr 1fr; gap: 64px; }
  .hero__photo img { aspect-ratio: 1 / 1.05; }
}

.intro { padding-top: 24px; }
.intro__grid { display: grid; gap: 28px; }
.intro__grid h2 { max-width: 16ch; }
@media (min-width: 900px) { .intro__grid { grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; } }

.text-link { color: var(--c-terracotta-dark) !important; font-weight: 700; text-decoration: none; border-bottom: 2px solid currentColor; }
.text-link:hover { color: var(--c-green) !important; }

.highlights { background: var(--c-green); color: #efe8d6; padding-block: 56px; }
.highlights__grid { display: grid; gap: 36px; }
.highlight__icon {
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 16px;
  border-radius: var(--radius-organic);
  background: #f1b894;
  color: var(--c-green-dark);
}
.highlight h3 { margin: 0 0 8px; color: #fff; }
.highlight p { margin: 0; }
@media (min-width: 800px) { .highlights__grid { grid-template-columns: repeat(3, 1fr); gap: 48px; } }

.section-head { display: flex; flex-wrap: wrap; align-items: end; justify-content: space-between; gap: 16px; margin-bottom: 36px; }
.section-head h2 { margin: 0; }
.featured { display: grid; gap: 28px; }
.dish { background: var(--c-paper); border: 1px solid var(--c-line); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); }
.dish__img { position: relative; }
.dish__img img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
.dish__tag { position: absolute; left: 14px; top: 14px; padding: 4px 12px; border-radius: 999px; background: var(--c-cream); color: var(--c-green); font-size: 0.8rem; font-weight: 700; }
.dish__body { padding: 20px 22px 22px; }
.dish__body h3 { margin: 0 0 6px; }
.dish__body p { margin: 0 0 10px; color: var(--c-muted); }
.dish__body .dish__price { margin: 0; font: 700 1.3rem var(--font-heading); color: var(--c-terracotta-dark); }
@media (min-width: 800px) { .featured { grid-template-columns: repeat(3, 1fr); } }

.visit { background: var(--c-oat); }
.visit__grid { display: grid; gap: 40px; align-items: center; }
.visit__photo img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: var(--radius-organic); box-shadow: var(--shadow); }
.visit h2 { margin: 0 0 16px; }
.visit__address { margin: 20px 0 24px; color: var(--c-muted); }
@media (min-width: 900px) { .visit__grid { grid-template-columns: 1.1fr 1fr; gap: 72px; } }

.reviews__title { text-align: center; margin: 0 0 40px; }
.reviews__grid { display: grid; gap: 28px; }
.review { margin: 0; padding: 32px 30px; background: var(--c-paper); border: 1px solid var(--c-line); border-radius: var(--radius); position: relative; }
.review::before { content: '“'; position: absolute; top: -6px; left: 22px; font: 700 5rem/1 var(--font-heading); color: var(--c-terracotta); opacity: 0.35; }
.review blockquote { margin: 0 0 16px; font: 400 1.2rem/1.5 var(--font-heading); color: var(--c-ink); }
.review figcaption { font-size: 0.95rem; color: var(--c-muted); }
@media (min-width: 800px) { .reviews__grid { grid-template-columns: 1fr 1fr; } }

.cta { background: var(--c-terracotta-dark); color: #fff; padding-block: 56px; border-radius: 40px 40px 0 0; }
.cta__inner { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px; }
.cta h2 { margin: 0 0 8px; color: #fff; }
.cta p { margin: 0; max-width: 46ch; }
</style>
