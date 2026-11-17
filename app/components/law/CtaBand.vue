<template>
  <section class="cta" aria-labelledby="cta-title">
    <img class="cta__img" src="/law/shelves.jpg" alt="" width="1200" height="1806" loading="lazy" />
    <div class="cta__inner">
      <h2 id="cta-title" class="cta__title">Tell us what is happening. We will tell you where you stand.</h2>
      <p class="cta__text">
        The first 30-minute consultation is $90, credited against your fees if you instruct us.
      </p>
      <div class="cta__actions">
        <NuxtLink to="/law/contact#consultation" class="cta__btn">Book a consultation</NuxtLink>
        <a :href="`tel:${lawContact.phoneHref}`" class="cta__phone">or call {{ lawContact.phone }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  isolation: isolate;
  background: var(--navy);
  color: #fff;
  overflow: hidden;
}
.cta__img {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
}
.cta::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: rgb(15 27 45 / 0.8);
}
.cta__inner {
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(56px, 8vw, 96px) var(--gutter);
  text-align: center;
}
.cta__title {
  font-family: var(--font-head);
  font-size: clamp(1.9rem, 4vw, 2.9rem);
  font-weight: 500;
  line-height: 1.15;
}
.cta__text {
  margin-top: 16px;
  color: #dfe3ea;
}
.cta__actions {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 28px;
  align-items: center;
  justify-content: center;
}
.cta__btn {
  padding: 14px 28px;
  background: var(--brass-bright);
  color: var(--navy);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
}
.cta__btn:hover {
  background: #dcc17f;
}
.cta__phone {
  color: #fff;
  text-underline-offset: 4px;
}
</style>
