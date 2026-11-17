<script setup lang="ts">
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
    }
  ],
  meta: [{ name: 'theme-color', content: '#ffffff' }]
})

const route = useRoute()
const menuOpen = ref(false)
const year = new Date().getFullYear()

watch(() => route.fullPath, () => (menuOpen.value = false))

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false
    document.getElementById('dental-menu-button')?.focus()
  }
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="site-dental">
    <a class="skip-link" href="#main">Skip to content</a>

    <header class="header">
      <div class="container header__inner">
        <NuxtLink to="/dental" class="brand" aria-label="Linden Dental Studio, home">
          <svg class="brand__mark" viewBox="0 0 32 32" width="34" height="34" aria-hidden="true">
            <rect width="32" height="32" rx="10" fill="var(--teal-700)" />
            <path
              d="M16 25c-4.500-3-7-6-7-9.500C9 12.500 11 11 13 11c1.300 0 2.200.6 3 1.500.800-.900 1.700-1.500 3-1.500 2 0 4 1.500 4 4.500 0 3.500-2.500 6.500-7 9.500Z"
              fill="none"
              stroke="#fff"
              stroke-width="1.700"
              stroke-linejoin="round"
              transform="translate(0 -3)"
            />
            <path d="M16 11V6.500M16 8.500c1.500-1.800 3.200-2 4.500-1.500" stroke="var(--accent)" stroke-width="1.700" stroke-linecap="round" fill="none" />
          </svg>
          <span class="brand__text">Linden <span>Dental Studio</span></span>
        </NuxtLink>

        <nav class="nav" aria-label="Main">
          <NuxtLink v-for="item in dentalNav" :key="item.to" :to="item.to" class="nav__link" exact-active-class="is-active">
            {{ item.label }}
          </NuxtLink>
        </nav>

        <a class="header__phone" :href="dentalContact.phoneHref">
          <DentalIcon name="phone" />
          <span>{{ dentalContact.phone }}</span>
        </a>

        <button
          id="dental-menu-button"
          type="button"
          class="menu-button"
          :aria-expanded="menuOpen"
          aria-controls="dental-mobile-menu"
          @click="menuOpen = !menuOpen"
        >
          <DentalIcon :name="menuOpen ? 'close' : 'menu'" />
          <span class="visually-hidden">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
        </button>
      </div>

      <nav v-show="menuOpen" id="dental-mobile-menu" class="mobile-menu" aria-label="Mobile">
        <NuxtLink v-for="item in dentalNav" :key="item.to" :to="item.to" class="mobile-menu__link" exact-active-class="is-active">
          {{ item.label }}
        </NuxtLink>
        <NuxtLink to="/dental/contact#book" class="btn btn--primary mobile-menu__cta">Book an appointment</NuxtLink>
      </nav>
    </header>

    <main id="main" tabindex="-1">
      <slot />
    </main>

    <footer class="footer">
      <div class="container footer__grid">
        <div>
          <p class="footer__brand">Linden Dental Studio</p>
          <p class="footer__muted">Gentle, modern dental care for the whole family since 2011.</p>
        </div>
        <div>
          <h2 class="footer__title">Visit us</h2>
          <address class="footer__address">
            {{ dentalContact.street }}<br />
            {{ dentalContact.town }}<br />
            <a :href="dentalContact.phoneHref">{{ dentalContact.phone }}</a><br />
            <a :href="`mailto:${dentalContact.email}`">{{ dentalContact.email }}</a>
          </address>
        </div>
        <div>
          <h2 class="footer__title">Opening hours</h2>
          <ul class="footer__hours">
            <li v-for="h in dentalHours" :key="h.day">
              <span>{{ h.day }}</span> <span>{{ h.time }}</span>
            </li>
          </ul>
        </div>
        <nav aria-label="Footer">
          <h2 class="footer__title">Explore</h2>
          <ul class="footer__links">
            <li v-for="item in dentalNav" :key="item.to"><NuxtLink :to="item.to">{{ item.label }}</NuxtLink></li>
          </ul>
        </nav>
      </div>
      <div class="container footer__bottom">
        <p>© {{ year }} Linden Dental Studio. A fictional clinic for demonstration.</p>
      </div>
    </footer>

    <DemoBadge />
  </div>
</template>

<style>
body:has(.site-dental) {
  background: #ffffff;
}

.site-dental {
  --teal-900: #0f3f3b;
  --teal-700: #17655f;
  --teal-500: #2f9c93;
  --teal-200: #cfe8e4;
  --teal-100: #e6f3f1;
  --teal-50: #f3f9f8;
  --accent: #f0956a;
  --accent-soft: #fdeee6;
  --accent-ink: #9b4320;
  --ink: #17302e;
  --muted: #4c6361;
  --line: #dbe8e6;
  --bg: #ffffff;
  --font: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --radius: 20px;
  --radius-sm: 12px;
  --shadow: 0 10px 30px rgb(23 101 95 / 0.09);
  --gutter: 20px;

  font-family: var(--font);
  color: var(--ink);
  background: var(--bg);
  line-height: 1.65;
  font-size: 1rem;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1180px;
  margin-inline: auto;
  padding-inline: var(--gutter);
}

a {
  text-decoration: none;
}

:focus-visible {
  outline: 3px solid var(--teal-500);
  outline-offset: 3px;
  border-radius: 6px;
}

@media (min-width: 1000px) {
  .site-dental {
    --gutter: 32px;
  }
}

.site-dental a {
  text-decoration: none;
}

.site-dental :focus-visible {
  outline: 3px solid var(--teal-500);
  outline-offset: 3px;
  border-radius: 6px;
}

.site-dental .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 26px;
  border-radius: 999px;
  border: 2px solid transparent;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.site-dental .btn--primary {
  background: var(--teal-700);
  color: #fff;
}

.site-dental .btn--primary:hover {
  background: var(--teal-900);
}

.site-dental .btn--ghost {
  border-color: var(--teal-700);
  color: var(--teal-700);
  background: #fff;
}

.site-dental .btn--ghost:hover {
  background: var(--teal-50);
}

.site-dental .btn--warm {
  background: var(--accent);
  color: #3a1608;
}

.site-dental .btn--warm:hover {
  background: #f4a982;
}

.site-dental .section {
  padding-block: 64px;
}

.site-dental .section--tint {
  background: var(--teal-50);
}

.site-dental .eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  color: var(--teal-700);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.site-dental h1,
.site-dental h2,
.site-dental h3 {
  color: var(--teal-900);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.site-dental .h2 {
  font-size: clamp(1.75rem, 1.2rem + 2vw, 2.5rem);
  font-weight: 800;
}

.site-dental .lead {
  color: var(--muted);
  font-size: 1.1rem;
  max-width: 60ch;
}

.site-dental .section-head {
  margin-bottom: 40px;
}

.site-dental .section-head .lead {
  margin-top: 14px;
}

@media (min-width: 900px) {
  .site-dental .section {
    padding-block: 96px;
  }
}
</style>

<style scoped>
main:focus {
  outline: none;
}

.skip-link {
  position: absolute;
  left: 12px;
  top: -60px;
  z-index: 200;
  padding: 10px 16px;
  border-radius: 10px;
  background: var(--teal-900);
  color: #fff;
  font-weight: 600;
}

.skip-link:focus {
  top: 12px;
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgb(255 255 255 / 0.94);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(10px);
}

.header__inner {
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 72px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: auto;
  color: var(--teal-900);
}

.brand__text {
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: -0.01em;
  line-height: 1.1;
}

.brand__text span {
  font-weight: 500;
  color: var(--muted);
}

.nav {
  display: none;
  gap: 4px;
}

.nav__link,
.mobile-menu__link {
  padding: 8px 14px;
  border-radius: 999px;
  color: var(--ink);
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s, color 0.2s;
}

.nav__link:hover,
.mobile-menu__link:hover {
  background: var(--teal-50);
}

.nav__link.is-active,
.mobile-menu__link.is-active {
  background: var(--teal-100);
  color: var(--teal-700);
}

.header__phone {
  display: none;
  align-items: center;
  gap: 8px;
  color: var(--teal-700);
  font-weight: 700;
  font-size: 0.95rem;
}

.menu-button {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  color: var(--teal-900);
  cursor: pointer;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px var(--gutter) 20px;
  border-top: 1px solid var(--line);
  background: #fff;
}

.mobile-menu__link {
  padding: 14px 16px;
  font-size: 1.05rem;
}

.mobile-menu__cta {
  margin-top: 8px;
  text-align: center;
}

@media (min-width: 900px) {
  .nav {
    display: flex;
  }
  .menu-button,
  .mobile-menu {
    display: none !important;
  }
}

@media (min-width: 1100px) {
  .header__phone {
    display: inline-flex;
  }
}

/* Footer */
.footer {
  margin-top: 0;
  background: var(--teal-900);
  color: #d6e9e6;
}

.footer__grid {
  display: grid;
  gap: 32px;
  padding-block: 56px 40px;
}

.footer a {
  color: #fff;
}

.footer a:hover {
  text-decoration: underline;
}

.footer__brand {
  color: #fff;
  font-weight: 800;
  font-size: 1.25rem;
}

.footer__muted {
  margin-top: 8px;
  max-width: 28ch;
  color: #a9cbc6;
}

.footer__title {
  margin-bottom: 12px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.footer__address {
  font-style: normal;
  line-height: 1.9;
}

.footer__hours,
.footer__links {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.95rem;
}

.footer__hours li {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2px 12px;
}

.footer__hours li span:first-child {
  color: #a9cbc6;
}

.footer__bottom {
  padding-block: 20px 28px;
  border-top: 1px solid rgb(255 255 255 / 0.14);
  color: #a9cbc6;
  font-size: 0.875rem;
}

@media (min-width: 700px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1000px) {
  .footer__grid {
    grid-template-columns: 1.2fr 1.1fr 1.4fr 0.7fr;
  }
}

</style>
