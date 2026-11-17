<script setup lang="ts">
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:wght@300;400;500;600&display=swap'
    }
  ],
  meta: [{ name: 'theme-color', content: '#f7f1e8' }]
})

const route = useRoute()
const menuOpen = ref(false)
const year = new Date().getFullYear()

watch(() => route.fullPath, () => (menuOpen.value = false))

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false
    document.getElementById('yoga-menu-button')?.focus()
  }
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="site-yoga">
    <a class="skip-link" href="#main">Skip to content</a>

    <header class="site-header">
      <div class="site-header__inner">
        <NuxtLink to="/yoga" class="brand" aria-label="Still Water Yoga, home">
          <svg class="brand__mark" viewBox="0 0 40 40" width="34" height="34" aria-hidden="true" focusable="false">
            <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" stroke-width="1.5" />
            <path d="M7 22c4-4 8 4 13 0s9 4 13 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
            <path d="M11 28c3-3 6 3 9 0s6 3 9 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".55" />
            <circle cx="20" cy="13" r="2.6" fill="currentColor" />
          </svg>
          <span class="brand__text">Still Water <small>Yoga &amp; Pilates</small></span>
        </NuxtLink>

        <button
          id="yoga-menu-button"
          type="button"
          class="menu-button"
          :aria-expanded="menuOpen"
          aria-controls="yoga-nav"
          @click="menuOpen = !menuOpen"
        >
          <span class="visually-hidden">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
          <span class="menu-button__bars" :class="{ 'is-open': menuOpen }" aria-hidden="true"><i /><i /></span>
        </button>

        <nav id="yoga-nav" class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="Main">
          <ul>
            <li v-for="item in yogaNav" :key="item.to">
              <NuxtLink :to="item.to" exact-active-class="is-active">{{ item.label }}</NuxtLink>
            </li>
          </ul>
          <NuxtLink to="/yoga/pricing" class="btn btn--small site-nav__cta">Try a class</NuxtLink>
        </nav>
      </div>
    </header>

    <main id="main" tabindex="-1">
      <slot />
    </main>

    <footer class="site-footer">
      <div class="container site-footer__grid">
        <div>
          <p class="site-footer__brand">Still Water Yoga</p>
          <p class="site-footer__text">A small studio for yoga and Pilates in the middle of Millbrook. Come as you are.</p>
        </div>
        <div>
          <h2 class="site-footer__title">Visit</h2>
          <address class="site-footer__text">
            {{ yogaStudio.address[0] }}<br />
            {{ yogaStudio.address[1] }}<br />
            <a :href="yogaStudio.phoneHref">{{ yogaStudio.phone }}</a><br />
            <a :href="`mailto:${yogaStudio.email}`">{{ yogaStudio.email }}</a>
          </address>
        </div>
        <div>
          <h2 class="site-footer__title">Opening hours</h2>
          <dl class="site-footer__hours">
            <div v-for="h in yogaHours" :key="h.days">
              <dt>{{ h.days }}</dt>
              <dd>{{ h.hours }}</dd>
            </div>
          </dl>
        </div>
        <nav aria-label="Footer">
          <h2 class="site-footer__title">Explore</h2>
          <ul class="site-footer__links">
            <li v-for="item in yogaNav" :key="item.to"><NuxtLink :to="item.to">{{ item.label }}</NuxtLink></li>
          </ul>
        </nav>
      </div>
      <p class="container site-footer__copy">&copy; {{ year }} Still Water Yoga. A fictional studio, made for a demo.</p>
    </footer>

    <DemoBadge />
  </div>
</template>

<style>
body:has(.site-yoga) {
  background: #f7f1e8;
}

.site-yoga {
  --sand: #f7f1e8;
  --sand-deep: #efe6d8;
  --paper: #fffbf5;
  --ink: #34302b;
  --muted: #655e54;
  --sage: #9db39a;
  --sage-soft: #e2e9dd;
  --sage-deep: #46634a;
  --clay: #c98b74;
  --clay-deep: #9b533a;
  --blush: #f0d9cd;
  --line: #e3d8c7;
  --font-display: 'DM Serif Display', 'Playfair Display', Georgia, serif;
  --font-body: 'Jost', 'Nunito Sans', system-ui, sans-serif;
  --radius: 22px;
  --radius-lg: 36px;
  --space: clamp(64px, 9vw, 120px);
  --shadow: 0 18px 50px -24px rgb(80 62 40 / 0.35);

  min-height: 100vh;
  background: var(--sand);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.65;
}

.site-yoga h1,
.site-yoga h2,
.site-yoga h3 {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.005em;
  color: var(--ink);
}

.site-yoga :focus-visible {
  outline: 3px solid var(--clay-deep);
  outline-offset: 3px;
  border-radius: 6px;
}

.site-yoga .skip-link {
  position: absolute;
  left: 12px;
  top: -60px;
  z-index: 200;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--sage-deep);
  color: #fff;
  text-decoration: none;
}
.site-yoga .skip-link:focus {
  top: 12px;
}

.site-yoga .container {
  width: min(1160px, 100% - 40px);
  margin-inline: auto;
}
.site-yoga .container--wide {
  width: min(1320px, 100% - 32px);
}

.site-yoga .section {
  padding-block: var(--space);
}
.site-yoga .section--tint {
  background: var(--sage-soft);
}
.site-yoga .section--paper {
  background: var(--paper);
}

.site-yoga .eyebrow {
  margin-bottom: 14px;
  color: var(--clay-deep);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.site-yoga .h-section {
  font-size: clamp(2rem, 4.4vw, 3.2rem);
  max-width: 18ch;
}
.site-yoga .lead {
  color: var(--muted);
  font-size: 1.15rem;
  font-weight: 300;
  max-width: 54ch;
}
.site-yoga .section-head {
  display: grid;
  gap: 16px;
  margin-bottom: clamp(32px, 5vw, 56px);
}
.site-yoga .section-head--center {
  justify-items: center;
  text-align: center;
}
.site-yoga .section-head--center .h-section {
  max-width: 22ch;
}

.site-yoga .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border: 1.5px solid var(--sage-deep);
  border-radius: 999px;
  background: var(--sage-deep);
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s, color 0.25s, transform 0.25s, box-shadow 0.25s;
}
.site-yoga .btn:hover {
  background: #385239;
  border-color: #385239;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px -12px rgb(40 70 45 / 0.6);
}
.site-yoga .btn--ghost {
  background: transparent;
  color: var(--sage-deep);
}
.site-yoga .btn--ghost:hover {
  background: var(--sage-deep);
  color: #fff;
}
.site-yoga .btn--clay {
  background: var(--clay-deep);
  border-color: var(--clay-deep);
}
.site-yoga .btn--clay:hover {
  background: #7f402a;
  border-color: #7f402a;
}
.site-yoga .btn--small {
  padding: 10px 20px;
  font-size: 0.95rem;
}
.site-yoga .btn[disabled] {
  opacity: 0.65;
  cursor: progress;
  transform: none;
}

.site-yoga .link-arrow {
  color: var(--sage-deep);
  font-weight: 500;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 5px;
}
.site-yoga .link-arrow:hover {
  color: var(--clay-deep);
}

.site-yoga .pill {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 999px;
  background: var(--sage-soft);
  color: var(--sage-deep);
  font-size: 0.82rem;
  font-weight: 500;
}

/* ---------- Header ---------- */
.site-yoga .site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgb(247 241 232 / 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgb(227 216 199 / 0.7);
}
.site-yoga .site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: min(1240px, 100% - 32px);
  min-height: 72px;
  margin-inline: auto;
}
.site-yoga .brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--sage-deep);
  text-decoration: none;
}
.site-yoga .brand__text {
  display: grid;
  color: var(--ink);
  font-family: var(--font-display);
  font-size: 1.4rem;
  line-height: 1.05;
}
.site-yoga .brand__text small {
  color: var(--muted);
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.site-yoga .menu-button {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1.5px solid var(--line);
  border-radius: 50%;
  background: var(--paper);
  cursor: pointer;
}
.site-yoga .menu-button__bars {
  position: relative;
  width: 20px;
  height: 12px;
}
.site-yoga .menu-button__bars i {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: var(--ink);
  transition: transform 0.3s, top 0.3s;
}
.site-yoga .menu-button__bars i:first-child {
  top: 0;
}
.site-yoga .menu-button__bars i:last-child {
  top: 10px;
}
.site-yoga .menu-button__bars.is-open i:first-child {
  top: 5px;
  transform: rotate(45deg);
}
.site-yoga .menu-button__bars.is-open i:last-child {
  top: 5px;
  transform: rotate(-45deg);
}

.site-yoga .site-nav {
  position: absolute;
  inset: 100% 0 auto 0;
  display: none;
  gap: 18px;
  padding: 12px 20px 28px;
  background: var(--sand);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 24px 40px -28px rgb(60 45 25 / 0.4);
}
.site-yoga .site-nav.is-open {
  display: grid;
}
.site-yoga .site-nav ul {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}
.site-yoga .site-nav li a:not(.btn) {
  display: block;
  padding: 12px 4px;
  border-bottom: 1px solid var(--line);
  color: var(--ink);
  font-size: 1.1rem;
  text-decoration: none;
}
.site-yoga .site-nav li a.is-active {
  color: var(--clay-deep);
  font-weight: 500;
}
.site-yoga .site-nav__cta {
  justify-self: start;
}

@media (min-width: 900px) {
  .site-yoga .menu-button {
    display: none;
  }
  .site-yoga .site-nav {
    position: static;
    display: flex;
    align-items: center;
    gap: 28px;
    padding: 0;
    background: none;
    border: 0;
    box-shadow: none;
  }
  .site-yoga .site-nav ul {
    display: flex;
    gap: 6px;
  }
  .site-yoga .site-nav li a:not(.btn) {
    position: relative;
    padding: 8px 14px;
    border: 0;
    font-size: 1rem;
  }
  .site-yoga .site-nav li a:not(.btn)::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--clay);
    transform: translateX(-50%) scale(0);
    transition: transform 0.25s;
  }
  .site-yoga .site-nav li a:not(.btn):hover::after,
  .site-yoga .site-nav li a.is-active::after {
    transform: translateX(-50%) scale(1);
  }
}

/* ---------- Footer ---------- */
.site-yoga .site-footer {
  padding-top: 72px;
  padding-bottom: 96px;
  background: var(--sage-deep);
  color: #eef2ea;
}
.site-yoga .site-footer a {
  color: #fff;
  text-underline-offset: 4px;
}
.site-yoga .site-footer__grid {
  display: grid;
  gap: 36px;
}
.site-yoga .site-footer__brand {
  margin-bottom: 10px;
  font-family: var(--font-display);
  font-size: 1.7rem;
  line-height: 1.1;
}
.site-yoga .site-footer__title {
  margin-bottom: 12px;
  color: #cfdcc9;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.site-yoga .site-footer__text {
  margin: 0;
  font-style: normal;
  font-size: 0.98rem;
}
.site-yoga .site-footer__hours {
  display: grid;
  gap: 8px;
  margin: 0;
  font-size: 0.98rem;
}
.site-yoga .site-footer__hours div {
  display: flex;
  flex-wrap: wrap;
  gap: 0 12px;
  justify-content: space-between;
}
.site-yoga .site-footer__hours dd {
  margin: 0;
}
.site-yoga .site-footer__links {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.site-yoga .site-footer__copy {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgb(255 255 255 / 0.2);
  font-size: 0.88rem;
  color: #cfdcc9;
}
@media (min-width: 760px) {
  .site-yoga .site-footer__grid {
    grid-template-columns: 1.3fr 1fr 1fr 0.7fr;
    gap: 48px;
  }
}

/* ---------- Page hero (inner pages) ---------- */
.site-yoga .page-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(48px, 7vw, 96px) clamp(40px, 6vw, 72px);
  background: linear-gradient(180deg, var(--blush) 0%, var(--sand) 100%);
}
.site-yoga .page-hero::before {
  content: '';
  position: absolute;
  right: -8%;
  top: -40%;
  width: min(520px, 70vw);
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(157 179 154 / 0.35), transparent 70%);
  pointer-events: none;
}
.site-yoga .page-hero h1 {
  position: relative;
  max-width: 16ch;
  font-size: clamp(2.5rem, 6.5vw, 4.5rem);
}
.site-yoga .page-hero .lead {
  position: relative;
  margin-top: 18px;
}

.site-yoga .check-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.site-yoga .check-list li {
  position: relative;
  padding-left: 32px;
}
.site-yoga .check-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.35em;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--sage-soft) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath d='M5 9.5l2.5 2.5L13 6.5' fill='none' stroke='%2346634a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/100% no-repeat;
}
</style>
