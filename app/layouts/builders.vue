<script setup lang="ts">
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap'
    }
  ],
  meta: [{ name: 'theme-color', content: '#16181a' }]
})

const route = useRoute()
const menuOpen = ref(false)
const year = new Date().getFullYear()

watch(() => route.fullPath, () => (menuOpen.value = false))

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') menuOpen.value = false
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="site-builders">
    <a class="skip-link" href="#main">Skip to content</a>

    <header class="header">
      <div class="container header__inner">
        <NuxtLink to="/builders" class="logo" aria-label="Ironbark Builders, home">
          <svg class="logo__mark" viewBox="0 0 32 32" width="34" height="34" aria-hidden="true" focusable="false">
            <rect width="32" height="32" fill="#ffc20e" />
            <path d="M6 24V12l10-6 10 6v12h-5v-9l-5-3-5 3v9z" fill="#16181a" />
          </svg>
          <span class="logo__text">Ironbark<small>Builders</small></span>
        </NuxtLink>

        <button
          type="button"
          class="menu-btn"
          :aria-expanded="menuOpen"
          aria-controls="builders-nav"
          @click="menuOpen = !menuOpen"
        >
          <span class="visually-hidden">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false">
            <path v-if="!menuOpen" d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2.5" fill="none" />
            <path v-else d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2.5" fill="none" />
          </svg>
        </button>

        <nav id="builders-nav" class="nav" :class="{ 'nav--open': menuOpen }" aria-label="Main">
          <ul>
            <li v-for="item in buildersNav" :key="item.to">
              <NuxtLink :to="item.to" exact-active-class="is-active">{{ item.label }}</NuxtLink>
            </li>
          </ul>
          <NuxtLink to="/builders/contact#quote" class="btn btn--small nav__cta">Free quote</NuxtLink>
        </nav>
      </div>
    </header>

    <main id="main" tabindex="-1">
      <slot />
    </main>

    <footer class="footer">
      <div class="container footer__grid">
        <div>
          <p class="footer__brand">Ironbark Builders</p>
          <p>{{ buildersContact.address[0] }}<br />{{ buildersContact.address[1] }}</p>
          <p class="footer__small">{{ buildersContact.licence }}</p>
        </div>
        <div>
          <h2 class="footer__h">Contact</h2>
          <p>
            <a :href="buildersContact.phoneHref">{{ buildersContact.phone }}</a><br />
            <a :href="`mailto:${buildersContact.email}`">{{ buildersContact.email }}</a>
          </p>
        </div>
        <div>
          <h2 class="footer__h">Office hours</h2>
          <p v-for="h in buildersContact.hours" :key="h.days" class="footer__hours">
            <span>{{ h.days }}</span> <span>{{ h.time }}</span>
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 class="footer__h">Explore</h2>
          <ul class="footer__links">
            <li v-for="item in buildersNav" :key="item.to"><NuxtLink :to="item.to">{{ item.label }}</NuxtLink></li>
          </ul>
        </nav>
      </div>
      <div class="container footer__bottom">
        <p>© {{ year }} Ironbark Builders. A fictional company, built as a website demo.</p>
      </div>
    </footer>

    <DemoBadge />
  </div>
</template>

<style>
body:has(.site-builders) {
  background: #16181a;
}

.site-builders {
  --b-ink: #16181a;
  --b-ink-2: #23272a;
  --b-concrete: #e4e4e0;
  --b-concrete-2: #cfcfca;
  --b-white: #ffffff;
  --b-accent: #ffc20e;
  --b-accent-dark: #e0a800;
  --b-muted: #5a5f63;
  --b-muted-on-dark: #b3b7ba;
  --b-font-head: 'Barlow Condensed', 'Arial Narrow', Impact, sans-serif;
  --b-font-body: 'Barlow', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --b-radius: 0;
  --b-gutter: clamp(16px, 4vw, 40px);
  --b-max: 1240px;

  font-family: var(--b-font-body);
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--b-ink);
  background: var(--b-white);
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}

.site-builders h1,
.site-builders h2,
.site-builders h3,
.site-builders h4 {
  font-family: var(--b-font-head);
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  margin: 0;
}

.site-builders p {
  margin: 0 0 1em;
}

.site-builders a {
  color: inherit;
}

.site-builders ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-builders :focus-visible {
  outline: 3px solid #16181a;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px #ffc20e;
}

.site-builders .container {
  width: 100%;
  max-width: var(--b-max);
  margin-inline: auto;
  padding-inline: var(--b-gutter);
}

.site-builders .section {
  padding-block: clamp(56px, 9vw, 112px);
}

.site-builders .section--dark {
  background: var(--b-ink);
  color: var(--b-white);
}

.site-builders .section--concrete {
  background: var(--b-concrete);
}

.site-builders .eyebrow {
  display: inline-block;
  margin: 0 0 14px;
  padding: 4px 10px;
  background: var(--b-accent);
  color: var(--b-ink);
  font-family: var(--b-font-head);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.3;
}

.site-builders .h2 {
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  margin-bottom: 20px;
}

.site-builders .lead {
  font-size: 1.2rem;
  max-width: 62ch;
}

.site-builders .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  border: 3px solid var(--b-accent);
  background: var(--b-accent);
  color: var(--b-ink);
  font-family: var(--b-font-head);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}

.site-builders .btn:hover {
  background: var(--b-white);
  border-color: var(--b-white);
}

.site-builders .btn--ghost {
  background: transparent;
  color: var(--b-white);
  border-color: var(--b-white);
}

.site-builders .btn--ghost:hover {
  background: var(--b-white);
  color: var(--b-ink);
}

.site-builders .btn--dark {
  background: var(--b-ink);
  border-color: var(--b-ink);
  color: var(--b-white);
}

.site-builders .btn--dark:hover {
  background: var(--b-accent);
  border-color: var(--b-ink);
  color: var(--b-ink);
}

.site-builders .btn--small {
  padding: 12px 18px;
  font-size: 1.05rem;
}

.site-builders .btn[disabled] {
  opacity: 0.6;
  cursor: progress;
}

.site-builders .skip-link {
  position: absolute;
  left: 8px;
  top: -80px;
  z-index: 2000;
  padding: 12px 18px;
  background: var(--b-accent);
  color: var(--b-ink);
  font-weight: 600;
}

.site-builders .skip-link:focus {
  top: 8px;
}

/* Header */
.site-builders .header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--b-ink);
  color: var(--b-white);
  border-bottom: 4px solid var(--b-accent);
}

.site-builders .header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.site-builders .logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.site-builders .logo__text {
  display: flex;
  flex-direction: column;
  font-family: var(--b-font-head);
  font-size: 1.7rem;
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.site-builders .logo__text small {
  color: var(--b-accent);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.35em;
}

.site-builders .menu-btn {
  display: inline-flex;
  padding: 8px;
  border: 2px solid var(--b-white);
  background: transparent;
  color: var(--b-white);
  cursor: pointer;
}

.site-builders .nav {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 8px var(--b-gutter) 24px;
  background: var(--b-ink);
  border-bottom: 4px solid var(--b-accent);
}

.site-builders .nav--open {
  display: block;
}

.site-builders .nav a:not(.btn) {
  display: block;
  padding: 14px 0;
  border-bottom: 1px solid #3a3f43;
  font-family: var(--b-font-head);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
}

.site-builders .nav a.is-active:not(.btn) {
  color: var(--b-accent);
}

.site-builders .nav__cta {
  margin-top: 18px;
  width: 100%;
}

@media (min-width: 900px) {
  .site-builders .menu-btn {
    display: none;
  }

  .site-builders .nav {
    position: static;
    display: flex;
    align-items: center;
    gap: 28px;
    padding: 0;
    border: 0;
    background: none;
  }

  .site-builders .nav ul {
    display: flex;
    gap: 26px;
  }

  .site-builders .nav a:not(.btn) {
    padding: 26px 0 22px;
    border-bottom: 4px solid transparent;
    margin-bottom: -4px;
    font-size: 1.2rem;
  }

  .site-builders .nav a.is-active:not(.btn) {
    border-bottom-color: var(--b-accent);
    color: var(--b-white);
  }

  .site-builders .nav__cta {
    margin-top: 0;
    width: auto;
  }
}

/* Footer */
.site-builders .footer {
  background: var(--b-ink);
  color: var(--b-concrete);
  border-top: 4px solid var(--b-accent);
  padding-top: 56px;
  font-size: 1rem;
}

.site-builders .footer__grid {
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .site-builders .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1000px) {
  .site-builders .footer__grid {
    grid-template-columns: 1.3fr 1.2fr 1fr 0.8fr;
  }
}

.site-builders .footer__brand {
  font-family: var(--b-font-head);
  font-size: 1.8rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--b-white);
  margin-bottom: 8px;
}

.site-builders .footer__small {
  font-size: 0.9rem;
  color: var(--b-muted-on-dark);
}

.site-builders .footer__h {
  margin-bottom: 12px;
  color: var(--b-accent);
  font-size: 1.15rem;
  letter-spacing: 0.12em;
}

.site-builders .footer__hours {
  display: flex;
  justify-content: space-between;
  max-width: 260px;
  margin-bottom: 4px;
}

.site-builders .footer__links li {
  margin-bottom: 6px;
}

.site-builders .footer a {
  text-decoration: none;
}

.site-builders .footer a:hover {
  color: var(--b-accent);
  text-decoration: underline;
}

.site-builders .footer__bottom {
  margin-top: 40px;
  padding-block: 20px 88px;
  border-top: 1px solid #3a3f43;
  font-size: 0.9rem;
  color: var(--b-muted-on-dark);
}

.site-builders .footer__bottom p {
  margin: 0;
}

/* Shared form + page hero helpers used by several pages */
@media (prefers-reduced-motion: reduce) {
  .site-builders * {
    transition: none !important;
    animation: none !important;
    scroll-behavior: auto !important;
  }
}
</style>
