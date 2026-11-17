<script setup lang="ts">
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&display=swap'
    }
  ],
  meta: [{ name: 'theme-color', content: '#f7f0e3' }]
})

const route = useRoute()
const menuOpen = ref(false)
const year = new Date().getFullYear()

watch(() => route.path, () => (menuOpen.value = false))

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') menuOpen.value = false
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="site-cafe">
    <a href="#main" class="skip-link">Skip to content</a>

    <header class="site-header">
      <div class="site-header__inner container">
        <NuxtLink to="/cafe" class="brand" aria-label="Bramble & Bean, home">
          <svg class="brand__mark" viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">
            <path d="M20 3c8 0 17 5 17 16 0 10-7 18-17 18S3 29 3 19C3 8 12 3 20 3z" fill="currentColor" />
            <path d="M12 26c4-10 10-13 17-13-1 8-6 14-17 13z" fill="#f7f0e3" />
            <path d="M12 27c5-5 9-8 14-11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none" />
          </svg>
          <span class="brand__text">Bramble <em>&amp;</em> Bean</span>
        </NuxtLink>

        <button
          type="button"
          class="nav-toggle"
          :aria-expanded="menuOpen"
          aria-controls="site-nav"
          @click="menuOpen = !menuOpen"
        >
          <span class="visually-hidden">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path v-if="!menuOpen" d="M4 7h16M4 12h16M4 17h16" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <nav id="site-nav" class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="Main">
          <ul>
            <li v-for="item in cafeNav" :key="item.to">
              <NuxtLink :to="item.to" exact-active-class="is-active">{{ item.label }}</NuxtLink>
            </li>
            <li class="site-nav__cta">
              <NuxtLink to="/cafe/contact#booking" class="btn btn--primary btn--small">Book a table</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="main" tabindex="-1">
      <slot />
    </main>

    <footer class="site-footer">
      <div class="container site-footer__grid">
        <div>
          <p class="site-footer__brand">Bramble <em>&amp;</em> Bean</p>
          <p>Specialty coffee, brunch and homemade cakes on Alder Lane since 2016.</p>
        </div>
        <div>
          <h2 class="site-footer__title">Find us</h2>
          <address>
            {{ cafeContact.street }}<br />
            {{ cafeContact.town }}<br />
            <a :href="cafeContact.phoneHref">{{ cafeContact.phone }}</a><br />
            <a :href="cafeContact.emailHref">{{ cafeContact.email }}</a>
          </address>
        </div>
        <div>
          <h2 class="site-footer__title">Opening hours</h2>
          <dl class="footer-hours">
            <template v-for="h in cafeHours" :key="h.days">
              <dt>{{ h.days }}</dt>
              <dd>{{ h.time }}</dd>
            </template>
          </dl>
        </div>
        <nav aria-label="Footer">
          <h2 class="site-footer__title">Explore</h2>
          <ul class="site-footer__links">
            <li v-for="item in cafeNav" :key="item.to"><NuxtLink :to="item.to">{{ item.label }}</NuxtLink></li>
          </ul>
        </nav>
      </div>
      <p class="container site-footer__legal">© {{ year }} Bramble &amp; Bean. A fictional café for demonstration purposes.</p>
    </footer>

    <DemoBadge />
  </div>
</template>

<style>
body:has(.site-cafe) {
  background: #f7f0e3;
}

.site-cafe {
  --c-cream: #f7f0e3;
  --c-paper: #fcf8ef;
  --c-oat: #ebe0cb;
  --c-green: #2c4a3a;
  --c-green-dark: #1f3529;
  --c-terracotta: #b04f2c;
  --c-terracotta-dark: #8f3e20;
  --c-ink: #2b2620;
  --c-muted: #5e564a;
  --c-line: #d9ccb3;
  --font-heading: 'Fraunces', Georgia, 'Times New Roman', serif;
  --font-body: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --radius: 18px;
  --radius-organic: 42% 58% 55% 45% / 48% 42% 58% 52%;
  --shadow: 0 12px 30px -14px rgb(60 40 20 / 0.35);
  --space-section: clamp(56px, 9vw, 104px);

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(rgb(120 90 40 / 0.05) 1px, transparent 1px) 0 0 / 5px 5px,
    var(--c-cream);
  color: var(--c-ink);
  font-family: var(--font-body);
  font-size: 1.0625rem;
  line-height: 1.65;
}

.site-cafe main { flex: 1; }
.site-cafe h1, .site-cafe h2, .site-cafe h3, .site-cafe h4 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.12;
  color: var(--c-green);
  letter-spacing: -0.01em;
}
.site-cafe h1 { font-size: clamp(2.5rem, 6.5vw, 4.4rem); }
.site-cafe h2 { font-size: clamp(1.9rem, 4vw, 2.8rem); }
.site-cafe h3 { font-size: 1.35rem; }
.site-cafe p { margin: 0 0 1em; }
.site-cafe a { color: inherit; }
.site-cafe ul { margin: 0; padding: 0; list-style: none; }
.site-cafe address { font-style: normal; }
.site-cafe :focus-visible { outline: 3px solid var(--c-terracotta); outline-offset: 3px; border-radius: 4px; }

.site-cafe .container { width: min(1160px, 100% - 40px); margin-inline: auto; }
.site-cafe .section { padding-block: var(--space-section); }
.site-cafe .eyebrow {
  display: inline-block;
  margin: 0 0 12px;
  color: var(--c-terracotta-dark);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.site-cafe .lead { font-size: 1.2rem; color: var(--c-muted); max-width: 60ch; }

.site-cafe .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 26px;
  border: 2px solid transparent;
  border-radius: 999px;
  font: 700 1rem/1.2 var(--font-body);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, transform 0.2s;
}
.site-cafe .btn--small { padding: 10px 20px; font-size: 0.95rem; }
.site-cafe .btn--primary { background: var(--c-terracotta); color: #fff; }
.site-cafe .btn--primary:hover { background: var(--c-terracotta-dark); }
.site-cafe .btn--outline { border-color: var(--c-green); color: var(--c-green); background: transparent; }
.site-cafe .btn--outline:hover { background: var(--c-green); color: var(--c-cream); }
.site-cafe .btn--light { background: var(--c-cream); color: var(--c-green); }
.site-cafe .btn--light:hover { background: #fff; }
.site-cafe .btn:disabled { opacity: 0.65; cursor: wait; }

.skip-link {
  position: absolute;
  left: 16px;
  top: -60px;
  z-index: 2000;
  padding: 10px 16px;
  background: var(--c-green);
  color: #fff;
  border-radius: 8px;
}
.skip-link:focus { top: 12px; }

/* Header */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgb(247 240 227 / 0.94);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--c-line);
}
.site-header__inner { display: flex; align-items: center; justify-content: space-between; min-height: 72px; }
.brand { display: inline-flex; align-items: center; gap: 10px; color: var(--c-green); text-decoration: none; }
.brand__text { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; letter-spacing: -0.01em; }
.brand__text em { color: var(--c-terracotta); font-weight: 400; }

.nav-toggle {
  display: inline-flex;
  padding: 8px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--c-green);
  cursor: pointer;
}
.site-nav {
  position: absolute;
  inset: 100% 0 auto 0;
  display: none;
  padding: 12px 20px 24px;
  background: var(--c-cream);
  border-bottom: 1px solid var(--c-line);
}
.site-nav.is-open { display: block; }
.site-nav ul { display: flex; flex-direction: column; gap: 4px; }
.site-nav a:not(.btn) {
  display: block;
  padding: 12px 4px;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}
.site-nav a.is-active:not(.btn) { color: var(--c-terracotta-dark); font-weight: 700; }
.site-nav__cta { margin-top: 10px; }

@media (min-width: 860px) {
  .nav-toggle { display: none; }
  .site-nav { position: static; display: block; padding: 0; background: none; border: 0; }
  .site-nav ul { flex-direction: row; align-items: center; gap: 30px; }
  .site-nav a:not(.btn) { padding: 6px 0; }
  .site-nav a:not(.btn):hover { border-bottom-color: var(--c-terracotta); }
  .site-nav a.is-active:not(.btn) { border-bottom-color: var(--c-terracotta); }
  .site-nav__cta { margin: 0; }
}

/* Footer */
.site-footer { margin-top: auto; padding-top: 64px; background: var(--c-green-dark); color: #e7dfcc; font-size: 0.98rem; }
.site-footer a { text-decoration: none; }
.site-footer a:hover { text-decoration: underline; }
.site-footer :focus-visible { outline-color: #f1b894; }
.site-footer__grid { display: grid; gap: 36px; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); }
.site-footer__brand { font: 700 1.6rem/1.2 var(--font-heading); color: #fff; margin-bottom: 8px; }
.site-footer__brand em { color: #f1b894; font-weight: 400; }
.site-footer__title { margin: 0 0 12px; font: 700 0.85rem/1 var(--font-body); letter-spacing: 0.14em; text-transform: uppercase; color: #f1b894 !important; }
.footer-hours { display: grid; grid-template-columns: auto 1fr; gap: 4px 16px; margin: 0; }
.footer-hours dt { color: #fff; }
.footer-hours dd { margin: 0; }
.site-footer__links li { margin-bottom: 6px; }
.site-footer__legal { margin: 48px auto 0; padding: 20px 0 100px; border-top: 1px solid rgb(255 255 255 / 0.15); font-size: 0.88rem; color: #bdb5a0; }

@media (prefers-reduced-motion: reduce) {
  .site-cafe * { transition: none !important; animation: none !important; scroll-behavior: auto !important; }
}
</style>
