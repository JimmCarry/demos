<script setup lang="ts">
import { author, demos } from '~/data/demos'

const title = 'Demo websites · Lukáš Žáček'
const description =
  'Five custom-coded demo websites for different industries, built from scratch with Nuxt and Vue by Lukáš Žáček.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogType: 'website' })
</script>

<template>
  <main class="container">
    <header class="intro">
      <p class="prompt">$ ls ~/demos</p>
      <h1>Demo websites</h1>
      <p class="lead">
        Five websites for different kinds of businesses, each with its own design and several pages. All of them are
        hand-coded with Nuxt and Vue, with no templates or page builders. The businesses are fictional.
      </p>
      <a :href="author.site" class="back">← back to {{ author.name }}</a>
    </header>

    <ul class="grid">
      <li v-for="demo in demos" :key="demo.slug" class="card">
        <NuxtLink :to="`/${demo.slug}`" class="card__shot" :aria-label="`Open the ${demo.name} demo`">
          <img :src="demo.cover" :alt="`Home page of ${demo.name}`" width="1280" height="800" loading="lazy" />
        </NuxtLink>
        <div class="card__body">
          <p class="card__industry">{{ demo.industry }}</p>
          <h2>
            <NuxtLink :to="`/${demo.slug}`">{{ demo.name }}</NuxtLink>
          </h2>
          <p class="card__text">{{ demo.description }}</p>
          <p class="card__pages">{{ demo.pages.join(' · ') }}</p>
        </div>
      </li>
    </ul>

    <footer class="footer">
      <p>
        Want a website like these for your business?
        <a :href="`${author.site}/#contact`">Get in touch ↗</a>
      </p>
      <p class="credits">Photos: Unsplash</p>
    </footer>
  </main>
</template>

<style scoped>
.container {
  width: min(100% - 32px, 1160px);
  margin-inline: auto;
  padding: 64px 0 40px;
}

.prompt {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--accent);
}

h1 {
  margin: 8px 0 16px;
  font-size: clamp(32px, 5vw, 48px);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.lead {
  max-width: 680px;
  color: var(--muted);
  font-size: 18px;
}

.back {
  display: inline-block;
  margin-top: 20px;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
}

.back:hover,
.back:focus-visible {
  text-decoration: underline;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 20px;
  margin: 48px 0 0;
  padding: 0;
  list-style: none;
}

.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: 10px;
}

.card__shot {
  display: block;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-bottom: 1px solid var(--border-strong);
  background: var(--border);
}

.card__shot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s ease;
}

.card:hover .card__shot img {
  transform: scale(1.03);
}

.card__body {
  padding: 20px 24px 24px;
}

.card__industry {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
}

h2 {
  margin: 4px 0 8px;
  font-size: 22px;
}

h2 a {
  text-decoration: none;
}

h2 a:hover,
h2 a:focus-visible {
  text-decoration: underline;
}

.card__text {
  color: var(--muted);
  font-size: 15px;
}

.card__pages {
  margin-top: 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--label);
}

.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 15px;
}

.footer a {
  color: var(--accent);
}

.credits {
  color: var(--label);
  font-size: 13px;
}
</style>
