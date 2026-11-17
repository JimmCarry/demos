<script setup lang="ts">
definePageMeta({ layout: 'builders' })
useSeoMeta({
  title: 'Services · Ironbark Builders',
  description: 'Renovations, extensions, kitchens and bathrooms, roofing and commercial fit-outs, with what is included, typical timelines and starting prices.',
  ogTitle: 'Services · Ironbark Builders',
  ogDescription: 'What we build, what is included, how long it takes and what it costs from.'
})
</script>

<template>
  <div>
    <BuildersPageHero
      eyebrow="Services"
      title="What we build"
      text="Five services, all done by our own crew. Prices are starting points for a typical job; every quote is fixed and itemised after a site visit."
    />

    <section class="section" aria-label="Our services">
      <div class="container">
        <article v-for="(s, i) in buildersServices" :id="s.id" :key="s.id" class="svc" :class="{ 'svc--flip': i % 2 }">
          <img :src="s.image" :alt="s.alt" width="1200" height="800" loading="lazy" />
          <div class="svc__body">
            <p class="eyebrow">0{{ i + 1 }}</p>
            <h2 class="h2">{{ s.title }}</h2>
            <p class="lead">{{ s.summary }}</p>
            <h3>Included</h3>
            <ul class="svc__list">
              <li v-for="item in s.includes" :key="item">{{ item }}</li>
            </ul>
            <dl class="svc__facts">
              <div>
                <dt>Typical timeline</dt>
                <dd>{{ s.timeline }}</dd>
              </div>
              <div>
                <dt>From</dt>
                <dd>{{ s.from }}</dd>
              </div>
            </dl>
            <NuxtLink to="/builders/contact#quote" class="btn btn--dark">Quote for {{ s.title.toLowerCase() }}</NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <BuildersCtaBand />
  </div>
</template>

<style scoped>
.svc {
  display: grid;
  gap: 28px;
  margin-bottom: clamp(56px, 9vw, 104px);
  scroll-margin-top: 100px;
}

.svc:last-child {
  margin-bottom: 0;
}

.svc img {
  width: 100%;
  height: 100%;
  min-height: 260px;
  max-height: 560px;
  object-fit: cover;
  border-bottom: 8px solid var(--b-accent);
}

.svc h3 {
  margin: 24px 0 10px;
  font-size: 1.3rem;
  letter-spacing: 0.12em;
  color: var(--b-muted);
}

.svc__list li {
  position: relative;
  padding: 8px 0 8px 30px;
  border-bottom: 1px solid var(--b-concrete-2);
}

.svc__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 16px;
  width: 14px;
  height: 14px;
  background: var(--b-accent);
  border: 2px solid var(--b-ink);
}

.svc__facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 24px 0;
  background: var(--b-ink);
  color: var(--b-white);
}

.svc__facts div {
  padding: 16px 20px;
}

.svc__facts div + div {
  border-left: 3px solid var(--b-accent);
}

.svc__facts dt {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--b-muted-on-dark);
}

.svc__facts dd {
  margin: 0;
  font-family: var(--b-font-head);
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.1;
}

@media (min-width: 900px) {
  .svc {
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: center;
  }

  .svc--flip img {
    order: 2;
  }
}
</style>
