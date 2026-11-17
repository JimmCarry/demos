<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)
const year = new Date().getFullYear()

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Source+Sans+3:wght@400;600;700&display=swap'
    }
  ],
  meta: [{ name: 'theme-color', content: '#0f1b2d' }]
})

const nav = [
  { to: '/law', label: 'Home' },
  { to: '/law/practice-areas', label: 'Practice areas' },
  { to: '/law/about', label: 'About' },
  { to: '/law/contact', label: 'Contact' }
]

watch(() => route.fullPath, () => (menuOpen.value = false))

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') menuOpen.value = false
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="site-law">
    <a class="skip" href="#main">Skip to content</a>

    <header class="header">
      <div class="header__inner">
        <NuxtLink to="/law" class="brand" aria-label="Hartwell & Moss, home">
          <LawLogo />
        </NuxtLink>

        <button
          type="button"
          class="menu-btn"
          :aria-expanded="menuOpen"
          aria-controls="law-nav"
          @click="menuOpen = !menuOpen"
        >
          <span class="menu-btn__bars" aria-hidden="true" :class="{ open: menuOpen }"><i /><i /></span>
          <span>Menu</span>
        </button>

        <nav id="law-nav" class="nav" :class="{ 'nav--open': menuOpen }" aria-label="Main">
          <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" exact-active-class="is-active" class="nav__link">
            {{ item.label }}
          </NuxtLink>
          <NuxtLink to="/law/contact#consultation" class="nav__cta">Book a consultation</NuxtLink>
        </nav>
      </div>
    </header>

    <main id="main" tabindex="-1">
      <slot />
    </main>

    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <LawLogo />
          <p class="footer__note">
            Attorneys at law. The information on this website is general and is not legal advice.
          </p>
        </div>
        <div>
          <h2 class="footer__h">Office</h2>
          <address class="footer__addr">
            <span v-for="line in lawContact.address" :key="line">{{ line }}</span>
            <a :href="`tel:${lawContact.phoneHref}`">{{ lawContact.phone }}</a>
            <a :href="`mailto:${lawContact.email}`">{{ lawContact.email }}</a>
          </address>
        </div>
        <div>
          <h2 class="footer__h">Hours</h2>
          <ul class="footer__list">
            <li v-for="h in lawContact.hours" :key="h.days">{{ h.days }}<br />{{ h.time }}</li>
          </ul>
        </div>
        <div>
          <h2 class="footer__h">Explore</h2>
          <ul class="footer__list">
            <li v-for="item in nav" :key="item.to"><NuxtLink :to="item.to">{{ item.label }}</NuxtLink></li>
          </ul>
        </div>
      </div>
      <p class="footer__copy">© {{ year }} Hartwell &amp; Moss, Attorneys at Law. A fictional firm for demonstration.</p>
    </footer>

    <DemoBadge />
  </div>
</template>

<style>
body:has(.site-law) {
  background: #f7f3ea;
}
</style>

<style scoped>
.site-law {
  --navy: #0f1b2d;
  --navy-2: #1a2b45;
  --ivory: #f7f3ea;
  --paper: #fffdf8;
  --ink: #1b2433;
  --muted: #546074;
  --brass: #7d6023;
  --brass-bright: #c9a961;
  --rule: rgb(15 27 45 / 0.18);
  --font-head: 'Cormorant Garamond', 'Libre Caslon Text', Georgia, serif;
  --font-body: 'Source Sans 3', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --gutter: clamp(20px, 5vw, 48px);
  --maxw: 1200px;
  --radius: 2px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--ivory);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 1.0625rem;
  line-height: 1.65;
}

main {
  flex: 1;
}
main:focus {
  outline: none;
}

.skip {
  position: absolute;
  left: 12px;
  top: -60px;
  z-index: 100;
  padding: 10px 16px;
  background: var(--brass-bright);
  color: var(--navy);
  font-weight: 700;
}
.skip:focus {
  top: 12px;
}

:focus-visible {
  outline: 2px solid var(--brass-bright);
  outline-offset: 3px;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--navy);
  border-bottom: 1px solid rgb(201 169 97 / 0.35);
  color: #fff;
}
.header__inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 var(--gutter);
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.brand {
  text-decoration: none;
  color: inherit;
}

.menu-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: 1px solid rgb(255 255 255 / 0.35);
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
}
.menu-btn__bars {
  position: relative;
  width: 18px;
  height: 10px;
}
.menu-btn__bars i {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1.5px;
  background: currentColor;
  transition: transform 0.2s, top 0.2s;
}
.menu-btn__bars i:first-child {
  top: 0;
}
.menu-btn__bars i:last-child {
  top: 8px;
}
.menu-btn__bars.open i:first-child {
  top: 4px;
  transform: rotate(45deg);
}
.menu-btn__bars.open i:last-child {
  top: 4px;
  transform: rotate(-45deg);
}

.nav {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  padding: 8px var(--gutter) 24px;
  background: var(--navy);
  border-bottom: 1px solid rgb(201 169 97 / 0.35);
}
.nav--open {
  display: flex;
}
.nav__link {
  padding: 14px 0;
  border-bottom: 1px solid rgb(255 255 255 / 0.12);
  color: #e9e4d6;
  text-decoration: none;
  letter-spacing: 0.04em;
}
.nav__link:hover {
  color: #fff;
}
.nav__link.is-active {
  color: var(--brass-bright);
}
.nav__cta {
  margin-top: 18px;
  padding: 12px 20px;
  text-align: center;
  border: 1px solid var(--brass-bright);
  color: var(--brass-bright);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.nav__cta:hover {
  background: var(--brass-bright);
  color: var(--navy);
}

@media (min-width: 900px) {
  .menu-btn {
    display: none;
  }
  .nav {
    display: flex;
    position: static;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding: 0;
    border: 0;
    background: none;
  }
  .nav__link {
    position: relative;
    padding: 6px 0;
    border: 0;
    font-size: 0.95rem;
  }
  .nav__link::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: var(--brass-bright);
    transform: scaleX(0);
    transition: transform 0.25s;
  }
  .nav__link:hover::after,
  .nav__link.is-active::after {
    transform: scaleX(1);
  }
  .nav__cta {
    margin: 0 0 0 8px;
    padding: 9px 18px;
    font-size: 0.9rem;
  }
}

.footer {
  background: var(--navy);
  color: #cfd5df;
  border-top: 3px double rgb(201 169 97 / 0.6);
  font-size: 0.95rem;
}
.footer__inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 56px var(--gutter) 36px;
  display: grid;
  gap: 36px;
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 960px) {
  .footer__inner {
    grid-template-columns: 1.4fr 1fr 1fr 0.8fr;
  }
}
.footer__note {
  margin-top: 16px;
  max-width: 32ch;
  color: #aab3c2;
}
.footer__h {
  margin-bottom: 14px;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--brass-bright);
}
.footer__addr {
  display: grid;
  gap: 4px;
  font-style: normal;
}
.footer__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}
.footer a {
  color: #e9e4d6;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}
.footer__copy {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 20px var(--gutter) 80px;
  border-top: 1px solid rgb(255 255 255 / 0.12);
  font-size: 0.85rem;
  color: #aab3c2;
}
</style>
